import { View, StyleSheet, Text } from 'react-native';

import { GetStarted } from '@/components/Login/GetStarted';

export default function HomeScreen() {
  return (
		<View style={styles.View}>
			<GetStarted />
		</View>
	);
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
