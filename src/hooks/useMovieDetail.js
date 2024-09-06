import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMovieDetails=({id, API_KEY})=>{
    return api.get(`/movie/${id}?api_key=${API_KEY}`)
}

export const useMovieDetailsQuery=({id, API_KEY})=>{
    return useQuery({
        queryKey:['movie-detail', {id, API_KEY}],
        queryFn:()=>fetchMovieDetails({id, API_KEY}),
        select:(result)=>result.data
    })
}