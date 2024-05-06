import React from "react";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  description: string;
  error?: boolean;
}

function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = React.useState<FormData>({ description: "" });
  const [error, setError] = React.useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData.description) {
      setError("Required field");
      return;
    } else {
      setError("");
    }
    onSubmit(formData);
  }

  return (
    <form className="form-task" onSubmit={handleSubmit}>
      <div>
        <label>New Task:</label>
        <input
          type="text"
          placeholder="Task"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        {error && (
          <>
            <p className="error-input fade-in">{error} </p>
          </>
        )}
      </div>
      <br />
      <button>Add</button>
    </form>
  );
}

export default Form;
