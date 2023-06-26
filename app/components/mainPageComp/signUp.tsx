import Link from "next/link";

export const SignUp = () => {
  return (
    <p
      className="
    text-center
    text-sm 
    font-medium
   
    text-textColor
    drop-shadow-lg
    "
    >
      DON'T HAVE AN ACCOUNT?
      <Link className="text-linkColor mx-1 " href="/login/signup">
        SIGN UP
      </Link>
    </p>
  );
};
