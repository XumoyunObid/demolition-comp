import { request } from "../../../Config/request";
import { useMutation } from "react-query";

const useSendSmS = () => {
  return useMutation({
    mutationKey: "sendEmail",
    mutationFn: async ({ phoneNumber, message }) => {
      const response = await request({
        url: "https://api.shikkari-kaitai.jp/api/SmsSender",
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        data: {
          phoneNumber,
          message,
        },
      });
      return response;
    },
    onError: (error) => {
      console.error("Error sending email:", error);
    },
  });
};

export default useSendSmS;
