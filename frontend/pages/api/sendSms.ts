import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: any) {
  if (req.method === 'POST') {
    try {
      const host = 'api.smsonlinegh.com';
      const endPoint = `http://${host}/v5/message/sms/send`;
       const { location } = req.body;

      // the message data
      const msgData = {
        text: location,
        type: 0, // GSM default
        sender: 'RemGee',
        destinations: ['0553782097'],
      };

      const config: AxiosRequestConfig = {
        method: 'POST',
        url: endPoint,
        data: msgData,
        headers: {
          Host: `${host}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'key 31fafe25761c91faa93cbaa6c08bb712bb627e9705f77c0e4d434b132084906f',
        },
      };

      axios
        .request(config)
        .then(function (response: AxiosResponse) {
          console.log(response);

          const httpStatus = response.status;

          if (response.status === 200) {
            const handshake = response.data.handshake;
            const respData = response.data.data;

            console.log(respData);
          }
        })
        .catch(function (error: Error) {
          console.log(error.stack);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
