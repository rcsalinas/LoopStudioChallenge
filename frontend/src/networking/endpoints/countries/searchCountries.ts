import api from '../../api'
import { configuration } from '../../../config/configuration'
import { ErrorResponse, Response } from '../../../interfaces/apiInterfaces'

const searchCountries = async (query: string) => {
  try {
    const response = await api.get(configuration.BASE_URL + 'countries/search', {
      params: { query: query }
    })

    const data = await response.data
    const responseMessage: Response = {
      statusCode: response.status,
      data: data
    }
    return responseMessage
  } catch (error: any) {
    const errorResponse: ErrorResponse = {
      errorMessage: error.response?.data?.message,
      statusCode: error.response?.status
    }
    throw errorResponse
  }
}

export default searchCountries
