/** @jsxImportSource @emotion/react */

import { SubmitHandler } from "react-hook-form";
import Form from "./components/Form";
import * as styles from "./styles";
import { IFormProps } from "./components/Form/Form";
import { z } from "zod";

function App() {
  const formSchema = z.object({
    firstName: z
      .string()
      .nonempty("First Name is required")
      .regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
    lastName: z
      .string()
      .nonempty("Last Name is required")
      .regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
    gender: z.string().nonempty("Gender is required"),
    birthDate: z
      .string()
      .nonempty("Birth Date is required")
      .transform((val) => new Date(val))
      .refine((date) => date >= new Date("1900-01-01"), {
        message: "Invalid date",
      })
      .refine((date) => date <= new Date(), {
        message: "Invalid date",
      }),
    age: z
      .string()
      .nonempty("Age is required")
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "Age must be a positive number",
      }),
    email: z.string().email("Invalid email address"),
    password: z.string().nonempty("Password is required"),
  });

  const values = {
    firstName: { type: "text", label: "First Name:" },
    lastName: { type: "text", label: "Last Name:", default: "Dias" },
    age: { type: "number", label: "Age:" },
    birthDate: { type: "date", label: "Birth Date:" },
    gender: {
      label: "Gender:",
      options: ["", "Male", "Female"],
    },
    email: { type: "email", label: "Email:" },
    password: { type: "password", label: "Password:" },
  };

  const onSubmit: SubmitHandler<IFormProps["values"]> = (data) => {
    console.log(data);
  };

  return (
    <div css={styles.container}>
      <Form values={values} onSubmit={onSubmit} schema={formSchema} />
    </div>
  );
}

export default App;
