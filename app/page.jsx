import Link from "next/link";
import Template from "./components/Template";

const Page = () => {
  return (
    <Template logoSrc="/next-auth/assets/images/auth-logo.png">
      <p className="mb-5 text-slate-500">A Template to jump-start with Auth pages using Next.js</p>
      <div className="flex gap-3">
        <Link
          href="/auth/login"
          className="text-emerald-700 border border-emerald-700 hover:bg-emerald-100 hover:text-black px-5 py-1 rounded-sm"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="bg-emerald-700 text-white hover:bg-emerald-900 px-5 py-1 rounded-sm"
        >
          Register
        </Link>
      </div>
    </Template>
  );
};

export default Page;
