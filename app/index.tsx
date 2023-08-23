import { Redirect } from 'expo-router';

export default () => {
  const user = false; //TODO: if user logged in

  if (user) {
    return <Redirect href='/home' />;
  } else return <Redirect href='/home' />;
};
