import { Showtime } from "./showtime";

export interface Movie {
  id: number;
  title: string;
  description: string;
  poster: string;
  category: number;
  duration: string;
  banner: string;
  synopsis: string;
  trailer: string;
  director: string;
  rating: string;
  review: number;
  showtimes: Showtime[];
}
