import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Platform,
    Text,
    TextInput,
    Button
} from "react-native";
import { Colors } from "@/constants/Colors";

export function WelcomeBack() {
    return (
        <View style={view.styles}>
            <Text style={text.title}>Get Started Now</Text>
            <Text>Name</Text>
            <TextInput></TextInput>
            <Text>Email address</Text>
            <TextInput></TextInput>
            <Text>Password</Text>
            <TextInput></TextInput>
            <Button title="Sign Up"></Button>
        </View>
    );
}

const { width, height } = Dimensions.get("window");

// DEFINE FUNCTIONS

// Dynamically apply platform styles
const getPlatformStyles = () => {
    return (
        PLATFORM_STYLES[Platform.OS as keyof typeof PLATFORM_STYLES] ??
        PLATFORM_STYLES.default
    );
};

// DEFINE STYLES

// Define platform-specific styles in an object
const PLATFORM_STYLES = {
    web: {
        width: width * 0.25,
        height: height * 0.63,
    },
    default: {
        width: width * 0.5,
        height: height * 0.4,
    },
};

const view = StyleSheet.create({
    styles: {
        backgroundColor: "blue",
        ...getPlatformStyles(),
    },
});

const text = StyleSheet.create({
    title: {
        fontSize: 32,
        color: Colors.light.text,
    },
    inputTitle: {
        
    },
});

export default WelcomeBack;
