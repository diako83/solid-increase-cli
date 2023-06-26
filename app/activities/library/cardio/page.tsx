"use client";
import Card from "@/app/components/gymPageComp/card";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { useEffect, useState } from "react";
import { ICardioWorkout, IResponseCardioList } from "@/app/interface/IRunning";
import { fetchList } from "@/app/api/hello/route";

const Cardio = () => {
  const [user, setData] = useState<ILoggedInUser>();
  const [response, setResponse] = useState<IResponseCardioList>();

  useEffect(() => {
    const get = async () => {
      if (user?.id != undefined) {
        const response: IResponseCardioList = await fetchList(
          `http://localhost:9090/api/v1/cardio/all/${user?.id}`,
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
    <div className="  bg-yellow/[.40]">
      <div className="  p-3 shadow-2xl ">
        <div
          className="
        h-screen     
      max-w-7xl
    bg-slate/100 
    rounded-3xl 
    mx-auto 
    overflow-hidden 
    shadow-2xl
   
    w-[2236]
    "
        >
          <BottomNavBar
            color={"bg-gradient-to-t from-yellow/[.10] to-yellow/[.30]"}
          />
          <div
            id="scrollableDiv"
            style={{ height: "auto", overflowY: "scroll" }}
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl"
          >
            <h1 className="text-2xl md:text-4xl font-semibold  text-yellow text-center mb-2  ">
              IF IT DOESN´T CHALLENGE YOU, IT WON'T CHANGE YOU
            </h1>

            {response && response.data
              ? response?.data.map((item: ICardioWorkout, index: number) => (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    htmlLink={`activities/library/cardio/${item.id}`}
                    titleColor={""}
                    descriptionColor={""}
                    bgColor={"bg-yellow/[.10]"}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cardio;
