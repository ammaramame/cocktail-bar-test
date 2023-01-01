import { ICategory } from "models/category";
import { httpClient } from "setups/http-client";

export interface IResponse {
  drinks: ICategory[];
}

export const getAllCategories = () => httpClient.get<IResponse>("/list.php?c=list");
