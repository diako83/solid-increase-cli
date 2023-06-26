import { Inter } from "next/font/google";
import CenterImage from "./components/mainPageComp/centerImage";
import { Title } from "./components/mainPageComp/title";
import { Login } from "./components/mainPageComp/login";
import { SignUp } from "./components/mainPageComp/signUp";
import { Footer } from "./components/mainPageComp/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="
      bg-gradient-to-t
      h-screen
      from-purpleCustom
      to-purpleCustomSecond 
      grid grid-cols-1 
      "
    >
      <div className="mt-20 text-center">
        <CenterImage />
      </div>
      <div className="mt-4 text-center">
        <Title />
      </div>
      <div className="mt-4 self-end  text-center">
        <Login />
      </div>
      <div className="mt-4 text-center ">
        <SignUp />
      </div>
      <div className=" ">
        <Footer />
      </div>
    </main>
  );
}
