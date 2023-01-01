import OverviewForm from "components/organisms/overview-form/overview-form";
import FormPageTemplate from "components/templates/form-page-template/form-page-template";
import PageColorizerTemplate from "components/templates/page-colorizer-template/page-colorizer-template";
import { FunctionComponent } from "react";
import { useLogic } from "./overview-page.logic";

interface OverviewPageProps {}

const OverviewPage: FunctionComponent<OverviewPageProps> = () => {
  const { submittedFormData, goToPrevious, showResult } = useLogic();

  return (
    <PageColorizerTemplate color="#2e7d32">
      <FormPageTemplate containerMaxWidth={800}>
        <OverviewForm
          phone={submittedFormData.values.phone}
          lastName={submittedFormData.values.last_name}
          firstName={submittedFormData.values.first_name}
          email={submittedFormData.values.email}
          barName={submittedFormData.values.bar_name}
          category={submittedFormData.values.category}
          drinkType={submittedFormData.values.drink_type}
          glassType={submittedFormData.values.glass_type}
          ingredients={submittedFormData.values.ingredients}
          formActionButtonsProps={{ previousButtonProps: { onClick: () => goToPrevious() }, nextButtonProps: { onClick: () => showResult() } }}
        />
      </FormPageTemplate>
    </PageColorizerTemplate>
  );
};

export default OverviewPage;
