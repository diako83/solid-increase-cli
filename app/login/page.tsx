"use client";
import Image from "next/image";
import loginImg from "../assets/img/alonso-reyes-0HlI76m4jxU-unsplash.png";
import Link from "next/link";
import { useState } from "react";
import { validateEmailFormat } from "../functions/validations/validateinput";
import { useRouter } from "next/navigation";
import { loginUser } from "../api/hello/route";

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: { preventDefault: () => void } | undefined) => {
    validateEmailFormat(email);
    const res = loginUser("http://localhost:9091/auth/token", email, password);

    res.then((a) => {
      if (a == 403) alert("Login failed try again");
    });

    res.then((i: ILoggedInUser) => {
      if (i.loggedIn == true) {
        sessionStorage.setItem("user", JSON.stringify(i));

        router.push("/activities");
      }
    });

    if (event) {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-purpleCustom/100 pb-[100%]">
      <div className="common-form-val-1 ">
        <div className="">
          <div className="common-form-val-3">
            <div className="">
              <Image
                priority={true}
                className="rounded-b-xl shadow-xl"
                src={loginImg}
                alt=""
              />
            </div>
            <div className="common-form-val-4 rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-textColor">
                Welcome back!
              </h1>
              <form
                className="mt-12"
                action=""
                method="POST"
                defaultValue="Bob"
              >
                <div className="relative ">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="text"
                    className="rounded expand text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none "
                    placeholder=" Email"
                  />
                </div>
                <div className="mt-10 relative expand">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    className="rounded text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-x-textColor"
                    placeholder=" Password"
                  />
                </div>

                <button
                  onClick={(e) => onSubmit(e)}
                  className="mt-20 px-4 py-2 rounded bg-slate expand text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-text-Colorfocus:ring-opacity-80 cursor-pointer text-textColor"
                >
                  SIGN IN
                </button>
              </form>
              <Link
                href="/login/lostpassword"
                className="expand mt-4 block text-sm text-center font-medium text-textColor hover:text-linkColor "
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
