import {
  Pressable,
  Text,
  View,
  TextInput,
  Image,
  ToastAndroid,
  ScrollView,
} from "react-native";
import React from "react";
import SocialMediaMenus from "./SocialMediaMenus";
export default function LoginPage({ navigation }) {
  const onPressH = () => {
    navigation.navigate("SignUpPage");
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* ============================ Header ============================ */}
        <View
          style={{
            flex: 0.4,
            paddingTop: 70,
            paddingBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#115EA6",
          }}
        >
          <Image
            style={{ width: 150, height: 150, marginBottom: 20 }}
            source={require("../assets/comsats.png")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              padding: 10,
            }}
          >
            CUONLINE COMSATS UNIVERSITY LAHORE CAMPUS
          </Text>
        </View>

        {/* ============================ Text Inputs ============================ */}

        <View
          style={{
            flex: 0.2,
            marginTop: 30,
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: 30,
            justifyContent: "center",
          }}
        >
        <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "#115EA6",
              marginTop: 0,
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            Log in to your Account!
          </Text>
          <Text style={{ fontSize: 15, color: "#4B2980" }}>Roll No.</Text>
          <TextInput
            placeholder="FA20-BCS-032"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginbottom: 10,
              borderColor: "grey",
              borderBottomWidth: 1,
            }}
          />
          <Text style={{ fontSize: 15, marginTop: 10, color: "#4B2980" }}>
            Password
          </Text>
          <TextInput
            placeholder="Please enter Your Password"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginbottom: 10,
              borderColor: "grey",
              borderBottomWidth: 1,
            }}
          />
          <Pressable
            style={{ textAlign: "right", color: "red", marginTop: 10 }}
            onPress={() => {
              ToastAndroid.show("Forgot Password Clicked!", ToastAndroid.SHORT);
            }}
          >
            <Text style={{ textAlign: "right", color: "red" }}>
              Forgot Password!
            </Text>
          </Pressable>
        </View>

        {/* ======================== Buttons ======================== */}

        <View
          style={{
            flex: 0.2,
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() =>
              ToastAndroid.show("Log In Button Pressed", ToastAndroid.SHORT)
            }
            android_ripple={{ color: "#ffffff", borderRadius: 10 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            style={{
              width: 250,
              height: 40,
              border: 2,
              margin: 10,
              color: "#ffffff",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4B2980",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              LOG IN!
            </Text>
          </Pressable>
          <Text style={{ color: "#4B2980" }}>
            Don't have an Account? Register Now!
          </Text>
          <Pressable
            onPress={onPressH}
            android_ripple={{ color: "#ffffff", borderRadius: 50 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            style={{
              width: 200,
              height: 40,
              border: 2,
              color: "#ffffff",
              margin: 10,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#115EA6",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              SIGN UP NOW!
            </Text>
          </Pressable>
        </View>

        {/*======================= Social Menus ======================= */}
        <View style={{ paddingTop: 40 }}>
          <SocialMediaMenus />
        </View>
      </View>
    </ScrollView>
  );
}
