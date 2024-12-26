/** @jsxImportSource @emotion/react */

import { SubmitHandler } from "react-hook-form";
import Form from "./components/Form";
import * as styles from "./styles";
import { IFormProps } from "./components/Form/Form";

function App() {
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
      <Form values={values} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
