import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function FP() {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			{/* <TimelineConnector /> */}
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>Functional Programming</i> (<a href='https://github.com/okurakeng/FunctionalProgramming'>view</a>)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>March 2023</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>A lesson plan to teach functional programming in Java.</p>
		</TimelineContent>
	</TimelineItem>
}

