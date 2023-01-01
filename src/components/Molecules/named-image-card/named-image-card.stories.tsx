import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NamedImageCard from "./named-image-card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "molecules/NamedImageCard",
  component: NamedImageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NamedImageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NamedImageCard> = (args) => <NamedImageCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  caption: "Test Caption",
  url: "https://picsum.photos/200/300",
  details: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
  tags: ["Galliano", "Ginger ale", "Ice"],
};
