import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const fetchRepos = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
};

export const searchUsers = async ({ query, location, minRepos }) => {
  let searchQuery = query;

  if (location) {
    searchQuery += `+location:${location}`;
  }
  if (minRepos) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  const response = await axios.get(
    `https://api.github.com/search/users?q=${searchQuery}`
  );

  return response.data.items; 
};