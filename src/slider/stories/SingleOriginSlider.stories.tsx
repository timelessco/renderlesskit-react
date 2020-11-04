import * as React from "react";
import { Meta, Story } from "@storybook/react";

import "./Slider.css";
import {
  singleAppTemplate,
  singleAppTemplateJs,
  cssTemplate,
} from "./templates";
import { createPreviewTabs } from "../../../scripts/create-preview-tabs";
import { App as SingleOriginSlider } from "./SingleOriginSlider.component";

export default {
  component: SingleOriginSlider,
  title: "Slider/SingleOrigin",
  parameters: {
    preview: createPreviewTabs({
      js: singleAppTemplateJs,
      ts: singleAppTemplate,
      css: cssTemplate,
    }),
  },
} as Meta;

const Base: Story = args => <SingleOriginSlider {...args} />;

export const Default = Base.bind({});

export const ThumbTip = Base.bind({});
ThumbTip.args = {
  label: "Thumb Tipped",
  showTip: true,
};

export const MinMax = Base.bind({});
MinMax.args = {
  label: "Min Max",
  min: -20,
  max: +20,
};

export const Step = Base.bind({});
Step.args = {
  label: "Stepped",
  step: 1,
};

export const DefaultValue = Base.bind({});
DefaultValue.args = {
  label: "Default Valued",
  values: [-5],
};

export const FormatOptions = Base.bind({});
FormatOptions.args = {
  label: "Temperature Formatted",
  formatOptions: {
    style: "unit",
    unit: "celsius",
    unitDisplay: "narrow",
  },
};

export const Disabled = Base.bind({});
Disabled.args = {
  label: "Disabled",
  isDisabled: true,
};