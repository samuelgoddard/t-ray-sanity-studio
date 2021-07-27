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
      name: 'externalLinkUrl',
      type: 'url',
      description: "The optional external link URL for this content block that appears on the left (eg: http://voyagemia.com/interview/meet-t-ray-armstrong-former-drummer-vocalist/)",
      title: 'External Link URL',
    },
    {
      name: 'externalLinkText',
      type: 'string',
      description: "If the previous field is filled in, this is the text that will display, eg: 'View on Voyagemia'",
      title: 'External Link Text',
    },
    {
      title: "Image",
      name: "image",
      type: 'image',
      description: "The optional image that will appear in the left column",
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
  ]
}
