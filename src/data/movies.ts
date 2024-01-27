import type { Movie } from "../@types/Movie";

export const getMovies = async () => {
  try {
    const req = await fetch("https://api.b7web.com.br/cinema/");
    const json = await req.json();
    return json as Movie[];
  } catch (error) {
    return false;
  }
};
