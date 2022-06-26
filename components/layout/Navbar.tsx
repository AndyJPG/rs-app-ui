import MenuIcon from '@mui/icons-material/Menu'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { VenueModel } from '../../model/venue'

interface NavbarProps {
  venue?: VenueModel
  title?: string
}

const Navbar = (props: NavbarProps) => {
  const router = useRouter()
  const { venue, title } = props
  const navbarTitle = venue ? venue.name : title

  const logoClickHandler = () => {
    venue && router.push('/venue/' + venue.slug)
  }

  return (
    <AppBar color="primary">
      <Toolbar>
        <Box flex={0.1}>
          {venue ? (
            <IconButton color="inherit" sx={{ padding: 0 }} onClick={() => {}}>
              <MenuIcon />
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
