import * as React from 'react';
import next100 from '../../assets/next100.png';
import Grid from '@mui/material/Grid2';
import { Avatar, Chip } from '@mui/material';
import { ReactLogo, Ionic, TS } from '../../assets/icons';

export default function Next100Panel() {

	return <div className='h-w-full h-full overflow-y-auto overflow-x-hidden text-white text-sm'>
		<h2>Next 100 Launches!</h2>
		<div className='float-right'>
			<Grid container>
				<Grid size={12}>
					<img src={next100} width={300} className='ml-1' /> <br />
					Home Screen
				</Grid>
			</Grid>
		</div>
		<hr />
		<div>September 2023 - May 2024 (active development)</div>
		<hr />
		<p className='font-bold	m-0 p-0'>The Project</p>
		<p className='mt-0'>Interactive webapp designed to show readers the next 100 rocket launches. All data curtesy of <a href='https://thespacedevs.com/'>The Space Devs</a>. To keep things simple webapp talks directly to API without a custom backend.</p>
		<p className='font-bold m-0 p-0'>Tech</p>
		<div className='space-x-1 space-y-1'>
			<Chip label="React"
				avatar={<Avatar alt="React" src={ReactLogo} />}
				className='bg-[#20232a] text-white'
			/>
			<Chip label="Ionic"
				avatar={<Avatar alt="Ionic" src={Ionic} />}
				className='bg-black text-white'
			/>
			<Chip label="TypeScript"
				avatar={<Avatar alt="TypeScript" src={TS} />}
				className='bg-black text-white'
			/>

		</div>
	</div>
}
