import { Sub, SubsResponseFromApi } from "types/types";

export const getAllSubs = () => {
  return fetchAPI().then(mapFromApiToSubs);
};

// setSubs(INITIAL_STATE);
const fetchAPI = async (): Promise<SubsResponseFromApi> => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return await res.json();
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse?.results?.map((subFromApi) => {
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
