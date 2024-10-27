import { useMutation, useQueryClient } from "react-query";
import http from "../core/services/interceptor";

const useMutationPut = (url: string, key: string) => {
  const queryClient = useQueryClient();

  const handleUpdata = async (values: any) => {
    const res = await http.put(url, values);
    console.log(res.data);
  };

  return useMutation(handleUpdata, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });
};

export default useMutationPut;
