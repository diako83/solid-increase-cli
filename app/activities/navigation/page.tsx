"use client";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import NavImageGallery from "@/app/components/navigationComp/navImageGallery";
import { NavTitle } from "@/app/components/navigationComp/navTitle";
import Options from "@/app/components/navigationComp/options";
import { useState } from "react";

const Navigation = () => {
  const [newWork, setNewWork] = useState<boolean>(false);
  const [libraray, setLibraray] = useState<boolean>(false);

  const showNewWorkout = () => {
    newWork ? setNewWork(false) : setNewWork(true);
  };
  const showLibrary = () => {
    libraray ? setLibraray(false) : setLibraray(true);
  };

  return (
    <div
      className="
      max-[855px]:fixed
      h-screen
      w-screen
      grid grid-cols-1 
      min-[1000px]:bg-slate/0
    bg-secondBg/[0.3]"
    >
      <div className="mt-20 min-[1000px]:text-center min-[1000px]:mt-4">
        <NavTitle />
      </div>
      <div
        id="scrollableDiv"
        style={{ height: "95%", overflow: "auto" }}
        className="  min-[1000px]:ml-[30%] min-[1600px]:ml-[35%] min-[2600px]:ml-[40%] h-full"
      >
        {libraray || newWork ? (
          ""
        ) : (
          <Options
            parentFunctionOne={showNewWorkout}
            parentFunctionTwo={showLibrary}
          />
        )}
        {!libraray ? (
          ""
        ) : (
          <NavImageGallery
            hiit={"/activities/library/hiit"}
            cardio={"/activities/library/cardio"}
            gym={"/activities/library/gym"}
            yoga={"/activities/library/yoga"}
            kb={"/activities/library/kb"}
          />
        )}
        {!newWork ? (
          ""
        ) : (
          <NavImageGallery
            hiit={"/activities/workout/hiit"}
            cardio={"/activities/workout/cardio"}
            gym={"/activities/workout/gym"}
            yoga={"/activities/workout/yoga"}
            kb={"/activities/workout/kettlebells"}
          />
        )}
      </div>

      <div className=" self-end  text-center ">
        <BottomNavBar color={"bg-orange/[.15]"} />
      </div>
    </div>
  );
};

export default Navigation;
