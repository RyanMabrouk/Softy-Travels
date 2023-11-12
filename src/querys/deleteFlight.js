import { useMutation, useQueryClient } from "react-query";
import deleteData from "../services/deleteData";

export default function useDeleteFlight() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      console.log("sucess");
      return deleteData("flights", id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flights"] });
    },
  });
  return mutation;
}
