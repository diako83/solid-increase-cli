export interface IUserdata {
  id: number;
  year: number;
  userGain: number;
  userLoss: number;
}

export const UserData: IUserdata[] = [
  {
    id: 1,
    year: 2021,
    userGain: 100,
    userLoss: 50,
  },
  {
    id: 2,
    year: 2022,
    userGain: 150,
    userLoss: 75,
  },
  {
    id: 3,
    year: 2023,
    userGain: 200,
    userLoss: 40,
  },
  {
    id: 4,
    year: 2024,
    userGain: 250,
    userLoss: 125,
  },
  {
    id: 5,
    year: 2025,
    userGain: 300,
    userLoss: 10,
  },
];
