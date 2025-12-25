import { View, Text, Linking } from 'react-native';
import { Hr } from '@/components/Hr';

export const HeaderCard = () => {
	return (<View className="items-center p-4 backdrop-blur-md rounded-3xl bg-[rgba(255,192,20,0.1)]">
		<Text className='lg:text-7xl text-white font-bold mb-3 text-center text-4xl'>Kenji Okura</Text>
		<Hr />
		<Text className="lg:text-xl text-lg flex flex-row items-center space-x-1">
			<Text className="text-blue-500" onPress={() => Linking.openURL('mailto:okurakeng@gmail.com')}>Email</Text>
			<Text className="text-white"> • </Text>
			<Text className="text-blue-500" onPress={() => Linking.openURL('https://www.linkedin.com/in/kenji-okura/')}>Linkedin</Text>
			<Text className="text-white"> • </Text>
			<Text className="text-blue-500" onPress={() => Linking.openURL('https://github.com/okurakeng/')}>GitHub</Text>
		</Text>
		<Hr />
		<Text className='lg:text-xl text-lg  text-white text-center'>Software Development Intern @ IBM</Text>
		<Hr />
	</View>);
}
