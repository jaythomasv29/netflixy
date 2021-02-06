import axios from "axios"

// base url to make requests to the movie database
// instance using the axios.create method
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})


export default instance