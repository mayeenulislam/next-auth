"use client"; // treat as a client component

import AuthTemplate from "../../components/AuthTemplate";

const RegisterPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
  };

  return (
    <AuthTemplate page="register" title="Register">
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
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            required
            pattern="(?=^.{7,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z]).*$"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="bg-slate-100 p-2 mt-3 rounded-md">
            <strong>Password must include:</strong>
            <ul>
              <li>
                <span className="icon me-2">✅</span>
                Minimum 6 Characters
              </li>
              <li>
                <span className="icon me-2">⏹️</span>A Number (0-9)
              </li>
              <li>
                <span className="icon me-2">⏹️</span>A Special Character (eg.
                *#$%&!)
              </li>
              <li>
                <span className="icon me-2">⏹️</span>
                An Uppercase (Capital) Letter (A-Z)
              </li>
              <li>
                <span className="icon me-2">⏹️</span>A Lowercase (Small) Letter
                (a-z)
              </li>
            </ul>
          </div>
        </div>
        <div>
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600"
        >
          Register
        </button>
      </form>
    </AuthTemplate>
  );
};

export default RegisterPage;
