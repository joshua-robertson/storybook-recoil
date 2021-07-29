import React from "react";
import { Button } from "./components/Button/Button";

export default {
  title: "Button",
  component: Button
};

const Template = (args) => 
<RecoilRoot>
  <Button {...args} />
</RecoilRoot>

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
