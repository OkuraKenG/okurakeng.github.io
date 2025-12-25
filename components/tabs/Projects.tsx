import { ListType } from '@/types/ListTypes';
import { View, Text, Linking } from 'react-native';
import { ListRenderer } from './lists/ListRenderer';

export const Projects = () => {
  const projects: ListType[] = [
    {
      project: {
        name: 'AquaWatch Mobile',
        link: 'https://github.com/bluecolab/BlueColab_MobileDataViz',
        preview: 'https://apps.apple.com/us/app/aquawatch-mobile/id6754177174',
        keyTechnologies: [
          'React Native/Expo in TypeScript',
          'Victory Native for data visualization in TypeScript',
        ],
      },
      dates: [
        {
          start: 'Sept. 2023',
          end: 'May 2024',
        },
        {
          start: 'January 2025',
          end: 'Present',
        },
      ],
      description:
        'Inform the Pace University Population about the environmental conditions about their campus.',
    },
    {
      project: {
        name: 'Blue CoLab Kiosk',
        link: 'https://github.com/bluecolab/react-kiosk',
        preview: 'https://bluecolab.github.io/react-kiosk/',
        keyTechnologies: ['React Native/Expo in TypeScript'],
      },
      dates: [
        {
          start: 'March 2025',
          end: 'Present',
        },
      ],
      description:
        'A kiosk designed to educate the public on Blue CoLabs mission and the importance of right to know.',
    },
    {
      project: {
        name: 'Next 100 Launches!',
        link: 'https://github.com/okurakeng/Data',
        preview: 'https://okurakeng.github.io/Data',
        keyTechnologies: ['React/Ionic in TypeScript', 'Launch Library 2 API'],
      },
      dates: [
        {
          start: 'November 2023',
          end: 'January 2024',
        },
      ],
      description: 'A webapp to display the next 100 (and past 100) launches.',
    },
    {
      project: {
        name: 'Function Programming',
        link: 'https://github.com/okurakeng/FunctionalProgramming',
        keyTechnologies: ['Java'],
      },
      dates: [
        {
          start: 'March 2023',
          end: 'March 2023',
        },
      ],
      description: 'A lesson plan to teach functional programming in Java.',
    },
  ];

  return (
    <View>
      <Text className="text-lg text-white">A few projects I&apos;ve worked on...</Text>
      <ListRenderer data={projects} />
      <Text className="mt-2 text-lg text-white">
        * More projects can be found on my{' '}
        <Text className="underline" onPress={() => Linking.openURL('https://github.com/okurakeng')}>
          GitHub
        </Text>
        .
      </Text>
    </View>
  );
};
