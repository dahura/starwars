import { FC } from "react";
import LayoutBase from "./_layout";
import { useGetAllQuery, useGetStarwarsPersonQuery } from "../api/starWarsApi";
import { Card } from "../ui/Card/Card";
import { ArtBoard } from "../ui/ArtBoard/ArtBoard";
import { Carousel } from "../ui/Carousel/Carousel";
import { CarouselItem } from "../ui/Carousel/CarouselItem";
import { CarouselPagination } from "../ui/Carousel/CarouselPagination";
import { SearchInput } from "../ui/SearchInput/SearchInput";
import { LoadingScreen } from "../ui/LoadingScreen";

const MainPage: FC = () => {
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetAllQuery(null);
  if (isError) return <div> error !</div>;
  if (isLoading) return <LoadingScreen />;
  if (isSuccess && data?.results)
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
        </ArtBoard>
      </LayoutBase>
    );
  return <></>;
};

export default MainPage;
