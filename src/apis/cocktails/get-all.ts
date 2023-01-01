import { ICocktail } from "models/coctail";
import { httpClient } from "setups/http-client";

export interface IResponse {
  drinks: ICocktail[];
}

export const getAllCocktails = () => httpClient.get<IResponse>("/search.php?s");
