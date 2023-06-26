import { IDistance } from "./IDistance";
import { ITimer } from "./ITimer";

export interface ICardioWorkout {
  id: string;
  userId: string;
  title: string;
  description: string;
  movementSets: ICardioMovementSet[];
  creation_date: any; //or "Date" type
  author: string;
  share: boolean;
}

export interface ICardioMovement {
  id: string;
  name: string;
  timer: ITimer; //type "Date";
  distance: IDistance;
}

export interface ICardioMovementSet {
  id: string;
  movements: ICardioMovement[];
}

export interface IResponseCardio {
  data: ICardioWorkout;
  status: number;
}

export interface IResponseCardioList {
  data: ICardioWorkout[];
  status: number;
}
