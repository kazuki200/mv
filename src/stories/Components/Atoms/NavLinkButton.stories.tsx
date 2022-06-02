import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavLinkButton } from "../Atoms/NavLinkButton";

export default {
  title: "Atoms/NavLinkButton",
  component: NavLinkButton,
} as ComponentMeta<typeof NavLinkButton>;

const Template: ComponentStory<typeof NavLinkButton> = (args) => (
  <NavLinkButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
};
