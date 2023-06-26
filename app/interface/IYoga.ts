import { ITimer } from "./ITimer";

export interface IYogaWorkout {
  id: string;
  title: string;
  description: string;
  movementSets: IYogaMovementSet[];
  creation_date: string; //or "Date" type
  author: string;
  share: boolean;
}

export interface IYogaMovement {
  id: string;
  name: string;
  sets: number;
  reps: number;

  timer: ITimer; //type "Date";

  file?: File | null;
}

export interface IYogaMovementSet {
  id: string;

  movements: IYogaMovement[];
}

export interface IResponseYoga {
  data: IYogaWorkout;
  status: number;
}

export interface IResponseYogaList {
  data: IYogaWorkout[];
  status: number;
}
