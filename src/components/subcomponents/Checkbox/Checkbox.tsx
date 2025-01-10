import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface ICheckboxProps {
  label: string;
  registerKey: string;
}

const Checkbox: FC<ICheckboxProps> = ({ registerKey, label }) => {
  const { register } = useFormContext();

  return (
    <label>
      <input type="checkbox" {...register(registerKey)} />
      {label}
    </label>
  );
};

export default Checkbox;
