import { View, Text } from 'react-native';

export const AboutMe = () => {
  return (
    <View>
      <Text className="text-lg text-white">
        <View className="my-1">
          <Text>Hello 🙋‍♂️!</Text>
        </View>

        <View className="my-1">
          <Text>
            I&apos;m a graduate of Pace University with a degree in Computer Science. I currently
            working toward my Master&apos;s degree.
          </Text>
        </View>

        <View className="my-1">
          <Text>My main work is as a (part-time) software development intern at IBM.</Text>
        </View>

        <View className="my-1">
          <Text>
            I also intern at Blue CoLab helping out with app development, kiosk development, data
            analysis, and backend-apis. Small part of the great things done at Blue CoLab.
          </Text>
        </View>

        <View className="my-1">
          <Text>Please enjoy your stay on okurakeng.github.io.</Text>
        </View>
      </Text>
    </View>
  );
};
