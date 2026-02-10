# Davick Refrigeration Website

Modern, responsive business website for Davick Refrigeration built with React and Vite.

## Prerequisites

- **Node.js**: You must have Node.js installed to run this project.
    -   **Download Link**: [Download Node.js (LTS Version)](https://nodejs.org/)
    -   **Installation**: Run the installer and accept the defaults.
    -   **Important**: After installing, you must **close and reopen your terminal** (or command prompt) for the changes to take effect.

## Getting Started

1.  **Check Installation**
    Type `node -v` in your terminal. If it shows a version number (like `v18.x.x`), you are ready.
    If it still says "not recognized", try restarting your computer.

2.  **Install Dependencies**
    Open your terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Start Development Server**
    Run the following command to start the local server:
    ```bash
    npm run dev
    ```
    Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, ServiceCard).
- `src/pages`: Individual page components (Home, About, Services, BookRepair, Contact).
- `src/index.css`: Global styles and color variables.
- `src/App.jsx`: Main application component with routing setup.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Booking Form**: User interface for booking repairs.
- **Contact Info**: Integrated map and WhatsApp click-to-chat.
- **Services List**: detailed list of all HVAC and refrigeration services.
