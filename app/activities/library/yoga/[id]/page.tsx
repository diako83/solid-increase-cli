"use client";
import { deleteSingle, fetchSingle } from "@/app/api/hello/route";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { provider } from "@/app/context/provider";
import {
  IKbMovement,
  IKbMovementSet,
  IResponseKb,
} from "@/app/interface/IKettlebell";
import { ICardioMovement } from "@/app/interface/IRunning";
import { IYogaMovement, IYogaMovementSet } from "@/app/interface/IYoga";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setData] = useState<ILoggedInUser>(provider());
  const [response, setResponse] = useState<IResponseKb>();

  const id = pathname.substring(pathname.lastIndexOf("yoga/") + 5);

  useEffect(() => {
    const get = async () => {
      console.log(id);
      if (user?.id != undefined) {
        const response: IResponseKb = await fetchSingle(
          `http://localhost:9090/api/v1/yoga/single/${id}`,
          user.token ?? ""
        );
        setResponse(response);
        console.log("single", response);
      }
    };
    get();
  }, [user]);

  console.log(response);
  useEffect(() => {
    const stored = sessionStorage.getItem("user");
    const user: ILoggedInUser = stored ? JSON.parse(stored) : {};
    setData(user);

    console.log("responce ", response?.data.movementSets);
  }, []);

  return (
    <div className=" bg-turquoise/[.90]">
      <div className="  p-3 shadow-2xl  ">
        <div
          className="h-screen max-w-7xl bg-slate/100 
               rounded-3xl mx-auto 
               shadow-2xl  "
        >
          <BottomNavBar
            color={"bg-gradient-to-t from-turquoise/[.40] to-turquoise/[.0]"}
          />
          <div
            style={{ height: "100%", overflowY: "scroll" }}
            id="scrollableDiv"
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl "
          >
            <h1 className="text-2xl md:text-4xl font-semibold text-turquoise text-center mb-2  ">
              {/* {response?.data.title != undefined ? response?.data.title : ""} */}
            </h1>
            <p className="text-xl md:text-xl font-semibold text-turquoise text-center mb-2  ">
              {/* {response?.data.description} */}
            </p>

            {response?.data.movementSets
              ? response?.data.movementSets.map(
                  (item: IYogaMovementSet, index: number) => {
                    console.log("set", item.movements);
                    return (
                      <div className="my-4" key={index}>
                        <p className="text-lg font-bold  text-turquoise ">
                          Section: {index + 1}
                        </p>
                        {item.movements.map((m: IYogaMovement, ind: number) => {
                          return (
                            <div
                              key={ind}
                              className="relative md:h-10 md:flex flex-wrap justify-around 
                                 text-turquoise/[0.90]  border-turquoise/[0.40]  
                      p-2 rounded shadow
                        border-solid border-2
                         focus:outline-none basis-1/4 mb-2 mr-2"
                            >
                              <p className="text-base">{m.name}</p>
                              <p className="text-sm">
                                Sets: {m.sets}, Reps:{m.reps}
                              </p>
                              <p className="text-sm">
                                Time: h:{m.timer.hours},m:{m.timer.minutes},s:
                                {m.timer.seconds}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                )
              : ""}
            <button
              onClick={(e) =>
                deleteSingle(
                  `http://localhost:9090/api/v1/yoga/single/delete/${response?.data.id}`,
                  user.token
                ).then(() => router.push("/activities/library/yoga"))
              }
              className="expand  text-turquoise/[0.90]  border-turquoise/[0.40] 
              p-2 rounded shadow
                h-10 border-solid border-2
                 focus:outline-none basis-1/4 mb-2 mr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
