import {defineType} from 'sanity'

export const workType = defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url', // better for links than plain string
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text', // longer text instead of string
    },
    {
      name: 'imgUrl',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block', // this gives you rich text editing (bold, italic, lists, etc.)
        },
      ],
    },
  ],
})
