"use client";
import Image from "next/image";
import loginImg from "../../assets/img/pexels-ekaterina-bolovtsova-7113344.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  validateEmailFormat,
  validatePasswordFormat,
} from "@/app/functions/validations/validateinput";
import { forgotPassword, updatePassword } from "@/app/api/hello/route";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const onSubmit = () => {
    validateEmailFormat(email);
    validatePasswordFormat(password, confirmPassword);
  };

  const sendCode = (event: { preventDefault: () => void } | undefined) => {
    let validEmail = validateEmailFormat(email);
    // let validPassword = validatePasswordFormat(password, confirmPassword);

    if (validEmail) {
      const response = forgotPassword(email);

      response.then((e) => {
        console.log(e.code);

        if (e.code == "Code sent ") {
          setShow(true);
        } else if (e.code == "email dose not  exists")
          alert("email dose not  exists");
      });
    }

    if (event) {
      event.preventDefault();
    }
  };

  const sendUpdate = (event: { preventDefault: () => void } | undefined) => {
    let validEmail = validateEmailFormat(email);
    let validPassword = validatePasswordFormat(password, confirmPassword);

    if (validEmail && validPassword) {
      const response = updatePassword(email, password, code);

      response.then((e) => {
        console.log(e.response);

        if (e.response == "Password updated ") {
          router.push("/login");
        } else if (
          e.response == "incorrect code " ||
          e.response == " email dose not  exists"
        )
          alert(e.code);
      });
    }

    if (event) {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-purpleCustom/100 pb-[100%]">
      <div className="common-form-val-1 ">
        <div className="">
          <div className="common-form-val-3">
            <div className="relative h-48 bg-purpleCustom rounded-bl-4xl ">
              <Image
                priority={true}
                className="rounded-b-xl shadow-xl  "
                src={loginImg}
                alt=""
              />
            </div>
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <form
                defaultValue="Bob"
                className="mt-12"
                action=""
                method="POST"
              >
                {show ? null : (
                  <div className="relative ">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="text"
                      className="rounded expand text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none "
                      placeholder=" Email"
                    />
                    <button
                      onClick={(e) => sendCode(e)}
                      className="mt-20 px-4 py-2 rounded bg-slate expand text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-text-Colorfocus:ring-opacity-80 cursor-pointer text-textColor"
                    >
                      SEND CODE
                    </button>
                  </div>
                )}
                {!show ? null : (
                  <div>
                    <div className="mt-10 relative expand">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        name="password"
                        className="rounded text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-x-textColor"
                        placeholder=" Password"
                      />
                    </div>
                    <div className="mt-10 relative expand">
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="password"
                        type="password"
                        name="password"
                        className="rounded text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-x-textColor"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="mt-10 relative expand">
                      <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="code"
                        name="one time code"
                        className="rounded text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-x-textColor"
                        placeholder=" enter code"
                      />
                    </div>

                    <button
                      onClick={(e) => sendUpdate(e)}
                      className="mt-20 px-4 py-2 rounded bg-slate expand text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-text-Colorfocus:ring-opacity-80 cursor-pointer text-textColor"
                    >
                      UPDATE PASSWORD
                    </button>
                  </div>
                )}
                <p className="expand mt-4 block text-sm text-center font-medium text-textColor hover:text-linkColor ">
                  “Learn to enjoy the way as much as you would enjoy when you
                  reach the destination.” – Sakshi Chetana.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
