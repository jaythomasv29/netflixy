# netflixy

A netflix inspired web app made with react, that fetches movie data from an API. The app uses flex and grid components to display dynamic data on a single page application.

[View Netflixy Here] (https://netflixy-a4d0d.web.app/)

## HTML / CSS

- Used Flexbox to display various elements using Semantic HTML
- Used Css Grid to display the proper layout
- Created components such as (row, nav, banner, and main container)
- Nav component has a sticky / fixed position to remain fixed in window
  - Logo image to mimic Netflix

## Javascript / React

- Initially started with Axios package to make an API request to TMDB (The Movie Database API)
- A separate javascript file called 'requests.js' was used to store the API details and various endpoints to retrieve different movie genres
- 'axios.js' imports the package and creates the instance using the base URL. This allows for easier use within various components to make the package reusable.
-
