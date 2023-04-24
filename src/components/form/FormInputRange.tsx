import React, { FC, useCallback, useRef, useState } from "react";
import { cnGetFirst } from "../../utils/cngetFirst";
import cn from "classnames";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { IntRange } from "../../types";
interface FormInputRange {
  name: string;
  min: number;
  max: number;
  value: IntRange<1, 11>;
  description: string;
  register: UseFormRegister<FieldValues>;
}

export const FormInputRange: FC<FormInputRange> = ({
  min,
  max,
  value: defaultValue,
  description,
  register,
  name,
}) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => setValue(Number(event.target.value) as IntRange<1, 11>),
    []
  );
  return (
    <>
      <label>{name}</label>
      <div className="tooltip" data-tip={`${name} : ${value}/10`}>
        <input
          type="range"
          min={min}
          max={max}
          // value={value}
          defaultValue={defaultValue}
          className={cn(
            "range",
            cnGetFirst({
              "range-error": value <= 4,
              "range-warning": value <= 6,
              "range-info": value <= 8,
              "range-success": value <= 10,
            })
          )}
          {...register(name, { onChange: handleChange, valueAsNumber: true })}
        />
      </div>
    </>
  );
};
