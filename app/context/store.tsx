"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  data: ILoggedInUser;
  setData: Dispatch<SetStateAction<ILoggedInUser>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: {
    id: "",
    loggedIn: false,
    token: "",
    userName: "",
  },
  setData: (): ILoggedInUser => ({
    id: "",
    loggedIn: false,
    token: "",
    userName: "",
  }),
});

export const GlobalContextProvider = ({ children }) => {
  const [userId, setUserId] = useState<string>("");
  const [data, setData] = useState<ILoggedInUser>({
    id: "",
    loggedIn: false,
    token: "",
    userName: "",
  });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    data.id == "" ? setIsRunning(true) : setIsRunning(false);
    const stored = sessionStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : {};
    setUserId(user.id);
    setData({
      id: user.id,
      loggedIn: user.loggedIn,
      token: user.token,
      userName: user.userName,
    });
  }, [isRunning]);
  console.log("inside store", userId);
  console.log("inside store", data);
  return (
    <GlobalContext.Provider value={{ userId, setUserId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
