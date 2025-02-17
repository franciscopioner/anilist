export type Anime = {
  id: number;
  bannerImage?: string;
  title: {
    romaji: string;
    english?: string;
    native?: string;
  };
  coverImage: {
    large: string;
    medium: string;
    color?: string;
  };
  averageScore: number;
  genres: string[];
  format: "TV" | "MOVIE" | "OVA" | "ONA" | "SPECIAL";
  description: string;
};

export type Formats = "All" | "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC";
