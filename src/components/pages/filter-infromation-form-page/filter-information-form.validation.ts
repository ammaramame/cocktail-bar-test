import * as yup from "yup";

export const validationSchema = yup.object().shape({
  category: yup.string().required(),
  drink_type: yup.string().required(),
  glass_type: yup.string().required(),
  ingredients: yup.array().of(yup.string()).min(1),
});
