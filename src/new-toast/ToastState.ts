import * as React from "react";

export interface Toast {
  id: string;
  visible: boolean;
  pauseDuration: number;
  reverseOrder: boolean;
}

export interface State<T> {
  toasts: T[];
}

const TOAST_LIMIT = 20;

export enum ActionType {
  ADD_TOAST,
  UPDATE_TOAST,
  UPDATE_ALL_TOAST,
  UPSERT_TOAST,
  DISMISS_TOAST,
  REMOVE_TOAST,
  START_PAUSE,
  END_PAUSE,
}

export type Action<T> =
  | {
      type: ActionType.ADD_TOAST;
      toast: T;
    }
  | {
      type: ActionType.UPSERT_TOAST;
      toast: T;
    }
  | {
      type: ActionType.UPDATE_TOAST;
      toast: Partial<T>;
    }
  | {
      type: ActionType.UPDATE_ALL_TOAST;
      toast: Partial<T>;
    }
  | {
      type: ActionType.DISMISS_TOAST;
      toastId?: string;
    }
  | {
      type: ActionType.REMOVE_TOAST;
      toastId?: string;
    }
  | {
      type: ActionType.START_PAUSE;
      time: number;
    }
  | {
      type: ActionType.END_PAUSE;
      time: number;
    };

const reducer = <T extends Toast>(
  state: State<T>,
  action: Action<T>,
): State<T> => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return {
        ...state,
        toasts: action.toast.reverseOrder
          ? [...state.toasts, action.toast].slice(0, TOAST_LIMIT)
          : [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case ActionType.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case ActionType.UPDATE_ALL_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t => ({ ...t, ...action.toast })),
      };

    case ActionType.UPSERT_TOAST:
      const { toast } = action;
      return state.toasts.find(t => t.id === toast.id)
        ? reducer(state, { type: ActionType.UPDATE_TOAST, toast })
        : reducer(state, { type: ActionType.ADD_TOAST, toast });

    case ActionType.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toastId || action.toastId === undefined
            ? {
                ...t,
                visible: false,
              }
            : t,
        ),
      };

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }

      return {
        ...state,
        toasts: state.toasts.filter(t => t.id !== action.toastId),
      };
  }

  return state;
};

const initialState = { toasts: [] };

export const useToastState = <T extends Toast>() => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<T>, Action<T>>
  >(reducer, initialState);

  return { ...state, dispatch };
};
