import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


export interface FetchResponse<T>{
    count: number;
    results: T[];
}
// request config allows you to customize various aspects of the request, such as the method, URL, headers, parameters, data, and more.
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const controller = new AbortController();
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
         apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig })
        .then(res => {
            setData(res.data.results);
            setLoading(false);
        } )
        .catch(err => {
            if(err instanceof CanceledError) return  () => controller.abort();
            setError(err.message);
            setLoading(false);
        });

        return () => {
            if(data.length!==0)
            controller.abort();
            setLoading(false);
        }

    }, deps ? [...deps] : []); // truth checking
    return {data , error, isLoading};
}

export default useData;