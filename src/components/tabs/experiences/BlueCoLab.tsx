import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineConnector } from '@mui/lab';


export default function BlueCoLab() {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>Blue CoLab</i> (Senior Student Software Engineer)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>January 2025 - Present</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>Contributed to various projects, including app development, kiosk development, data analysis, and backend APIs. Playing a small part in helping you know what's in your water.
			</p>
		</TimelineContent>
	</TimelineItem>
}

