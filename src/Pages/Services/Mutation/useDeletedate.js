import { useMutation } from "react-query";
import { request } from "../../../Config/request";

const useDeletedate = () => {
  return useMutation({
    mutationFn: (id) =>
      request
        .delete(`/api/Main?Id=${id}`)
        .then((res) => res.data),
  });
};

export default useDeletedate;
