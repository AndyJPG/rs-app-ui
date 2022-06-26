import CloseIcon from '@mui/icons-material/Close'
import { Box, Drawer, IconButton } from '@mui/material'
import { useSidePanel } from '../../state/store/store'

export const SidePanel = () => {
  const sidePanelProps = useSidePanel((state) => state.sidePanelProps)
  const closeSidePanel = useSidePanel((state) => state.closeSidePanel)

  const onDrawerClose = () => {
    closeSidePanel()
  }

  const {
    anchor,
    open,
    paperProps,
    showCloseIcon,
    children,
    transitionDuration,
  } = sidePanelProps

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onDrawerClose}
      transitionDuration={transitionDuration}
      PaperProps={paperProps}
      disableScrollLock={true}
    >
      {showCloseIcon && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: '-3rem',
          }}
        >
          <IconButton
            color="primary"
            size="large"
            sx={{ color: 'white' }}
            onClick={onDrawerClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      {children}
    </Drawer>
  )
}
