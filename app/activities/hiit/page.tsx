import Image from "next/image";
import loginImg from "../../assets/img/hiit2.png";
import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";
import { link } from "fs";
import { WorkoutData } from "@/mockdata/workoutInfoMock";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { fetchList } from "@/app/api/hello/route";
import { IHiitWorkout } from "@/app/interface/IHiit";

const Hiit = async () => {
  const response: IHiitWorkout[] = await fetchList(
    `http://localhost:9090/api/v2/hiit`
  );

  return (
    <div className="  ">
      <div
        className="
  
        p-3 shadow-2xl "
      >
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
          <div className="flex justify-center items-center rounded-2xl bg-yellow/[.10]">
            <Image
              priority={true}
              className="rounded-2xl shadow-xl md:w-[50%]"
              src={loginImg}
              alt=""
            />
          </div>
          <BottomNavBar
            color={"bg-gradient-to-t from-orange/[.10] to-orange/[.20]"}
          />
          <div
            style={{ height: "100%", overflowY: "scroll" }}
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl"
          >
            <h1 className="text-2xl md:text-4xl font-semibold  text-orange/[.70]  text-center mb-2  ">
              CHALLENGE YOUR LIMITS
            </h1>

            {response.map((item: IHiitWorkout, index: number) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                author={item.author}
                htmlLink={"item.htmlLink"}
                titleColor={""}
                descriptionColor={""}
                bgColor={"bg-orange/[.10]"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hiit;
