# IEEE uOttawa Website

The IEEE uOttawa Website is a site that contains all information about the branch and its operations, including services, events, and opportunities.

![Site preview](preview.png)

## Features

- Responsive design
- I18N
- Light & Dark mode

## Built With

The website was built using the following technologies and frameworks:

- Next.js
- Typescript
- Tailwind CSS
- MUI
- Stackbit

## Getting Started

To run the project, you need to have a version of Node between 14 and 16. Node 16 is recommended. To check your Node version, run the following command:

- node -v

To manage your node version, use nvm. First, check if you have nvm installed:

- nvm -v

If you don't have it installed, run this command:

- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

To install and use Node 16, run the following commands:

- nvm install 16
- nvm use 16

To get started with the project, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies using `npm install`.
- Start the development server using `npm run dev`.

## Visual Editing with Stackbit

### Introduction

Stackbit provides visual editing capabilities that allow you to easily modify and customize the website's content and design. You can make changes to your site without having to write code directly.

### Set Up Stackbit Visual Editor

Install Stackbit locally on your machine:

```zsh
npm install -g @stackbit/cli
```

Start the visual editor **from your web project's root directory**. Use the --port option to specify **your dev server's port** (default: 3000).

```zsh
stackbit dev --port [PORT]
```

Open the url that appears in your terminal to start the visual editor.

## Project Structure

The following project tree highlights the most relevant directories.

```txt
.
├── .stackbit/
│   ├── models
│   └── presets
├── content/
│   ├── data/
│   │   ├── orgs/
│   │   ├── style.json
│   │   └── team/
│   │       ├── emails/
│   │       └── people/
│   ├── pages/
│   └── translations/
│       ├── links.ts
│       └── roles.ts
├── public/
│   ├── files/
│   └── images/
│       └── team/
└── src/
    └── components/
        ├── atoms/
        ├── molecules/
        ├── layouts/
        ├── sections/
        ├── svgs/
        └── components-registry.ts
```

### `/.stackbit`

This directory contains two subdirectories: `models/` and `presets`.

- The `models/` directory contains interface definition files for components in the `.yaml` format. Each definition file provides details such as the component's name, type, and the properties it possesses. For each property, the definition file includes information about its name, type, optional description.

- The `presets/` directory contains various presets or templates for components, sections, or pages in the `.yaml` format. These presets are intended for use within the visual editor, allowing you to quickly incorporate predefined structures into the site.

### `/.content`

This directory contains three subdirectories:

- `data/`: This directory contains the following subdirectories:
  - `team/` subdirectory which contains JSON data files related to executives.
  - `emails/` subdirectory which includes a list of emails mapped to each team role.
- `pages/`: This directory contains a collection of Markdown files that Next.js converts into HTML pages.
- `translations/`: This directory houses a mapping of link labels and roles to their French equivalents.

### `/.public`

Contains all assets used on the site broken down into two main categories:

- files (for documents such as meeting minutes)
- images

### `/.src`

This directory contains reusable UI components that are used throughout the website. The components are organized into subdirectories based on their complexity and reusability, such as:

- `atoms/` for basic building blocks,
- `molecules/` for slightly more complex components composed of atoms,
- `layouts/` for larger layout components,
- `sections/` for sections of the page, and
- `svgs/` for SVG icons or graphics.

The `components-registry.ts` file serves as a registry or index file for managing and importing the components.

## Deployment

The site is hosted on Cloudflare using Cloudflare Pages, and only the elected Webmaster has access to the deployment details.

## Authors/Contributors

- Loic Kandikandi

## Contact

If you have any questions or feedback about the website, please contact the Webmaster at webmaster@ieeeuottawa.ca.
