import axios from 'axios';
import { log } from "./utils";

export const mobileURL = () => {
  return '';
};

const TOKEN = '';

export async function getSKP() {

    const jsonData = (await axios.get(`${mobileURL()}/getSKP`,{withCredentials: true})).data;

    var userSKP = Object.keys(jsonData).map(function(key) {
      var user = jsonData[key];
      return user;
    });

    return userSKP[0];
}

export async function getDataMOBILE(ID,PARAMS,PAGE) {

  const jsonData = (
      await axios.get(`${mobileURL()}/get_data/${TOKEN}/${ID}/${PARAMS}/${PAGE}`, {withCredentials: true})
      .then(result => {
        if (typeof result.data.items === 'undefined') return null;
        return result;
      })
      .catch(err => {
        log(err, 'error');
        return null;
       })
    );

  return jsonData;
}