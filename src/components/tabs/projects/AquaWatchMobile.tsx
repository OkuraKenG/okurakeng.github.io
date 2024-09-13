import * as React from 'react';
import { Button, Stack } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { PanelTypes } from '../../PanelTypes';

interface AquaWatchMobileProps {
	togglePanelVisibility: (panelType: PanelTypes) => void;
}

export default function AquaWatchMobile({ togglePanelVisibility }: AquaWatchMobileProps) {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>AquaWatch Mobile</i> (<a href='https://github.com/bluecolab/BlueColab_MobileDataViz'>view</a>)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>Sept. 2023 - May 2024</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>💧 Water, you drink it, no? Wanna now whats in it so you don&apos;t die 💀? Well sorry we&apos;re not there yet. But this app services as a wonderful first steps.</p>
			<p className=' p-1 pl-2 m-0 text-sm font-bold'>Key Technologies:</p>
			<ul className='list-disc text-sm'>
				<li>React Native/Expo (app) in JavaScript</li>
				<li>Shiny (embedded webapp) in Python (R initially)
					<ul>
						<li>Data analysis libraries used: plotly, pandas, dataretrieval</li>
					</ul>
				</li>
			</ul>
			<Stack className='mt-2'>
				<Button onClick={() => {
					togglePanelVisibility(PanelTypes.AQUAWATCH);
				}} variant="outlined">Learn more?</Button>
			</Stack>
		</TimelineContent>
	</TimelineItem>
}

