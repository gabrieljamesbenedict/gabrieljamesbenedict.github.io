export const WORKSPACE_SELECT_EVENT = "workspace:select";

export const selectWorkspaceFile = (path: string): void => {
  window.dispatchEvent(new CustomEvent<string>(WORKSPACE_SELECT_EVENT, { detail: path }));
};

export const onWorkspaceSelect = (callback: (path: string) => void): (() => void) => {
  const handler = (event: Event): void => {
    callback((event as CustomEvent<string>).detail);
  };
  window.addEventListener(WORKSPACE_SELECT_EVENT, handler);
  return () => window.removeEventListener(WORKSPACE_SELECT_EVENT, handler);
};
