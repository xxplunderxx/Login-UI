import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Platform,
	Text,
	TextInput,
	TouchableOpacity,
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

			<TouchableOpacity style={button.styles}>
				<Text style={button.text}>Signup</Text>
			</TouchableOpacity>
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

const button = StyleSheet.create({
	text: {
		fontSize: 13,
		color: "white",
		fontWeight: "bold",
	},
	styles: {
		backgroundColor: "#3A5B22",
		borderRadius: 10,
		width: 404,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
	},
});

const view = StyleSheet.create({
	container: {
		backgroundColor: "white",
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
		borderWidth: 0.5,
		borderRadius: 10,
		borderColor: "#D9D9D9",
		fontSize: 10,
		height: 32,
		width: 404,
		paddingLeft: 10,
		paddingVertical: 10,
	},
});

export default GetStarted;