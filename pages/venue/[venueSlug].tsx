import { Container } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Navbar from '../../components/layout/Navbar'
import { categoryApi, venueApi } from '../../lib/api'
import { CategoryModel } from '../../model/category'
import { VenueModel } from '../../model/venue'
import { useVenue } from '../../state/store/store'

const Venue: NextPage = (props: {
  venue?: VenueModel
  categories?: CategoryModel[]
}) => {
  const { venue, categories } = props
  const setVenue = useVenue((state) => state.setVenue)

  if (!venue || !categories) {
    return null
  }

  setVenue(venue)

  return (
    <>
      <Navbar venue={venue} />
      <Container maxWidth="xl">
        <pre>{venue && JSON.stringify(venue, undefined, 2)}</pre>
        <pre>{categories && JSON.stringify(categories, undefined, 2)}</pre>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  venue?: VenueModel
  categories?: CategoryModel[]
}> = async (context) => {
  let venue: VenueModel | undefined
  let categories: CategoryModel[] | undefined
  const { venueSlug } = context.params as { venueSlug: string }

  try {
    const venuesData = await venueApi.searchVenue({ venueSlug: venueSlug })
    if (venuesData.length > 0) {
      venue = venuesData[0]
      categories = await categoryApi.getCategoriesByVenueId(venuesData[0].id)
    }
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      venue,
      categories,
    },
  }
}

export default Venue
