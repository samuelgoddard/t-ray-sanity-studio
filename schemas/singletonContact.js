export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "url",
    },
    {
      title: "Youtube",
      name: "youtube",
      type: "url",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}