# Shipping Box App

This project is a Shipping Box Application designed to calculate the shipping cost for boxes shipped from India to various countries worldwide. The app uses React for the UI, React Router for navigation, Redux Toolkit for state management, and TailwindCSS for styling.

## Live App: https://shippingboxapp.web.app

## Overview

The Shipping Box Application provides a simple interface with two views:

1. **Add Box Form:** A form to capture box details such as the receiver name, weight (kg), box colour, and destination country.
2. **Box List View:** A table displaying the captured boxes along with their calculated shipping cost in INR.

## Features

- **Add Box Form:**

  - Input fields for receiver name, weight, and destination country.
  - A color picker that outputs RGB format, e.g., `(255, 255, 255)`.
  - Basic validation (e.g., required fields, non-negative weight).

- **Box List View:**
  - A responsive table listing all boxes.
  - Columns include Receiver Name, Weight, Box Colour, Destination Country, and Calculated Shipping Cost.

## Tech Stack

- **Vite + React** – For building user interfaces.
- **React Router** – For client-side routing.
- **Redux Toolkit** – For state management.
- **TailwindCSS** – For styling and responsive design.
- **Google Firebase** - For hosting the app
- **JavaScript (ES6+)**

## Directory Structure Overview

- src
  - components
    - Body.jsx
    - ColorBox.jsx
    - NavBar.jsx
  - store
    - boxSlice.jsx
    - store.jsx
  - views
    - AddBoxForm.jsx
    - TableView.jsx
  - App.jsx
  - main.jsx
