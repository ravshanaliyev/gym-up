import axios, { Axios } from 'axios'

const token = localStorage.getItem("token")

const ApiInctance: Axios = axios.create({
    baseURL: "https://api.bekgym.uz/api",
    headers: {
        "Content-Type": "application/json charset=utf-8",
        "Authorization": token && `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
    }
})


export default ApiInctance