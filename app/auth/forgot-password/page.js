"use client"; // treat as a client component

import AuthTemplate from "../../components/AuthTemplate";

const ForgotPasswordPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <AuthTemplate page="forgot" title="Forgot Password">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600"
        >
          Send Reset Link
        </button>
      </form>
    </AuthTemplate>
  );
};

export default ForgotPasswordPage;
