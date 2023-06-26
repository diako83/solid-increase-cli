"use client";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";

const DisplayGym = (props: {
  workout: IGymWorkout;
  postData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { postData } = props;

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
              {props.workout.title}
            </h1>
            <p className="text-xl md:text-xl font-semibold text-textColor/[.80] text-center mb-2  ">
              {props.workout.description}
            </p>
            <button
              onClick={(e) => postData(e)}
              className="expand  text-textColor/[0.50] border-purpleCustom/[0.50]
                  p-2 rounded shadow
                    h-10 border-solid border-2
                     focus:outline-none basis-1/4 mb-2 mr-2"
            >
              SAVE WORKOUT
            </button>
            <button
              onClick={() => {
                props.setDisplay(false);
              }}
              className="expand  text-textColor/[0.50] border-purpleCustom/[0.50]
                  p-2 rounded shadow
                    h-10 border-solid border-2
                     focus:outline-none basis-1/4 mb-2 mr-2"
            >
              EDIT WORKOUT
            </button>
            {props.workout.movementSets.map(
              (item: IGymMovementSet, index: number) => {
                console.log(item.movements);
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayGym;
