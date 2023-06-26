import Image from "next/image";
import loginImg from "../../assets/img/yogatwo.png";
import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";
import { link } from "fs";

import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { IYogaWorkout } from "@/app/interface/IYoga";
import { fetchList } from "@/app/api/hello/route";

const Yoga = async () => {
  const response: IYogaWorkout[] = await fetchList(
    `http://localhost:9090/api/v2/yoga`
  );

  return (
    <div className="  bg-turquoise/[.40]">
      <div className="   p-3 shadow-2xl ">
        <div
          className="
        h-screen     
      max-w-7xl
    bg-slate/100 
    rounded-3xl 
    mx-auto 
   
    shadow-2xl 
    w-[2236]
    "
        >
          <div className="flex justify-center items-center rounded-2xl">
            <Image
              priority={true}
              className="rounded-b-2xl shadow-xl md:w-[50%]"
              src={loginImg}
              alt=""
            />
          </div>
          <BottomNavBar
            color={" bg-gradient-to-t from-turquoise/[.20] to-turquoise/[.60] "}
          />
          <div
            id="scrollableDiv"
            style={{ height: "100%", overflowY: "scroll" }}
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl"
          >
            <h1 className="text-2xl md:text-4xl font-semibold  text-turquoise  text-center mb-2  ">
              CELEBRATING YOUR MIND, BODY & SPIRIT
            </h1>

            {response.map((item: IYogaWorkout, index: number) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                author={item.author}
                htmlLink={"item.htmlLink"}
                titleColor={""}
                descriptionColor={""}
                bgColor={"bg-turquoise/[.20]"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Yoga;
