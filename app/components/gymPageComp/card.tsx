import Link from "next/link";
import React from "react";
const Card = (props: ILabelProviderText & ILabelColors) => {
  return (
    <Link
      className="mb-3 text-xs md:text-lg  font-sans  text-linkColor"
      href={props.htmlLink}
    >
      <div
        className={`expand mt-3   flex flex-col items-center h- ${props.bgColor} w-full rounded-lg 
    shadow-2xl`}
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-sm  md:text-lg  font-sans  text-grayCustom/[.80] ">
            {props.title}
          </h5>
          <p
            className={`mb-3 text-xs md:text-lg font-sans  ${props.descriptionColor} `}
          >
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
