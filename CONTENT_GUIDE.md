# How to Add Content to Your Wiki

This guide will help you add and organize content in your personal wiki.

## Adding a New Page to an Existing Topic

### Step 1: Create a Markdown File

Navigate to the appropriate topic folder and create a new `.md` file:

```bash
# Example: Adding a new medical topic about nutrition
docs/medical/health-wellness/nutrition.md
```

### Step 2: Add Frontmatter

Every page needs frontmatter at the top:

```markdown
---
sidebar_position: 2
title: Nutrition Basics
---

# Nutrition Basics

Your content here...
```

### Step 3: Update the Sidebar (Optional)

Edit `sidebars.ts` to add your new page to the navigation:

```typescript
{
  type: 'category',
  label: 'Health & Wellness',
  items: [
    'medical/health-wellness/general',
    'medical/health-wellness/nutrition', // Add your new page
  ],
},
```

## Creating a New Category

### Step 1: Create the Directory

```bash
mkdir -p docs/programming/databases
```

### Step 2: Add Pages

Create markdown files in the new directory:

```bash
docs/programming/databases/intro.md
docs/programming/databases/sql.md
docs/programming/databases/nosql.md
```

### Step 3: Update Sidebar

Add the new category to `sidebars.ts`:

```typescript
programmingSidebar: [
  {
    type: 'category',
    label: 'Programming',
    items: [
      'programming/intro',
      {
        type: 'category',
        label: 'Databases',
        items: [
          'programming/databases/intro',
          'programming/databases/sql',
          'programming/databases/nosql',
        ],
      },
    ],
  },
],
```

## Adding a Blog Post

### Step 1: Create a Blog File

Create a file in the `blog/` directory with a date prefix:

```bash
blog/2024-01-15-my-first-post.md
```

### Step 2: Add Frontmatter

```markdown
---
title: My First Blog Post
description: A brief description of my post
slug: my-first-post
authors:
  - name: Your Name
    title: Your Title
    url: https://github.com/yourusername
    image_url: https://github.com/yourusername.png
tags: [tag1, tag2]
hide_table_of_contents: false
---

Your blog post content here...

<!--truncate-->

More content after the "Read more" break...
```

## Markdown Features

### Basic Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`Code inline`

- Bullet list
1. Numbered list

[Link text](https://example.com)

![Image alt text](./image.png)
```

### Code Blocks

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

### Admonitions (Callouts)

```markdown
:::tip
This is a helpful tip!
:::

:::info
This is informational.
:::

:::warning
This is a warning.
:::

:::danger
This is dangerous!
:::
```

### Tabs

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="js" label="JavaScript">
    ```js
    console.log('Hello');
    ```
  </TabItem>
  <TabItem value="py" label="Python">
    ```py
    print('Hello')
    ```
  </TabItem>
</Tabs>
```

## Organizing Content

### Best Practices

1. **Use Clear Names**: Name files descriptively (e.g., `react-hooks.md` instead of `topic1.md`)

2. **Consistent Structure**: Keep similar depth across categories

3. **Sidebar Position**: Use `sidebar_position` to control order

4. **Regular Updates**: Keep content fresh and relevant

5. **Cross-linking**: Link related pages together

Example cross-link:
```markdown
See also: [Programming Best Practices](../programming/best-practices/general.md)
```

## Testing Your Changes

### Local Development

```bash
npm start
```

This starts a local server at `http://localhost:3000/wiki/`

### Build Check

```bash
npm run build
```

Ensures your site builds without errors.

### Type Checking

```bash
npm run typecheck
```

Verifies TypeScript types are correct.

## Deployment

When you're ready to publish your wiki:

```bash
npm run deploy
```

This builds and deploys your site to GitHub Pages.

## Tips for Effective Wiki Management

1. **Start Small**: Begin with basic pages and expand gradually
2. **Use Templates**: Create template files for consistent structure
3. **Tag Content**: Use tags in blog posts for easy discovery
4. **Search**: Docusaurus includes built-in search functionality
5. **Version Control**: Commit changes regularly with clear messages
6. **Review**: Periodically review and update content

## Need Help?

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Issues](https://github.com/horia-delicoti/wiki/issues)
