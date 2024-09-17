import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export default function Phormulary() {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>Phormulary</i> (Full Stack Developer, part time)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>March 2024 - Present</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>Worked with a team to develop a full stack pharmaceutical database.</p>
		</TimelineContent>
	</TimelineItem>
}


