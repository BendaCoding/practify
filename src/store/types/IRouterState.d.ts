declare interface IRouterState {
  location: {
    pathname: string;
    search: string;
    hash: string;
    key: string;
  }
  action: string;
}