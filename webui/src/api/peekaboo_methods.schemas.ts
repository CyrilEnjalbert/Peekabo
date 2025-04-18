/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * Bird Tracking API
 * API for managing birds, their location histories, and user authentication.
 * OpenAPI spec version: 1.0.0
 */
export interface Bird {
  id?: number;
  name?: string;
  latitude?: number;
  longitude?: number;
  /** Username of the bird owner. */
  owner?: string;
  gps_id?: string;
}

export interface Location {
  latitude?: number;
  longitude?: number;
  timestamp?: string;
}

export interface LocationUpdate {
  latitude?: number;
  longitude?: number;
}

export interface User {
  id?: number;
  email?: string;
  /** Hashed password. */
  password?: string;
  roles?: string[];
}

export type GetUserUserIdBirds404 = {
  error?: string;
};

export type PostBirdGpsIdLocationsBody = {
  locations: LocationUpdate[];
};

export type PostBirdGpsIdLocations200 = {
  message?: string;
};

export type PostBirdGpsIdLocations400 = {
  error?: string;
};

export type PostBirdGpsIdLocations404 = {
  error?: string;
};

export type GetBirdIdLocation404 = {
  error?: string;
};

export type GetBirdIdPath404 = {
  error?: string;
};

export type PostLoginBody = {
  email: string;
  password: string;
};

export type PostLogin200 = {
  token?: string;
};

export type PostLogin401 = {
  error?: string;
};

export type PostRegisterBody = {
  email: string;
  password: string;
};

export type PostRegister201 = {
  message?: string;
};

export type PostRegister400 = {
  error?: string;
};

