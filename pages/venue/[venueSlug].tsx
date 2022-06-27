import { Box, Container } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import { NavToolbar } from '../../components/layout/NavToolbar'
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

  useEffect(() => {
    if (venue) {
      setVenue(venue)
    }
  }, [])

  if (!venue || !categories) {
    return null
  }

  // const { categoriesWithProduct } = useLocalCategoryService()
  // const { searchResult } = useLocalProductSearchService()
  // const { getTotalItems } = useLocalCartService()
  // const navigate = useNavigate()
  // const location = useLocation()

  return (
    <Container
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar title={venue.name} />
      <Box
        sx={{
          position: 'fixed',
          top: '3.5rem',
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <NavToolbar />
      </Box>
      {/*<Box height="7rem"/>*/}
      {/*{searchResult ? searchResult.map((category: CategoryWithProducts) => (category.products.length > 0 &&*/}
      {/*    <ProductList key={category.name} products={category.products} title={category.name}/>*/}
      {/*)) : categoriesWithProduct.map((category: CategoryWithProducts) => (category.products.length > 0 &&*/}
      {/*    <ProductList key={category.name} products={category.products} title={category.name}/>*/}
      {/*))}*/}
      {/*{searchResult && searchResult.length === 0 && <p>No result</p>}*/}
      {/*<Footer/>*/}
      {/*<Box height="5rem"/>*/}
      {/*<BaseContainer*/}
      {/*  sx={{*/}
      {/*    position: "fixed",*/}
      {/*    width: "100%",*/}
      {/*    bottom: 0,*/}
      {/*    background: "rgba(255, 255, 255, 0.8)",*/}
      {/*    backdropFilter: "blur(4px)"*/}
      {/*  }}>*/}
      {/*  {getTotalItems() > 0 && <Box sx={{*/}
      {/*    position: "absolute",*/}
      {/*    left: 0,*/}
      {/*    top: 0,*/}
      {/*    bottom: 0,*/}
      {/*    pl: "1.8rem",*/}
      {/*    display: "flex",*/}
      {/*    alignItems: "center",*/}
      {/*    zIndex: theme => theme.zIndex.appBar*/}
      {/*  }}>*/}
      {/*      <Typography variant="h6" color="secondary" sx={{*/}
      {/*        background: "white",*/}
      {/*        textAlign: "center",*/}
      {/*        padding: "0 0.6rem",*/}
      {/*        borderRadius: "10%"*/}
      {/*      }}>{getTotalItems()}</Typography>*/}
      {/*  </Box>}*/}
      {/*  <Button variant="contained" color="secondary" onClick={() => navigate("order", { state: { from: location } })}*/}
      {/*          sx={{ height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600 }}>View*/}
      {/*    order</Button>*/}
      {/*</BaseContainer>*/}
    </Container>
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
