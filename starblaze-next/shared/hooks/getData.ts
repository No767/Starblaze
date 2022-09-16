import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const fetchData = axios
    .get("https://api.rinbot.live/commands/all", options)
    .then(function (response) {
      return response.data;
    });

  return fetchData;
};

const getDataModules = async (endpoint: any) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const fetchData = axios
    .get(`https://api.rinbot.live/commands/${endpoint}`, options)
    .then(function (response) {
      return response.data;
    });
  return fetchData;
};

const useData = () => {
  return useQuery(["allRepoData"], () => getData());
};

const useModuleData = (endpoint: string) => {
  return useQuery(["moduleData"], () => getDataModules(endpoint));
};

export { getData, useData, useModuleData, getDataModules };
