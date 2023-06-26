import ImageGallery from "../components/activitiesPageComp/imageGallery";
import { ActivitiesTitle } from "../components/activitiesPageComp/title";
import BottomNavBar from "../components/navigation/bottomNavBar";

const Activities = () => {
  return (
    <main
      className="
      max-[855px]:fixed
      h-screen
      w-screen
      grid grid-cols-1 
      min-[1000px]:bg-slate/0
    bg-secondBg/[0.3]"
    >
      <div className="mt-0 min-[1000px]:text-center min-[1000px]:mt-4">
        <ActivitiesTitle />
      </div>
      <div className="  min-[1000px]:ml-[30%] min-[1600px]:ml-[35%] min-[2600px]:ml-[40%] ">
        <ImageGallery />
      </div>

      <div className=" self-end  text-center ">
        <BottomNavBar color={"bg-orange/[.15]"} />
      </div>
    </main>
  );
};

export default Activities;
