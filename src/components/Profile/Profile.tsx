import React, { FC, useCallback, useEffect } from "react";
import { Progress } from "../Progress/Progress";
import { useCharacterSkills } from "../../store/hooks/useCharacterSkills";
import {
  Modal,
  ModalBody,
  ModalButton,
  ModalClose,
  ModalTitle,
} from "../Modal";
import { FormEditSkills } from "../form";
import { generateRandomSkills } from "../../store/hooks/utils";
import { useParams } from "react-router-dom";

interface Profile {}
export const Profile: FC<Profile> = () => {
  const { id } = useParams();
  const {
    addSkills,
    character: { characterSkillsArray, character },
  } = useCharacterSkills();
  const handleSetupSkills = useCallback(() => {
    addSkills();
  }, []);
  return (
    <>
      <div className="bg-black/25 w-[364px] h-fit absolute absolute-center top-[280px] p-6 space-y-2">
        <div className="stat-title text-white ">
          Character Profile:
          <p className="text-amber-500 inline-block">{character}</p>
        </div>

        <div className="space-y-2 mt-4 flex flex-col">
          {characterSkillsArray.map(({ name, value }) => (
            <Progress name={name} value={value} key={name} />
          ))}
          {characterSkillsArray.length === 0 ? (
            <div className="text-white flex flex-col space-y-2">
              <p className="text-amber-400">
                You may be a Jedi, but without skills on your profile, how will
                anyone know?
              </p>
              <button className="btn" onClick={handleSetupSkills}>
                "Setup Character Skills
              </button>
            </div>
          ) : (
            <ModalButton name="Edit" modalId="edit-skills" />
          )}
        </div>
        <Modal id="edit-skills">
          <ModalClose modalId="edit-skills" />
          <ModalTitle title={`edit ${character} skills`} />
          <ModalBody>
            <FormEditSkills
              modalId="edit-skills"
              skills={characterSkillsArray}
              isFirst={characterSkillsArray.length === 0}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
