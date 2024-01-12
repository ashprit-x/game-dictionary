import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface FetchResponse<T>{
    count: number;
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const controller = new AbortController();
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
         apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
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

    }, []);
    return {data , error, isLoading};
}

export default useData;