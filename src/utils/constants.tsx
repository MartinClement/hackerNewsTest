interface IContants {
  HN_BASE_API_URL: string,
}

export const constants: IContants = Object.freeze({
  HN_BASE_API_URL: import.meta.env.VITE_HN_BASE_API_URL,
})