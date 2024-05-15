# Pokemon App

## Overview

The Pokemon App is a React application that allows users to retrieve a list of Pokemon from the PokeAPI and view details of each Pokemon. The application is built using TypeScript, Redux Toolkit, and RTK Query for state management, and Vite for development.

## Setup

**Clone the Repository:**

`git clone https://github.com/musmanilyas/Pokemon.git`

Install Dependencies:



`npm install`

## Start the Development Server:

`npm run dev`

This will start the Vite development server. You can view the app at http://localhost:5174 in your browser.

## Packages Used

**React:** JavaScript library for building user interfaces.

**Redux Toolkit:** Toolkit for efficient Redux development.

**RTK Query:** Data fetching and caching library built on top of Redux Toolkit.

**Vite:** Next-generation frontend tooling for building React apps.

Vite Instead of Create React App

This project uses Vite as the build tool instead of Create React App for faster development and better performance. Vite provides a blazing-fast development server with instant hot module replacement (HMR) and optimized production builds.

## Vite URL Handling

Vite automatically handles URL resolution for module imports. You can import modules using relative paths or package names, and Vite will resolve them correctly.

For example:

Replace these `.env` variables

#### VITE_API_URL
#### VITE_API_BASE_URL
#### BASE_IMAGE_API
#### VITE_PORT

Vite also supports path aliases for easier module resolution. You can configure path aliases in the tsconfig.json or vite.config.js file.

## Testing

Tests are written using Vite's testing utilities (vitest). Vite provides a simple and fast testing setup with its built-in testing solution.

To run tests, use the following command:

`npm run test`

This will execute all tests in our project and display the results in the console.
