import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const fetchData = axios
    .get(`${process.env.BACKEND_API_LINK_COMMANDS}/all`, options)
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
    .get(`${process.env.BACKEND_API_LINK_COMMANDS}/${endpoint}`, options)
    .then(function (response) {
      return response.data;
    });
  return fetchData;
};

const getModuleList = async () => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const fetchModuleList = axios
    .get(`${process.env.BACKEND_API_LINK}/modules/all`, options)
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
