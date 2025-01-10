import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface IDropdownProps {
  options: string[];
  registerKey: string;
}

const Dropdown: FC<IDropdownProps> = ({ registerKey, options }) => {
  const { register } = useFormContext();

  return (
    <select {...register(registerKey)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
