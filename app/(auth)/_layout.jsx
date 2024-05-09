import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";
// import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

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
