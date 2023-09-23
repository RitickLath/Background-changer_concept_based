# React Background color changer
## Overview

The React Background color changer project is a hands-on exploration of React's fundamental concepts, including **props** and **useState**. Through this project, you'll gain a deeper understanding of how to use these key features to build dynamic and interactive user interfaces.

## Purpose

The primary objectives of this project are:

1. **Learn Props:** Understand how to pass data and behavior between React components using props. In this project, we'll use props to convey information about button colors.

2. **Explore State Management:** Dive into the useState hook to manage the state of your React components dynamically. The state will control the background color of the page.

3. **Interactive UI:** Build a simple yet engaging user interface where users can change the background color by clicking on different color buttons.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using `git clone`.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` or `yarn install` to install the necessary dependencies.

3. **Run the Application:** Start the development server by running `npm start` or `yarn start`. This will launch the application in your default web browser.

## Project Structure

The project is organized as follows:

- `src/`: Contains the source code for the project.
  - `App.js`: The main application component where the state and button components are managed.
  - `Button.js`: A reusable button component that receives color information through props.
  - `styles.css`: CSS file for styling the components.

## Implementation

In the `App.js` file, you'll find the implementation of the useState hook to manage the background color state. The `Button.js` component is used to display different color buttons.

Your task is to:

1. Pass color information to the `Button` component using props.
2. Handle button clicks in the `Button` component and update the background color by setting the state in the `App` component.

```javascript
button.jsx

import React from "react";
import { useState } from "react";

function Button({ clr, clr_name, click }) {
  const [color, setColor] = useState(clr);

  return (
    <button
      onClick={() => {
        click(clr);
      }}
      style={{ backgroundColor: color }}
      className="text-white px-4 py-1 mx-2 rounded-md border-2 border-white"
    >
      {clr_name}
    </button>
  );
}

export default Button;


App.jsx

import { useState } from "react";
import Button from "./assets/button";

function App() {
  const [bg, setBg] = useState("black");
  const changeBg = (clr) => {
    setBg(clr);
  };
  return (
    <>
      <div style={{ backgroundColor: bg }} className="h-screen w-full" />
      <div className="flex absolute bottom-10 justify-center">
        <Button click={changeBg} clr="red" clr_name="red" />
        <Button click={changeBg} clr="blue" clr_name="blue" />
        <Button click={changeBg} clr="green" clr_name="green" />
        <Button click={changeBg} clr="gray" clr_name="gray" />
        <Button click={changeBg} clr="orange" clr_name="orange" />
        <Button click={changeBg} clr="purple" clr_name="purple" />
        <Button click={changeBg} clr="yellow" clr_name="yellow" />
        <Button click={changeBg} clr="olive" clr_name="olive" />
      </div>
    </>
  );
}

export default App;


```

## Learning Goals

By working on this project, you will:

- Gain practical experience in using props to pass data and behavior between components.
- Understand how to manage and update state in React using the useState hook.
- Create an interactive user interface where user actions trigger dynamic changes.

## Resources

If you need additional guidance on using props, useState, or React in general, consider referring to the official React documentation (https://reactjs.org/docs/).

Happy coding!
