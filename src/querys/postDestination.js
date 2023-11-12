import { useMutation, useQueryClient } from "react-query";
import postData from "../services/postData";
export default function postDestination() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => {
      return postData("destinations", [payload]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["destinations"] });
    },
  });
  return mutation;
}
