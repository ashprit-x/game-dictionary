import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game{
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {

    const controller = new AbortController();
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
         apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then(res => setGames(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError) return  () => controller.abort();
            setError(err.message);
        });

        return () => {
            if(games.length!==0)
            controller.abort();
        }

    }, []);
    return {games, error};
}
export default useGames;