import ProfileForm from "components/organisms/profile-form/profile-form";
import FormPageTemplate from "components/templates/form-page-template/form-page-template";
import PageColorizerTemplate from "components/templates/page-colorizer-template/page-colorizer-template";
import { FunctionComponent } from "react";
import { useLogic } from "./basic-information-form-page.logic";

interface BasicInformationFormPageProps {}

const BasicInformationFormPage: FunctionComponent<BasicInformationFormPageProps> = () => {
  const { filterForm, handleFormFieldChange } = useLogic();
  return (
    <PageColorizerTemplate color="#283593">
      <FormPageTemplate containerMaxWidth={600}>
        <ProfileForm
          barNameInputProps={{ onChange: handleFormFieldChange, value: filterForm.values["bar_name"], error: Boolean(filterForm.errors["bar_name"]), helperText: filterForm.errors["bar_name"] }}
          ownerFirstNameInputProps={{ onChange: handleFormFieldChange, value: filterForm.values["first_name"], error: Boolean(filterForm.errors["first_name"]), helperText: filterForm.errors["bar_name"] }}
          ownerLastNameInputProps={{ onChange: handleFormFieldChange, value: filterForm.values["last_name"], error: Boolean(filterForm.errors["last_name"]), helperText: filterForm.errors["last_name"] }}
          phoneInputProps={{ onChange: handleFormFieldChange, value: filterForm.values["phone"], error: Boolean(filterForm.errors["phone"]), helperText: filterForm.errors["phone"] }}
          emailInputProps={{ onChange: handleFormFieldChange, value: filterForm.values["email"], error: Boolean(filterForm.errors["email"]), helperText: filterForm.errors["email"] }}
          formActionButtonsProps={{ nextButtonProps: { onClick: () => filterForm.submitForm() } }}
        />
      </FormPageTemplate>
    </PageColorizerTemplate>
  );
};

export default BasicInformationFormPage;
