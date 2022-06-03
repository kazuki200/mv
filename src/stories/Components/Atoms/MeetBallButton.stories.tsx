import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MeetBallButton } from "./MeetBallButton";

export default {
  title: "Atoms/MeetBallButton",
  component: MeetBallButton,
} as ComponentMeta<typeof MeetBallButton>;

const Template: ComponentStory<typeof MeetBallButton> = (args) => (
  <MeetBallButton {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "headerColor" },
};
