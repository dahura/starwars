import { FC } from "react";
import { Link } from "react-router-dom";
import LayoutBase from "../_layout";
import { ArtBoard } from "../../components/ArtBoard/ArtBoard";

import { useCharacterSkills } from "../../store/hooks/useCharacterSkills";
import { Profile } from "../../components/Profile";

const PersonPage: FC = () => {
  const {
    character: { character },
  } = useCharacterSkills();

  return (
    <LayoutBase>
      <ArtBoard personPageCharacter={character}>
        <Link to={"/"} className="btn absolute absolute-right w-32">
          back
        </Link>
        <Profile />
      </ArtBoard>
    </LayoutBase>
  );
};

export default PersonPage;
