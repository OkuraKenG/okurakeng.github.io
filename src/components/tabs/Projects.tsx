import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import AquaWatchMobile from './projects/AquaWatchMobile';
import { PanelTypes } from '../PanelTypes';
import Next100 from './projects/Next100';
import FP from './projects/FP';

interface LeftAlignedTimelineProps {
	togglePanelVisibility: (panelType: PanelTypes) => void;
}

export default function LeftAlignedTimeline({ togglePanelVisibility }: LeftAlignedTimelineProps) {
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

			<AquaWatchMobile togglePanelVisibility={togglePanelVisibility} />

			<Next100 togglePanelVisibility={togglePanelVisibility} />

			<FP />

			<p className='text-white'>You can find my other projects on my <a href='https://github.com/OkayKenji?tab=repositories'>GitHub</a>.</p>
		</Timeline>
	);
}
