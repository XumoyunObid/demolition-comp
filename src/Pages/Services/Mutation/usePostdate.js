import { useMutation } from "react-query";
import { request } from "../../../Config/request";

const usePostdate = () => {
  return useMutation({
    mutationKey: ["date"],
    mutationFn: (data) => {
      const formData = new FormData();
      formData.append("Date", data.date);
      formData.append("Time", data.time);

      return request.post("/api/Main", formData).then((res) => res.data);
    },
  });
};

export default usePostdate;
