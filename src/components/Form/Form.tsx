/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./styles";

interface FormValue {
  type: string;
  label: string;
  default?: number | string; // TODO: Fix this type
}

export interface IFormProps {
  values: Record<string, FormValue>;
  onSubmit: SubmitHandler<IFormProps["values"]>;
}

const Form: FC<IFormProps> = ({ values, onSubmit }) => {
  const defaultValues = Object.entries(values).reduce(
    (acc, [key, item]) => ({ ...acc, [key]: item.default ?? "" }),
    {}
  );

  const { register, handleSubmit } = useForm<IFormProps["values"]>({
    defaultValues,
  });

  const submitForm = handleSubmit(onSubmit);

  return (
    <form onSubmit={submitForm} css={styles.form}>
      {Object.entries(values).map(([key, item]) => (
        <div css={styles.input}>
          <label htmlFor={key}>{item.label}</label>
          <input key={key} type={item.type} {...register(key)} />
        </div>
      ))}

      <input type="submit" />
    </form>
  );
};

export default Form;
