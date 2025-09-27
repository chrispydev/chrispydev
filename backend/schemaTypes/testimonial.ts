import {defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'text', // better than string for longer feedback
    },
  ],
})
