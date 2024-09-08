export default [
    // Instagram Post
    {
        name: 'Instagram Post',
        des: "Generate an engaging Instagram Post with title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/16112/16112408.png',
        aiPrompt: 'Generate an Instagram post with a catchy title, engaging description, and content. Include hashtags and emojis for maximum engagement.',
        slug: 'generate-instagram-post',
        form: [
            {
                label: 'Enter Instagram post title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter post description (Optional)',
                field: 'textarea',
                name: 'description',
            },
            {
                label: 'Enter post content',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    
    // YouTube Video
    {
        name: 'YouTube Video',
        des: "Generate an engaging YouTube video title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate a YouTube video title, description, and content outline, optimized for engagement and searchability (SEO).',
        slug: 'generate-youtube-video',
        form: [
            {
                label: 'Enter YouTube video title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter video description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter video content ideas/outline',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // Facebook Post
    {
        name: 'Facebook Post',
        des: "Generate an engaging Facebook post with title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/5721/5721461.png',
        aiPrompt: 'Generate a Facebook post with a catchy title, engaging description, and full content/message with relevant hashtags.',
        slug: 'generate-facebook-post',
        form: [
            {
                label: 'Enter Facebook post title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter post description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter post content/message',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    
    // Twitter Tweet
    {
        name: 'Twitter Tweet',
        des: "Generate a tweet with title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png',
        aiPrompt: 'Generate a tweet with a brief title, short description, and content. Include hashtags and emojis for engagement.',
        slug: 'generate-twitter-tweet',
        form: [
            {
                label: 'Enter tweet title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter tweet description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter tweet content/message',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // LinkedIn Post
    {
        name: 'LinkedIn Post',
        des: "Generate a professional LinkedIn post with title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/15707/15707956.png',
        aiPrompt: 'Generate a LinkedIn post with a strong title, professional description, and content that highlights expertise and experience.',
        slug: 'generate-linkedin-post',
        form: [
            {
                label: 'Enter LinkedIn post title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter post description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter post content/message',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // TikTok Video
    {
        name: 'TikTok Video',
        des: "Generate a TikTok video idea with title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713399.png',
        aiPrompt: 'Generate a TikTok video idea with a catchy title, engaging description, and content that suits the platform’s short-form style.',
        slug: 'generate-tiktok-video',
        form: [
            {
                label: 'Enter TikTok video title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter video description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter video content/ideas',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },
    
    // Pinterest Pin
    {
        name: 'Pinterest Pin',
        des: "Generate a Pinterest Pin idea with title, description, and content.",
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/13051/13051762.png',
        aiPrompt: 'Generate a Pinterest Pin idea with a catchy title, relevant description, and creative content for high engagement.',
        slug: 'generate-pinterest-pin',
        form: [
            {
                label: 'Enter Pinterest Pin title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter Pin description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter Pin content/ideas',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // Product Description (eCommerce)
    {
        name: 'Product Description',
        des: "Generate a product description with title, description, and key features.",
        category: 'eCommerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051772.png',
        aiPrompt: 'Generate a product description with a strong title, persuasive description, and key features for an eCommerce platform.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product name (title)',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter product description',
                field: 'textarea',
                name: 'description',
                required: true
            },
            {
                label: 'Enter key features',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // Blog Post
    {
        name: 'Blog Post',
        des: "Generate a blog post with title, description, and full content.",
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Generate a blog post with a catchy title, engaging description, and full content, optimized for readability and SEO.',
        slug: 'generate-blog-post',
        form: [
            {
                label: 'Enter blog post title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter blog description/summary',
                field: 'textarea',
                name: 'description',
                // required: true
            },
            {
                label: 'Enter blog content',
                field: 'textarea',
                name: 'content',
                // required: true
            }
        ]
    },
     {
        name: 'Rewrite Article (Plagiarism-Free)',
        des: "Rewrite any article or text to be plagiarism-free while maintaining the original meaning.",
        category: 'Content Generation',
        icon: 'https://cdn-icons-png.flaticon.com/128/3146/3146159.png',
        aiPrompt: 'Rewrite the given text to make it completely unique and plagiarism-free while preserving the original meaning.',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Enter text to rewrite',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // Text Improver
    {
        name: 'Text Improver',
        des: "Improve the quality of any text. Enhance readability and engagement while maintaining the original meaning.",
        category: 'Content Improvement',
        icon: 'https://cdn-icons-png.flaticon.com/128/12860/12860749.png',
        aiPrompt: 'Improve the given text to enhance readability, clarity, and engagement.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter text to improve',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    },

    // Add Emojis to Text
    {
        name: 'Add Emojis to Text',
        des: "Add relevant emojis to your text to increase engagement and make the content more fun and appealing.",
        category: 'Content Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/356/356749.png',
        aiPrompt: 'Add suitable emojis to the given text while keeping the message engaging and relevant.',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter text to add emojis',
                field: 'textarea',
                name: 'content',
                required: true
            }
        ]
    }
];
