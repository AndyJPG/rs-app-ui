import create from 'zustand'
import { SidePanelProps } from '../../model/globalComponents'

interface SidePanelState {
  sidePanelProps: SidePanelProps
  openSidePanel: (props: SidePanelProps) => void
  closeSidePanel: () => void
}

export const useSidePanel = create<SidePanelState>((setState) => ({
  sidePanelProps: {
    open: false,
    anchor: 'left',
    children: null,
  },
  openSidePanel: (props: SidePanelProps) =>
    setState((state) => ({ sidePanelProps: props })),
  closeSidePanel: () =>
    setState((state) => ({
      sidePanelProps: { ...state.sidePanelProps, open: false },
    })),
}))
