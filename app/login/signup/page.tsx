"use client";
import Image from "next/image";
import loginImg from "../../assets/img/hayley-kim-design-eot-ka5dM7Q-unsplash.jpg";
import { useEffect, useState } from "react";
import {
  validateEmailFormat,
  validatePasswordFormat,
} from "@/app/functions/validations/validateinput";
import { registerUser } from "@/app/api/hello/route";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [user, setUser] = useState<IRegister>({
    name: "",
    password: "",
  });

  function goToNextPage() {
    router.push("/login");
  }
  useEffect(() => {
    setUser({ name: email, password });
  }, [email, password]);

  const onSubmit = (event: { preventDefault: () => void } | undefined) => {
    let validEmail = validateEmailFormat(email);
    let validPassword = validatePasswordFormat(password, confirmPassword);

    if (validEmail && validPassword) {
      const responce = registerUser(
        "http://localhost:9091/auth/register",
        user
      );

      responce.then((e) => {
        if (e == "email already exists") {
          alert("email already exists");
        } else if (e == "user added to the system") {
          goToNextPage();
        }
      });
    }
    if (event) {
      event.preventDefault();
    }
  };

  return (
    <div className="">
      <div className="common-form-val-1 min-h-screen">
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
                </div>

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
                <div className="mt-4 relative expand">
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="passwordConfirm"
                    type="password"
                    name="passwordConfirm"
                    className="rounded text-textColor peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-x-textColor"
                    placeholder="Confirm Password"
                  />
                </div>

                <button
                  onClick={(e) => onSubmit(e)}
                  className="mt-14 px-4 py-2 rounded bg-slate expand text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-text-Colorfocus:ring-opacity-80 cursor-pointer text-textColor"
                >
                  SIGN UP
                </button>
                <p className="expand mt-4 block text-sm text-center font-medium text-textColor hover:text-linkColor ">
                  WELCOME
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
