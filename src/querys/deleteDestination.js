import { useMutation, useQueryClient } from "react-query";
import deleteData from "../services/deleteData";

export default function useDeleteDestination() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      console.log("sucess");
      return deleteData("destinations", id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
    },
  });
  return mutation;
}
