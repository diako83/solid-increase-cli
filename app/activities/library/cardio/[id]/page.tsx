"use client";
import { deleteSingle, fetchSingle } from "@/app/api/hello/route";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { provider } from "@/app/context/provider";
import {
  ICardioMovement,
  ICardioMovementSet,
  IResponseCardio,
} from "@/app/interface/IRunning";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setData] = useState<ILoggedInUser>(provider());
  const [response, setResponse] = useState<IResponseCardio>();

  const id = pathname.substring(pathname.lastIndexOf("cardio/") + 7);

  useEffect(() => {
    const get = async () => {
      console.log("get kallad");
      if (user?.id != undefined) {
        const response: IResponseCardio = await fetchSingle(
          `http://localhost:9090/api/v1/cardio/single/${id}`,
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
    <div className="bg-yellow/[.40]">
      <div className="  p-3 shadow-2xl  ">
        <div
          className="h-screen max-w-7xl bg-slate/100 
               rounded-3xl mx-auto 
               shadow-2xl  "
        >
          <BottomNavBar
            color={"bg-gradient-to-t from-yellow/[.10] to-yellow/[.30]"}
          />
          <div
            style={{ height: "100%", overflowY: "scroll" }}
            id="scrollableDiv"
            className="scroll-smooth top-1/4 bg-slate common-form-val-4 rounded-t-3xl  rounded-tr-4xl "
          >
            <h1 className="text-2xl md:text-4xl font-semibold text-yellow text-center mb-2  ">
              {/* {response?.data.title != undefined ? response?.data.title : ""} */}
            </h1>
            <p className="text-xl md:text-xl font-semibold text-yellow text-center mb-2  ">
              {/* {response?.data.description} */}
            </p>

            {response?.data.movementSets
              ? response?.data.movementSets.map(
                  (item: ICardioMovementSet, index: number) => {
                    console.log("set", item.movements);
                    return (
                      <div className="my-4" key={index}>
                        <p className="text-lg font-bold  text-yellow/[0.70] ">
                          Section: {index + 1}
                        </p>
                        {item.movements.map(
                          (m: ICardioMovement, ind: number) => {
                            return (
                              <div
                                key={ind}
                                className="relative md:h-10 md:flex flex-wrap justify-around  text-yellow/[0.80]  border-yellow/[0.40] 
                      p-2 rounded shadow
                        border-solid border-2
                         focus:outline-none basis-1/4 mb-2 mr-2"
                              >
                                <p className="text-base">{m.name}</p>
                                <p className="text-sm">
                                  Distance: km: {m.distance.km}, m:{" "}
                                  {m.distance.meter}
                                </p>
                                <p className="text-sm">
                                  Time: h:{m.timer.hours},m:{m.timer.minutes},s:
                                  {m.timer.seconds}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    );
                  }
                )
              : ""}
            <button
              onClick={(e) =>
                deleteSingle(
                  `http://localhost:9090/api/v1/cardio/single/delete/${response?.data.id}`,
                  user.token
                ).then(() => router.push("/activities/library/cardio"))
              }
              className="expand  text-yellow/[0.60]  border-yellow/[0.40] 
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
