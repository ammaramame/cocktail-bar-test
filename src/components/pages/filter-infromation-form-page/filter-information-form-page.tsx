import FilterForm from "components/organisms/filter-form/filter-form";
import FormPageTemplate from "components/templates/form-page-template/form-page-template";
import LoadingTemplate from "components/templates/loading-template/loading-template";
import PageColorizerTemplate from "components/templates/page-colorizer-template/page-colorizer-template";
import { FunctionComponent } from "react";
import { useLogic } from "./filter-information-form-page.logic";

interface FilterInformationFormPageProps {}

const FilterInformationFormPage: FunctionComponent<FilterInformationFormPageProps> = () => {
  const { alcoholicTypes, categories, glasses, ingredients, isLoading, handleFormFieldChange, filterForm, goToPrevious } = useLogic();

  return (
    <LoadingTemplate loading={isLoading}>
      <PageColorizerTemplate color="#b71c1c">
        <FormPageTemplate containerMaxWidth={600}>
          <FilterForm
            categoryInputProps={{ options: categories.map((item) => item.strCategory), onChange: handleFormFieldChange, value: filterForm.values["category"], error: Boolean(filterForm.errors["category"]), helperText: filterForm.errors["category"] }}
            drinkTypeInputProps={{ options: alcoholicTypes.map((item) => item.strAlcoholic), onChange: handleFormFieldChange, value: filterForm.values["drink_type"], error: Boolean(filterForm.errors["drink_type"]), helperText: filterForm.errors["drink_type"] }}
            glassTypeInputProps={{ options: glasses.map((item) => item.strGlass), onChange: handleFormFieldChange, value: filterForm.values["glass_type"], error: Boolean(filterForm.errors["glass_type"]), helperText: filterForm.errors["glass_type"] }}
            ingredientsTypeInputProps={{ options: ingredients.map((item) => item.strIngredient1), onChange: handleFormFieldChange, value: filterForm.values["ingredients"], error: Boolean(filterForm.errors["ingredients"]), helperText: filterForm.errors["ingredients"] as string }}
            formActionButtonsProps={{ nextButtonProps: { onClick: () => filterForm.submitForm() }, previousButtonProps: { onClick: () => goToPrevious() } }}
          />
        </FormPageTemplate>
      </PageColorizerTemplate>
    </LoadingTemplate>
  );
};

export default FilterInformationFormPage;
