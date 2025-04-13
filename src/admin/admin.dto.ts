/* eslint-disable prettier/prettier */
export interface CreateTurfDto {
  id?: number;
  name: string;
  mobile: string;
  opening_time: string;
  closing_time: string;
  location: string;
  turf_type: string;
  turf_price: number;
}

export interface UpdateTurfDto {
  id: number;
  name?: string;
  mobile?: string;
  opening_time?: string;
  closing_time?: string;
  location?: string;
  turf_type?: string;
  turf_price?: number;
}
