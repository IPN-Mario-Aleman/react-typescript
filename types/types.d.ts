export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export type SubsResponseFromApi = Array<{
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: [string];
    url: string;
    created: string;
  };
}>;

export type ResponseFromAPI = Array<{
  
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: [string];
    url: string;
    created: string;

}>;
