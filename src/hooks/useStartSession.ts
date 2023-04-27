import useSWR from "swr"
import fetcher from "../lib/fetcher"

const useStartSession = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/startSession",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )
  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
export default useStartSession
