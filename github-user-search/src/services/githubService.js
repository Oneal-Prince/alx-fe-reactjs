
import axios from "axios";


const API_URL = import.meta.env.VITE_APP_API_URL || "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; 

export async function fetchUserData(username) {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`${API_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `GitHub API Error (${error.response.status}): ${error.response.data.message}`
      );
    } else {
      throw new Error("Network error. Please try again later.");
    }
  }
}

export async function fetchRepos(username) {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`${API_URL}/users/${username}/repos`, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `GitHub API Error (${error.response.status}): ${error.response.data.message}`
      );
    } else {
      throw new Error("Network error. Please try again later.");
    }
  }
}