import { useQuery, useQueryClient } from "react-query";
import { fetchData } from "../services/fetchData";

export default function useFlights(
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
      queryKey: ["flights", page, sort],
      queryFn: () => fetchData("flights", "*", { page: page, sort: sort }),
      keepPreviousData: true,
    });
    //prefetching
    queryClient.prefetchQuery({
      queryKey: ["flights", page + 1, sort],
      queryFn: () => fetchData("flights", "*", { page: page + 1, sort: sort }),
    });
    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["flights", page - 1, sort],
        queryFn: () =>
          fetchData("flights", "*", { page: page - 1, sort: sort }),
      });
    return { data, error, loading, isPreviousData };
  } else {
    const {
      data,
      error,
      isLoading: loading,
    } = useQuery(["flights", sort], () =>
      fetchData("flights", "*", { sort: sort }),
    );
    return { data, error, loading };
  }
}
