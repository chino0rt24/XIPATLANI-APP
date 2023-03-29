import axios from 'axios';
export const ENV = 'prod';
export const WALLET_URL = 'http://192.168.1.65:2000/';

async function config(URL) {
    return {
      baseURL: URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
       Authorization: 'Bearer ' + "12987894JHUI12Y7812Y3",
      },
    };
  }

  export const ApiWallet = async () => axios.create(await config(WALLET_URL));
  
  export const ROUTES = {
//USER
USER_LOGIN:'login/getlogin',

//PAQUETES



//COBROS
CREATE_COBRO: 'cobros/createCobro',

//customers
GET_CUSTOMERS: 'customers/getCustomers',
GET_ALL_CUSTOMERS:'customers/getAllCustomers',
CREATE_CUSTOMER:'customers/createCustomer'
  }
  