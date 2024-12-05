import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  // States for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    let formIsValid = true;
    let validationErrors = { name: "", email: "", password: "" };

    if (currentState === "Sign Up") {
      if (!name) {
        validationErrors.name = "Name is required";
        formIsValid = false;
      }
    }

    if (!email) {
      validationErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
      formIsValid = false;
    }

    if (!password) {
      validationErrors.password = "Password is required";
      formIsValid = false;
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
      formIsValid = false;
    }

    setErrors(validationErrors);

    if (formIsValid) {
      // Handle the form submission, for example:
      console.log("Form submitted", { name, email, password });

      // Reset the form after successful submission
      setName(""); // Clear the name input
      setEmail(""); // Clear the email input
      setPassword(""); // Clear the password input
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <div className="w-full">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
      )}

      <div className="w-full">
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="w-full">
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className=" cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className=" cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className=" cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
