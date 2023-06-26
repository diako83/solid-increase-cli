"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";
import { link } from "fs";
import { WorkoutData } from "@/mockdata/workoutInfoMock";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { fetchList } from "@/app/api/hello/route";
import { useGlobalContext } from "@/app/context/store";
import { use, useEffect, useState } from "react";
import { provider } from "@/app/context/provider";

const Gym = () => {
  const [user, setData] = useState<ILoggedInUser>();
  const [response, setResponse] = useState<IResponseGymList>();

  useEffect(() => {
    const get = async () => {
      if (user?.id != undefined) {
        const response: IResponseGymList = await fetchList(
          `http://localhost:9090/api/v1/gym/all/${user?.id}`,
          user?.token ?? ""
        );
        setResponse(response);
        console.log(response);
      }
    };
    if (user) {
      get();
    }
  }, [user]);

  useEffect(() => {
    const stored = sessionStorage.getItem("user");
    const user: ILoggedInUser = stored ? JSON.parse(stored) : {};
    setData(user);
  }, []);
  return (
    <div className=" gradient-background-purple ">
      <div className="  p-3 shadow-2xl  ">
        <div
          className="h-screen max-w-7xl bg-slate/100 
                   rounded-3xl mx-auto 
                   shadow-2xl  "
        >
          <BottomNavBar color={"bg-purpleCustomSecond/[.10]"} />
          <div
            style={{ height: "100%", overflowY: "scroll" }}
            id="scrollableDiv"
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl "
          >
            <h1 className="text-2xl md:text-4xl font-semibold text-textColor/[.80] text-center mb-2  ">
              BECOME STRONGER
            </h1>
            {response && response.data
              ? response.data.map((item: IGymWorkout, index: number) => (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    htmlLink={`activities/library/gym/${item.id}`}
                    titleColor={""}
                    descriptionColor={"text-textColor/[.80]"}
                    bgColor={"bg-slate"}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gym;
