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
  tutorialSidebar: [
    {
      type: 'html',
      value: '<div style="padding: 1rem; background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; margin: -1rem -1rem 1rem -1rem; font-weight: bold; font-size: 1.1rem;">🛡️ Protekt Documentation</div>',
    },
    'intro',
    {
      type: 'category',
      label: 'Authentication Features',
      items: [
        'features/multi-factor-auth',
      ],
    },
  ],
};

export default sidebars;
