import create from 'zustand'
import { SidePanelProps } from '../../model/globalComponents'
import { VenueModel } from '../../model/venue'

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
    setState(({ sidePanelProps }) => ({
      sidePanelProps: {
        ...props,
        children: props.children || sidePanelProps.children,
        anchor: props.anchor || sidePanelProps.anchor,
        open: props.open !== undefined ? props.open : true,
        paperProps: props.paperProps || sidePanelProps.paperProps,
        transitionDuration:
          props.transitionDuration || sidePanelProps.transitionDuration,
      },
    })),
  closeSidePanel: () =>
    setState((state) => ({
      sidePanelProps: { ...state.sidePanelProps, open: false },
    })),
}))

interface VenueState {
  venue: VenueModel | null
  setVenue: (venue: VenueModel | null) => void
}

export const useVenue = create<VenueState>((setState) => ({
  venue: null,
  setVenue: (venue) => setState((state) => ({ venue: venue })),
}))
