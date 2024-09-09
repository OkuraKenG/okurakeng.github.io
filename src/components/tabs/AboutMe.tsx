import * as React from 'react';
import Divider from '@mui/material/Divider';
import meow from '../../assets/meow.jpg'; // Tell webpack this JS file uses this image

export default function AboutMe() {
	return (<>
		<h2 className="text-white m-0">About Me</h2>
		<Divider sx={{ bgcolor: 'white' }} className='my-2' />
		<div className='text-white'>
			<p>Hello 🙋‍♂️! I&apos;m a recent graduate 🎓 of Pace University with a degree in Computer Science.</p>
			<p>I currently work as a web-developer for <a href="https://www.phormulary.com/">Phormulary</a> and part time as a <a href="https://www.iona.edu/admissions-financial-aid/high-school-student-programs-iona-university/science-and-technology-entry">STEP Instructor</a> at Iona University.</p>
			<p>Please enjoy your stay on okaykenji.github.io. 🙇</p>
			<p>btw try refreshing the page a few times to see different backgrounds ✨✨✨. Here&apos;s a cat as a bonus:</p>
			<img src={meow} alt="it goes meow" width="100px" />
		</div>
	</>)
}
