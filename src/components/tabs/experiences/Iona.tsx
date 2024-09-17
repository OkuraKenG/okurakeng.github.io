import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export default function Iona() {
	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left font-bold'><i>Iona University Science and Technology Entry Program (STEP)</i> (Technical Instructor)</p>
				<p className=' p-1 pl-2 m-0 font-bold float-right'>July 2023 - Present</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>Lead and instruct introductory classes in Java and data analytics in Python to approximately 6 to 10 high school students per class. Created lesson plans and exercises that provided students with a general knowledge of Java and data analysis in Python by the end of the semester.</p>
		</TimelineContent>
	</TimelineItem>
}


