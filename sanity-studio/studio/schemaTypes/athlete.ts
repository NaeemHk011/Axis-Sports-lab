import {defineField, defineType} from 'sanity'

export const athleteSchema = defineType({
  name: 'athlete',
  title: 'Athlete',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Profile URL Slug',
      type: 'slug',
      description: 'Auto-generated from name. This becomes the profile URL.',
      options: {source: 'name', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'published',
      title: 'Published (visible on website)',
      type: 'boolean',
      initialValue: false,
      description: 'Turn ON to make profile live on the website.',
    }),
    defineField({
      name: 'tier',
      title: 'Profile Tier',
      type: 'string',
      options: {
        list: [
          {title: 'Basic (Free with Membership)', value: 'basic'},
          {title: 'Pro ($99 setup / $19/mo)', value: 'pro'},
          {title: 'Elite ($299 setup / $49/mo)', value: 'elite'},
        ],
        layout: 'radio',
      },
      initialValue: 'basic',
    }),
    defineField({
      name: 'photo',
      title: 'Athlete Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bio',
      title: 'Athlete Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'school',
      title: 'School',
      type: 'string',
    }),
    defineField({
      name: 'graduationYear',
      title: 'Graduation Year',
      type: 'number',
    }),
    defineField({
      name: 'sport',
      title: 'Sport',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'highlightVideoUrl',
      title: 'Highlight Video URL (YouTube link)',
      type: 'url',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      description: 'Basic: up to 5 | Pro: up to 20 | Elite: unlimited',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    }),

    // ── PRO & ELITE ─────────────────────────────────────────
    defineField({
      name: 'performanceMetrics',
      title: 'Performance Metrics (Pro & Elite only)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label (e.g. Vertical Jump)', type: 'string'},
            {name: 'value', title: 'Value (e.g. 38")', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards & Achievements (Pro & Elite only)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links (Pro & Elite only)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {list: ['instagram', 'twitter', 'facebook']},
            },
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
    }),

    // ── ELITE ONLY ───────────────────────────────────────────
    defineField({
      name: 'recruitingInfo',
      title: 'Recruiting Information (Elite only)',
      type: 'text',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'school',
      media: 'photo',
      published: 'published',
      tier: 'tier',
    },
    prepare({title, subtitle, media, published, tier}) {
      return {
        title: `${published ? '✅' : '⏸️'} ${title}`,
        subtitle: `${String(tier).toUpperCase()} · ${subtitle ?? ''}`,
        media,
      }
    },
  },
})
