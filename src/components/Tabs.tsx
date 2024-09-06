import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
				<Box sx={{ p: 3, height: '100%' }}>
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
		<Box sx={{ flexGrow: 1, display: 'flex', height: '100%' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
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
			</Box>
			<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<TabPanel value={value} index={0}>
					<h2 className="text-white m-0">About Me</h2>
					<hr />
					<div className="text-white">
						Hello! I&apos;m a recent graduate 🎓 of Pace University with a degree in Computer Science. I currently work as a web-developer for Phormulary and part time as a STEP Instructor at Iona University.
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
				<TabPanel value={value} index={3}>
					Item Four
				</TabPanel>
			</Box>
		</Box>
	);
}
