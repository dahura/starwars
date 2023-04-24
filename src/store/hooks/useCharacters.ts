import { useEffect } from "react";
import { useGetAllQuery } from "../../api/starWarsApi";
import { useCharacterSkills } from "./useCharacterSkills";
import { useAppSelector } from ".";

export const useCharacters = () => {
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetAllQuery(null);
  return {
    data,
    isError,
    isFetching,
    isLoading,
    isSuccess,
  };
};
