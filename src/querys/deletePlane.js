import { useMutation, useQueryClient } from "react-query";
import deleteData from "../services/deleteData";

export default function useDeletePlanes() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      console.log("sucess");
      return deleteData("planes", id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["planes"] });
    },
  });
  return mutation;
}
