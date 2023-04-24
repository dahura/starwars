import React, {
  FC,
  FormEventHandler,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { StarWarsPerson } from "../../api/types";
import { useCharacter } from "../../store/hooks/useCharacter";

interface SearchInput {
  className: string;
  characters: StarWarsPerson[];
}
export const SearchInput: FC<SearchInput> = ({ className, characters }) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [suggestedCharacterList, setSuggestedCharacterList] = useState<
    StarWarsPerson[]
  >([]);
  const form = useRef<HTMLFormElement>(null);
  const handleTouch = useCallback(() => setIsTouched(true), []);
  const handleBlur = useCallback(() => {
    if (!suggestedCharacterList.length) setIsTouched(false);
  }, []);
  const { setCurrentCharacter } = useCharacter();

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      const searchValue = (event.currentTarget.elements[0] as HTMLInputElement)
        .value;
      if (!isTouched) return;
      const character = characters.filter(({ name }) =>
        name.includes(searchValue)
      )[0];

      if (character) setCurrentCharacter(character.name);
      setSuggestedCharacterList([]);
      form.current?.reset();
    },
    []
  );

  const handleSearch = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      const searchValue = (event.currentTarget.elements[0] as HTMLInputElement)
        .value;
      if (!searchValue) return;
      const characterList = characters.filter(({ name }) =>
        name.includes(searchValue)
      );
      setSuggestedCharacterList(characterList);
    },
    []
  );

  const handleClick = useCallback<MouseEventHandler<HTMLUListElement>>(
    (event) => {
      const target = event.target as HTMLButtonElement;
      console.log(target.nodeName);
      if (target.nodeName !== "BUTTON") return;
      const characterName = target.innerText;
      setCurrentCharacter(characterName);
      if (characterName) setSuggestedCharacterList([]);
    },
    []
  );

  return (
    <div className={className}>
      <form
        ref={form}
        onSubmit={handleSubmit}
        onChange={handleSearch}
        className={cn("form-control")}
      >
        <div className="input-group justify-end rounded-none">
          <input
            type="text"
            placeholder="Search…"
            className={cn(
              "input input-bordered w-full  rounded-none border-none z-[100] bg-black/90 text-white",
              {
                hidden: !isTouched,
                flex: isTouched,
              }
            )}
            onBlur={handleBlur}
          />
          <button className="btn btn-square rounded-none" onClick={handleTouch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      {suggestedCharacterList.length > 0 && (
        <ul
          id="suggestedList"
          className="menu bg-base-100 w-full  absolute z-[100] h-screen flex flex-col bg-black/90  text-white"
          onClick={handleClick}
        >
          {suggestedCharacterList.map(({ name }) => (
            <li key={name}>
              <button>{name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
