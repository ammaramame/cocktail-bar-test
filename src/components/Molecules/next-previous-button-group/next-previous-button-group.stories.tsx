import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NextPreviousButtonGroup from "./next-previous-button-group";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/next-previous-button-group",
  component: NextPreviousButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NextPreviousButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NextPreviousButtonGroup> = (args) => <NextPreviousButtonGroup {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  nextLabel: "Next Step",
  previousLabel: "Previous Step",
  showNextButton: true,
  showPreviousButton: true,
};
