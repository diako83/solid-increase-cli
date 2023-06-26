"use client";
import Image from "next/image";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { useEffect, useState } from "react";
import React from "react";
import delImage from "../../../assets/icons/x-button.png";

import {
  IHiitMovement,
  IHiitMovementSet,
  IHiitWorkout,
  IResponseHiit,
} from "@/app/interface/IHiit";
import { IDistance } from "@/app/interface/IDistance";
import { ITimer } from "@/app/interface/ITimer";
import { hiitdata } from "@/mockdata/hiitdata";
import TableHiitComp from "@/app/components/hiitComp/tableHiitComp";
import SectionHiitComp from "@/app/components/hiitComp/sectionHiitComp copy";
import { useGlobalContext } from "@/app/context/store";
import DisplayHiit from "@/app/components/displayWorkoutComp/displayHiit";
import { postHiitWorkout } from "@/app/api/hello/route";
import { useRouter } from "next/navigation";
const { v4: uuidv4 } = require("uuid");

function generateUUID() {
  return uuidv4();
}
const WorkoutHiit = () => {
  const router = useRouter();
  const { userId, data } = useGlobalContext();
  const [display, setDisplay] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [uuid, setUuid] = useState(uuidv4());

  const [selectDistance, setSelectDistance] = useState<IDistance>({
    km: 0,
    meter: 0,
  });

  const [selectedTime, setSelectedTime] = useState<ITimer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [exercise, setExercise] = useState<IHiitMovement>({
    id: uuidv4(),
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
    file: null,
    timer: selectedTime,
    distance: selectDistance,
  });

  const [set, setSet] = useState<IHiitMovementSet>({
    id: "",
    movements: [],
  });

  const [workout, setWorkout] = useState<IHiitWorkout>({
    id: "",
    title: "",
    description: "",
    movementSets: [],
    creation_date: "", //or "Date" type
    author: "",
    share: false,
  });

  const addExerciseToSet = (e: any) => {
    handleClick();
    setSet((prevSet) => ({
      ...prevSet,
      movements: [...prevSet.movements, exercise],
    }));

    setExercise({
      id: uuidv4(),
      name: "",
      sets: 0,
      reps: 0,
      weight: 0,
      file: null,
      timer: selectedTime,
      distance: selectDistance,
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
    console.log("giit");
    try {
      const response: IResponseHiit = await postHiitWorkout(
        `http://localhost:9090/api/v1/hiit`,
        data.token ?? "",
        workout
      );
      if (response.status == 200) {
        router.push("/activities/library/hiit");
      }
      // Handle the response or perform any necessary actions
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };
  return (
    <div className="  bg-slate/100 rounded-3xl">
      {display ? (
        <DisplayHiit
          workout={workout}
          postData={postData}
          setDisplay={setDisplay}
        />
      ) : (
        <div className="  p-3 shadow-2xl  ">
          <div
            className="h-screen max-w-7xl bg-orange/[.10]
                   rounded-3xl mx-auto 
                   shadow-2xl  "
          >
            <BottomNavBar
              color={"bg-gradient-to-t from-orange/[.10] to-orange/[.20]"}
            />
            <h1 className="h1-create-workout  text-orange/[.70]  ">
              CREATE HIIT WORKOUT
            </h1>

            <form
              defaultValue="Bob"
              className="mt-1 mx-2"
              action=""
              method="POST"
            >
              <div className="lg:flex  text-orange/[.70] lg:justify-evenly">
                <div className="relative ml-2 mb-2 ">
                  <input
                    value={workout.title}
                    onChange={(e) =>
                      setWorkout((prevExercise) => ({
                        ...prevExercise,
                        title: String(e.target.value), // update the state with the selected value
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
                    className=" input-title border-2 w-full rounded-md p-2 expand placeholder-text-orange/[.70] shadow"
                    placeholder="DESCRIPTION"
                  />
                </div>

                <div className="mb-2 mr-2 ml-2 text-center">
                  <p className=" text-orange/[.70]">SELECTED EXERCISE :</p>
                  <p className=" text-orange/[0.90] text-lg">
                    {" "}
                    {exercise.name}
                  </p>

                  <select
                    value={exercise.name} // set the selected value to the current state value
                    onChange={(e) =>
                      setExercise((prevExercise) => ({
                        ...prevExercise,
                        name: String(e.target.value), // update the state with the selected value
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

                    <optgroup className="mt-2 mx-2 shadow    text-orange/[.70] rounded-2xl">
                      {hiitdata.map((movement: string, index: number) => (
                        <option key={index} value={movement}>
                          {movement}
                        </option>
                      ))}
                    </optgroup>
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
                   text-orange/[0.50] expand 
                  hover:h-20 lg:w-40 expand 
                  shadow rounded 
                 
                  h-10    focus:outline-none 
                   basis-1/4 mb-2 mr-2 md:text-lg"
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
                   text-orange/[0.50]  h-10 
                     focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    <option value={0}>REPS</option>
                    {Array.from({ length: 999 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    value={exercise.weight} // set the selected value to the current state value
                    onChange={(e) =>
                      setExercise((prevExercise) => ({
                        ...prevExercise,
                        weight: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="expand hover:h-20 lg:w-40 shadow rounded
                  text-orange/[0.50]  peer h-10  
                     basis-1/4 mb-2 focus:outline-none"
                  >
                    <option value={0}>WEIGHT KG</option>
                    {Array.from({ length: 9999 }, (_, i) => (
                      <option key={i + 1} value={i * 0.25}>
                        {(i * 0.25).toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1">
                  <label className="text-orange">TIMER</label>
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
                    className="   text-yellow/[0.50] expand 
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
                   text-yellow/[0.50]  h-10 
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
                  text-yellow/[0.50]  peer h-10  
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

                <div className="grid grid-col">
                  <label className="text-orange">Distance</label>
                  <select
                    value={selectDistance.km} // set the selected value to the current state value
                    onChange={(e) =>
                      setSelectDistance((prevKm) => ({
                        ...prevKm,
                        km: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="   text-yellow/[0.50] expand 
                  hover:h-20 lg:w-40 expand 
                  shadow rounded 
                  
                    h-10    focus:outline-none 
                   basis-1/4  mr-2 text-sm  md:text-lg"
                  >
                    <option value={0}>DISTANCE: KM</option>

                    {Array.from({ length: 99 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectDistance.meter} // set the selected value to the current state value
                    onChange={(e) =>
                      setSelectDistance((prevMeter) => ({
                        ...prevMeter,
                        meter: Number(e.target.value), // update the state with the selected value
                      }))
                    }
                    id="scrollableDiv"
                    size={2}
                    className="   text-yellow/[0.50] expand 
                  hover:h-20 lg:w-40 expand 
                  shadow rounded 
                  
                   peer h-10    focus:outline-none 
                   basis-1/4 mb-2 mr-2 text-sm  md:text-lg"
                  >
                    <option value={0}>METERS</option>

                    {Array.from({ length: 99 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-row justify-between text-xs md:text-base md:grid grid-flow-row">
                  <button
                    onClick={(e) => addExerciseToSet(e)}
                    className="expand text-orange/[0.50]  border-orange/[0.40] 
                   p-1 rounded shadow-lg
                   h-10 border-solid border-2
                
                    placeholder-transparent focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    ADD TO SECTION
                  </button>
                  <button
                    onClick={(e) => addExerciseToWorkout(e)}
                    className="expand text-orange/[0.50]  border-orange/[0.40] 
                  p-1 rounded shadow
                    h-10 border-solid border-2
                     focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    NEW SECTION
                  </button>
                  {workout.movementSets.length > 0 ? (
                    <button
                      onClick={(e) => setDisplay(true)}
                      className="expand text-orange/[0.50]  border-orange/[0.40] 
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
              <h1 className="text-2xl md:text-4xl font-semibold text-orange/[.80] text-center mb-2  ">
                NEW WORKOUT SECTION
              </h1>
              <div
                id="scrollableDiv"
                className="relative overflow-x-auto shadow-md sm:rounded-2xl text-orange"
              >
                <table className="w-full text-sm text-left ">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3">
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
                  {set.movements.map((item: IHiitMovement, index: number) => (
                    <TableHiitComp
                      key={index}
                      id={item.id}
                      name={item.name}
                      sets={item.sets}
                      reps={item.reps}
                      weight={item.weight}
                      file={item.file}
                      parentFunction={removeExerciseFromSet}
                      timer={item.timer}
                      distance={item.distance}
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
              <h1 className="font-semibold text-orange/[.80] text-center">
                {workout.title}
              </h1>

              {workout.movementSets.map(
                (movementSet: IHiitMovementSet, setIndex: number) => (
                  <div key={setIndex}>
                    <div className=" rounded-3xl  mb-1" key={setIndex}>
                      <p className="text-center text-orange/[.80]">
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
                      <div className=" overflow-x-auto shadow-md sm:rounded-2xl text-orange">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead>
                            <tr>
                              <th scope="col" className="px-6 py-3">
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
                              movement: IHiitMovement,
                              movementIndex: number
                            ) => (
                              <SectionHiitComp
                                key={movementIndex}
                                id={movement.id}
                                name={movement.name}
                                sets={movement.sets}
                                reps={movement.reps}
                                weight={movement.weight}
                                timer={movement.timer}
                                distance={movement.distance}
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

export default WorkoutHiit;
