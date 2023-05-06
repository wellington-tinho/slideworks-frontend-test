import { useEffect, useState } from "react";
import api from "../service/api";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null >(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get(url).then((response) => {
      setData(response.data);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [url]);

  return {data, isloading}
}


