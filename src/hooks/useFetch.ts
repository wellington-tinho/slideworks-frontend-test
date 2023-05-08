import useSWR from "swr";
import api from "../service/api";

export function useFetch<Data = unknown, Error = unknown>(url: string) {
  // use swr hook to fetch data from api and cache it
  return useSWR<Data, Error>(
    url,
    async (url) => {
      try {
        const response = await api.get(url).then((response) => {
          if (response.status != 200) {
            throw "Something went wrong";
          }
          return response;
        });
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
    {
      // swrOptions
      onErrorRetry: (_error, _key, _config, revalidate, { retryCount }) => {
        // Only retry up to 3 times.
        if (retryCount >= 3) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
      revalidateOnFocus: false,
    }
  );
}
