import { response } from "express";

const API_TOKEN = "CLE_API";

export function getDataApi(link){
    const url = '' + API_TOKEN;
    return fetch(link)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}