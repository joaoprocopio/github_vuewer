export const env = {
  isDev: import.meta.env.DEV,
  isMock: import.meta.env.VITE_API_MOCK === "true",
  apiMockUrl: import.meta.env.VITE_API_MOCK_URL,
  apiUrl: import.meta.env.VITE_API_PROD_URL,
}
