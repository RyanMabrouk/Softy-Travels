import { useMutation, useQueryClient } from "react-query";
import postData from "../services/postData";

export default function postPlane() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload) => {
      return postData("planes", [payload]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["planes"] });
    },
  });
  return mutation;
}
