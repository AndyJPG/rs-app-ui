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
  const venue = useVenue((state) => state.venue)
  const openSidePanel = useSidePanel((state) => state.openSidePanel)

  const navbarTitle = () => {
    if (router.pathname === '/venue/[venueSlug]') {
      return venue ? venue.name : ''
    }

    return title || ''
  }

  const logoClickHandler = () => {
    if (router.pathname === '/venue/[venueSlug]') {
      venue && router.push('/venue/' + venue.slug)
    }
  }

  return (
    <AppBar color="primary">
      <Toolbar>
        <Box flex={0.1}>
          {venue ? (
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
        {navbarTitle && (
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.25rem',
              flexGrow: 1,
              color: 'inherit',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            onClick={logoClickHandler}
          >
            {navbarTitle()}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
