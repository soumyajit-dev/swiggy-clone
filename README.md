# Swiggy 🚀

# HLD Components

- Header
  - Logo
  - Nav Items Body
- Search
- RestaurantContainer
  - RestaurantCard
    - Img
    - Name of Res, Star Rating, cuisine, delery time
- Footer
  - Copyright
  - Links
  - Address
  - Contact

# Notes for the whole course

- https://github.com/ReddyDivya/rd-namaste-react-notes/tree/main

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect() - For Doing something after the component is loaded

# React Basics

- Two types of Export/Import

  - Default Export/Import

    1. export default Component;
    2. import Component from "path";

  - Named Export/Import

    1. export const Component;
    2. import {Component} from "path";

# Reconcilation Algorithum (React Fiber)

- https://github.com/acdlite/react-fiber-architecture
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
- Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

# Routing

- There are 2 tyes of routing in web app.
  1. Client Side Routing - Refersh the Component in the <Outlet />
  2. Server Side Routing - Reload the whole page every time while routing

# Doubts

- Do we have something on load of a component? useEffect works after the component is rendered.
- Can we use Material UI in React?
- How to add assets in build?

# Parcel

- "start": "parcel index.html --open",

# React Context

- This is Global Context that can be accessible any where through out the application.
