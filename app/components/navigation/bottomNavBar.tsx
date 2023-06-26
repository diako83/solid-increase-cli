import Image from "next/image";
import mainImg from "../../assets/icons/001-menu.png";
import weightsImg from "../../assets/icons/001-weights.png";
import statisticsImg from "../../assets/icons/002-inferential-statistics.png";
import profileImg from "../../assets/icons/003-resume.png";
const BottomNavBar = (prop: INavbarColor) => (
  <div
    className={`flex flex-row justify-around   ${prop.color}  p-2 rounded-3xl min-[1000px]:static  `}
  >
    <a href="/activities" className="basis-1/4  expand min-[911px]:ml-20 ">
      <Image className="nav-img ml-1" src={mainImg} alt="" />
      <p className="nav-text ">MAIN</p>
    </a>
    <a href="/activities/navigation" className="basis-1/4 expand  ">
      <Image className="nav-img " src={weightsImg} alt="" />
      <p className="nav-text">WORKOUTS</p>
    </a>

    {/* <a href="/activities/statistics" className="basis-1/4  expand ">
      <Image className="nav-img" src={statisticsImg} alt="" />
      <p className="nav-text">STATISTICS</p>
    </a> */}
    <a href="" className="basis-1/4 expand ">
      <Image className="nav-img" src={profileImg} alt="" />
      <p className="nav-text">PROFILE</p>
    </a>
  </div>
);

export default BottomNavBar;
