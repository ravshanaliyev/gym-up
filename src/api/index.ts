import axios, { Axios } from 'axios'

const ApiInctance: Axios = axios.create({
    baseURL: "http://localhost:5172/api",
    headers: {
        "Content-type": "Application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJGaXJzdE5hbWUiOiJNZWhyb2piZWsiLCJMYXN0TmFtZSI6IkFsaXlldiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiUGhvbmUiOiIrOTk4OTc4NDg4MDA2IiwiZXhwIjoxNzE3NTAyNTE0LCJpc3MiOiJodHRwczovL2d5bWd1aWRlLnV6IiwiYXVkIjoiQXpoYXIgSW5jIn0.Cf-0ayAeu-559CtfTosakYdx7dB84-ZQGqL3Eh9K4Dg"
    }
})


export default ApiInctance