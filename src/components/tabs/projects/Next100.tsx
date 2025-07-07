import * as React from 'react';
import { Button, Stack } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { PanelTypes } from '../../PanelTypes';

interface Next100Props {
	togglePanelVisibility: (panelType: PanelTypes) => void;
}

export default function Next100({ togglePanelVisibility }: Next100Props) {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>Next 100 Launches!</i> (<a href='https://okurakeng.github.io/Data/'>view</a>)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>Nov. 2023 - Jan. 2024</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>A webapp to display the next 100 (and past 100) launches.</p>
			<p className=' p-1 pl-2 m-0 text-sm font-bold'>Key Technologies:</p>
			<ul className='list-disc text-sm'>
				<li>React/Ionic (app) in TypeScript</li>
			</ul>
			<Stack className='mt-2'>
				<Button onClick={() => {
					togglePanelVisibility(PanelTypes.NEXT100);
				}} variant="outlined">Learn more?</Button>
			</Stack>
		</TimelineContent>
	</TimelineItem>
}

