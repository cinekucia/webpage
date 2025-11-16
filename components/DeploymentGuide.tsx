import React from 'react';
import Section from './Section';

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto my-4 text-sm">
    <code>{children}</code>
  </pre>
);

const DeploymentGuide: React.FC = () => {
  return (
    <Section id="deploy" title="How to Deploy to GitHub Pages">
      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        <p>This is a guide to deploy a React application (created with Vite) to GitHub Pages. It's a free and easy way to host your portfolio.</p>
        
        <h3 className="text-sky-400">Step 1: Install `gh-pages` package</h3>
        <p>This is a dev dependency that helps in publishing files to a `gh-pages` branch on GitHub.</p>
        <CodeBlock>npm install gh-pages --save-dev</CodeBlock>

        <h3 className="text-sky-400">Step 2: Configure `vite.config.ts`</h3>
        {/* FIX: Escape angle brackets around placeholder text (e.g., <USERNAME>) to prevent TSX parser from treating it as a component. */}
        <p>You need to set the `base` property in your Vite configuration. This tells Vite that your project will be served from a subdirectory on GitHub Pages (e.g., `https://&lt;USERNAME&gt;.github.io/&lt;REPO_NAME&gt;/`).</p>
        <p>Update your `vite.config.ts` (or `.js`) file:</p>
        <CodeBlock>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<YOUR_REPO_NAME>/', // <-- Add this line
})
`}</CodeBlock>
        <p>Replace `&lt;YOUR_REPO_NAME&gt;` with the name of your GitHub repository.</p>

        <h3 className="text-sky-400">Step 3: Update `package.json`</h3>
        <p>Add a `homepage` URL and two new scripts: `predeploy` and `deploy`.</p>
        <CodeBlock>{`{
  "name": "react-portfolio",
  "private": true,
  "version": "0.0.0",
  "homepage": "https://<USERNAME>.github.io/<REPO_NAME>", // <-- Add this
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "predeploy": "npm run build", // <-- Add this
    "deploy": "gh-pages -d dist" // <-- Add this
  },
  // ... rest of the file
}
`}</CodeBlock>
         <p>Replace `&lt;USERNAME&gt;` with your GitHub username and `&lt;REPO_NAME&gt;` with your repository name.</p>
        
        <h3 className="text-sky-400">Step 4: Deploy the application</h3>
        <p>Commit all your changes to GitHub. Then, run the deploy script:</p>
        <CodeBlock>npm run deploy</CodeBlock>
        <p>This command will first run the `predeploy` script (which builds your application into a `dist` folder) and then the `deploy` script will push the contents of the `dist` folder to a new `gh-pages` branch on your repository.</p>

        <h3 className="text-sky-400">Step 5: Configure GitHub Repository</h3>
        <p>The final step is to tell GitHub to use the `gh-pages` branch as the source for your GitHub Pages site.</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Go to your repository on GitHub.</li>
            <li>Click on the <strong>Settings</strong> tab.</li>
            <li>In the left sidebar, click on <strong>Pages</strong>.</li>
            <li>Under "Build and deployment", for the "Source", select <strong>Deploy from a branch</strong>.</li>
            <li>Under "Branch", select the <strong>`gh-pages`</strong> branch and the <strong>`/ (root)`</strong> folder. Click <strong>Save</strong>.</li>
        </ol>
        <p>After a few minutes, your website will be live at the URL you specified in the `homepage` field of your `package.json`!</p>
      </div>
    </Section>
  );
};

export default DeploymentGuide;
