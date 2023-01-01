import { IGlass } from "models/glass";
import { httpClient } from "setups/http-client";

export interface IResponse {
  drinks: IGlass[];
}

export const getAllGlasses = () => httpClient.get<IResponse>("/list.php?g=list");
