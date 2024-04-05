import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import { theme } from "../Core/theme";

const Search = ({ clicked, searchPhase, setSearchPhase, setClicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchbar_clicked : styles.searchbar_unclicked}
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhase}
          onChangeText={setSearchPhase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhase("");
            }}
          />
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 25,
    marginLeft: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "82%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  searchbar_clicked: {
    padding: 20,
    flexDirection: "row",
    width: "80%",
    backgroundColor: theme.colors.secondary ,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchbar_unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    borderColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
});
