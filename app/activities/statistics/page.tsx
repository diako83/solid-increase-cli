"use client";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import NavImageGallery from "@/app/components/navigationComp/navImageGallery";
import { NavTitle } from "@/app/components/navigationComp/navTitle";
import StatsNavImageGallery from "@/app/components/navigationComp/statsNavImageGallery copy";
import Barchart from "@/app/components/statisticsComp/Barchart";
import Linechart from "@/app/components/statisticsComp/LineChart";
import Piechart from "@/app/components/statisticsComp/PieChart";
import FilledLineChart from "@/app/components/statisticsComp/filledLineChart";
import { StatsTitle } from "@/app/components/statisticsComp/statsTitle";
import { UserData } from "@/mockdata/tesChartData";
import { useState } from "react";

const data = [
  [5, 10, 8, 15, 60, 10, 15, 5, 10, 8, 15, 20, 10, 15],
  [110, 110.25, 112, 130, 130, 140, 150, 155, 160, 170, 172.5, 150, 173.5, 180],
  [5, 15, 8, 15, 20, 10, 5, 5, 10, 8, 15, 20, 10, 15],
  [5, 10, 5, 15, 20, 20, 15, 5, 10, 8, 15, 20, 10, 15],
];
const Stats = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLoss),
        backgroundColor: [
          "#7B1FA2",
          "#EF6C00",
          "#1DE9B6",
          "#4A148C",
          "#C62828",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userDataLine, setUserDataLine] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLoss),
        backgroundColor: [
          "#7B1FA2",
          "#EF6C00",
          "#1DE9B6",
          "#4A148C",
          "#C62828",
        ],
        borderColor: "#1DE9B6",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <div className="w-2/3">
        <Barchart chartData={userData} />
      </div>
      <div className="w-2/3">
        <Linechart chartData={userDataLine} />
      </div>
      <div className="w-2/3">
        <Piechart chartData={userDataLine} />
      </div>

      {/* <FilledLineChart data={data} />; */}
      {/*     
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
          <StatsTitle />
        </div>
        <div
          id="scrollableDiv"
          style={{ height: "95%", overflow: "auto" }}
          className="  min-[1000px]:ml-[30%] min-[1600px]:ml-[35%] min-[2600px]:ml-[40%] h-full"
        >
          <StatsNavImageGallery
            hiit={"/activities/"}
            cardio={"/activities/"}
            gym={"/activities/"}
            yoga={"/activities/"}
            kb={"/activities/"}
          />
        </div>

        <div className=" self-end  text-center ">
          <BottomNavBar color={"bg-orange/[.15]"} />
        </div>
      </div> */}
    </div>
  );
};

export default Stats;
