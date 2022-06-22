import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { categoryApi, venueApi } from "../../lib/api"

const Venue: NextPage<{ venue: any, categories: any[] }> = (props) => {
  const router = useRouter()
  const { venueSlug } = router.query
  return <>
    <p>{venueSlug}</p>
    <Link href="/">Home page</Link>
    <pre>{JSON.stringify(props.venue, undefined, 2)}</pre>
    <pre>{JSON.stringify(props.categories, undefined, 2)}</pre>
  </>
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {}
//   }
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const venues = await venueApi.searchVenue({})
  console.log("venue", venues)

  const paths = venues.map((venue: { slug: string }) => ({
    params: { venueSlug: venue.slug }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ venue: any, categories: any[] }, { venueSlug: string }> = async (context) => {
  let venues: any[] = []
  let categories: any[] = []

  if (context.params) {
    const { venueSlug } = context.params
    venues = await venueApi.searchVenue({ venueSlug: venueSlug })
    categories = await categoryApi.getCategoriesByVenueId(venues[0].id)
  }

  return {
    props: {
      venue: venues[0],
      categories
    }
  }
}

export default Venue
