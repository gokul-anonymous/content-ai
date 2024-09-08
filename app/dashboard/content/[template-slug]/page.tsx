"use client";
import React, { useContext, useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateList';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Terminal } from 'lucide-react';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/clerk-react';
import moment from 'moment';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from 'next/navigation';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

interface PROPS {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug == props.params['template-slug']
    );
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter();
    const [totalWords, setTotalWords] = useState<number>(0);
   const{updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext)
    const GenerateAiContent = async (form: any) => {
        if (totalWords >= 10000) {
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>OOPS!</AlertTitle>
                <AlertDescription>
                    Your limit is over! Go Premium for Unlimited Credits.
                </AlertDescription>
            </Alert>;
            router.push('/dashboard/billing');
            return;
        }
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(form) + ", " + SelectedPrompt;

        try {
            const result = await chatSession.sendMessage(FinalAIPrompt);
            const aiResponse = await result?.response.text();
            setAiOutput(aiResponse);
            setUpdateCreditUsage(Date.now())

            // Ensure aiResponse is not undefined and call SaveInDb
            if (aiResponse && selectedTemplate?.slug && user?.primaryEmailAddress?.emailAddress) {
                await SaveInDb(form, selectedTemplate.slug, aiResponse);
            }
        } catch (error) {
            console.error("Error generating AI content:", error);
        } finally {
            setLoading(false);
        }
    };

    const SaveInDb = async (formData: any, slug: string, aiResponse: string) => {
        try {
            // Ensure createdBy has a fallback value in case it's undefined
            const createdBy = user?.primaryEmailAddress?.emailAddress || "unknown";

            const result = await db.insert(AIOutput).values({
                formData: JSON.stringify(formData), // Ensure formData is serialized to a string
                templateSlug: slug,
                aiResponse: aiResponse,
                createdBy: createdBy,
                createdAt: moment().format('DD/MM/YYYY'), // Correct date format
            });
            console.log(result);
        } catch (error) {
            console.error("Error saving to DB:", error);
        }
    };

    return (
        <div className="p-5 bg-slate-100">
            <Link href="/dashboard">
                <Button><ArrowLeft /> Back</Button>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
                {/* Form Section */}
                <div className="lg:col-span-1">
                    <FormSection
                        selectedTemplate={selectedTemplate}
                        userFormData={(v: any) => GenerateAiContent(v)}
                        loading={loading}
                    />
                </div>

                {/* Output Section */}
                <div className="lg:col-span-2">
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
