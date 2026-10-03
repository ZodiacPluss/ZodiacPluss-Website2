// Backend base URL. Override per environment with VITE_API_BASE_URL.
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://zp-backend-mm0y.onrender.com').replace(
  /\/+$/,
  '',
)

export const API_PREFIX = '/api/v1'

export const apiUrl = (path: string) => `${API_BASE_URL}${API_PREFIX}${path}`

/** Shape every backend response is wrapped in. */
export interface ApiEnvelope<T> {
  success: boolean
  data?: T
}
