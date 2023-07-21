export default{
    name:'blogs',
    title:'Blogs',
    type: 'document',
    fields:[
        {
            name:'projectName',
            title:'Project Name',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'mainImgUrl',
            title:'Main Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'blogPost',
            title:'Blog Post',
            type:'array',
            of:[{ type:'blogPost'}]
        },
    ]
}