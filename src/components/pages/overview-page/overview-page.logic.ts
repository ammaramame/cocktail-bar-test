import { useAppDispatch, useAppSelector } from "hooks/store-hooks";
import { setActiveSlide } from "store/slices/slider";

export const useLogic = () => {
  const dispatcher = useAppDispatch();

  const submittedFormData = useAppSelector((root) => root.submittedData);

  const goToPrevious = () => dispatcher(setActiveSlide(1));

  const showResult = () => dispatcher(setActiveSlide(4));

  return { submittedFormData, goToPrevious, showResult };
};
