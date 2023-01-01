import { TextField, TextFieldProps } from "@mui/material";
import { FunctionComponent } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import FormTemplate from "components/templates/form-template/form-template";
import FormHeader from "components/atoms/form-header/form-header";
import NextPreviousButtonGroup, { NextPreviousButtonGroupProps } from "components/Molecules/next-previous-button-group/next-previous-button-group";
import FormContainer from "components/atoms/form-container/form-container";
import { useTranslation } from "react-i18next";

interface InputProps extends Pick<TextFieldProps, "value" | "onChange" | "error" | "helperText" | "disabled"> {}

interface ProfileFormProps {
  barNameInputProps?: InputProps;
  ownerFirstNameInputProps?: InputProps;
  ownerLastNameInputProps?: InputProps;
  phoneInputProps?: InputProps;
  emailInputProps?: InputProps;
  formActionButtonsProps?: Pick<NextPreviousButtonGroupProps, "nextButtonProps" | "previousButtonProps">;
}

const ProfileForm: FunctionComponent<ProfileFormProps> = (props) => {
  const { t } = useTranslation();

  const { barNameInputProps, emailInputProps, ownerFirstNameInputProps, ownerLastNameInputProps, phoneInputProps, formActionButtonsProps } = props;

  const formInputs = [
    { label: t("Bar Name"), name: "bar_name", props: barNameInputProps, type: "text" },
    { label: t("First Name"), name: "first_name", props: ownerFirstNameInputProps, type: "text" },
    { label: t("Last Name"), name: "last_name", props: ownerLastNameInputProps, type: "text" },
    { label: t("Phone Number"), name: "phone", props: phoneInputProps, type: "tel" },
    { label: t("Email Address"), name: "email", props: emailInputProps, type: "email" },
  ];
  return (
    <FormContainer>
      <FormTemplate
        header={<FormHeader label={t("Basic Informations")} />}
        footer={<NextPreviousButtonGroup showNextButton {...formActionButtonsProps} />}
        body={
          <Grid container>
            {formInputs.map((item) => (
              <Grid xs={12} key={`${item.name}`}>
                <TextField {...item} {...item.props} />
              </Grid>
            ))}
          </Grid>
        }
      />
    </FormContainer>
  );
};

export default ProfileForm;
