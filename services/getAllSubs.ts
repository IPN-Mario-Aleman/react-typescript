import { Sub, SubsResponseFromApi, ResponseFromAPI } from "types/types";
const fetch = require('node-fetch');

export const getAllSubs = () => {
  return fetchAPI().then(mapFromApiToSubs);
};

// setSubs(INITIAL_STATE);
const fetchAPI = async (): Promise<ResponseFromAPI> => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const jsonData = await res.json();
  return jsonData.results;
};

const mapFromApiToSubs = (apiResponse: ResponseFromAPI): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    //console.log(subFromApi)
    const {
      name: nick,
      image: avatar,
      gender: description,
      id: subMonths,
    } = subFromApi;

    return {
      nick,
      avatar,
      description,
      subMonths,
    };
  });
};
