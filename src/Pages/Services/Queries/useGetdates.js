import { useQuery } from "react-query";
import { request } from "../../../Config/request";

const useGetdates = () => {
  return useQuery({
    queryKey: ["date"],
    queryFn: () => {
      return request.get("/api/Main").then((res) => res.data);
    },
  });
}

export default useGetdates
