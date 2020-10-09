import * as React from "react";
import { useControllableState } from "@chakra-ui/hooks";

import { useSegmentState } from "../segment";
import { DateTimeFormatOptions } from "../utils/types";
import { useTimePickerColumnState } from "./TimePickerColumnState";
import { PickerBaseInitialState, usePickerBaseState } from "../picker-base";

export interface TimePickerStateProps extends PickerBaseInitialState {
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  formatOptions?: DateTimeFormatOptions;
  placeholderDate?: Date;
}

export const useTimePickerState = (props: TimePickerStateProps = {}) => {
  const {
    value: initialValue,
    defaultValue: defaultValueProp,
    onChange,
    formatOptions = { timeStyle: "short" },
    placeholderDate,
  } = props;

  const [timeProp, setTimeProp] = useControllableState({
    value: initialValue,
    defaultValue: defaultValueProp,
    onChange,
  });

  const defaultValue =
    defaultValueProp && isValidTime(defaultValueProp)
      ? parseTime(defaultValueProp)
      : parseTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
  const time = timeProp == null ? defaultValue : parseTime(timeProp);

  const [hour, setHourProp] = React.useState(time?.getHours() % 12 || 12);
  const [minute, setMinuteProp] = React.useState(time?.getMinutes());
  const [meridian, setMeridianProp] = React.useState(
    time?.getHours() >= 12 ? 1 : 0,
  );

  const setSegmentTime = (date: Date) => {
    setHourProp(date.getHours() % 12 || 12);
    setMinuteProp(date.getMinutes());
    setMeridianProp(date.getHours() >= 12 ? 1 : 0);
    setTimeProp(`${pad(date.getHours())}:${pad(date.getMinutes())}`);
  };

  const segmentState = useSegmentState({
    value: time,
    defaultValue,
    onChange: setSegmentTime,
    formatOptions,
    placeholderDate,
  });

  const popover = usePickerBaseState({ focus: segmentState.first });

  const setTime = (hour: number, minute: number, meridian: number) => {
    if (meridian === 1) {
      hour = +hour + 12;
    } else {
      hour = hour % 12;
    }

    setTimeProp(`${pad(hour)}:${pad(minute)}`);
  };

  const setHour = (hour: number) => {
    setHourProp(hour);
    setTime(hour, minute, meridian);
    popover.hide();
  };

  const setMinute = (minute: number) => {
    setMinuteProp(minute);
    setTime(hour, minute, meridian);
    popover.hide();
  };

  const setMeridian = (meridianValue: number) => {
    setMeridianProp(meridianValue);
    setTime(hour, minute, meridianValue);
    popover.hide();
  };

  const hourState = useTimePickerColumnState({
    value: hour,
    onChange: setHour,
    visible: popover.visible,
  });

  const minuteState = useTimePickerColumnState({
    value: minute,
    onChange: setMinute,
    visible: popover.visible,
  });

  const meridiesState = useTimePickerColumnState({
    value: meridian,
    onChange: setMeridian,
    visible: popover.visible,
  });

  const hours = [...new Array(13).keys()].slice(1);
  const minutes = [...new Array(60).keys()];
  const meridies = ["AM", "PM"];

  return {
    time,
    hours,
    minutes,
    meridies,
    hourState,
    minuteState,
    meridiesState,
    ...popover,
    ...segmentState,
  };
};

export type TimePickerStateReturn = ReturnType<typeof useTimePickerState>;

function isValidTime(timeString: string | undefined) {
  if (!timeString) return false;

  const time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
  if (time == null) return false;

  return true;
}

function parseTime(timeString: string) {
  const time = timeString.split(":");

  const date = new Date();
  date.setHours(parseInt(time[0], 10));
  date.setMinutes(parseInt(time[1], 10));
  date.setSeconds(0, 0);
  return date;
}

function pad(number: number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
