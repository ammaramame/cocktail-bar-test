import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FormContainer from "components/atoms/form-container/form-container";
import FormHeader from "components/atoms/form-header/form-header";
import NextPreviousButtonGroup, { NextPreviousButtonGroupProps } from "components/Molecules/next-previous-button-group/next-previous-button-group";
import FormTemplate from "components/templates/form-template/form-template";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface InputInterface extends Pick<SelectProps, "value" | "onChange" | "disabled"> {
  options?: string[];
  error?: boolean;
  helperText?: string;
}

interface FilterFormProps {
  categoryInputProps?: InputInterface;
  drinkTypeInputProps?: InputInterface;
  glassTypeInputProps?: InputInterface;
  ingredientsTypeInputProps?: InputInterface;
  formActionButtonsProps?: Pick<NextPreviousButtonGroupProps, "nextButtonProps" | "previousButtonProps">;
}

const FilterForm: FunctionComponent<FilterFormProps> = (props) => {
  const { categoryInputProps, drinkTypeInputProps, glassTypeInputProps, ingredientsTypeInputProps, formActionButtonsProps } = props;

  const { t } = useTranslation();

  const formInputs = [
    { label: t("Category"), name: "category", props: categoryInputProps },
    { label: t("Drink Type"), name: "drink_type", type: "select", props: drinkTypeInputProps },
    { label: t("Glass Type"), name: "glass_type", type: "select", props: glassTypeInputProps },
    { label: t("Ingredients"), name: "ingredients", type: "select", multiple: true, props: ingredientsTypeInputProps },
  ];
  return (
    <FormContainer>
      <FormTemplate
        header={<FormHeader label={t("Cocktail preference")} />}
        body={
          <Grid container>
            {formInputs.map((item) => (
              <Grid xs={12} key={item.name}>
                <FormControl fullWidth error={item.props?.error}>
                  <InputLabel variant="filled" id={item.label}>
                    {item.label}
                  </InputLabel>
                  <Select {...item} labelId={item.label} {...item.props} value={item.multiple && !item.props?.value ? [] : item.props?.value}>
                    {item.props?.options?.map((optionItem) => (
                      <MenuItem key={optionItem} value={optionItem}>
                        {optionItem}
                      </MenuItem>
                    ))}
                  </Select>
                  {item.props?.helperText && <FormHelperText>{item.props?.helperText}</FormHelperText>}
                </FormControl>
              </Grid>
            ))}
          </Grid>
        }
        footer={<NextPreviousButtonGroup showNextButton showPreviousButton {...formActionButtonsProps} />}
      />
    </FormContainer>
  );
};

export default FilterForm;
