import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import Tutor from './experiences/Tutor';
import Iona from './experiences/Iona';
import Phormulary from './experiences/Phormulary';
import BlueCoLab from './experiences/BlueCoLab';

export default function ExperiencesTimeline() {
	return (
		<Timeline
			sx={{
				[`& .${timelineItemClasses.root}:before`]: {
					flex: 0,
					p: 0,
					margin: 0,
				},
			}}
		>
			<BlueCoLab />
			<Phormulary />
			<Iona />
			<Tutor />

		</Timeline>
	);
}
