"use client"; // treat as a client component

import React from "react";
import AuthTemplate from "../../components/AuthTemplate";

const ResetPasswordPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle reset password logic here
  };

  return (
    <AuthTemplate page="reset" title="Reset Password">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block mb-2">New Password</label>
          <input
            type="password"
            name="newPassword"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Confirm New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600"
        >
          Reset Password
        </button>
      </form>
    </AuthTemplate>
  );
};

export default ResetPasswordPage;
