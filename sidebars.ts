import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Medical sidebar
  medicalSidebar: [
    {
      type: 'category',
      label: 'Medical',
      items: [
        'medical/intro',
        {
          type: 'category',
          label: 'Health & Wellness',
          items: ['medical/health-wellness/general'],
        },
        {
          type: 'category',
          label: 'Medical Research',
          items: ['medical/research/general'],
        },
      ],
    },
  ],

  // School sidebar
  schoolSidebar: [
    {
      type: 'category',
      label: 'School',
      items: [
        'school/intro',
        {
          type: 'category',
          label: 'Study Notes',
          items: ['school/study-notes/general'],
        },
        {
          type: 'category',
          label: 'Learning Resources',
          items: ['school/learning-resources/general'],
        },
      ],
    },
  ],

  // Life sidebar
  lifeSidebar: [
    {
      type: 'category',
      label: 'Life',
      items: [
        'life/intro',
        {
          type: 'category',
          label: 'Personal Growth',
          items: ['life/personal-growth/general'],
        },
        {
          type: 'category',
          label: 'Reflections',
          items: ['life/reflections/general'],
        },
      ],
    },
  ],

  // Programming sidebar
  programmingSidebar: [
    {
      type: 'category',
      label: 'Programming',
      items: [
        'programming/intro',
        {
          type: 'category',
          label: 'Languages',
          items: ['programming/languages/general'],
        },
        {
          type: 'category',
          label: 'Tools & Frameworks',
          items: ['programming/tools-frameworks/general'],
        },
        {
          type: 'category',
          label: 'Best Practices',
          items: ['programming/best-practices/general'],
        },
      ],
    },
  ],

  // Space sidebar
  spaceSidebar: [
    {
      type: 'category',
      label: 'Space',
      items: [
        'space/intro',
        {
          type: 'category',
          label: 'Astronomy',
          items: ['space/astronomy/general'],
        },
        {
          type: 'category',
          label: 'Space Exploration',
          items: ['space/exploration/general'],
        },
      ],
    },
  ],
};

export default sidebars;
