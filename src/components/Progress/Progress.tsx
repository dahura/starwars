import { FC } from "react";
import { CharacterSkillKeys } from "../../store/slices/characters";
import { IntRange } from "../../types";
import cn from "classnames";
import { cnGetFirst } from "../../utils/cngetFirst";

interface Progress {
  name: CharacterSkillKeys;
  //TODO wrap to specific type
  value: IntRange<1, 11>;
}

export const Progress: FC<Progress> = ({ name, value }) => {
  return (
    <>
      <label htmlFor={name} className="text-white/75">
        {name}
      </label>
      <progress
        className={cn(
          "progress w-56",
          cnGetFirst({
            "progress-error": value <= 4,
            "progress-warning": value <= 6,
            "progress-info": value <= 8,
            "progress-success": value <= 10,
          })
        )}
        value={value}
        max="10"
        id={name}
      >
        123
      </progress>
    </>
  );
};
