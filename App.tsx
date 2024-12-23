import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { size } from './src/theme/font';
import colors from './src/theme/color';


const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.containerText}>
				Hello World
				<AntDesign name="stepforward"/> 
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerText: {
		fontSize: size.xl, 
		color: colors.primary
	}
})

export default App;
