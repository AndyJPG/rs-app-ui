import MenuIcon from '@mui/icons-material/Menu'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useSidePanel, useVenue } from '../../state/store/store'
import Menu from './Menu'

interface NavbarProps {
  title?: string
}

const Navbar = (props: NavbarProps) => {
  const router = useRouter()
  const { title } = props
  const openSidePanel = useSidePanel((state) => state.openSidePanel)

  return (
    <AppBar color="primary">
      <Toolbar>
        <Box flex={0.1}>
          {router.pathname === '/venue/[venueSlug]' ? (
            <IconButton
              color="inherit"
              sx={{ padding: 0 }}
              onClick={() =>
                openSidePanel({
                  children: <Menu />,
                  showCloseIcon: true,
                  anchor: 'left',
                })
              }
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              sx={{ padding: 0 }}
              onClick={() => {
                router.push(
                  router.asPath.substring(0, router.asPath.lastIndexOf('/'))
                )
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )}
        </Box>
        {title && (
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
