"use client";

import Link from "next/link";
import Card from "@/app/components/gymPageComp/card";

import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { IResponseYogaList, IYogaWorkout } from "@/app/interface/IYoga";
import { fetchList } from "@/app/api/hello/route";
import { useEffect, useState } from "react";

const Yoga = () => {
  const [user, setData] = useState<ILoggedInUser>();
  const [response, setResponse] = useState<IResponseYogaList>();

  useEffect(() => {
    const get = async () => {
      if (user?.id != undefined) {
        const response: IResponseYogaList = await fetchList(
          `http://localhost:9090/api/v1/yoga/all/${user?.id}`,
          user?.token ?? ""
        );
        setResponse(response);
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

            {response && response.data
              ? response?.data.map((item: IYogaWorkout, index: number) => (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    htmlLink={`activities/library/yoga/${item.id}`}
                    titleColor={""}
                    descriptionColor={""}
                    bgColor={
                      "bg-gradient-to-t from-turquoise/[.40] to-turquoise/[.0]"
                    }
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Yoga;
