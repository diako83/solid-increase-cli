"use client";
import Image from "next/image";
import BottomNavBar from "@/app/components/navigation/bottomNavBar";
import { useEffect, useState } from "react";
import { exserciseList, movement_categorys } from "@/mockdata/gymworkoutdata";
import { useRouter } from "next/navigation";
import React from "react";
import delImage from "../../../assets/icons/x-button.png";
import TableComp from "@/app/components/gymPageComp/tableComp";
import SectionComp from "@/app/components/gymPageComp/sectionComp";
import { postGymWorkout } from "@/app/api/hello/route";
import { useGlobalContext } from "@/app/context/store";
import DisplayGym from "@/app/components/displayWorkoutComp/displayGym";

const { v4: uuidv4 } = require("uuid");

function generateUUID() {
  return uuidv4();
}
const WorkoutGym = () => {
  const router = useRouter();
  const { userId, data } = useGlobalContext();
  const [value, setValue] = useState<ILoggedInUser>();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [open, setOpen] = useState<number>(99);
  const [uuid, setUuid] = useState(uuidv4());
  const [display, setDisplay] = useState<boolean>(false);
  const [exercise, setExercise] = useState<IGymMovement>({
    id: uuidv4(),
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
    file: null,
  });

  const [set, setSet] = useState<IGymMovementSet>({
    id: "",
    movements: [],
  });

  const [workout, setWorkout] = useState<IGymWorkout>({
    id: "",
    userId: "",
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
      weight: 0,
      file: null,
    });

    e.preventDefault();
  };

  const postData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response: IResponseGym = await postGymWorkout(
        `http://localhost:9090/api/v1/gym`,
        data.token ?? "",
        workout
      );
      if (response.status == 200) {
        router.push("/activities/library/gym");
      }
      // Handle the response or perform any necessary actions
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  const addExerciseToWorkout = (e: any) => {
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      movementSets: [...prevWorkout.movementSets, set],
    }));

    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      userId: userId ?? "",
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

  return (
    <div className=" gradient-background-purple rounded-3xl mt-0">
      {display ? (
        <DisplayGym
          workout={workout}
          postData={postData}
          setDisplay={setDisplay}
        />
      ) : (
        <div className="p-3 shadow-2xl  ">
          <div
            className="h-screen max-w-7xl bg-slate/100 
                   rounded-3xl mx-auto 
                   shadow-2xl  "
          >
            <BottomNavBar color={"bg-purpleCustomSecond/[.10]"} />
            <h1 className="h1-create-workout text-textColor/[.80]  ">
              CREATE WORKOUT
            </h1>

            <div defaultValue="Bob" className="mt-1 mx-2">
              <div className="lg:flex  lg:justify-evenly">
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
                    className=" text-textColor input-title expand"
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
                    className=" input-title border-2 w-full rounded-md p-2 expand  border-purpleCustom  placeholder-textColor shadow"
                    placeholder="DESCRIPTION"
                  />
                </div>
                <div className="mb-2 mr-2 ml-2 text-center">
                  <p className="text-textColor/[0.50]">SELECTED EXERCISE :</p>
                  <p className="text-textColor/[0.90] text-lg">
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
                  text-textColor/[0.50] expand input-exercise-name
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

                    {exserciseList.map(
                      (category: movement_categorys, index: number) =>
                        showOptions ? (
                          <optgroup
                            className="mt-2 mx-2 shadow border-textColor/40 text-textColor rounded-2xl"
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
                <div>
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
                    className="   text-textColor/[0.50] expand 
                  hover:h-20 lg:w-40 expand 
                  shadow rounded 
                 
                   peer h-10    focus:outline-none 
                   basis-1/4 mb-2 mr-2 text-sm  md:text-lg"
                  >
                    <option value={0}>SETS</option>

                    {Array.from({ length: 99 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
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
                    text-textColor/[0.50] h-10 
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
                <div>
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
                    text-textColor/[0.50] peer h-10  
                     basis-1/4 mb-2 focus:outline-none text-sm  md:text-lg"
                  >
                    <option value={0}>WEIGHT KG</option>
                    {Array.from({ length: 9999 }, (_, i) => (
                      <option key={i + 1} value={i * 0.25}>
                        {(i * 0.25).toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-flow-row">
                  <button
                    onClick={(e) => addExerciseToSet(e)}
                    className="expand text-textColor/[0.50] border-purpleCustom/[0.50] 
                   p-2 rounded shadow
                   h-10 border-solid border-2
                
                    placeholder-transparent focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    ADD TO SECTION
                  </button>
                  <button
                    onClick={(e) => addExerciseToWorkout(e)}
                    className="expand  text-textColor/[0.50] border-purpleCustom/[0.50] 
                  p-2 rounded shadow
                    h-10 border-solid border-2
                     focus:outline-none basis-1/4 mb-2 mr-2"
                  >
                    NEW SECTION
                  </button>
                  {workout.movementSets.length > 0 ? (
                    <button
                      onClick={() => setDisplay(true)}
                      className="expand  text-textColor/[0.50] border-purpleCustom/[0.50]
                  p-2 rounded shadow
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
            </div>

            <div
              style={{ height: "auto", overflowY: "scroll" }}
              id="scrollableDiv"
              className="scroll-smooth top-1/4 p-1 bg-slate common-form-val-4 rounded-3xl  rounded-tr-4xl "
            >
              <h1 className="text-2xl md:text-4xl font-semibold text-textColor/[.80] text-center mb-2  ">
                NEW WORKOUT SECTION
              </h1>
              <div
                id="scrollableDiv"
                className="relative overflow-x-auto shadow-md sm:rounded-2xl text-textColor"
              >
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-sm  md:text-lg">
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
                      <th scope="col" className=""></th>
                    </tr>
                  </thead>
                  {set.movements.map((item: IGymMovement, index: number) => (
                    <TableComp
                      key={index}
                      id={item.id}
                      name={item.name}
                      sets={item.sets}
                      reps={item.reps}
                      weight={item.weight}
                      file={item.file}
                      parentFunction={removeExerciseFromSet}
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
              <h1 className="font-semibold text-textColor/[.80] text-center">
                {workout.title}
              </h1>

              {workout.movementSets.map(
                (movementSet: IGymMovementSet, setIndex: number) => (
                  <div key={setIndex}>
                    <div className=" rounded-3xl  mb-1" key={setIndex}>
                      <p className="text-center ">
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
                      <div className=" overflow-x-auto shadow-md sm:rounded-2xl text-textColor">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-sm  md:text-lg">
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
                            (movement: IGymMovement, movementIndex: number) => (
                              <SectionComp
                                key={movementIndex}
                                id={movement.id}
                                name={movement.name}
                                sets={movement.sets}
                                reps={movement.reps}
                                weight={movement.weight}
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

export default WorkoutGym;
