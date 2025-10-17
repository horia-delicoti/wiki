# My Personal Wiki

A comprehensive personal wiki built with [Docusaurus](https://docusaurus.io/) for organizing knowledge across various topics including Medical, School, Life, Programming, and Space.

## 🌟 Features

- **Medical**: Health, wellness, and medical research notes
- **School**: Study notes and learning resources
- **Life**: Personal growth and reflections
- **Programming**: Development knowledge, tools, and best practices
- **Space**: Astronomy and space exploration topics
- **Blog**: Additional thoughts and updates

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📚 Adding Content

### Create New Documentation

1. Navigate to the appropriate topic folder in `docs/` (e.g., `docs/medical/`, `docs/programming/`)
2. Create a new Markdown file with `.md` extension
3. Add frontmatter at the top:
   ```markdown
   ---
   sidebar_position: 1
   ---
   
   # Your Page Title
   
   Your content here...
   ```
4. Update `sidebars.ts` if you want to customize the sidebar structure

### Create Blog Posts

1. Navigate to the `blog/` directory
2. Create a new Markdown file with date prefix (e.g., `2024-01-01-my-post.md`)
3. Add frontmatter:
   ```markdown
   ---
   title: Your Post Title
   authors: [your-name]
   tags: [tag1, tag2]
   ---
   
   Your blog post content...
   ```

## 🛠️ Customization

- **Site configuration**: Edit `docusaurus.config.ts`
- **Sidebar structure**: Edit `sidebars.ts`
- **Homepage**: Edit `src/pages/index.tsx`
- **Styles**: Edit `src/css/custom.css`

## 📖 Learn More

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
