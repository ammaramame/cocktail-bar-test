import { IAlcoholicType } from "models/alcoholic-type";
import { httpClient } from "setups/http-client";

export interface IResponse {
  drinks: IAlcoholicType[];
}

export const getAllAlcoholicTypes = () => httpClient.get<IResponse>("/list.php?a=list");
