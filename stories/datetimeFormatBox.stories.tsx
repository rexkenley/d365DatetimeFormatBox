import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@fluentui/react/lib/Icons";

import DatetimeFormatBox from "../src/tsx/datetimeFormatBox";

initializeIcons();

export default {
  title: "MaskedDateTimeBox",
  component: DatetimeFormatBox
};

const Template: Story<ComponentProps<typeof DatetimeFormatBox>> = (args) => (
  <DatetimeFormatBox {...args} />
);

export const InitializeControl = Template.bind({});
InitializeControl.args = {
  formatString: "MM/dd/yyyy",
  value: new Date(Date.now())
};

export const DisableControl = Template.bind({});
DisableControl.args = {
  formatString: "MM/dd/yyyy",
  value: new Date(Date.now()),
  disabled: true
};

export const HideControl = Template.bind({});
HideControl.args = { hidden: true };

export const OnChangeControl = Template.bind({});
OnChangeControl.args = {
  formatString: "MM/dd/yyyy",
  value: new Date(Date.now()),
  onChange: action("onChange")
};

export const DateFormatddMMyyyy = Template.bind({});
DateFormatddMMyyyy.storyName = "Date Format dd.MM.yyyy";
DateFormatddMMyyyy.args = {
  formatString: "dd.MM.yyyy",
  value: new Date(Date.now()),
  onChange: action("onChange")
};
