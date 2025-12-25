import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import RippleButton from '@/components/RippleButton';
import { AboutMe } from '@/components/tabs/AboutMe';
import { Hr } from '@/components//Hr';
import { Experience } from '@/components/tabs/Experience';
import { Projects } from '../tabs/Projects';

export const BodyCard = () => {
	const tabs = [
		{
			name: "About Me",
			component: <AboutMe />,
		},
		{
			name: "Experience",
			component: <Experience />
		},
		{
			name: "Projects",
			component: <Projects />
		},
		{
			name: "Resume",
		}
	]

	const [tabIndex, setTabIndex] = useState(0);
	const fade = useSharedValue(1);



	useEffect(() => {
		fade.value = 0;
		setTimeout(() => {
			fade.value = withTiming(1, { duration: 200 });
		}, 50);
	}, [fade, tabIndex]);

	const fadeStyle = useAnimatedStyle(() => ({
		opacity: fade.value,
	}));

	return (
		<View className="p-4 backdrop-blur-sm rounded-3xl bg-[rgba(255,192,20,0.1)]  h-[60vh] grid grid-cols-4">
			<View className='col-span-1'>
				{
					tabs.map((tab, index) => (
						<RippleButton key={index} className={`${index === tabIndex ? "bg-[rgba(255,255,255,0.1)] border-l-2 border-gray-500" : ""} hover:bg-[rgba(255,255,255,0.1)] rounded-lg my-1 p-2`} onPress={() => setTabIndex(index)}>
							<Text className={`text-white text-xl pl-1`}>
								{tab.name}
							</Text>
						</RippleButton>
					))
				}
			</View>

			<View className="col-span-3 overflow-y-auto overflow-x-hidden px-4">
				<Animated.View style={fadeStyle}>
					<Text className='text-3xl font-bold text-white'>{tabs[tabIndex].name}</Text>
					<Hr />
					{tabs[tabIndex].component ? tabs[tabIndex].component : <Text className='text-white text-lg'>Content coming soon!</Text>}
				</Animated.View>
			</View>
		</View>
	)
}
