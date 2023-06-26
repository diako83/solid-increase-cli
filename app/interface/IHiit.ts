import { IDistance } from "./IDistance";
import { ITimer } from "./ITimer";

export interface IHiitWorkout {
  id: string;
  title: string;
  description: string;
  movementSets: IHiitMovementSet[];
  creation_date: string; //or "Date" type
  author: string;
  share: boolean;
}

export interface IHiitMovement {
  id: string;
  name: string;
  //type "Date";
  sets: number;
  reps: number;
  weight: number;
  timer: ITimer; //type "Date";
  distance: IDistance;
  file?: File | null;
}

export interface IHiitMovementSet {
  id: string;
  movements: IHiitMovement[];
}

export interface IResponseHiit {
  data: IHiitWorkout;
  status: number;
}

export interface IResponseHiitList {
  data: IHiitWorkout[];
  status: number;
}
