import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import Icon from "react-native-vector-icons/Ionicons";
import { height } from "../Assets/Constant/fontsAndColors";
const Users = [
  { id: "1", uri: require(".././Assets/images/card1.png") },
  { id: "2", uri: require(".././Assets/images/card2.png") },
  { id: "3", uri: require(".././Assets/images/card1.png") },

  { id: "4", uri: require(".././Assets/images/card2.png") },
  { id: "5", uri: require(".././Assets/images/card1.png") },
  { id: "6", uri: require(".././Assets/images/card2.png") },
  { id: "7", uri: require(".././Assets/images/card1.png") },
  { id: "8", uri: require(".././Assets/images/card2.png") },
];

export default class App extends React.Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 5, 0, SCREEN_WIDTH / 3],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }
  removeTopCard = () => {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
    this.position.setValue({ x: 0, y: 0 });
  };
   _Trigger=()=>{
    global.functions.ShowAlert("Home", global.const.warning);
  }
  handleChoise = (direction) => {
    Animated.timing(this.position, {
      toValue: direction * -SCREEN_HEIGHT + 100,
      duration: 400,
      // useNativeDriver:false
    }).start(() => {
      this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
        this.position.setValue({ x: 0, y: 0 });
      });
    });
  };
  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 299,
                width: SCREEN_WIDTH,
                position: "absolute",
                justifyContent: "center",
                alignSelf: "center",
              },
            ]}
          >
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                position: "absolute",
                top: (SCREEN_HEIGHT / 100) * 10,
                right: (SCREEN_HEIGHT / 100) * 1,
                zIndex: 1000,
                backgroundColor: "#A16DEF",
                height: (SCREEN_HEIGHT / 100) * 47,
                width: (SCREEN_HEIGHT / 100) * 43,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: (SCREEN_HEIGHT / 100) * 15,
                  width: (SCREEN_HEIGHT / 100) * 15,
                  resizeMode: "contain",
                  borderRadius: 20,
                }}
                source={require(".././Assets/images/keep.png")}
              />
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                position: "absolute",
                top: (SCREEN_HEIGHT / 100) * 10,
                right: (SCREEN_HEIGHT / 100) * 1,
                zIndex: 1000,
                backgroundColor: "rgba(0,0,0,0.7)",
                height: (SCREEN_HEIGHT / 100) * 47,
                width: (SCREEN_HEIGHT / 100) * 43,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: (SCREEN_HEIGHT / 100) * 15,
                  width: (SCREEN_HEIGHT / 100) * 15,
                  resizeMode: "contain",
                  borderRadius: 20,
                }}
                source={require(".././Assets/images/pass.png")}
              />
            </Animated.View>

            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 47,
                width: (SCREEN_HEIGHT / 100) * 47,
                resizeMode: "contain",
                borderRadius: 20,
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 290,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute",
                justifyContent: "center",
                alignSelf: "center",
              },
            ]}
          >
            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000,
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10,
                }}
              >
                LIKE
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                opacity: 0,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000,
              }}
            >
              <Image
                style={{
                  height: (SCREEN_HEIGHT / 100) * 35,
                  width: (SCREEN_HEIGHT / 100) * 45,
                  resizeMode: "cover",
                  borderRadius: 20,
                  backgroundColor: "red",
                }}
                source={require(".././Assets/images/pass.png")}
              />
            </Animated.View>

            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 45,
                width: (SCREEN_HEIGHT / 100) * 45,
                resizeMode: "cover",
                borderRadius: 20,
                backgroundColor: "red",
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.02 }} />
        <View style={{ flex: 0.1, flexDirection: "row" }}>
          <View style={{ flex: 0.7, justifyContent: "center", left: 29 }}>
            <Text style={{ fontSize: 35 }}>Closer</Text>
          </View>
          <View
            style={{
              flex: 0.28,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 51,
                width: (SCREEN_WIDTH / 100) * 18,
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/button1.png")}
            />
          </View>
          <View
            style={{
              flex: 0.18,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 7,
                width: (SCREEN_WIDTH / 100) * 7,
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/filter.png")}
            />
          </View>
        </View>
        <View style={{ flex: 0.1 }}>
          <Image
            style={{
              height: (SCREEN_HEIGHT / 100) * 15,
              width: "100%",
              resizeMode: "cover",
            }}
            source={require(".././Assets/images/banner.png")}
          />
        </View>

        <View style={{ flex: 0.3 }}>{this.renderUsers()}</View>
        <View style={{height:height/100*5}} />
        <LinearGradient
          colors={["#61D9FF", "#4266D8", "#A32FFF"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 0.07,
           
            flexDirection: "row",
            top: (height / 100) * 29,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => this.handleChoise(-1)}
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 3,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/combined.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleChoise(1)}
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 3,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/pass1.png")}
            />
          </TouchableOpacity>
        </LinearGradient>
        <View style={{height:height/100*2}} />
        <View
          style={{
            flex: 0.07,
            flexDirection: "row",
            top: (height / 100) * 28,
            margin: 8,
            borderRadius: 5,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={()=>this._Trigger()}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 5,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/Frame1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 5,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/Frame2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert("Home")}
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 5,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/Frame3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 5,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/Frame4.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: (SCREEN_HEIGHT / 100) * 5,
                width: "100%",
                resizeMode: "contain",
              }}
              source={require(".././Assets/images/Frame5.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
