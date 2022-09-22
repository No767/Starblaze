import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
  axios.defaults.baseURL = "https://api.rinbot.live";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const fetchData = axios
    .get("/commands/all", options)
    .then(function (response) {
      return response.data;
    });

  return fetchData;
};

const getDataModules = async (endpoint: string) => {
  axios.defaults.baseURL = "https://api.rinbot.live";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    params: { module: endpoint },
  };
  const fetchData = axios
    .get("/commands/module", options)
    .then(function (response) {
      return response.data;
    });
  return fetchData;
};

const getModuleList = async () => {
  axios.defaults.baseURL = "https://api.rinbot.live";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const fetchModuleList = axios
    .get("/modules/all", options)
    .then(function (response) {
      return response.data;
    });
  return fetchModuleList;
};

const useData = () => {
  return useQuery(["allRepoData"], () => getData());
};

const useModuleData = (endpoint: string) => {
  return useQuery(["moduleData"], () => getDataModules(endpoint));
};

const useModuleListData = () => {
  return useQuery(["moduleListData"], () => getModuleList());
};

export {
  getData,
  useData,
  useModuleData,
  getDataModules,
  getModuleList,
  useModuleListData,
};
