export default {
  title: 'Content Full',
  type: 'object',
  name: 'contentFull',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
    }
  ]
}
