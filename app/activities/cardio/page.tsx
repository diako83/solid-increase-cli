import Image from "next/image";
import loginImg from "../../assets/img/running2.png";
import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { ICardioWorkout } from "@/app/interface/IRunning";
import { fetchList } from "@/app/api/hello/route";

const Cardio = async () => {
  const response: ICardioWorkout[] = await fetchList(
    `http://localhost:9090/api/v2/cardio`
  );

  return (
    <div className="  bg-yellow/[.40]">
      <div className="  p-3 shadow-2xl ">
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
              className="rounded-2xl shadow-xl md:w-[50%] "
              src={loginImg}
              alt=""
            />
          </div>
          <BottomNavBar
            color={"bg-gradient-to-t from-yellow/[.10] to-yellow/[.30]"}
          />
          <div
            id="scrollableDiv"
            style={{ height: "100%", overflowY: "scroll" }}
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl
            max-h-[60%] overflow-y-scroll
            "
          >
            <h1 className="text-2xl md:text-4xl font-semibold  text-yellow text-center mb-2  ">
              IF IT DOESN´T CHALLENGE YOU, IT WON'T CHANGE YOU
            </h1>

            {response.map((item: ICardioWorkout, index: number) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                author={item.author}
                htmlLink={"item.htmlLink"}
                titleColor={""}
                descriptionColor={""}
                bgColor={"bg-yellow/[.10]"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardio;
