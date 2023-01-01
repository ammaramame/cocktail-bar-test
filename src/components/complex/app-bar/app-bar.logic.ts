import { PaletteOptions } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/store-hooks";
import { useEffect } from "react";
import i18n from "setups/language";
import { setLanguage, setMode } from "store/slices/app";

export const useLogic = () => {
  const { activeSlideIndex } = useAppSelector((root) => root.slider);

  const { mode, language } = useAppSelector((root) => root.app);

  const dispacher = useAppDispatch();

  const changeColorMode = (mode: PaletteOptions["mode"]) => {
    dispacher(setMode(mode));
  };

  const changeLanguage = (language: "en" | "tr") => {
    dispacher(setLanguage(language));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return { activeSlideIndex, changeColorMode, mode, changeLanguage, language };
};
