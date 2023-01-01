import { Box, Button, Typography } from "@mui/material";
import NamedImageCard from "components/Molecules/named-image-card/named-image-card";
import ImagesPageTemplate from "components/templates/images-page-template/images-page-template";
import LoadingTemplate from "components/templates/loading-template/loading-template";
import PageColorizerTemplate from "components/templates/page-colorizer-template/page-colorizer-template";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useLogic } from "./result-page.logic";

interface ResultPageProps {}

const ResultPage: FunctionComponent<ResultPageProps> = () => {
  const { resultArray, isLoading, goToFilter } = useLogic();

  const { t } = useTranslation();
  return (
    <LoadingTemplate loading={isLoading}>
      <PageColorizerTemplate>
        <ImagesPageTemplate
          header={
            <Box textAlign="center" py={2}>
              <Button variant="contained" color="info" onClick={goToFilter}>
                {t("Change Filter")}
              </Button>
            </Box>
          }
          emptyPageComponent={
            <Box position="absolute" width="100%" height="100%" display="flex" alignItems={"center"} justifyContent="center">
              <Typography variant="h4">{t("No Result Found")}!</Typography>
            </Box>
          }
          items={resultArray.map((item) => (
            <NamedImageCard
              containerProps={{ height: "100%" }}
              key={item.idDrink}
              url={item.strDrinkThumb}
              caption={item.strDrink}
              details={item.strInstructions}
              tags={Object.entries(item)
                .map((entryItem) => (entryItem[0].includes("strIngredient") ? entryItem[1] : null))
                .filter((filterItem) => Boolean(filterItem))}
            />
          ))}
        />
      </PageColorizerTemplate>
    </LoadingTemplate>
  );
};

export default ResultPage;
