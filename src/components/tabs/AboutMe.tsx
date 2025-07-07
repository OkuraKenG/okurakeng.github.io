import * as React from 'react';
import Divider from '@mui/material/Divider';

export default function AboutMe() {
	return (<>
		<h2 className="text-white m-0">About Me</h2>
		<Divider sx={{ bgcolor: 'white' }} className='my-2' />
		<div className='text-white'>
			<p>Hello 🙋‍♂️! I&apos;m a recent graduate 🎓 of Pace University with a degree in Computer Science.</p>
			<p>I currently working toward my Master&apos;s degree. I work part time as a <a href="https://www.iona.edu/admissions-financial-aid/high-school-student-programs-iona-university/science-and-technology-entry">STEP Instructor</a> at Iona University.</p>
			<p>I also intern at <a href="https://bluecolab.pace.edu/">Blue CoLab</a> helping out with app development, kiosk development, data analysis, and backend-apis. Small part of the great things done at Blue CoLab.</p>
			<p>Please enjoy your stay on okurakeng.github.io. 🙇</p>
			<p>btw try refreshing the page a few times to see different backgrounds ✨✨✨. Here&apos;s a cat as a bonus:</p>
		</div>
	</>)
}
