export default {
  title: 'Tour Dates',
  type: 'object',
  name: 'tourDates',
  fields: [
    {
      title: 'Dates',
      name: 'dates',
      description: 'The details for this tour',
      type: 'array',
      of: [
        {type: 'tourDate', title: 'Date'},
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Tour Dates`
      }
    }
  }
}
