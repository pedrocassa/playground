import Form from "./components/Form";

function App() {
  const values = {
    firstName: { type: "text", error: "First name is required" },
    lastName: { type: "text", default: "Dias", error: "Last name is required" },
    age: { type: "number", error: "Age is required" },
    email: { type: "email", error: "Email is required" },
    password: { type: "password", error: "Password is required" },
  };

  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
  };

  return (
    <div>
      <Form values={values} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
