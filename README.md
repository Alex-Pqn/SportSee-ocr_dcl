<h1 id="app">SportSee App</h1>

<h3>Develop an analytics dashboard with React, OpenClassrooms</h3>

SportSee is a startup dedicated to sports coaching. This repo contains all the source code to run the Sportsee Dashboard App. On this dashboard, users can see their past sessions, the number of calories burned and many other features.

<h2>Prerequisites</h2>

- <a href="https://nodejs.org/en/" target="_blank">Node.js</a> `v16+` / <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable" target="_blank">Yarn</a>

- <a href="#backend-app">Backend API</a>

- IDE
  - It is recommended to use an IDE that supports React syntax, like <a href="https://code.visualstudio.com/download" target="_blank"> Visual Studio Code </a> and its extensions.

<h2>Getting Started</h2>

**1. Clone the repository**

**2. Install dependencies**

`npm install`

**3. Run the client**

Runs the app in development.

`npm run start`

The client runs on `http://localhost:3000` by default.

**Run the client tests**

`npm run test`

<h2 id="jsdocs">JSDocs</h2>

This project contains <a href="https://jsdoc.app/" target="_blank">JSDocs</a>. Any changes **_must include_** a complete JSDocs to :

- Explain the logic of what you have implemented
- Type the variables
- Say what is expected/returned

<h2 id="backend-app">Backend App</h2>

The <a href="https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard">Backend App</a> contains all the source code to run the micro API for the sports analytics dashboard of SportSee.

Otherwise, the <a href="#app">Frontend App</a> can be started with mocks.

<h3>Possible endpoints</h3>

The <a href="https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard">Backend App</a> includes four endpoints :

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId `12` and `18` respectively.**
