export default {
  title: "Tour Date",
  name: 'tourDate',
  type: "object",
  fields: [
    {
      title: "Location",
      name: "location",
      description: 'eg: "Los Angeles, CA"',
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Venue",
      name: "venue",
      description: 'eg: "The Forum"',
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Date",
      description: "Press the button to the right to pick a date.",
      name: "date",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Sold Out?",
      description: "Toggling this on will flag this date as sold out",
      name: "soldOut",
      type: "boolean"
    },
    {
      title: "Book Tickets URL",
      name: "url",
      type: "url"
    },
  ]
}