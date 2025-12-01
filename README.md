# TripBro: Smart Travel Planner

This is an AI-powered travel platform to plan, manage, and enhance your journeys.

## Local Development Setup (VS Code)

To run this project locally, you'll need [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### 1. Install Dependencies

Open a terminal in the project's root directory and run the following command to install all the necessary packages:

```bash
npm install
```

### 2. Set Up Environment Variables

The application requires a Google AI API key to function.

1.  Make a copy of the `.env.example` file and rename it to `.env`.
2.  Open the new `.env` file.
3.  Replace `YOUR_GOOGLE_AI_API_KEY_HERE` with your actual Google AI API key.

```
# .env file
API_KEY="AIzaSy...your...key...here..."
```

> **Note:** The `.env` file is included in `.gitignore` to prevent accidentally committing your secret keys.

### 3. Run the Development Server

Once the dependencies are installed and your API key is set, you can start the Vite development server:

```bash
npm run dev
```

The server will start, and you can view your application by opening the local URL provided in the terminal (usually `http://localhost:5173`). The app will automatically reload if you make changes to the source files.

### 4. Build for Production

To create a production-ready build of the app, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized and minified files ready for deployment.
