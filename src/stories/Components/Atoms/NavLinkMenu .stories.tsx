import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavLinkMenu } from "./NavLinkMenu ";

export default {
  title: "Atoms/NavLinkMenu",
  component: NavLinkMenu,
} as ComponentMeta<typeof NavLinkMenu>;

const Template: ComponentStory<typeof NavLinkMenu> = (args) => (
  <NavLinkMenu {...args} />
);

export const Default = Template.bind({});

Default.args = {
  link: [
    { label: "人気", href: "test1" },
    { label: "上映中", href: "test2" },
    { label: "近日公開", href: "test3" },
    { label: "高評価", href: "test4" },
  ],
};
Default.parameters = {
  backgrounds: { default: "headerColor" },
};
