

import { Camper, CampersResponse } from '@/types/camper';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface Params {
  page: number;
  limit: number;
  location?: string;
  form?: string;
   AC?: boolean,
      bathroom?: boolean,
      kitchen?: boolean,
  TV?: boolean,
  transmission?:string
}

export const getCampers = async (
  params: Params,
): Promise<CampersResponse> => {
  const { data } = await axios.get<CampersResponse>(
    `${BASE_URL}/campers`,
    { params },
  );

  return data;
};
export const getCampersById = async (
  id: string
): Promise<Camper> => {
  const { data } = await axios.get<Camper>(
    `${BASE_URL}/campers/${id}`,
  );

  return data;
};