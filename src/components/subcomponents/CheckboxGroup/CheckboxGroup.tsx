import { FC } from "react";
import Checkbox from "../Checkbox/Checkbox";

interface ICheckboxProps {
  registerKey: string;
  items: string[];
}

const CheckboxGroup: FC<ICheckboxProps> = ({ items, registerKey }) => {
  return (
    <div>
      {items.map((item) => (
        <Checkbox label={item} registerKey={`${registerKey}-${item}`} />
      ))}
    </div>
  );
};

export default CheckboxGroup;
