import Image from "next/image";
import Link from "next/link";

const AuthTemplate = ({ page, title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="mb-8">
        <Link href="/">
          <Image
            src="/assets/images/auth-logo.png"
            alt="Logo of Auth"
            width={109}
            height={150}
          />
        </Link>
      </div>
      <div className="w-full max-w-md p-8 border border-gray-200 rounded shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center">{title}</h1>
        {children}
        <div className="mt-4 text-center">
          {page !== "login" && (
            <Link
              href="/auth/login"
              className="text-emerald-500 hover:underline"
            >
              Login
            </Link>
          )}
          {page !== "register" && (
            <>
              {page !== "login" && <span className="mx-2 text-slate-300">|</span>}
              <Link
                href="/auth/register"
                className="text-emerald-500 hover:underline"
              >
                Register
              </Link>
            </>
          )}
          {page !== "forgot" && (
            <>
              <span className="mx-2 text-slate-300">|</span>
              <Link
                href="/auth/forgot-password"
                className="text-emerald-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;