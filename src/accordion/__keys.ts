// Automatically generated
const ACCORDION_STATE_KEYS = [
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
  "allowToggle",
  "allowMultiple",
  "manual",
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
  "select",
  "unSelect",
  "registerPanel",
  "unregisterPanel",
  "selectedIds",
  "setSelectedIds",
  "selectedId",
  "setSelectedId",
] as const;
export const ACCORDION_KEYS = ACCORDION_STATE_KEYS;
export const ACCORDION_PANEL_KEYS = [...ACCORDION_KEYS, "accordionId"] as const;
export const ACCORDION_TRIGGER_KEYS = ACCORDION_KEYS;
