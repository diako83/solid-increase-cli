import Image from "next/image";
import loginImg from "../../assets/img/kb.png";
import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";
import { link } from "fs";
import { WorkoutData } from "@/mockdata/workoutInfoMock";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { IKbWorkout } from "@/app/interface/IKettlebell";
import { fetchList } from "@/app/api/hello/route";

const Kettlebells = async () => {
  // const response: IKbWorkout[] = await fetchList(
  //   `http://localhost:9090/api/v2/kb`
  // );

  return (
    <div className="  bg-turquoise/[.70]">
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
          <div className="flex justify-center items-center rounded-2xl bg-turquoise/[.30]">
            <Image
              priority={true}
              className="rounded-2xl shadow-xl md:w-[50%] "
              src={loginImg}
              alt=""
            />
          </div>
          <BottomNavBar
            color={" bg-gradient-to-t from-turquoise/[.20] to-turquoise/[.0] "}
          />
          <div
            id="scrollableDiv"
            style={{ height: "100%", overflowY: "scroll" }}
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl"
          >
            <h1 className="text-2xl md:text-4xl font-semibold  text-turquoise  text-center mb-2  ">
              THE ONLY BAD WORKOUT IS THE ONE YOU DIDN’T DO
            </h1>
            {/* 
            {response.map((item: IKbWorkout, index: number) => (
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
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kettlebells;
