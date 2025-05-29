import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export default function Tutor() {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>Pace University Learning Commons</i> (Computer Science Content Tutor)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>May 2022 - May 2024, restarting September 2025</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>Promoted developing students’ own independence for success in college through sessions in questions and responses. Tutored computer science students in concepts and application of Python, Java, C, and web design to assignments, projects, and exam preparation
			</p>
		</TimelineContent>
	</TimelineItem>
}

