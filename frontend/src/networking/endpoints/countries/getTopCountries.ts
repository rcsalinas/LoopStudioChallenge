import api from '../../api'
import { configuration } from '../../../config/configuration'
import { ErrorResponse, Response } from '../../../interfaces/apiInterfaces'

const getTopCountries = async () => {
  try {
    const response = await api.get(configuration.BASE_URL + 'countries/top')

    const data = await response.data
    const responseMessage: Response = {
      data: data,
      statusCode: response.status
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

export default getTopCountries
