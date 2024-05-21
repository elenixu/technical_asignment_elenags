# Technical Assessment Test for the Junior Web Developer Position at SDSN

## Project Title:
Technical assessment test for the junior web developer position at SDSN.

## Description
This project is a Single Page Application built using Next.js and React, along with the MUI library. It aims to display information related to the 17 Sustainable Development Goals (SDGs), including icons for each goal, bio information fetched from an API, and scores, ratings, and trends per goal for selected countries.

## Installation

1. **Ensure you have Node.js and npm installed on your machine.**
2. **Clone the repository: `git clone <https://github.com/elenixu/technical_asignment_elenags>`**
3. **Navigate to the project directory: `cd <technical_asignment_elenags>`**
4. **Install dependencies: `npm install`**
5. **Run the development server: `npm run dev`**
6. **Open your browser and visit `http://localhost:3000` to view the application.**



## Problems I Encountered
1. **Issue Importing SVG Files in Next.js**

-Problem: There was an issue importing the SVG files.

-Solution: Optimized the website by converting the SVG files into WebP format, following best practices for image optimization.

2. **Fetching Country Data**

-Problem: The information of each country's goals, ratings, and scores was difficult to fetch because the backend JSON structure had all data at the same level.

-Solution: Rendered the SDG goals along with relevant country data using the Card component to organize and display the information effectively.

3. **Infinite Loop in Array**

-Problem: The array was infinitely looping in the console.

-Solution: Fixed it by ensuring the dependency array for the useEffect hook was correctly managed, preventing the infinite loop.

## Here is a Figma file of a very quick visualisation maquette I did for the website: `https://www.figma.com/design/MvGC4HhpfWQ07nsifv8tSy/card_maquette?m=dev&node-id=0%3A1&t=uDGkJz3uxDw2Uuyz-1`