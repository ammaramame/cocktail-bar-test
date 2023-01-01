import { IIngredient } from "models/ingredient";
import { httpClient } from "setups/http-client";

export interface IResponse {
  drinks: IIngredient[];
}

export const getAllIngredients = () => httpClient.get<IResponse>("/list.php?i=list");
