import Image from "next/image";
import loginImg from "../../assets/img/pexels-binyamin-mellish-116077.jpg";
import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";
import { link } from "fs";
import { WorkoutData } from "@/mockdata/workoutInfoMock";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { fetchList } from "@/app/api/hello/route";

const Gym = async () => {
  const response: IGymWorkout[] = await fetchList(
    `http://localhost:9090/api/v2/gym`
  );
  return (
    <div className=" gradient-background-purple ">
      <div className="  p-3 shadow-2xl  ">
        <div
          className="h-screen max-w-7xl bg-slate/100 
                   rounded-3xl mx-auto 
                   shadow-2xl  "
        >
          <div className="flex justify-center items-center rounded-2xl  bg-purpleCustom">
            <Image
              priority={true}
              className="rounded-2xl shadow-xl md:w-[50%] "
              src={loginImg}
              alt=""
            />
          </div>
          <BottomNavBar color={"bg-purpleCustomSecond/[.10]"} />
          <div
            style={{ height: "100%", overflowY: "scroll" }}
            id="scrollableDiv"
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl "
          >
            <h1 className="text-2xl md:text-4xl font-semibold text-textColor/[.80] text-center mb-2  ">
              BECOME STRONGER
            </h1>

            {response.map((item: IGymWorkout, index: number) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                author={item.author}
                htmlLink={"item.htmlLink"}
                titleColor={""}
                descriptionColor={"text-textColor/[.80]"}
                bgColor={"bg-slate"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gym;
