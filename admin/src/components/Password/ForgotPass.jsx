import axios from "axios";
import { useState } from "react";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/users/forgotpass", { email });

      console.log("response is from forgo pass ", response);

      if (response.data.success) {
        setMessage(
          "We just sent you an email to help recover your password. Please check your emailbox"
        );
      } else {
        setMessage("There was a problem recovering your password");
      }
    } catch (error) {
      console.log("error is", error.message);
      setMessage("There was a problem recovering your password");
    }
  };

  return (
    <div className="container">
      <p>Please type your email to help recover your password</p>
      <input
        placeholder="Type your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}
