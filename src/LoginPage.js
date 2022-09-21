import {
  Pressable,
  Text,
  View,
  TextInput,
  Image,
  ToastAndroid,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
export default function LoginPage() {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
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
              fontSize: 23,
              color: "white",
              fontWeight: "bold",
            }}
          >
            CUONLINE CUI LAHORE
          </Text>
        </View>

        {/* ============================ Text Inputs ============================ */}

        <View
          style={{
            flex: 0.2,
            marginTop: 30,
            marginLeft: "10%",
            marginRight: "10%",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Roll No.</Text>
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
          <Text style={{ fontSize: 20, marginTop: 10 }}>Password</Text>
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
              margin: 20,
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
          <Pressable
            onPress={() =>
              ToastAndroid.show("Sign Up Button Pressed", ToastAndroid.BOTTOM)
            }
            android_ripple={{ color: "#ffffff", borderRadius: 50 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            style={{
              width: 200,
              height: 40,
              border: 2,
              color: "#ffffff",
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

        <View
          style={{
            flex: 0.2,
            paddingTop: 40,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => Linking.openURL("https://facebook.com/mahedShahzad")}
            android_ripple={{ color: "#000000", borderRadius: 50 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image
              style={{ width: 40, height: 40, margin: 10 }}
              source={require("../assets/1.png")}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL("https://linkedIn.com/in/mahedShahzad")
            }
            android_ripple={{ color: "#000000", borderRadius: 50 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image
              style={{ width: 40, height: 40, margin: 10 }}
              source={require("../assets/2.png")}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL("https://instagram.com/mahedShahzad")
            }
            android_ripple={{ color: "#000000", borderRadius: 50 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image
              style={{ width: 40, height: 40, margin: 10 }}
              source={require("../assets/3.png")}
            />
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCCc0gSHCFB3EylkiecLMFug"
              )
            }
            android_ripple={{ color: "#000000", borderRadius: 100 }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image
              style={{ width: 40, height: 40, margin: 10 }}
              source={require("../assets/4.png")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
