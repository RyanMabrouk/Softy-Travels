import { useMutation, useQueryClient } from "react-query";
import postData from "../services/postData";

export default function postFlight() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => {
      return postData("flights", [payload]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flights"] });
    },
  });
  return mutation;
}
