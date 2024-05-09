import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";

import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { isLoggedIn } = useSelector((state) => state?.authentication);

  if (isLoggedIn) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <Loader isLoading={false} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
