import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AboutMe from './AboutMe';
import LeftAlignedTimeline from './Projects';
import { PanelTypes } from '../PanelTypes';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
			style={{
				maxHeight: isMobile ? '310px' : '365px', // Set a max height for the tab panel
				overflowY: 'auto', // Enable scrolling for overflow
			}}
		>
			{value === index && (
				<Box
					sx={{
						pl: isMobile ? 0 : 3,
						pt: isMobile ? 3 : 0,
					}}
				>
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

interface BasicTabsProps {
	togglePanelVisibility: (panelType: PanelTypes) => void;
}

export default function BasicTabs({ togglePanelVisibility }: BasicTabsProps) {
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is mobile

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
			<Tabs
				orientation={isMobile ? 'horizontal' : 'vertical'} // Switch orientation based on screen size
				value={value}
				onChange={handleChange}
				aria-label="Tabs example"
				sx={{
					borderBottom: isMobile ? 1 : 0,
					borderRight: isMobile ? 0 : 1,
					borderColor: 'divider',
					minWidth: isMobile ? 'auto' : '125px',
					display: 'flex',
					flexDirection: isMobile ? 'row' : 'column', // Adjust direction for mobile
				}}
				variant="scrollable"
				scrollButtons={isMobile}
				allowScrollButtonsMobile
			>
				<Tab
					label="About Me"
					sx={{
						color: 'white',
						textAlign: 'left',
						justifyContent: 'flex-start',
						flexDirection: 'row',
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
			<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<TabPanel value={value} index={0}>
					<AboutMe />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<h2 className="text-white m-0">Projects</h2>
					<Divider sx={{ bgcolor: 'white' }} className='my-2' />
					<div className='text-white'>
						Some projects I worked on
					</div>
					<LeftAlignedTimeline togglePanelVisibility={togglePanelVisibility} />
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
							<li><a href="https://github.com/OkayKenji/">GitHub</a> (🎉)</li>
						</ul>
					</div>
				</TabPanel>
			</Box>
		</Box>
	);
}

