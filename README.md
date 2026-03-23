## Dynamic Hero Landing Page

## React Interactive Hero Section (Frontend UI Project)

## About

Dynamic Hero Landing Page is a frontend-focused UI project built using React.

The project demonstrates how modern landing pages use dynamic hero sections with background transitions, autoplay sliders, and interactive media controls.

It simulates a real-world website hero section where users can view rotating content, switch between slides manually, and toggle between image and video backgrounds.

This project focuses on UI behavior, state management, and user interaction rather than complex backend logic.

## Features

Dynamic hero text rotation

Automatic slide change using setInterval

Manual slide navigation using dots

Background image switching

Video background toggle

Play / Pause interaction control

Smooth UI transitions with CSS animations

Component-based architecture

Clean and minimal UI design

## Application Flow

The application follows a dynamic hero interaction flow.

User lands on the page

Hero section displays rotating text content

Background changes automatically every few seconds

User can manually switch slides using navigation dots

User can toggle between image and video background

Play button switches to video mode

Pause button switches back to image mode

UI updates dynamically based on state

## State Management

The project uses React state to control UI behavior.

heroCount

Controls current slide index

Automatically updates every 3 seconds

## playStatus

Controls whether video or images are shown

Toggles on user interaction

useEffect

Handles automatic slide transitions using setInterval

## Core Components
 
Background

Handles switching between images and video

Hero

Displays text, controls, and interactions

Navbar

Represents navigation UI

App

Manages global state and component flow

## Technologies Used

React

JavaScript

CSS

Vite

## Learning Outcomes

Understanding dynamic UI rendering in React

Managing state for interactive components

Implementing auto-changing UI with useEffect

Handling conditional rendering

Building reusable UI components

Creating modern landing page hero sections

Working with media (images & video) in React

Slide Navigation

## Screenshots
 
### Desktop View
![Home Page](img.png)

## Future Improvements

Add smooth transition animations between slides

Improve responsiveness for all screen sizes

Add text animation effects

Optimize video loading performance

Add multiple video sources

Integrate real website sections (features, pricing, etc.)

## Notes

This project focuses on building an interactive hero section commonly used in modern websites.

It demonstrates how UI behavior and user interaction can be handled efficiently using React state and components.

The structure is scalable and can be extended into a full landing page. (not responsive)
