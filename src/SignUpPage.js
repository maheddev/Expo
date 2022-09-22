import {
  Text,
  ScrollView,
  View,
  TextInput,
  Pressable,
  ToastAndroid,
} from "react-native";
import SocialMediaMenus from "./SocialMediaMenus";

export default function SignUpPage({navigation}) {
    const onPressH = () => {
      navigation.goBack();
    };
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            flex: 0.1,
            backgroundColor: "#115EA6",
            paddingTop: 40,
            paddingBottom: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "white",
              marginLeft: 20,
              marginRight: 20,
              fontWeight: "bold",
            }}
          >
            Welcome to Comsats University Lahore Campus
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "#115EA6",
              marginTop: 40,
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            Sign Up for Free!
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            marginTop: 20,
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: 40,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: '#4B2980' }}>Full Name</Text>
          <TextInput
            placeholder="Your Full Name here"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginbottom: 10,
              borderColor: "grey",
              borderBottomWidth: 1,
            }}
          />

          <Text style={{ fontSize: 15, marginTop: 20, color: '#4B2980' }}>Roll No.</Text>
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
          <Text style={{ fontSize: 15, marginTop: 20, color: '#4B2980' }}>
            CNIC / Form - B Number
          </Text>
          <TextInput
            placeholder="00000-0000000-0"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginbottom: 10,
              borderColor: "grey",
              borderBottomWidth: 1,
            }}
          />
          <Text style={{ fontSize: 15, marginTop: 20, color: '#4B2980' }}>Password</Text>
          <TextInput
            placeholder="Enter Your Password"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginbottom: 10,
              borderColor: "grey",
              borderBottomWidth: 1,
            }}
          />
          <Text style={{ fontSize: 15, marginTop: 20, color: '#4B2980' }}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Your Password"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginbottom: 10,
              borderColor: "grey",
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View>
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() =>
                ToastAndroid.show("Sign Up Button Pressed", ToastAndroid.SHORT)
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
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
              >
                SIGN UP!
              </Text>
            </Pressable>
            <Text style={{color: 'red'}}>Already have an Account</Text>
            <Pressable
              onPress={onPressH}
              android_ripple={{ color: "#ffffff", borderRadius: 50 }}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              style={{
                width: 200,
                height: 40,
                border: 2,
                margin: 10,
                color: "#ffffff",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#115EA6",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
              >
                LOG IN NOW!
              </Text>
            </Pressable>
          </View>
        </View>
        <SocialMediaMenus></SocialMediaMenus>
      </View>
    </ScrollView>
  );
}
