import slugify from '../utils/slugify'

export default {
  title: "Music",
  name: 'music',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this release",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Cover Artwork",
      name: "coverArtwork",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Type',
      description: "eg: 'Single', 'EP', 'Remix' etc.",
      name: 'type',
      type: 'string',
      initialValue: 'single',
      options: {
        list: [
          {title: 'Single', value: 'single'},
          {title: 'LP', value: 'lp'},
          {title: 'EP', value: 'ep'},
          {title: 'Remix', value: 'remix'}
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Release Date",
      description: "Press the button to the right to pick a date.",
      name: "date",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Description Text',
      name: 'descriptionText',
      description: 'A short description about this release',
      type: 'array', 
      of: [{type: 'block'}],
    },
    {
      title: 'Purchase Links',
      name: 'purchaseLinks',
      description: 'The array of links to purchase this release',
      type: 'array',
      of: [{type: 'purchaseLinks', title: 'Purchase Link'}],
    }
  ]
}