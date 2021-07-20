export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update',  'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Bio Text',
      name: 'introBioText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Content Image",
      name: "contentImage",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Content Bio Text',
      name: 'contentBioText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'History Stories',
      name: 'historyStories',
      description: 'The history stories',
      type: 'array',
      of: [{type: 'history', title: 'History Story'}],
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
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