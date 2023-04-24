import { useCallback, useEffect, useMemo } from "react";
import { useCharacter } from "../../store/hooks/useCharacter";

export const useCarousel = (carosel: React.RefObject<HTMLDivElement>) => {
  const { setCurrentCharacter } = useCharacter();

  const handleCarouselScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;
      const elements = [...target.children];

      const scrollPosition = target.scrollLeft;
      const itemWidth =
        target.querySelector(".carousel-item")?.clientWidth || 0;
      const activeItemIndex = Math.round(scrollPosition / itemWidth);

      setCurrentCharacter(elements[activeItemIndex].id);
    },
    []
  );

  const handleCarouselClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const clickedItem = event.target as HTMLDivElement;
      setCurrentCharacter(clickedItem.id);
    },
    []
  );

  return useMemo(() => ({ handleCarouselScroll, handleCarouselClick }), []);
};
