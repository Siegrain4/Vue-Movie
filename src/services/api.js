import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDY1MjRkMTk0NWUwNjBlNTQ0ZDhhYjE3NTdlODhjNyIsInN1YiI6IjYxYTA4NTEyM2RjMzEzMDA2MjcxZDUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q20B_WvJqd6TarKHz5RVLFiXjs2j3IXiSdh4qxC0tOs";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
});