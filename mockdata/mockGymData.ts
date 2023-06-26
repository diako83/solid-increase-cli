export const workoutsDataList: IGymWorkout[] = [
  {
    id: "1",
    title: "Leg Day",
    description: "A workout that targets the leg muscles",
    movements_sets: [
      {
        id: "1",
        movements: [
          {
            id: "1",
            name: "Squats",
            sets: 4,
            reps: 10,
            weight: 185,
          },
          {
            id: "2",
            name: "Lunges",
            sets: 3,
            reps: 12,
            weight: 50,
          },
        ],
      },
      {
        id: "2",
        movements: [
          {
            id: "3",
            name: "Leg Press",
            sets: 3,
            reps: 12,
            weight: 270,
          },
          {
            id: "4",
            name: "Calf Raises",
            sets: 4,
            reps: 15,
            weight: 90,
          },
        ],
      },
    ],
    creation_date: "2022-03-01",
    author: "Alex Johnson",
    share: true,
  },
  {
    id: "2",
    title: "Push Day",
    description: "A workout that targets the upper body pushing muscles",
    movements_sets: [
      {
        id: "3",
        movements: [
          {
            id: "5",
            name: "Bench Press",
            sets: 5,
            reps: 5,
            weight: 225,
          },
          {
            id: "6",
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: 10,
            weight: 60,
          },
        ],
      },
      {
        id: "4",
        movements: [
          {
            id: "7",
            name: "Overhead Press",
            sets: 4,
            reps: 8,
            weight: 105,
            file: null,
          },
          {
            id: "8",
            name: "Dips",
            sets: 3,
            reps: 12,
            weight: 0,
          },
        ],
      },
    ],
    creation_date: "2022-03-05",
    author: "Sarah Lee",
    share: true,
  },
  {
    id: "3",
    title: "Pull Day",
    description: "A workout that targets the upper body pulling muscles",
    movements_sets: [
      {
        id: "5",
        movements: [
          {
            id: "9",
            name: "Deadlifts",
            sets: 5,
            reps: 5,
            weight: 315,
          },
          {
            id: "10",
            name: "Barbell Rows",
            sets: 4,
            reps: 8,
            weight: 135,
          },
        ],
      },
      {
        id: "6",
        movements: [
          {
            id: "11",
            name: "Pull-Ups",
            sets: 4,
            reps: 10,
            weight: 0,
          },
          {
            id: "12",
            name: "Dumbbell Curls",
            sets: 3,
            reps: 12,
            weight: 25,
          },
        ],
      },
    ],
    creation_date: "2022-03-10",
    author: "Mark Davis",
    share: true,
  },
  {
    id: "4",
    title: "Core Workout",
    description: "A workout that targets the abdominal and lower back muscles",
    movements_sets: [
      {
        id: "7",
        movements: [
          {
            id: "13",
            name: "Plank",
            sets: 3,
            reps: 60,
            weight: 0,
          },
          {
            id: "14",
            name: "Russian Twists",
            sets: 3,
            reps: 20,
            weight: 15,
          },
        ],
      },
      {
        id: "8",
        movements: [
          {
            id: "15",
            name: "Leg Raises",
            sets: 3,
            reps: 15,
            weight: 0,
          },
          {
            id: "16",
            name: "Back Extensions",
            sets: 3,
            reps: 12,
            weight: 0,
          },
        ],
      },
    ],
    creation_date: "2022-03-15",
    author: "Emily Nguyen",
    share: true,
  },
  {
    id: "5",
    title: "Full-Body Workout",
    description: "A workout that targets all major muscle groups",
    movements_sets: [
      {
        id: "9",
        movements: [
          {
            id: "17",
            name: "Squats",
            sets: 4,
            reps: 10,
            weight: 185,
          },
          {
            id: "18",
            name: "Bench Press",
            sets: 4,
            reps: 8,
            weight: 185,
          },
        ],
      },
      {
        id: "10",
        movements: [
          {
            id: "19",
            name: "Deadlifts",
            sets: 4,
            reps: 8,
            weight: 275,
          },
          {
            id: "20",
            name: "Pull-Ups",
            sets: 3,
            reps: 10,
            weight: 0,
          },
        ],
      },
      {
        id: "11",
        movements: [
          {
            id: "21",
            name: "Overhead Press",
            sets: 3,
            reps: 10,
            weight: 95,
          },
          {
            id: "22",
            name: "Barbell Curls",
            sets: 3,
            reps: 12,
            weight: 45,
          },
        ],
      },
    ],
    creation_date: "2022-03-20",
    author: "John Smith",
    share: false,
  },
];
