/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./styles";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValue {
  type: string;
  label: string;
  default?: number | string; // TODO: Fix this type
}

export interface IFormProps {
  values: Record<string, FormValue>;
  schema: ZodSchema;
  onSubmit: SubmitHandler<IFormProps["values"]>;
}

const Form: FC<IFormProps> = ({ values, schema, onSubmit }) => {
  const defaultValues = Object.entries(values).reduce(
    (acc, [key, item]) => ({ ...acc, [key]: item.default ?? "" }),
    {}
  );

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IFormProps["values"]>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const submitForm = handleSubmit(onSubmit);

  return (
    <form onSubmit={submitForm} css={styles.form}>
      {Object.entries(values).map(([key, item]) => (
        <div css={styles.input(!!errors[key])}>
          <label htmlFor={key}>{item.label}</label>
          <div>
            <input key={key} type={item.type} {...register(key)} />
            {errors[key] && <span>{errors[key].message}</span>}
          </div>
        </div>
      ))}

      <input type="submit" />
    </form>
  );
};

export default Form;
