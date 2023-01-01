import { useFormik } from "formik";
import { useAppDispatch } from "hooks/store-hooks";
import { setActiveSlide } from "store/slices/slider";
import { setSubmittedData } from "store/slices/submitted-data";
import { validationSchema } from "./basic-information-form.validation";

export const useLogic = () => {
  const dispatcher = useAppDispatch();

  const filterForm = useFormik({
    initialValues: { bar_name: "", first_name: "", last_name: "", phone: "", email: "" },
    onSubmit: (values, actions) => {
      dispatcher(setSubmittedData(values));
      dispatcher(setActiveSlide(1));
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleFormFieldChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (e) => filterForm.setFieldValue(e.target.name, e.target.value);

  return { handleFormFieldChange, filterForm };
};
