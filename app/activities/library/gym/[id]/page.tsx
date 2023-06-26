"use client";
import { deleteSingle, fetchSingle } from "@/app/api/hello/route";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { provider } from "@/app/context/provider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setData] = useState<ILoggedInUser>(provider());
  const [response, setResponse] = useState<IResponseGym>();

  const id = pathname.substring(pathname.lastIndexOf("gym/") + 4);
  console.log(user);
  useEffect(() => {
    const get = async () => {
      console.log("get kallad");
      if (user?.id != undefined) {
        const response: IResponseGym = await fetchSingle(
          `http://localhost:9090/api/v1/gym/single/${id}`,
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
              {response?.data.title}
            </h1>
            <p className="text-xl md:text-xl font-semibold text-textColor/[.80] text-center mb-2  ">
              {response?.data.description}
            </p>

            {response?.data.movementSets
              ? response?.data.movementSets.map(
                  (item: IGymMovementSet, index: number) => {
                    console.log("set", item.movements);
                    return (
                      <div className="my-4" key={index}>
                        <p className="text-lg font-bold text-textColor/[0.50]">
                          Section: {index + 1}
                        </p>
                        {item.movements.map((m: IGymMovement, ind: number) => {
                          return (
                            <div
                              key={ind}
                              className="relative md:h-10 md:flex flex-wrap justify-around  text-textColor/[0.50] border-purpleCustom/[0.50]
                      p-2 rounded shadow
                        border-solid border-2
                         focus:outline-none basis-1/4 mb-2 mr-2"
                            >
                              <p className="text-base">{m.name}</p>
                              <p className="text-sm">Reps: {m.reps}</p>
                              <p className="text-sm">Sets: {m.sets}</p>
                              <p className="text-sm">Weight: {m.weight}</p>
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
                  `http://localhost:9090/api/v1/gym/single/delete/${response?.data.id}`,
                  user.token
                ).then(() => router.push("/activities/library/gym"))
              }
              className="expand  text-textColor/[0.50] border-purpleCustom/[0.50] 
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
