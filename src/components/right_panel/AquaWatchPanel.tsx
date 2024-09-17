import * as React from 'react';
import datascreen from '../../assets/datascreen.png';
import titleScreen from '../../assets/titleScreen.png';
import build from '../../assets/build.png';
import Grid from '@mui/material/Grid2';
import { Avatar, Chip, useMediaQuery, useTheme } from '@mui/material';
import { Expo, ReactLogo, JS, Plotly, Python, R, Shiny } from '../../assets/icons';

export default function AquaWatchPanel() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return <div className='h-w-full h-full overflow-y-auto overflow-x-hidden text-white text-sm'>
		<h2>AquaWatch Mobile</h2>
		<div className='float-right'>
			<Grid container>
				<Grid size={6}>
					<img src={titleScreen} width={150} className='ml-1' /> <br />
					Home Screen
				</Grid>
				<Grid size={6}>
					<img src={datascreen} width={150} className='ml-2' /> <br />
					Data Screen
				</Grid>
			</Grid>
		</div>
		<hr />
		<div>September 2023 - May 2024</div>
		<hr />
		<p className='font-bold	m-0 p-0'>The Team</p>
		<p className='mt-0 mt-0'>AquaWatch Mobile was a team effort (we call ourselves &apos;BlueJelly&apos;) originally developed for Software Engineering at Pace University.</p>
		<p className='mb-0 pb-0'>Check out their Linkedins&apos;!</p>
		<ul className='list-disc m-0 p-0'>
			<li>• <a href='https://www.linkedin.com/in/meryl-mizell/'>Meryl Mizell</a></li>
			<li>• <a href='https://www.linkedin.com/in/ardin-kraja-19ab61230/'>Ardin Kraja</a></li>
			<li>• <a href='https://www.linkedin.com/in/erinsorbella/'>Erin Sorbella</a></li>
		</ul>
		<p className='mt-0'>Also shout out to <a href='https://www.linkedin.com/in/louisamoquete/'>Louisa Moquete</a> for helping us develop our initial data visualizations. Later on we had <a href='https://www.linkedin.com/in/victor--lima/'>Victor Lima</a> and <a href='https://www.linkedin.com/in/lizi-imedashvili-2b3a6b249/'>Lizi Imedashvilli</a>.</p>
		<p className='font-bold	m-0 p-0'>The Project</p>
		<p className='mt-0 mt-0'>With this project we hope to be an example of what can be possible in terms of water data right at your finger tips. Knowing what&apos;s in your water is a <a href='https://bluecolab.pace.edu/rtkh2o/'>right</a> - this is the start of it. The app shows monthly summaries of what is in Pace&apos;s Choate Pond, with a monthly graph of water metrics as well as a monthly <a href='https://www.agry.purdue.edu/hydrology/projects/nexus-swm/en/Tools/WaterQualityCalculator.php'>WQI</a>.</p>
		<p>We didn&apos;t stop there, we added a bunch of other features just as information on wildlife, Blue CoLab, and a AI Plant Identification feature to detect invasive water plants.</p>
		<p className='font-bold	m-0 p-0'>Technical Stuff</p>
		<img src={build} className={` ${isMobile ? 'mx-0' : 'mr-1 float-right'}`} width={300} />
		<p className='m-0 p-0'>The app relies on a webapp to host the data visualization as seen on the left. The webapp uses <a href='https://shiny.posit.co/'>Shiny</a> initially written in R and later in Python.</p>
		<p>The webapp then talks to various APIs to gather historic water data. This can later be expanded to gather current water data.</p>
		<p className='font-bold m-0 p-0'>Tech</p>
		<div className='space-x-1 space-y-1'>
			<Chip label="React"
				avatar={<Avatar alt="React" src={ReactLogo} />}
				className='bg-[#20232a] text-white'
			/>
			<Chip label="Expo"
				avatar={<Avatar alt="Expo" src={Expo} />}
				className='bg-black text-white'
			/>
			<Chip label="JavaScript"
				avatar={<Avatar alt="JavaScript" src={JS} />}
				className='bg-black text-white'
			/>
			<Chip label="Shiny"
				avatar={<Avatar alt="Shiny" src={Shiny} />}
				className='bg-[#439ae4] text-white'
			/>
			<Chip label="Plotly"
				avatar={<Avatar alt="Plotly" src={Plotly} />}
				className='bg-black text-white'
			/>
			<Chip label="R"
				avatar={<Avatar alt="R" src={R} />}
				className='bg-white text-black'
			/>
			<Chip label="Python"
				avatar={<Avatar alt="Python" src={Python} />}
				className='bg-[#c1c1c1] text-black'
			/>
		</div>
	</div>
}
