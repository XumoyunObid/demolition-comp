import React from 'react';
import { request } from '../../../Config/request'; // Adjust the import if needed
import { useMutation } from 'react-query';

const useSendEmail = () => {
  return useMutation({
    mutationKey: 'sendEmail',
    mutationFn: async ({ email, description }) => {
      const response = await request({
        url: 'http://45.130.148.160:5555/api/emailSenderController',
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        data: {
          email,
          description,
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
