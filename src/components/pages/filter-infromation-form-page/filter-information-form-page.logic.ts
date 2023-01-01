import { SelectChangeEvent } from "@mui/material";
import { HttpLoadingStatus } from "enums/http-loading-status";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "hooks/store-hooks";
import { useEffect, useMemo } from "react";
import { fetchAlcoholicTypes } from "store/slices/alcoholic-types";
import { fetchCategories } from "store/slices/cateogries";
import { fetchGlasses } from "store/slices/glasses";
import { fetchIngredients } from "store/slices/ingredients";
import { setActiveSlide } from "store/slices/slider";
import { setSubmittedData } from "store/slices/submitted-data";
import { validationSchema } from "./filter-information-form.validation";

export const useLogic = () => {
  const dispatcher = useAppDispatch();

  const filterForm = useFormik({
    initialValues: { category: "", drink_type: "", glass_type: "", ingredients: [] as string[] },
    onSubmit: (values) => {
      dispatcher(setSubmittedData(values));
      dispatcher(setActiveSlide(2));
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const { entities: glasses, loading: loadingGlasses } = useAppSelector((root) => root.glasses);

  const { entities: categories, loading: loadingCategories } = useAppSelector((root) => root.categories);

  const { entities: alcoholicTypes, loading: loadingAlcoholicTypes } = useAppSelector((root) => root.alcoholicTypes);

  const { entities: ingredients, loading: loadingIngredients } = useAppSelector((root) => root.ingredients);

  // calculate and memoize loading
  const isLoading = useMemo(
    () => loadingGlasses === HttpLoadingStatus.pending || loadingCategories === HttpLoadingStatus.pending || loadingAlcoholicTypes === HttpLoadingStatus.pending || loadingIngredients === HttpLoadingStatus.pending,
    [loadingGlasses, loadingCategories, loadingAlcoholicTypes, loadingIngredients]
  );

  const handleFormFieldChange = (e: SelectChangeEvent<unknown>) => filterForm.setFieldValue(e.target.name, e.target.value);

  const goToPrevious = () => dispatcher(setActiveSlide(0));

  // fetch needed data
  useEffect(() => {
    dispatcher(fetchCategories());
    dispatcher(fetchAlcoholicTypes());
    dispatcher(fetchGlasses());
    dispatcher(fetchIngredients());
  }, [dispatcher]);

  return { isLoading, glasses, categories, alcoholicTypes, ingredients, handleFormFieldChange, filterForm, goToPrevious };
};
