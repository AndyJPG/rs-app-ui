import MenuIcon from '@mui/icons-material/Menu'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { VenueModel } from '../../model/venue'
import { useSidePanel } from '../../state/store/store'
import Menu from './Menu'

interface NavbarProps {
  venue?: VenueModel
  title?: string
}

const Navbar = (props: NavbarProps) => {
  const router = useRouter()
  const { venue, title } = props
  const navbarTitle = venue ? venue.name : title
  const openSidePanel = useSidePanel((state) => state.openSidePanel)

  const logoClickHandler = () => {
    venue && router.push('/venue/' + venue.slug)
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
            {navbarTitle}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
