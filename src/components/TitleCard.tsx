import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import * as React from 'react';




export default function TitleCard() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return <Grid container>
		<Grid size={isMobile ? 12 : 7.5}>
			<h1 className='text-white md:my-2 my-0'>
				Kenji Okura 👋
			</h1>
			<p className='text-white  text-lg'>Hello, nice to meet you, my name is Kenji.</p>
		</Grid>
		{!isMobile && <Grid size={4.5}>
			<div className='flex flex-col justify-center items-end h-full text-white'>
				<div className='text-lg'>My Contact:</div>
				<div>📧 <a href="mailto:okurakeng@gmail.com">Email</a></div>
				<div>👤 <a href="https://www.linkedin.com/in/kenji-okura/">Linkedin</a></div>
				<div>👨‍💻 <a href="https://github.com/okurakeng/">GitHub</a></div>
			</div>
		</Grid>}
	</Grid>
}
