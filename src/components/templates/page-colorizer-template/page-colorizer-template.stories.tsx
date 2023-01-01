import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageColorizerTemplate from "./page-colorizer-template";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "templates/PageColorizerTemplate",
  component: PageColorizerTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof PageColorizerTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageColorizerTemplate> = (args) => <PageColorizerTemplate {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "",
  children: "page content",
};
