import axios from "axios"

const venueAxiosInstance = axios.create({
  baseURL: process.env.DEV_API_ENDPOINT
})

export const venueApi = {
  async searchVenue(query?: { venueSlug?: string }): Promise<any> {
    try {
      return await venueAxiosInstance.post("/venue/search", query).then(res => res.data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const categoryApi = {
  async getCategoriesByVenueId(venueId: string): Promise<any> {
    try {
      return await venueAxiosInstance.get(`/venue/${venueId}/categories`).then(res => res.data)
    } catch (e) {
      console.log(e)
    }
  }
}