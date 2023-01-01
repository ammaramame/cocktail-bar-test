import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImagesPageTemplate from "./images-page-template";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "templates/ImagesPageTemplate",
  component: ImagesPageTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ImagesPageTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImagesPageTemplate> = (args) => <ImagesPageTemplate {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: ["item1", "item2", "item3"],
};
