import {
    View,
    Pressable,
    Image, Linking
  } from "react-native";
export default function SocialMediaMenus(){
    return(
        <View
          style={{
            flex: 0.2,
            paddingTop: 20,
            marginBottom: 20,
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
    )
}