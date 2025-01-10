/** @jsxImportSource @emotion/react */

import { FC, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as styles from "./styles";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dropdown } from "../subcomponents";
import CheckboxGroup from "../subcomponents/CheckboxGroup";

export interface FormValue {
  type?: string;
  options?: string[];
  items?: string[];
  label: string;
  default?: ReactNode;
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

  const methods = useForm<IFormProps["values"]>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = methods;

  const submitForm = handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitForm} css={styles.form}>
        {Object.entries(values).map(([key, item]) => (
          <div css={styles.input(!!errors[key])}>
            <label htmlFor={key}>{item.label}</label>
            <div>
              {item.options && item.options.length > 0 ? (
                <Dropdown
                  key={`${key}-${item.label}`}
                  registerKey={key}
                  options={item.options}
                />
              ) : item.type === "checkbox" &&
                item.items &&
                item.items.length > 0 ? (
                <CheckboxGroup
                  key={`${key}-${item.label}`}
                  registerKey={key}
                  items={item.items}
                />
              ) : (
                <input
                  key={`${key}-${item.label}`}
                  type={item.type}
                  {...register(key)}
                />
              )}
              {errors[key] && <span>{errors[key].message}</span>}
            </div>
          </div>
        ))}

        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default Form;
