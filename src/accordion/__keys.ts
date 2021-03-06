// Automatically generated
const ACCORDION_BASE_STATE_KEYS = [
  "baseId",
  "unstable_idCountRef",
  "unstable_virtual",
  "rtl",
  "orientation",
  "items",
  "groups",
  "currentId",
  "loop",
  "wrap",
  "shift",
  "unstable_moves",
  "unstable_hasActiveWidget",
  "unstable_includesBaseElement",
  "panels",
  "setBaseId",
  "registerItem",
  "unregisterItem",
  "registerGroup",
  "unregisterGroup",
  "move",
  "next",
  "previous",
  "up",
  "down",
  "first",
  "last",
  "sort",
  "unstable_setVirtual",
  "setRTL",
  "setOrientation",
  "setCurrentId",
  "setLoop",
  "setWrap",
  "setShift",
  "reset",
  "unstable_setIncludesBaseElement",
  "unstable_setHasActiveWidget",
  "registerPanel",
  "unregisterPanel",
] as const;
const ACCORDION_MULTI_STATE_KEYS = [
  ...ACCORDION_BASE_STATE_KEYS,
  "selectedIds",
  "allowToggle",
  "allowMultiple",
  "manual",
  "setSelectedIds",
  "select",
] as const;
const ACCORDION_STATE_KEYS = [
  ...ACCORDION_BASE_STATE_KEYS,
  "selectedId",
  "allowToggle",
  "allowMultiple",
  "manual",
  "setSelectedId",
  "select",
] as const;
export const ACCORDION_KEYS = [
  ...ACCORDION_MULTI_STATE_KEYS,
  ...ACCORDION_STATE_KEYS,
] as const;
export const ACCORDION_PANEL_KEYS = [...ACCORDION_KEYS, "accordionId"] as const;
export const ACCORDION_TRIGGER_KEYS = ACCORDION_KEYS;
