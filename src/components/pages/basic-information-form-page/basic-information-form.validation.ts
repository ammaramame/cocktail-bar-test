import * as yup from "yup";

export const validationSchema = yup.object().shape({
  bar_name: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
});
