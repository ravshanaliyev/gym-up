import axios, { Axios } from 'axios'

const ApiInctance: Axios = axios.create({
    baseURL: "http://45.138.158.240:8080/api",
    headers: {
        "Content-type": "Application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJGaXJzdE5hbWUiOiJJc2thbmRhciIsIkxhc3ROYW1lIjoiUW9kaXJvdiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiUGhvbmUiOiIrOTk4ODg4MzI2MjcyIiwiZXhwIjoxNzE3NzA3OTYwLCJpc3MiOiJodHRwczovL2d5bWd1aWRlLnV6IiwiYXVkIjoiQXpoYXIgSW5jIn0.5GG0Lwccm7AAVmaZOsptM_shikyoDf95mP-tZ9Vi2rI",
        "Access-Control-Allow-Origin": '*'
    }
})


export default ApiInctance