import { IDistance } from "./IDistance";
import { ITimer } from "./ITimer";

export interface IKbWorkout {
  id: string;
  userId: string;
  title: string;
  description: string;
  movementSets: IKbMovementSet[];
  creation_date: string; //or "Date" type
  author: string;
  share: boolean;
}

export interface IKbMovement {
  id: string;
  name: string;
  //type "Date";
  sets: number;
  reps: number;
  weight: number;
  timer: ITimer; //type "Date";
  distance: IDistance;
}

export interface IKbMovementSet {
  id: string;
  movements: IKbMovement[];
}
export interface IKbMovementSet {
  id: string;
  movements: IKbMovement[];
}

export interface IResponseKb {
  data: IKbWorkout;
  status: number;
}

export interface IResponseKbList {
  data: IKbWorkout[];
  status: number;
}
