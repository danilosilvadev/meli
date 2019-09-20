First `npm install` to install the packages and `npm start` to run.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

This application has 3 main pages:

- SearchPage
- ProductDetailsPage
- HomePage

It deliveries a `not_found` page in case of not found route.

At SearchPage has a paginated list, with four elements per page.

## Available Scripts

- npm start
- npm test
- npm run coverage

## Global State

This project uses contextAPI and useReducer to manage global state.

## Style

All pages are responsive.
Most of the style use scss helpers, and to deep customization styled components were used.

## Tests

It has unit tests, all of them are working here but if you find some problem with `dots and commas` at mocks of prices is that because INTL object interprete your browser in a different way than mine. I will solve this soon.

## And

1. I use customHooks to resolver render problems.
2. All the commits are well organized by type and with a clean message.
3. This project has scss and js lints following standardJS rules.
