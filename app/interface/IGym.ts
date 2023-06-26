interface IGymWorkout {
  id: string;
  userId: string;
  title: string;
  description: string;
  movementSets: IGymMovementSet[];
  creation_date: string; //or "Date" type
  author: string;
  share: boolean;
}

interface IGymMovement {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  file?: File | null;
}

interface IGymMovementSet {
  id: string;
  movements: IGymMovement[];
}
