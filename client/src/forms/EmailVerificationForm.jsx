import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailVerificationForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyClick = () => {
    if (email === "admin@example.com") {
      // Allow user to create account
      console.log("User is allowed to create account");
    } else {
      // Notify user to contact admin
      toast.error("Please contact the admin to allow with this email");
    }
  };

  return (
    <div className=" flex justify-center max-w-md mx-auto mt-8">
      <div className="  bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          Verify your email for create account
        </h2>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-400 py-2 px-3 rounded-md mb-4"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-auto"
          onClick={handleVerifyClick}
        >
          Verify
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}


export default EmailVerificationForm;