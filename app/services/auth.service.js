import Constants from '../utils/Constants';
import Me from '../utils/Me';
import HttpHelper from '../utils/HttpHelperUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {Routes} = Constants.Urls.apis;

function getUserPayload(user) {
  return JSON.stringify(user);
}

async function handleAuthenticate(me) {
  if (!!me) {
    await AsyncStorage.setItem('me', JSON.stringify(me));
  }
  return me;
}

function login(name, password) {
  const payload = getUserPayload({name, password});
  //console.log(payload);

  return HttpHelper.postWithoutAuth(Routes.LOGIN, payload).then(
    handleAuthenticate,
  );
}

export const authService = {
  login,
};
