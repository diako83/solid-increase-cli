import { IHiitWorkout } from "@/app/interface/IHiit";
import { ICardioWorkout } from "@/app/interface/IRunning";
import { IYogaWorkout } from "@/app/interface/IYoga";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export const postDataWithHeader = async () => {
  try {
    const token = "your_jwt_token"; // Replace with your actual JWT token

    const response = await fetch("https://your-api-url.com/your-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ key: "value" }), // Replace with your request payload
    });

    if (response.ok) {
      // Request was successful
      const data = await response.json();
      console.log(data); // Handle the response data
    } else {
      // Request failed
      console.log("Error:", response.status);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
//--------------Credentials, login, create, update
export const registerUser = async (url: string, newUser: IRegister) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser), // Replace with your request payload
  });

  if (response.ok) {
    // Request was successful
    return await response.text();
    // Handle the response data
  } else {
    // Request failed
    console.log("Error:", response.status);
  }
};

export const loginUser = async (
  url: string,
  email: string,
  password: string
) => {
  const login = {
    username: email,
    password: password,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login), // Replace with your request payload
  });

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};

export const forgotPassword = async (email: string) => {
  const request = {
    email: email,
  };

  const response = await fetch("http://localhost:9091/auth/sendcode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (response.status == 200) {
    return await response.json();
    // Handle the response data
  } else {
    return response.status;
  }
};

export const fetchInitialList = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export const updatePassword = async (
  email: string,
  password: string,
  code: string
) => {
  const update = {
    name: email,
    password: password,
    code: code,
  };

  const response = await fetch(
    "http://localhost:9091/auth/change-credentials",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update), // Replace with your request payload
    }
  );

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};

// gym requests ----------------------------------
export const postGymWorkout = async (
  url: string,
  token: string,
  workout: IGymWorkout
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workout),
  });

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};
//*------------cardio
export const postCardioWorkout = async (
  url: string,
  token: string,
  workout: ICardioWorkout
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workout),
  });

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};
//*------------Hiit
export const postHiitWorkout = async (
  url: string,
  token: string,
  workout: IHiitWorkout
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workout),
  });

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};
//*------------Kb
export const postKbWorkout = async (
  url: string,
  token: string,
  workout: IHiitWorkout
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workout),
  });

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};
//*------------Yoga
export const postYogaWorkout = async (
  url: string,
  token: string,
  workout: IYogaWorkout
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workout),
  });

  if (response.ok) {
    // Request was successful
    return await response.json();
    // Handle the response data
  } else {
    // Request failed
    return response.status;
  }
};

export const fetchList = async (url: string, token: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const fetchSingle = async (url: string, token: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const deleteSingle = async (url: string, token: string) => {
  const options = {
    method: "Delete",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
