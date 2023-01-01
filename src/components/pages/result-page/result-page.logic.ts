import { HttpLoadingStatus } from "enums/http-loading-status";
import { useAppDispatch, useAppSelector } from "hooks/store-hooks";
import { useEffect, useMemo } from "react";
import { fetchCocktails } from "store/slices/cocktails";
import { setActiveSlide } from "store/slices/slider";

export const useLogic = () => {
  const dispatcher = useAppDispatch();

  const { entities: cocktails, loading: loadingCoctails } = useAppSelector((root) => root.cocktails);

  const submittedData = useAppSelector((root) => root.submittedData);

  const { values: submittedValues } = submittedData;

  // filter result using selectedf filters
  const resultArray = cocktails.filter(
    (item) =>
      item.strAlcoholic === submittedValues["drink_type"] &&
      item.strGlass === submittedValues["glass_type"] &&
      item.strCategory === submittedValues["category"] &&
      submittedValues["ingredients"]?.every((embededEveryItem: any) =>
        Object.entries(item)
          .filter((embededFilterItem) => embededFilterItem[0].includes("strIngredient"))
          .map((mapItem) => mapItem[1])
          .includes(embededEveryItem)
      )
  );

  const isLoading = useMemo(() => loadingCoctails === HttpLoadingStatus.pending, [loadingCoctails]);

  // fetch needed data
  useEffect(() => {
    dispatcher(fetchCocktails());
  }, [dispatcher]);

  const goToFilter = () => {
    dispatcher(setActiveSlide(1));
  };

  return { resultArray, isLoading, goToFilter };
};
