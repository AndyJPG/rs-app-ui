import axios from 'axios'
import { CategoryModel } from '../model/category'
import { VenueModel } from '../model/venue'

const venueAxiosInstance = axios.create({
  baseURL: process.env.DEV_API_ENDPOINT,
})

export const venueApi = {
  async searchVenue(query?: { venueSlug?: string }): Promise<VenueModel[]> {
    try {
      return await venueAxiosInstance
        .post('/venue/search', query)
        .then((res) => res.data)
    } catch (e) {
      console.log(e)
      return []
    }
  },
}

export const categoryApi = {
  async getCategoriesByVenueId(venueId: string): Promise<CategoryModel[]> {
    try {
      return await venueAxiosInstance
        .get(`/venue/${venueId}/categories`)
        .then((res) => res.data)
    } catch (e) {
      console.log(e)
      return []
    }
  },
}
