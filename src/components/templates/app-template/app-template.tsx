import { FunctionComponent, ReactNode } from "react";

interface AppTemplateProps {
  header?: ReactNode;
  body?: ReactNode;
}

const AppTemplate: FunctionComponent<AppTemplateProps> = (props) => {
  const { body, header } = props;

  return (
    <>
      {header}
      {body}
    </>
  );
};

export default AppTemplate;
