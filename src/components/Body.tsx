import * as React from 'react';
import BasicTabs from './tabs/Tabs';
import Grid from '@mui/material/Grid2';
import RightPanel from './right_panel/RightPanel';
import TitleCard from './TitleCard';
import { useState } from 'react';
import { PanelTypes } from './PanelTypes';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Body() {
	const [hidePanel, setHidePanel] = useState<boolean>(true);
	const [panelType, setPanelType] = useState<PanelTypes>(PanelTypes.AQUAWATCH);

	const togglePanelVisibility = (panelType: PanelTypes) => {
		setPanelType(panelType);
		setHidePanel(prev => !prev);
	};

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return <Grid container spacing={4}>
		<Grid size={isMobile ? 12 : 6}>
			<div className='backdrop-blur  p-4 bg-[#37b6ff] bg-opacity-20 rounded-2xl shadow-custom h-40'>
				<TitleCard />
			</div>
			<div className='backdrop-blur p-4 mt-8 bg-[#ffcd55] bg-opacity-20 rounded-2xl shadow-custom-yellow h-96'>
				<BasicTabs togglePanelVisibility={togglePanelVisibility} />
			</div>
		</Grid>
		{!isMobile && <Grid size={isMobile ? 0 : 6} >
			<div className={`backdrop-blur p-4 bg-[#96beff] bg-opacity-10 rounded-2xl shadow-custom-blue h-[576px] ${hidePanel ? "opacity-0" : "opacity-100"} transition-opacity ease-in duration-150`}			>
				<RightPanel panelType={panelType} />
			</div>
		</Grid>}
	</Grid>
}
