# Destiny 2 activy report
This project is a simple user search tool for Destiny 2. It allows you to search for a user and retrieve their Destiny 2 game data.

## Features

- User search: Enter a user's display name prefix to search for them.
- Retrieve user data: The tool retrieves the user's Destiny 2 game data, including character stats and recent activities.

## How to Use

1. Clone this repository.
2. configure your BUNGIE_APP_INFO in vite.config.ts
3. optionally, configure your app for OAuth at https://www.bungie.net/en/Application
OAuth Client Type
Public or Confidential. Confidential preferred.
Redirect URL
https://localhost:5173/ by default
Scope
Read your Destiny 2 information
Origin Header
https://localhost:5173 by default
4. Start the application with `npm run dev`.
5. Open your web browser and navigate to `http://localhost:5173`.
6. Enter a user's display name prefix in the search bar and click the "Search" button.

## Dependencies

- React
- typescript
- Axios
- vite

## Environment Variables

This project uses the following environment variables:

- `BUNGIE_API_KEY`: Your Bungie.net API key. You can obtain one from the Bungie.net Developer Portal.
