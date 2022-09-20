import axios from 'axios';

const myKey = 'CWB-56EF1CC4-5FBF-4E8F-B52B-10E28543341D';

const weatherRequest = axios.create({
  baseURL: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore',
  params: {
    Authorization: myKey,
  },
});

export const apiCity = () => weatherRequest.get('/F-C0032-001');
