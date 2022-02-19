const LOCAL_STORAGE_TOKEN = "_misago_admin_token"

const getAuthToken = () => {
  return window.localStorage.getItem(LOCAL_STORAGE_TOKEN)
}

const setAuthToken = (token: string) => {
  window.localStorage.setItem(LOCAL_STORAGE_TOKEN, token)
}

const clearAuthToken = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_TOKEN)
}

export { clearAuthToken, getAuthToken, setAuthToken }
