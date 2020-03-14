export type SidebarOrientation = 'top' | 'left';

export type SidebarPanelKey = 'broadcasts' | 'todos' | 'statusupdate' | '';

export type SidebarPanelProps = {
  orientation: SidebarOrientation;
  collapsed: boolean;
  showPanel: boolean;
  currentPanel: SidebarPanelKey;
  hidePanel: () => void;
  onShowPanel: () => void;
};
