import { addons, types } from "@storybook/addons";
import { Panel } from "../components/Panel/Panel";
import { ADDON_ID, PANEL_ID } from "../constants";

// Register the addon
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Recoil State",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
