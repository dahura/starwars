import { FC, useMemo } from "react";
import { IntRange } from "../../types";
import cn from "classnames";
import { cnGetFirst } from "../../utils/cngetFirst";
import { getFirst } from "../../utils/getFirst";
import { usePowerRank } from "../../store/hooks/usePowerRank";
interface PowerRank {
  //TODO wrap to specific type
  characterName: string;
  className: string;
}

export const PowerRank: FC<PowerRank> = ({ className, characterName }) => {
  const value = usePowerRank(characterName);
  console.log(characterName);

  const cnClass = useMemo(
    () =>
      cnGetFirst({
        "badge-secondary": value === -1,
        "badge-error": value <= 4,
        "badge-warning": value <= 6,
        "badge-info": value <= 8,
        "badge-success": value <= 10,
      }),
    [value]
  );

  const currentRank = useMemo(
    () =>
      getFirst({
        TBD: value === -1,
        C: value <= 4,
        B: value <= 6,
        A: value <= 8,
        S: value <= 10,
      }),
    [value]
  );

  const key = Object.keys(cnClass!)[0];
  return (
    <div className={cn("badge", cnClass, className)}>Rank : {currentRank} </div>
  );
};
