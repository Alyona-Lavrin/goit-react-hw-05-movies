import axios from "axios";

const KEY = 'b0cf5ca83b49db6de07ffe10fb9f63bb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function fetchBySearchMovies(inputValue) {
  try {
    const { data } = await axios.get(`/search/movie?query=${inputValue}&api_key=${KEY}`);
    return data.results;
 } catch(error) {}
};


export async function fetchTrendMovies(page = 1) {
  try {
    const { data } = await axios.get(`/trending/movie/week?api_key=${KEY}&page=${page}&language=en`);
    return data.results;
  }catch(error) {}
};


export async function fetchById(id) {
  try {
    const { data } = await axios.get(`/movie/${id}?api_key=${KEY}`)
    return data;
  }catch (error) {}
};


export async function fetchCastInfo(id) {
  try {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${KEY}`)
    return data.cast;
  } catch (error) {}
};


export async function fetchReviews(id) {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`)
    return data.results;
  } catch (error) {}
};