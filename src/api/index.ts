import axios, { Axios } from 'axios'

const token = localStorage.getItem("token")

const ApiInctance: Axios = axios.create({
    baseURL: "http://45.138.158.207:8080/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token && `Bearer ${token}`

    }
})


export default ApiInctance