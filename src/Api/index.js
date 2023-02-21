import axios from 'axios';
import { CacheUtil } from './../utils/cache';


export const ENV = 'prod';
export const WALLET_URL = 'http://192.168.31.148:3000/';

async function config(URL) {
    return {
      baseURL: URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + (await CacheUtil.getToken()),
      },
    };
  }

  export const ApiWallet = async () => axios.create(await config(WALLET_URL));
  
  export const ROUTES = {
//USER


//PAQUETES



//COBROS


  }
  