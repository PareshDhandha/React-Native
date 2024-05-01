import { StyleSheet, Text, View, StatusBar } from "react-native";
// import Login from './Authogication/Login';
// import Registation from './Authogication/Registration';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigation/TabNavigation";
import StackNavigation from "./Navigation/StackNavigation";
import Product from "./Screen/Product";
import Registation from "./Authogication/Registration";
import Login from "./Authogication/Login";
import SingleProduct from "./Screen/SingleProduct";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

let statusBar = StatusBar.currentHeight;
const Stack = createStackNavigator();
console.log("statusbar", statusBar);
export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style={{ height: statusBar }} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
            <Stack.Screen
              name="Tab"
              component={TabNavigation}
              options={{ animation: "slide_from_bottom" }}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{ animation: "slide_from_bottom" }}
            />
            <Stack.Screen
              name="Registration"
              component={Registation}
              options={{ animation: "slide_from_bottom" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ animation: "slide_from_bottom" }}
            />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProduct}
              options={{ animation: "slide_from_bottom" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
  },
});
