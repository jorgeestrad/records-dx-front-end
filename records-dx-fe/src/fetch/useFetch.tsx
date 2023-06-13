import { useState, useEffect } from "react";
import {URL_SERVICES_AUTHORIZE} from '../config_env/env';

export function useFetch(url:string){
const [data, setData] = useState(null);
const [error, setError] = useState(new Error());
const [loading, setLoading] = useState(true);


useEffect(() => {
    
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
     };
   
    fetch(url,requestOptions)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => {setError(error);})
    .finally(() => setLoading(false))
   
}, []);


 return {data, loading, error};
}

export function useFetchSecurity(url:string,token:string){
    const [data, SetData] = useState(null);
    const [error, setError] = useState(new Error());
    const [loading, setLoading] = useState(true);
    const [controller, setController] = useState(new AbortController());
    
    useEffect(() => {
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

export function getToken(email:string,password:string){
    const [token, setToken] = useState("");
    const [errort, setErrorT] = useState(new Error());
    const [loadingt, setLoadingT] = useState(true);
    
    useEffect(() => {
         var jsonData = {
            "email"     : email,
            "password"  : password,
         }
         const abortController = new AbortController();
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
         };
         setLoadingT(true);
         fetch(URL_SERVICES_AUTHORIZE,requestOptions)
         .then((response) =>{
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
            console.log('Token:' + response.json());
            return response.json();
          })
          .then((token) => setToken(token))
          .catch((error) => {
            setErrorT(error);
          })
         .finally(() => setLoadingT(false));
         return () => abortController.abort();
    }, []);
   
    return {token, loadingt, errort};
}