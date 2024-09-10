import * as React from 'react';
import { Button, Modal, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import datascreen from '../../../assets/datascreen.png';
import titleScreen from '../../../assets/titleScreen.png';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: document.documentElement.scrollWidth - 50,
	height: '95%',
	maxHeight: '95%',
	color: 'white',
	bgcolor: '#333333',
	boxShadow: 24,
	p: 4,
	overflowY: 'auto', // Enable scrolling for overflow
};

export default function AquaWatchMobile() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return <TimelineItem sx={{
		color: 'white',
	}}>

		<TimelineSeparator>
			<TimelineDot />
			<TimelineConnector />
		</TimelineSeparator>
		<TimelineContent>
			<div className='flow-root'>
				<p className='p-1 m-0 float-left text-bold'><i>AquaWatch Mobile</i> (<a href='https://github.com/bluecolab/BlueColab_MobileDataViz'>view</a>)</p>
				<p className=' p-1 pl-2 m-0 text-bold float-right'>Sept. 2023 - May 2024</p>
			</div>
			<p className=' p-1 pl-2 m-0 text-sm'>💧 Water, you drink it, no? Wanna now whats in it so you don&apos;t die 💀? Well sorry we&apos;re not there yet. But this app services as a wonderful first steps.</p>
			<p className=' p-1 pl-2 m-0 text-sm text-bold'>Key Technologies:</p>
			<ul className='list-disc text-sm'>
				<li>React Native/Expo (app) in JavaScript</li>
				<li>Shiny (embedded webapp) in Python (R initially)
					<ul>
						<li>Data analysis libraries used: plotly, pandas, dataretrieval</li>
					</ul>
				</li>
			</ul>
			<Stack className='mt-2'>
				<Button onClick={handleOpen} variant="outlined">Learn more?</Button>
			</Stack>
		</TimelineContent>

		<Modal
			open={open}
			onClose={handleClose}
			sx={style}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<div>
				<div className='flex justify-between items-center'>
					<h1>AquaWatch Mobile</h1>
				</div>

				<div>
					<Grid container spacing={2}>
						<Grid size={2.25}>
							<img
								src={titleScreen}
								style={{
									objectFit: 'contain',
									width: '100%',
									height: 'auto'
								}}
								alt="Title Screen"
							/>
							<div>Title Screen</div>
						</Grid>
						<Grid size={2.25}>
							<img src={datascreen}
								style={{
									objectFit: 'contain',
									width: '100%',
									height: 'auto'
								}}
								alt="Data Screen" />
							<div>Interactive Data Preview</div>
						</Grid>
						<Grid size={7.5}>
							Hello
						</Grid>
					</Grid>
				</div>
			</div>
		</Modal>

	</TimelineItem>
}

