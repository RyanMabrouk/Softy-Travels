import { useQuery, useQueryClient } from "react-query";
import { fetchData } from "../services/fetchData";
import { useEffect } from "react";

export default function useDestinations(
  { page = null, sort = { orderBy: "id", asc: false } } = {
    page: null,
    sort: { orderBy: "id", asc: false },
  },
) {
  const queryClient = useQueryClient();
  if (page) {
    const {
      data,
      error,
      isLoading: loading,
      isPreviousData,
    } = useQuery({
      queryKey: ["destinations", page, sort],
      queryFn: () => fetchData("destinations", "*", { page: page, sort: sort }),
      keepPreviousData: true,
    });
    //prefetching
    queryClient.prefetchQuery({
      queryKey: ["destinations", page + 1, sort],
      queryFn: () =>
        fetchData("destinations", "*", { page: page + 1, sort: sort }),
    });
    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["destinations", page - 1, sort],
        queryFn: () =>
          fetchData("destinations", "*", { page: page - 1, sort: sort }),
      });
    return { data, error, loading, isPreviousData };
  } else {
    const {
      data,
      error,
      isLoading: loading,
    } = useQuery(["destinations", sort], () =>
      fetchData("destinations", "*", { sort: sort }),
    );
    return { data, error, loading };
  }
}
