import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, options: object = {}) {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some error occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, error, pending}
}
