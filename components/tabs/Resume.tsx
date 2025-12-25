import { View } from "react-native"
import resume from '@/assets/Okura, Kenji-external.pdf';

export const Resume = () => {
	return (
		<View>
			<iframe src={resume} className="w-full h-[600px]" />
		</View>
	)
}
