import Image from "next/image";
import hiitImg from "../../assets/img/hiit.webp";
import runningImg from "../../assets/img/runn.jpeg";
import yogaImg from "../../assets/img/yoga.jpeg";
import gymImg from "../../assets/img/gym.webp";
import gymKb from "../../assets/img/pexels-geancarlo-peruzzolo-6796970.jpg";

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 max-w-xl ">
      <a
        href="/activities/workout/hiit"
        className="col-span-2 aspect-w-5 aspect-h-2
         bg-orange/[.15]   
         expand 
      "
      >
        <Image
          alt=""
          src={hiitImg}
          className="
          object-cover 
          shadow-lg 
          rounded-md 
          mix-blend-overlay
          "
        />
        <h1 className="h1-in-img left-1/3 top-">HIIT</h1>
      </a>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <a
          href="/activities/workout/cardio"
          className="aspect-w-2 aspect-h-1 bg-yellow/[.40] expand "
        >
          <Image
            alt=""
            src={runningImg}
            className="object-cover shadow-lg rounded-md  mix-blend-overlay"
          />
          <h1 className="h1-in-img">CARDIO</h1>
        </a>
        <a
          href="/activities/workout/gym"
          className=" aspect-w-2 aspect-h-1   bg-blue/[.40] expand "
        >
          <Image
            alt=""
            src={gymImg}
            className="object-cover shadow-lg rounded-md  mix-blend-overlay"
          />
          <h1 className="h1-in-img">GYM</h1>
        </a>
      </div>

      <a
        href="/activities/workout/yoga"
        className="  aspect-w-2 aspect-h-3  bg-turquoise/[.40]  expand "
      >
        <Image
          alt=""
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
          src={yogaImg}
        />
        <h1 className="h1-in-img  top-8">YOGA</h1>
      </a>
      <a
        href="/activities/workout/kettlebells"
        className="col-span-2 aspect-w-5 aspect-h-2
         bg-green/[.15]   
         expand 
      "
      >
        <Image
          alt=""
          src={gymKb}
          className="
          object-cover 
          shadow-lg 
          rounded-md 
          mix-blend-overlay
          "
        />
        <span>
          <h1 className="h1-in-img  left-1/3 mt-28 ml-44">KETTLEBELLS</h1>
        </span>
      </a>
    </div>
  );
};
export default ImageGallery;
