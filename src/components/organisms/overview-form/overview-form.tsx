import { Box, Divider, List, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FormContainer from "components/atoms/form-container/form-container";
import FormHeader from "components/atoms/form-header/form-header";
import NextPreviousButtonGroup, { NextPreviousButtonGroupProps } from "components/Molecules/next-previous-button-group/next-previous-button-group";
import OverviewListItem from "components/Molecules/overview-list-item/overview-list-item";
import UserItem from "components/Molecules/user-item/user-item";
import FormTemplate from "components/templates/form-template/form-template";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface OverviewFormProps {
  barName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  category?: string;
  drinkType?: string;
  glassType?: string;
  ingredients?: string[];
  formActionButtonsProps?: Pick<NextPreviousButtonGroupProps, "nextButtonProps" | "previousButtonProps">;
}

const OverviewForm: FunctionComponent<OverviewFormProps> = (props) => {
  const { t } = useTranslation();

  const { barName, category, drinkType, email, firstName, glassType, ingredients, lastName, phone, formActionButtonsProps } = props;
  const OverviewInfo = {
    barName: barName,
    firstName: firstName,
    lastName: lastName,
    personalInfo: [
      { label: t("Email"), value: email },
      { label: t("Phone"), value: phone },
    ],
    FilterPreference: [
      { label: t("Category"), value: category },
      { label: t("Drink Type"), value: drinkType },
      { label: t("Glass Type"), value: glassType },
      { label: t("Ingredients"), value: ingredients },
    ],
  };

  const sectionalData = [OverviewInfo.personalInfo, OverviewInfo.FilterPreference];

  return (
    <FormContainer>
      <FormTemplate
        header={<FormHeader label={t("Overview")} />}
        footer={<NextPreviousButtonGroup showNextButton showPreviousButton nextLabel={t("Show Result") ?? undefined} {...formActionButtonsProps} />}
        body={
          <Grid container>
            <Grid xs={12}>
              <Box textAlign={"center"}>
                <Typography fontWeight={600}>{OverviewInfo.barName}</Typography>
              </Box>
            </Grid>
            <Grid xs={12}>
              <List>
                <Divider />
                <UserItem label="Owner" value={`${OverviewInfo.firstName} ${OverviewInfo.lastName}`} />
                <Divider />
              </List>
            </Grid>
            <Grid xs={12}>
              {sectionalData.map((secionalItem, index) => (
                <Grid container key={index}>
                  {secionalItem.map((item) => (
                    <Grid xs={12} key={item.label}>
                      <Grid xs={12}>
                        <OverviewListItem {...item} />
                      </Grid>
                    </Grid>
                  ))}
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        }
      />
    </FormContainer>
  );
};

export default OverviewForm;
