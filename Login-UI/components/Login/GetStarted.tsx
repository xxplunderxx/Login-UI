import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Platform,
	Text,
	TextInput,
	Button,
} from "react-native";

export function GetStarted() {
	return (
		<View style={view.container}>
			<Text style={text.title}>Get Started Now</Text>

			<View style={view.inputContainer}>
				<View style={view.inputSection}>
					<Text style={text.inputTitle}>Name</Text>
					<Input placeholder="Enter your name" />
				</View>

				<View style={view.inputSection}>
					<Text style={text.inputTitle}>Email address</Text>
					<Input placeholder="Enter your email" />
				</View>

				<View style={view.inputSection}>
					<Text style={text.inputTitle}>Password</Text>
					<Input placeholder="Secret" />
				</View>
			</View>

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

// ✅ Create a reusable Input component
const Input = ({ placeholder }: { placeholder: string }) => {
	return (
		<TextInput
			style={text.input}
			placeholder={placeholder}
			placeholderTextColor="#D9D9D9"
		/>
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
	container: {
		backgroundColor: "blue",
		...getPlatformStyles(),
	},
	inputContainer: {
		paddingVertical: height * 0.05,
	},
	inputSection: {
		marginBottom: height * 0.02,
	},
});

const text = StyleSheet.create({
	title: {
		fontSize: 32,
	},
	inputTitle: {
		fontSize: 14,
	},
	input: {
		fontSize: 10,
	}
});

export default GetStarted;
