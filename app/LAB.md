Lab: Image Gallery Day 1
===

Work in pairs to create a fullstack image gallery app

## App

The app allows users to create albums and the add images to those albums.

The `App` component should have at least a header, nav and footer plus a main area whose
content is controlled by the router and whose layout is controlled by css grid, css, and media queries.

The `AlbumDetail` component (displayed at route `/albums/:id`) has a subroute area that displays
one of three image views or the new image form

## Client side routes

We won't be implementing all of these routes on day 1, but here is complete overview:

route | description
---|---
`/` | Home/Dashboard page (provide link to `/albums`)
`/about` | About page (make something up)
`/albums` | List of albums (name plus posterImage - only name for today!)
`/albums/new` | Add a new album
`/albums/:id` | Album detail route with name and description that has subroutes (listed below)
`/albums/:id/images/thumbnail` | Album detail with subroute of thumbnails of images
`/albums/:id/images/gallery` | Album detail with subroute of gallery image viewer
`/albums/:id/images/list` | Album detail with subroute of tabular list of image data
`/albums/:id/images/new` | Album detail with subroute for adding a new image
`/images` | searchable list of all images (in thumbnail view)

## Data

model | properties
---|---
Album | id, title, description, posterImage
Image | id, albumId, title, description, url


## Day 1 Requirements

1. Create Route sketches and consdier Responsive layout. Goal is to understand how the 
app will behave at each supported breakpoint for each supported route
1. Consider and decide on color schemes and font
1. Using CSS Grid and React Router, implement routes and subroutes with static components and 
placeholder components for data-driven routes
1. Using `redux` in the app (plus `promise` and `thunk` middleware), and standard express/mongoose/mongodb backend, implement the components
for the `/albums` and `/albums/new` routes. For these routes:
    1. Draw out decomposed UIs
    1. List out state (things that change over time)
    1. List out general actions (things that will happen that change state)
    1. Draw out tree view of components and what data and actions they require
    1. Per route view:
        1. Implement component presentation using static data
        1. TDD Reducers
        1. TDD Actions
            1. Mock services!
        1. TDD Selectors
        1. Implement service apis in client app
        1. Implement need routes/models on server
        1. Integrate actions and store via connect with component and make based on props
        
## Rubric

* Plan/sketch/design out routes, responsive layout, components (submit images) **3pts**
* Responsive CSS Grid Layout **2pts**
* albums reducers and actions **4pts**
* Clean, organized project and code **1pt**
