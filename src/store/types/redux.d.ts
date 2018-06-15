declare interface IReduxApiStructure {
  error: boolean;
  errorObject: {
    message: string;
    global: boolean;
    code: number;
  };
  loading: boolean;
}

declare type ActionCreator = (...args: any[]) => { type: string };

declare type Handler<TState, T extends ActionCreator> = (
  state: TState,
  action: ReturnType<T>,
) => TState;

declare interface IActionCreators {
  [key: string]: ActionCreator;
}

declare type TypeSafeHandlers<TState, ActionMap> = {
  [K in keyof ActionMap]?: ActionMap[K] extends ActionCreator
    ? Handler<TState, ActionMap[K]>
    : void
};

declare type Handlers<TState, ActionMap extends IActionCreators> = {
  [K in keyof ActionMap]?: Handler<TState, ActionMap[K]>
};

/**
 *  A proxy of the store state.
 * This object always reflects the current state of the store
 */
declare type Proxy<T> = { [P in keyof T]: Proxy<T[P]> };
