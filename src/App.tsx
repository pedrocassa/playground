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
    age: z.number().int().positive("Age must be a positive number"),
    email: z.string().email("Invalid email address"),
    password: z.string().nonempty("Password is required"),
  });

  const values = {
    firstName: { type: "text", label: "First Name:" },
    lastName: { type: "text", label: "Last Name:", default: "Dias" },
    age: { type: "number", label: "Age:" },
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
