import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import RippleButton from '@/components/RippleButton';
import { AboutMe } from '@/components/tabs/AboutMe';
import { Hr } from '@/components//Hr';
import { Experience } from '@/components/tabs/Experience';
import { Projects } from '@/components/tabs/Projects';
import { Resume } from '@/components/tabs/Resume';

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
			component: <Resume />,
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
		<View
			className="p-4 backdrop-blur-md rounded-3xl bg-[rgba(255,192,20,0.1)] h-[60vh] flex flex-col lg:grid lg:grid-cols-4"
		>
			{/* Tabs: horizontal and scrollable on small screens, vertical on large screens */}
			<View
				className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-x-visible w-full lg:w-auto mb-2 lg:mb-0 col-span-1"
			>
				{tabs.map((tab, index) => (
					<RippleButton
						key={index}
						className={`
							${index === tabIndex
								? "bg-[rgba(255,255,255,0.1)] lg:border-l-2 lg:border-gray-500 border-b-2 border-gray-500 lg:border-b-0"
								: ""
							}
						 hover:bg-[rgba(255,255,255,0.1)] rounded-lg my-1 mx-1 lg:mx-0 p-2 flex-1 lg:flex-none min-w-[120px] lg:min-w-0`}
						onPress={() => setTabIndex(index)}
					>
						<Text className="text-white text-lg lg:text-xl pl-1 text-center items-center">
							{tab.name}
						</Text>
					</RippleButton>
				))}
			</View>

			<View className="flex-1 sm:col-span-3 overflow-y-auto overflow-x-hidden px-2 sm:px-4">
				<Animated.View style={fadeStyle}>
					<Text className="text-3xl font-bold text-white">{tabs[tabIndex].name}</Text>
					<Hr />
					{tabs[tabIndex].component ? tabs[tabIndex].component : (
						<Text className="text-white text-lg">Content coming soon!</Text>
					)}
				</Animated.View>
			</View>
		</View>
	)
}
