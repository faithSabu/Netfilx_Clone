import { API_KEY } from "./Constants/Constants"

export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const originals = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const topRated = `/trending/all/day?api_key=${API_KEY}`
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const document = `discover/movie?api_key=${API_KEY}&with_genres=99`

// /tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=${API_KEY}&language=en-US