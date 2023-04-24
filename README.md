# Star Wars API

Welcome to the Star Wars API! This project allows you to browse characters from the Star Wars universe. To get started, you'll need to download the project and install all the dependencies by running `yarn install` in your terminal.

## Technology

While I typically prefer working with Next.js, for this project I used Vite. Despite the difference in frameworks, you'll find that the project architecture is quite similar to what you might expect from Next.js. One feature I particularly enjoy from Next.js is file-system routing, and so for this project, I've written a custom router/core file that achieves the same behavior as Next.js routing.

As for styling, I prefer to keep behavior and visualization separate. For this project, I've used the DaisyUI library to style the components.

## Data Management

To load data, I've used RTKQuery which provides a nice interface for managing server-state. For client-state, I've used Redux Toolkit.

## Getting Started

The app's main page loads the first 10 characters from the Star Wars API. Unfortunately, this API doesn't allow you to work with it from your local machine, so I've created a proxy endpoint using the Edge Functions approach. If you want to run the project locally and use Edge Functions, you should run `yarn dev:edge` command.

Thank you for checking out the Star Wars API!
