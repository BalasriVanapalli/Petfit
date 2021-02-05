import React from "react";

import { Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import App1 from "./App1";
import AdminHeaderMenu from "./Petfit/AdminHeaderMenu";
import AdminMenu from "./Petfit/AdminMenu";
import AdminPage from "./Petfit/AdminPage";

import NavScreens from "./Petfit/NavScreens";
import SendButton from "./SendButton";

const App = () => {
  return (
    <>
      <NavScreens />
      {/*<FeedbackCategory/>*/}
    </>
  );
};

export default App;
