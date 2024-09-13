import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AquaWatchMobile from './projects/AquaWatchMobile';
import { PanelTypes } from '../PanelTypes';

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

			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot />
				</TimelineSeparator>
				<TimelineContent>Code</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
