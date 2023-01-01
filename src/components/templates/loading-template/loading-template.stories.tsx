import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingTemplate from "./loading-template";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "templates/LoadingTemplate",
  component: LoadingTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoadingTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingTemplate> = (args) => <LoadingTemplate {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  loading: false,
  children: "test",
};
