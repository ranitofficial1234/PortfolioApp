import { defineType, defineField, defineArrayMember } from 'sanity'

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'alt',
      title: 'Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'extraImages',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon (Upload Image)',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'link',
              title: 'Technology Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'repoLink',
      title: 'GitHub Repository Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
