import { Form, redirect } from "react-router-dom";

import { ButtonPlaneBlack } from "../ui/Buttons";

const Signup = () => {
  return (
    <section className="w-dvw h-dvh flex justify-center items-center">
      <Form
        action="/signup"
        method="post"
        className="w-fit h-fit flex flex-col justify-center items-center gap-4 text-inactive px-10 py-5 border border-inactive rounded-md animate-slideInFromBottom"
      >
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <h1 className="text-2xl font-semibold uppercase tracking-wider">
              Signup
            </h1>
          </div>
          {/* <input type="hidden" value={"signup"} name="type" className="hidden"/> */}
          <div className="flex flex-col justify-center items-start w-full gap-2">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-start gap-2">
            <label htmlFor="password" className="w-full">
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-start gap-2">
            <label htmlFor="password" className="w-full">
              Confirm Password
            </label>
            <input
              required
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <ButtonPlaneBlack type="submit">Submit</ButtonPlaneBlack>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Signup;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  // Validation before sending data to the server
  if (!data.email.includes("@")) {
    console.error("Invalid email: Must include '@'");
    return { error: "Invalid email" }; // Return error for UI handling
  }

  if (data.password.length < 4) {
    console.error("Password must be greater than 4 characters");
    return { error: "Weak password" };
  }

  if (data.password !== data.confirmPassword) {
    console.error("Passwords do not match");
    return { error: "Passwords do not match" };
  }

  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      alert(errorResponse.message);
      return { error: errorResponse.message }; // Error for UI
    }

    const result = await response.json();
    console.log(result.message);
    alert("Signup Successfully!");
    return redirect("/home");
  } catch (error) {
    console.error("Network error:", error);
    return { error: "Network error occurred" }; // Error for UI
  }
};
