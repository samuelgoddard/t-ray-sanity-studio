export default {
  title: "Purchase Link",
  name: 'purchaseLinks',
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      description: 'eg: "Apple Music"',
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "URL",
      name: "url",
      description: 'eg: "https://music.apple.com/us/album/127-solace-ep/1548181688"',
      type: "url",
      validation: Rule => Rule.required()
    },
  ]
}