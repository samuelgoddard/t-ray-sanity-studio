export default {
  title: "Music Videos",
  name: 'musicVideos',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this music video",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "URL",
      name: "url",
      description: 'Link to the video, eg: "https://www.youtube.com/watch?v=_lXXJFTpupM"',
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      title: "Teaser Image",
      name: "teaserImage",
      description: "The image that appears in the news listing",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: "Video Snippet",
      name: "videoSnippetUrl",
      description: 'The optional video snippet (keep file size low)"',
      type: "file",
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
      title: 'Purchase Links',
      name: 'purchaseLinks',
      description: 'The array of links to purchase this release',
      type: 'array',
      of: [{type: 'purchaseLinks', title: 'Purchase Link'}],
    }
  ]
}