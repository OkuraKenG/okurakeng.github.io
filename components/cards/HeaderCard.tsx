import { View, Text, Linking } from 'react-native';
import { Hr } from '@/components/Hr';

export const HeaderCard = () => {
  return (
    <View className="items-center rounded-3xl bg-[rgba(255,192,20,0.1)] p-4 backdrop-blur-md">
      <Text className="mb-3 text-center text-4xl font-bold text-white lg:text-7xl">
        Kenji Okura
      </Text>
      <Hr />
      <Text className="flex flex-row items-center space-x-1 text-lg lg:text-xl">
        <Text
          className="text-blue-500"
          onPress={() => Linking.openURL('mailto:okurakeng@gmail.com')}>
          Email
        </Text>
        <Text className="text-white"> • </Text>
        <Text
          className="text-blue-500"
          onPress={() => Linking.openURL('https://www.linkedin.com/in/kenji-okura/')}>
          Linkedin
        </Text>
        <Text className="text-white"> • </Text>
        <Text
          className="text-blue-500"
          onPress={() => Linking.openURL('https://github.com/okurakeng/')}>
          GitHub
        </Text>
      </Text>
      <Hr />
      <Text className="text-center text-lg  text-white lg:text-xl">
        Software Development Intern @ IBM
      </Text>
      <Hr />
    </View>
  );
};
