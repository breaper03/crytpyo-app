const API = "466d78a5be37750bf562782e";

export const getCurrency = async (coin: string) => {
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${API}/latest/${coin}`)
  const data = await res.json()
  return data
}
