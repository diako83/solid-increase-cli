import Link from "next/link";

export const Login = () => {
  return (
    <button
      className="rounded 
        bg-slate drop-shadow-lg 
        sm: w-11/12 h-10
        md:w-7/12 
        2xl:w-4/12 

        font-sans
        text-xl 
      
        expand
        "
    >
      <Link href="/login">LOGIN</Link>
    </button>
  );
};
