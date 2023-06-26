import Image from "next/image";
import hiitImg from "../../assets/img/pexels-maksim-goncharenok-4775205.jpg";
import runningImg from "../../assets/img/cardio2.png";
import yogaImg from "../../assets/img/yoga2.png";
import gymImg from "../../assets/img/sushil-ghimire-5UbIqV58CW8-unsplash.jpg";
import gymKb from "../../assets/img/pexcels-by-cezar-perez.png";

interface ILinkes {
  hiit: string;
  cardio: string;
  gym: string;
  yoga: string;
  kb: string;
}

const NavImageGallery = (props: ILinkes) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 max-w-xl ">
      <a
        href={props.hiit}
        className="col-span-2 aspect-w-5 aspect-h-2
         bg-orange/[.40]   
         expand 
      "
      >
        <Image
          priority
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

      <a
        href={props.cardio}
        className="aspect-w-2 aspect-h-1 bg-yellow/[.40] expand  col-span-2"
      >
        <Image
          priority
          alt=""
          src={runningImg}
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
        />
        <h1 className="h1-in-img">CARDIO</h1>
      </a>
      <a
        href={props.gym}
        className=" aspect-w-2 aspect-h-1 col-span-2  bg-blue/[.40] expand "
      >
        <Image
          alt=""
          src={gymImg}
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
        />
        <h1 className="h1-in-img">GYM</h1>
      </a>

      <a
        href={props.yoga}
        className="  col-span-2 aspect-w-2 aspect-h-1  bg-turquoise/[.40]  expand "
      >
        <Image
          alt=""
          className="object-cover shadow-lg rounded-md  mix-blend-overlay"
          src={yogaImg}
        />
        <h1 className="h1-in-img  top-8">YOGA</h1>
      </a>
      <a
        href={props.kb}
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
export default NavImageGallery;
