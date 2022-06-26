import { PaperProps } from '@mui/material'

type AnchorProps = 'top' | 'left' | 'bottom' | 'right'

export interface SidePanelProps {
  children?: React.ReactNode
  anchor?: AnchorProps
  showCloseIcon?: boolean
  open?: boolean
  paperProps?: Partial<PaperProps>
  transitionDuration?: number
}
