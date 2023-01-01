import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormTemplate from "./form-template";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "templates/FormTemplate",
  component: FormTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FormTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormTemplate> = (args) => <FormTemplate {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: "header",
  body: "body",
  footer: "footer",
};
