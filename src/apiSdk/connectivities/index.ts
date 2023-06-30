import axios from 'axios';
import queryString from 'query-string';
import { ConnectivityInterface, ConnectivityGetQueryInterface } from 'interfaces/connectivity';
import { GetQueryInterface } from '../../interfaces';

export const getConnectivities = async (query?: ConnectivityGetQueryInterface) => {
  const response = await axios.get(`/api/connectivities${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createConnectivity = async (connectivity: ConnectivityInterface) => {
  const response = await axios.post('/api/connectivities', connectivity);
  return response.data;
};

export const updateConnectivityById = async (id: string, connectivity: ConnectivityInterface) => {
  const response = await axios.put(`/api/connectivities/${id}`, connectivity);
  return response.data;
};

export const getConnectivityById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/connectivities/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConnectivityById = async (id: string) => {
  const response = await axios.delete(`/api/connectivities/${id}`);
  return response.data;
};
