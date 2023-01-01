import { ComponentStory, ComponentMeta } from "@storybook/react";

import OverviewListItem from "./overview-list-item";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/OverviewListItem",
  component: OverviewListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof OverviewListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OverviewListItem> = (args) => <OverviewListItem {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Label",
  value: "Value",
};
