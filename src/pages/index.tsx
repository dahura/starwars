import { FC } from "react";
import LayoutBase from "./_layout";
import { useGetAllQuery, useGetStarwarsPersonQuery } from "../api/starWarsApi";
import { Card } from "../components/Card/Card";
import { ArtBoard } from "../components/ArtBoard/ArtBoard";
import { Carousel } from "../components/Carousel/Carousel";
import { CarouselItem } from "../components/Carousel/CarouselItem";
import { CarouselPagination } from "../components/Carousel/CarouselPagination";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { LoadingScreen } from "../components/LoadingScreen";
import { useCharacters } from "../store/hooks/useCharacters";
import { ErrorScreen } from "../components/ErrorScreen/ErrorScreen";

const MainPage: FC = () => {
  const { data, isError, isLoading, isSuccess } = useCharacters();

  if (isError) return <ErrorScreen />;
  if (isLoading) return <LoadingScreen />;
  if (isSuccess && data?.results) {
    const ids = data.results.map(({ name }) => name);

    return (
      <LayoutBase>
        <ArtBoard>
          <SearchInput
            className="absolute top-0 w-full"
            characters={data.results}
          />
          <Carousel>
            {data.results.map((person) => (
              <CarouselItem id={person.name} {...person} key={person.name} />
            ))}
          </Carousel>
          <CarouselPagination ids={ids} />
        </ArtBoard>
      </LayoutBase>
    );
  }

  return <></>;
};

export default MainPage;
