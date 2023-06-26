"use client";
import Card from "@/app/components/gymPageComp/card";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { fetchList } from "@/app/api/hello/route";
import { IHiitWorkout, IResponseHiitList } from "@/app/interface/IHiit";
import { useEffect, useState } from "react";

const Hiit = () => {
  const [user, setData] = useState<ILoggedInUser>();
  const [response, setResponse] = useState<IResponseHiitList>();

  useEffect(() => {
    const get = async () => {
      if (user?.id != undefined) {
        const response: IResponseHiitList = await fetchList(
          `http://localhost:9090/api/v1/hiit/all/${user?.id}`,
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

            {response && response.data
              ? response?.data.map((item: IHiitWorkout, index: number) => (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    htmlLink={`activities/library/hiit/${item.id}`}
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
export default Hiit;
