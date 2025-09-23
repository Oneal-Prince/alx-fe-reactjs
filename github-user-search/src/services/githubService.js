import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL || "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; 

const getHeaders = () => {
  return API_KEY ? { Authorization: `token ${API_KEY}` } : {};
};

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function fetchRepos(username) {
  try {
    const response = await axios.get(`${API_URL}/users/${username}/repos`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}


export async function searchUsers(query) {
  try {
    const response = await axios.get(`${API_URL}/search/users?q=${query}`, {
      headers: getHeaders(),
    });
    return response.data.items; 
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  if (error.response) {
    throw new Error(
      `GitHub API Error (${error.response.status}): ${error.response.data.message}`
    );
  } else {
    throw new Error("Network error. Please try again later.");
  }
}
