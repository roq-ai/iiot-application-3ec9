import axios from 'axios';
import queryString from 'query-string';
import { EdgeComputingInterface, EdgeComputingGetQueryInterface } from 'interfaces/edge-computing';
import { GetQueryInterface } from '../../interfaces';

export const getEdgeComputings = async (query?: EdgeComputingGetQueryInterface) => {
  const response = await axios.get(`/api/edge-computings${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEdgeComputing = async (edgeComputing: EdgeComputingInterface) => {
  const response = await axios.post('/api/edge-computings', edgeComputing);
  return response.data;
};

export const updateEdgeComputingById = async (id: string, edgeComputing: EdgeComputingInterface) => {
  const response = await axios.put(`/api/edge-computings/${id}`, edgeComputing);
  return response.data;
};

export const getEdgeComputingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/edge-computings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEdgeComputingById = async (id: string) => {
  const response = await axios.delete(`/api/edge-computings/${id}`);
  return response.data;
};
