export interface ErrorResponse {
  errorMessage: string
  statusCode: number
}

export interface Response {
  statusCode: number
  responseMessage?: string
  data?: any
}

export interface Country {
  name: string
  officialName: string
  capital: string
  region: string
  subregion: string
  votes: number
}
