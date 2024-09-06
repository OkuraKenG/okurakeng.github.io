import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ pl: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ flexGrow: 1, display: 'flex' }}>
			<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				sx={{ borderRight: 1, borderColor: 'divider', minWidth: '125px' }}
			>
				<Tab
					label="About Me"
					sx={{
						color: 'white',
						textAlign: 'left',
						justifyContent: 'flex-start', // Align text to the left
						flexDirection: 'row', // Ensure label is in row direction
						'& .MuiTab-wrapper': {
							textAlign: 'left',
						},
					}}
					{...a11yProps(0)}
				/>
				<Tab
					label="Projects"
					sx={{
						color: 'white',
						textAlign: 'left',
						justifyContent: 'flex-start',
						flexDirection: 'row',
						'& .MuiTab-wrapper': {
							textAlign: 'left',
						},
					}}
					{...a11yProps(1)}
				/>
				<Tab
					label="Experience"
					sx={{
						color: 'white',
						textAlign: 'left',
						justifyContent: 'flex-start',
						flexDirection: 'row',
						'& .MuiTab-wrapper': {
							textAlign: 'left',
						},
					}}
					{...a11yProps(2)}
				/>
				<Tab
					label="Contact"
					sx={{
						color: 'white',
						textAlign: 'left',
						justifyContent: 'flex-start',
						flexDirection: 'row',
						'& .MuiTab-wrapper': {
							textAlign: 'left',
						},
					}}
					{...a11yProps(3)}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				<h2 className="text-white m-0">About Me</h2>
				<Divider sx={{ bgcolor: 'white' }} className='my-2' />
				<div className='text-white'>
					Hello! I&apos;m a recent graduate 🎓 of Pace University with a degree in Computer Science. I currently work as a web-developer for Phormulary and part time as a STEP Instructor at Iona University.
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<h2 className="text-white m-0">Projects</h2>
				<Divider sx={{ bgcolor: 'white' }} className='my-2' />
				<div className='text-white'>
					Under Construction. Projects go here.
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<h2 className="text-white m-0">Experience</h2>
				<Divider sx={{ bgcolor: 'white' }} className='my-2' />
				<div className='text-white'>
					Under Construction. Experiences go here.
				</div>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<h2 className="text-white m-0">Contact</h2>
				<Divider sx={{ bgcolor: 'white' }} className='my-2' />
				<div className='text-white'>In the meantime, in case you need it:
					<ul>
						<li><a href="mailto:okurakeng@gmail.com">Email</a> (📧)</li>
						<li><a href="https://www.linkedin.com/in/kenji-okura/">Linkedin</a> (👤)</li>
						<li><a href="https://github.com/OkayKenji/">GitHub Fun</a> (🎉)</li>
						<li><a href="https://github.com/okurakeng/">GitHub Work</a> (👨‍💻)</li>
					</ul>
				</div>
			</TabPanel>
		</Box>
	);
}
