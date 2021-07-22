export default {
  title: 'History',
  type: 'object',
  name: 'history',
  fields: [
    {
      title: "Image",
      name: "image",
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Year",
      name: "year",
      description: 'The year, or year range of this story item (eg: "2010 or 2002-2004")',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Title",
      name: "title",
      description: 'The title of this story item (eg: "Cover Drive On Tour")',
      type: 'string',
    },
    {
      title: 'Description Text',
      name: 'descriptionText',
      description: 'A short about this history item',
      type: 'text',
      validation: Rule => Rule.required()
    },
  ]
}
