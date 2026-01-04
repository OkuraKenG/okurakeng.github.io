import Head from 'expo-router/head';
import { View } from 'react-native';

import { HeaderCard } from '@/components/cards/HeaderCard';
import { BodyCard } from '@/components/cards/BodyCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>okurakeng.github.io</title>
      </Head>

      <View className="flex flex-1 p-4 lg:w-1/2">
        <HeaderCard />

        <View className="mt-4">
          <BodyCard />
        </View>
      </View>
    </>
  );
}
