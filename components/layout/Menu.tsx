import { Box, Container, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { useVenue } from '../../state/store/store'

const Menu = () => {
  const venue = useVenue((state) => state.venue)

  if (!venue) {
    return null
  }

  const { name, slug, logo, location, phone } = venue

  return (
    <Container
      sx={{
        width: '17.5rem',
        height: '100%',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Container sx={{ padding: '3.5rem 2rem 0 2rem' }}>
        {logo && (
          <Box sx={{ height: '3rem' }}>
            <Link href={`/venue/${slug}`}>
              <img src={logo} style={{ height: '100%' }} alt={name + ' logo'} />
            </Link>
          </Box>
        )}
      </Container>
      <Container sx={{ padding: '0 2rem 3.5rem 2rem' }}>
        <MuiLink
          variant="body2"
          target="_blank"
          underline="hover"
          // href={companyAddressUrl}
        >
          {location}
        </MuiLink>
        <MuiLink variant="body2" underline="hover" href={`tel:${phone}`}>
          {phone}
        </MuiLink>
      </Container>
    </Container>
  )
}

export default Menu
