import { useQuery, useQueryClient } from "react-query";
import { fetchData } from "../services/fetchData";

export default function usePlanes(
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
      queryKey: ["planes", page, sort],
      queryFn: () => fetchData("planes", "*", { page: page, sort: sort }),
      keepPreviousData: true,
    });
    //prefetching
    queryClient.prefetchQuery({
      queryKey: ["planes", page + 1, sort],
      queryFn: () => fetchData("planes", "*", { page: page + 1, sort: sort }),
    });
    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["planes", page - 1, sort],
        queryFn: () => fetchData("planes", "*", { page: page - 1, sort: sort }),
      });
    return { data, error, loading, isPreviousData };
  } else {
    const {
      data,
      error,
      isLoading: loading,
    } = useQuery(["planes", sort], () =>
      fetchData("planes", "*", { sort: sort }),
    );
    return { data, error, loading };
  }
}
