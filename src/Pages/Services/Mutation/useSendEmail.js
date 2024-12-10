import { request } from '../../../Config/request';
import { useMutation } from 'react-query';

const useSendEmail = () => {
  return useMutation({
    mutationKey: 'sendEmail',
    mutationFn: async ({ email, subject, message }) => {
      const response = await request({
        url: 'https://api.shikkari-kaitai.jp/api/emailSenderController',
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        data: {
          email,
          message,
          subject,
        },
      });
      return response; 
    },
    onError: (error) => {
      console.error('Error sending email:', error);
    },
  });
};

export default useSendEmail;
