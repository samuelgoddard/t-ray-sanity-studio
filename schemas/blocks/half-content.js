export default {
  title: 'Half Content',
  type: 'object',
  name: 'halfContent',
  fields: [
    {
      name: 'heading',
      type: 'string',
      description: "The optional heading for this content block",
      title: 'Heading',
    },
    {
      name: 'externalLink',
      type: 'string',
      description: "The optional external link for this content block",
      title: 'External Link',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
    },
  ]
}
