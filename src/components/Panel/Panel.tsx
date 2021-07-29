import React from "react";
import { AddonPanel } from "@storybook/components";
import { RecoilState } from "../RecoilState/RecoilState";
import { RecoilRoot } from "recoil";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <RecoilRoot>
        <RecoilState />
      </RecoilRoot>
    </AddonPanel>
  );
};
