export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'website',
            title: 'Website Link',
            type: 'string'
        },
        {
            name: 'github',
            title: 'GitHub Link',
            type: 'string'
        },
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'string'
        },
        {
            name: 'features',
            title: 'Features and Functionality',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'screenshots',
            title: 'Screenshots',
            type: 'array', // Set the field type to "array"
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image', // Specify that the object contains an image
                            options: {
                                hotspot: true, // If you want to enable hotspot for the image
                            },
                        },
                        {
                            name: 'description',
                            title: 'Image Description',
                            type: 'text', // You can use 'string' if you want a single-line input
                            description: 'Enter a description for the image',
                        },
                    ],
                },
            ],
        },
        {
            name: 'conclusion',
            title: 'Conclusion',
            type: 'string'
        }
    ]
}