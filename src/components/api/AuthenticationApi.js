import { apiBaseUrl } from "./settings";
// export function createAccount(data) {
//   return fetch(`${apiBaseUrl}/user/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json(); // Parse the JSON directly
    console.log("Parsed JSON data:", data);

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token); // Store the token
      return { success: true, data }; // Return the success flag and data
    } else {
      console.error("Login failed", data.message);
      return { success: false, message: data.message };
    }
  } catch (err) {
    console.error("Error while logging in:", err.message);
    return { success: false, message: err.message };
  }
};

export const signUpUser = async (userData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json(); // Parse the JSON response
    console.log("Parsed JSON data:", data);

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token); // Store the token if signup is successful
      return { success: true, data }; // Return success and the data object
    } else {
      console.error("Signup failed:", data.message);
      return { success: false, message: data.message };
    }
  } catch (err) {
    console.error("Error during signup:", err.message);
    return { success: false, message: err.message };
  }
};