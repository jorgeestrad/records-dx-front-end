import { useState, useEffect } from "react";
import {URL_SERVICES_AUTHORIZE} from '../config_env/env';

export function useFetch(url:string){
const [data, SetData] = useState(null);
const [error, setError] = useState(new Error());
const [loading, setLoading] = useState(true);
const [controller, setController] = useState(new AbortController());

useEffect(() => {

   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXQiOiJqb3JnZXN0cmFkYWNvcnJlYUBnbWFpbC5jb20iLCJpYXQiOjE2ODYxNzQ0NTYsImV4cCI6MTY4NjE5OTY1Nn0.qYZDH8vRXQLZJqRSk-97TNvYMAXp1cIZWet6dVmA9pY";

    const headers = {'Authorization' : 'Bearer ' + token }
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);
    fetch(url,{headers})
    .then((response) => response.json())
    .then((data) => SetData(data))
    .catch((error) => {
        if (error.name === "AbortError")
        {
            console.log("Request Cancelled!");
        }
        setError(error);
    })
    .finally(() => setLoading(false))
    return () => abortController.abort();
}, []);

const handleCancelRequest = () => {
    if (controller){
        controller.abort();
        setError(new Error("Request Cancelled!"));
    }
}
 return {data, loading, error,handleCancelRequest};
}