import create from 'zustand'
import { SidePanelProps } from '../../model/globalComponents'

interface SidePanelState {
  sidePanelProps?: SidePanelProps
  openSidePanel: (props: SidePanelProps) => void
}

export const useSidePanel = create<SidePanelState>((setState) => ({
  sidePanelProps: undefined,
  openSidePanel: (props: SidePanelProps) =>
    setState((state) => ({ sidePanelProps: props })),
}))
