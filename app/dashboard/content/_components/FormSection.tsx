"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateList'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormData:any;
  loading:boolean
}

function FormSection({ selectedTemplate,userFormData,loading }: PROPS) {

    const [formData, setFormData]=useState<any>();
    const handleInputChange=(event:any)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})        
    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormData(formData)
    }

    return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      {selectedTemplate?.icon ? (
        <Image src={selectedTemplate.icon} alt='icon' width={70} height={70} />
      ) : (
        <Image src="/fallback-image.jpg" alt='default icon' width={50} height={50} />
      )}
      <h2 className='font-bold text-2xl mb-2'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.des}</p>
    <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item,index)=>(
            <div className='my-2 flex flex-col gap-2 mb-7'>
                <label className='font-bold'>{item.label}</label>
                {item.field == 'input' ?
                    <Input name={item.name} required={item?.required}
                    onChange={handleInputChange}/>
                    : item.field == 'textarea' ?
                        <Textarea name={item.name} required={item?.required}
                    onChange={handleInputChange}/> : null
                }
            </div>
        ))}
    <Button type="submit" className='w-full py-6' disabled={loading}>
      {loading&&<Loader2Icon/>}
      Generate Content</Button>
    </form>    
    </div>
  )
}

export default FormSection;
