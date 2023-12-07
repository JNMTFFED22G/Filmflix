export default interface iMovie {
  title: string;
  slug: string;
  id: number;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail?: string;
  isTrending?: boolean;
}
