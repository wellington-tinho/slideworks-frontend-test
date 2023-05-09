import { useQuery } from "@tanstack/react-query";
import api from "../service/api";

export function useFetch<T = unknown>(url: string) {
  return useQuery<T>(
    [url],
    async () => {
      const { data } = await api.get(url);
      return data;
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    }
  );
}
