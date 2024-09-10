import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AquaWatchMobile from './projects/AquaWatchMobile';

export default function LeftAlignedTimeline() {
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

			<AquaWatchMobile />

			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent>Code</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
