import { ReactNode, FC, useCallback, useEffect } from "react";
import {
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import { FormInputRange } from "../FormInputRange";
import {
  Character,
  CharacterSkillKeys,
} from "../../../store/slices/characters";
import { IntRange } from "../../../types";
import { useCharacterSkills } from "../../../store/hooks/useCharacterSkills";
import { useCharacter } from "../../../store/hooks/useCharacter";
import { useCloseModal } from "../../Modal/useCloseModal";

interface FormEditSkills {
  skills: {
    name: CharacterSkillKeys;
    //TODO wrap to specific type
    value: IntRange<1, 11>;
  }[];
  modalId: string;
  isFirst?: boolean;
}

export const FormEditSkills: FC<FormEditSkills> = ({
  skills,
  modalId,
  isFirst,
}) => {
  const { changeSkills } = useCharacterSkills();
  const { register, handleSubmit: onSubmit } = useForm();
  const handleCloseModal = useCloseModal(modalId);

  const handleSumbit = useCallback((data: FieldValues) => {
    changeSkills(data as Character["skills"]);
    handleCloseModal();
  }, []);

  return (
    <form onSubmit={onSubmit(handleSumbit)}>
      <div className="form-control">
        {skills.map(({ name, value }) => (
          <FormInputRange
            key={name}
            name={name}
            min={1}
            max={10}
            value={value}
            description={name}
            register={register}
          />
        ))}

        <button type="submit" className="btn btn-accent mt-4">
          Save
        </button>
      </div>
    </form>
  );
};
