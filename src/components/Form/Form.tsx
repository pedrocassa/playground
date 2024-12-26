import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValue {
  type: string;
  error: string;
  default?: number | string;
}

interface IFormProps {
  values: Record<string, FormValue>;
  onSubmit: (data: Record<string, string>) => void;
}

const Form: FC<IFormProps> = ({ values }) => {
  const defaultValues = Object.entries(values).reduce(
    (acc, [key, item]) => ({ ...acc, [key]: item.default ?? "" }),
    {}
  );

  const { register, handleSubmit } = useForm<IFormProps["values"]>({
    defaultValues,
    errors: Object.entries(values).reduce(
      (acc, [key, item]) => ({ ...acc, [key]: { message: item.error } }),
      {}
    ),
  });

  const onSubmit: SubmitHandler<IFormProps["values"]> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(values).map(([key, item]) => (
        <input key={key} type={item.type} {...register(key)} />
      ))}

      <input type="submit" />
    </form>
  );
};

export default Form;
