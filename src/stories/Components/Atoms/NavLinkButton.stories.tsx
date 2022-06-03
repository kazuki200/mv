import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavLinkButton } from "./NavLinkButton";

export default {
  title: "Atoms/NavLinkButton",
  component: NavLinkButton,
} as ComponentMeta<typeof NavLinkButton>;

const Template: ComponentStory<typeof NavLinkButton> = (args) => (
  <NavLinkButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "映画",
  href: "/movie",
};
Primary.parameters = {
  backgrounds: { default: "headerColor" },
};
