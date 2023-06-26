"use client";
import Image from "next/image";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { useEffect, useState } from "react";
import { movement_categorys } from "@/mockdata/gymworkoutdata";

import React from "react";
import delImage from "../../../assets/icons/x-button.png";

import { yogaPoses } from "@/mockdata/yogaposeMockData";
import { ITimer } from "@/app/interface/ITimer";
import YogaTable from "@/app/components/yogaComponenet/yogaTable";
import {
  IResponseYoga,
  IYogaMovement,
  IYogaMovementSet,
  IYogaWorkout,
} from "@/app/interface/IYoga";
import YogaTableSet from "@/app/components/yogaComponenet/yogaTableSet";
import { useGlobalContext } from "@/app/context/store";
import { postYogaWorkout } from "@/app/api/hello/route";
import { useRouter } from "next/navigation";
import DisplayYoga from "@/app/components/displayWorkoutComp/displayYoga";
const { v4: uuidv4 } = require("uuid");

function generateUUID() {
  return uuidv4();
}

const WorkoutYoga = () => {
  const router = useRouter();
  const { userId, data } = useGlobalContext();
  const [display, setDisplay] = useState<boolean>(false);

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [open, setOpen] = useState<number>(99);
  const [uuid, setUuid] = useState(uuidv4());
  const [selectedTime, setSelectedTime] = useState<ITimer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [exercise, setExercise] = useState<IYogaMovement>({
    id: uuidv4(),
    name: "",
    sets: 0,
    reps: 0,
    file: null,
    timer: selectedTime,
  });

  const [set, setSet] = useState<IYogaMovementSet>({
    id: "",
    movements: [],
  });

  const [workout, setWorkout] = useState<IYogaWorkout>({
    id: "",
    title: "",
    description: "",
    movementSets: [],
    creation_date: "", //or "Date" type
    author: "",
    share: false,
  });

  useEffect(() => {
    console.log(workout);
  }, [workout]);

  const addExerciseToSet = (e: any) => {
    handleClick();
    setSet((prevSet) => ({
      ...prevSet,
      movements: [...prevSet.movements, exercise],
    }));

    setExercise({
      id: uuid,
      name: "",
      sets: 0,
      reps: 0,
      timer: selectedTime,
      file: null,
    });

    e.preventDefault();
  };
  const addExerciseToWorkout = (e: any) => {
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      movementSets: [...prevWorkout.movementSets, set],
    }));
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      userId: data.id ?? "",
      author: data.userName,
    }));
    setSet({
      id: uuid,
      movements: [],
    });

    e.preventDefault();
  };

  const removeExerciseFromSet = (exerciseId: string) => {
    setSet((prevSet) => ({
      ...prevSet,
      movements: prevSet.movements.filter(
        (movement) => movement.id !== exerciseId
      ),
    }));
  };
  const removeSetFromMovementSets = (setId: string) => {
    setWorkout((prevState) => ({
      ...prevState,
      movementSets: prevState.movementSets.filter((set) => set.id !== setId),
    }));
  };

  function handleClick() {
    const newUUID = generateUUID();
    setUuid(newUUID);
  }
  const postData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response: IResponseYoga = await postYogaWorkout(
        `http://localhost:9090/api/v1/yoga`,
        data.token ?? "",
        workout
      );

      if (response.status == 200) {
        router.push("/activities/library/yoga");
      }
      // Handle the response or perform any necessary actions
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };
  return (
    <div className="  bg-turquoise/[.70] rounded-3xl ">
      {display ? (
        <DisplayYoga
          workout={workout}
          postData={postData}
          setDisplay={setDisplay}
        />
      ) : (
        <div className="  p-3 shadow-2xl  ">
          <div
            className="h-screen max-w-7xl bg-slate/100
                   rounded-3xl mx-auto 
                   shadow-2xl  "
          >
            <BottomNavBar
              color={
                " bg-gradient-to-t from-turquoise/[.20] to-turquoise/[.0] "
              }
            />
            <h1 className="h1-create-workout text-turquoise  ">
              CREATE YOGA WORKOUT
            </h1>

            <form
              defaultValue="Bob"
              className="mt-1 mx-2"
              action=""
              method="POST"
            >
              <div className="lg:flex  text-turquoise/[.70] lg:justify-evenly">
                <div className="relative ml-2 mb-2 ">
                  <input
                    value={workout.title}
                    onChange={(e) =>
                      setWorkout((prevExercise) => ({
                        ...prevExercise,
                        title: String(e.target.value),
                      }))
                    }
                    id="Workout title"
                    name="Workout title"
                    type="text"
                    className=" input-title expand placeholder-text-orange/[.70] shadow"
                    placeholder="WORKOUT TITLE"
                  />
                </div>
                <div className="relative ml-2 mb-2 ">
                  <textarea
                    value={workout.description}
                    onChange={(e) =>
                      setWorkout((prevExercise) => ({
                        ...prevExercise,
                        description: String(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="Workout title"
                    name="Workout title"
                    className=" input-title border-2 w-full rounded-md p-2 expand  shadow"
                    placeholder="DESCRIPTION"
                  />
                </div>

                <div className="mb-2 mr-2 ml-2 text-center">
                  <p className=" text-turquoise[.70]">SELECTED EXERCISE :</p>
                  <p className=" text-turquoise text-lg"> {exercise.name}</p>

                  <select
                    value={exercise.name}
                    onChange={(e) =>
                      setExercise((prevExercise) => ({
                        ...prevExercise,
                        name: String(e.target.value),
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="
                 expand input-exercise-name shadow
                 "
                  >
                    <option
                      onClick={() => {
                        if (!showOptions) setShowOptions(true);
                        else setShowOptions(false);
                      }}
                      value=""
                    >
                      Select an exercise
                    </option>

                    {yogaPoses.map(
                      (category: movement_categorys, index: number) =>
                        showOptions ? (
                          <optgroup
                            className="mt-2 mx-2 shadow  text-turquoise/[.70]  rounded-2xl"
                            key={category.title}
                            label={category.title}
                            onClick={() => {
                              setOpen(index);
                            }}
                          >
                            {index === open
                              ? category.movements.map((movement) => (
                                  <option key={movement} value={movement}>
                                    {movement}
                                  </option>
                                ))
                              : ""}
                          </optgroup>
                        ) : (
                          ""
                        )
                    )}
                  </select>
                </div>
              </div>
              <div className="mt-10 relative  flex flex-wrap justify-around">
                <div className="grid grid-col">
                  <select
                    value={exercise.sets} // set the selected value to the current state value
                    onChange={(e) =>
                      setExercise((prevExercise) => ({
                        ...prevExercise,
                        sets: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="  
                   text-turquoise/[0.50] expand 
                  hover:h-20 lg:w-40 expand 
                  shadow rounded 
                 
                   h-10    focus:outline-none 
                   basis-1/4 mb-2 mr-2 text-sm  md:text-lg"
                  >
                    <option value={0}>SETS</option>

                    {Array.from({ length: 99 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    value={exercise.reps} // set the selected value to the current state value
                    onChange={(e) =>
                      setExercise((prevExercise) => ({
                        ...prevExercise,
                        reps: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="hover:h-20
                   lg:w-40 expand shadow rounded 
                   text-turquoise/[0.50]  h-10 
                     focus:outline-none basis-1/4 mb-2 mr-2 text-sm  md:text-lg"
                  >
                    <option value={0}>REPS</option>
                    {Array.from({ length: 999 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1">
                  <label className=" text-turquoise/[0.50] ">TIMER</label>
                  <select
                    value={selectedTime.hours} // set the selected value to the current state value
                    onChange={async (e) => {
                      await setSelectedTime((prevHour) => ({
                        ...prevHour,
                        hours: Number(e.target.value), // update the state with the selected value
                      }));
                    }}
                    id="scrollableDiv"
                    size={2}
                    className="    text-turquoise/[0.50]  expand 
                  hover:h-20 lg:w-40 expand 
                  shadow rounded 
                  
                   peer h-10    focus:outline-none 
                   basis-1/4 mb-2 mr-2 text-sm  md:text-lg"
                  >
                    <option value={0}>HOURS</option>

                    {Array.from({ length: 99 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedTime.minutes} // set the selected value to the current state value
                    onChange={(e) =>
                      setSelectedTime((prevMinutes) => ({
                        ...prevMinutes,
                        minutes: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="hover:h-20
                   lg:w-40 expand shadow rounded 
                   text-turquoise/[0.50]   h-10 
                     focus:outline-none basis-1/4 mb-2 mr-2 text-sm  md:text-lg "
                  >
                    <option value={0}>MINUTES</option>
                    {Array.from({ length: 999 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedTime.seconds} // set the selected value to the current state value
                    onChange={(e) =>
                      setSelectedTime((prevSeconds) => ({
                        ...prevSeconds,
                        seconds: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="expand hover:h-20 lg:w-40 shadow rounded
                  text-turquoise/[0.50]  peer h-10  
                     basis-1/4 mb-2 focus:outline-none
                     text-sm  md:text-lg"
                  >
                    <option value={0}>SECONDS</option>
                    {Array.from({ length: 999 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=" text-xs md:text-base grid grid-col">
                  <button
                    onClick={(e) => addExerciseToSet(e)}
                    className="expand text-turquoise/[0.90]  border-turquoise/[0.40] 
                   p-1 rounded shadow-lg
                   h-10 border-solid border-2
                
                    placeholder-transparent focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    ADD TO SECTION
                  </button>
                  <button
                    onClick={(e) => addExerciseToWorkout(e)}
                    className="expand text-turquoise/[0.90]  border-turquoise/[0.40] 
                  p-1 rounded shadow
                    h-10 border-solid border-2
                     focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    NEW SECTION
                  </button>
                  {workout.movementSets.length > 0 ? (
                    <button
                      onClick={(e) => setDisplay(true)}
                      className="expand text-turquoise/[0.90]  border-turquoise/[0.40] 
                  p-1 rounded shadow
                    h-10 border-solid border-2
                     focus:outline-none basis-1/4 mb-2 mr-2"
                    >
                      GENERATE WORKOUT
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>

            <div
              style={{ height: "auto", overflowY: "scroll" }}
              id="scrollableDiv"
              className="scroll-smooth top-1/4 p-1 bg-slate common-form-val-4 rounded-3xl  rounded-tr-4xl "
            >
              <h1 className="text-2xl md:text-4xl font-semibold text-turquoise/[.80] text-center mb-2  ">
                NEW WORKOUT SECTION
              </h1>
              <div
                id="scrollableDiv"
                className="relative overflow-x-auto shadow-md sm:rounded-2xl text-turquoise text-lg"
              >
                <table className="w-full  text-left ">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Pose
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Sets
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Reps
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Time
                      </th>
                    </tr>
                  </thead>
                  {set.movements.map((item: IYogaMovement, index: number) => (
                    <YogaTable
                      key={index}
                      id={item.id}
                      name={item.name}
                      sets={item.sets}
                      reps={item.reps}
                      file={item.file}
                      parentFunction={removeExerciseFromSet}
                      timer={item.timer}
                    />
                  ))}
                </table>
              </div>
            </div>

            <div
              style={{ height: "auto", overflowY: "scroll" }}
              id="scrollableDiv"
              className="scroll-smooth p-1 mt-5 top-1/4 bg-slate rounded-3xl  rounded-tr-4xl "
            >
              <h1 className="font-semibold text-turquoise/[.80] text-center">
                {workout.title}
              </h1>

              {workout.movementSets.map(
                (movementSet: IYogaMovementSet, setIndex: number) => (
                  <div key={setIndex}>
                    <div className=" rounded-3xl  mb-1" key={setIndex}>
                      <p className="text-center text-turquoise">
                        <button
                          className=" py-2 px-2 border-solid rounded"
                          onClick={() =>
                            removeSetFromMovementSets(movementSet.id)
                          }
                        >
                          <Image
                            src={delImage}
                            alt={"X"}
                            width={15}
                            height={15}
                          />
                        </button>
                        Section {setIndex + 1}
                      </p>
                      <div className=" overflow-x-auto shadow-md sm:rounded-2xl text-turquoise">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-sm  md:text-lg ">
                            <tr>
                              <th scope="col" className="px-6 py-3 ">
                                Exercise
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Sets
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Reps
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Weight
                              </th>
                            </tr>
                          </thead>
                          {movementSet.movements.map(
                            (
                              movement: IYogaMovement,
                              movementIndex: number
                            ) => (
                              <YogaTableSet
                                key={movementIndex}
                                id={movement.id}
                                name={movement.name}
                                sets={movement.sets}
                                reps={movement.reps}
                                file={movement.file}
                                timer={movement.timer}
                              />
                            )
                          )}
                        </table>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutYoga;
