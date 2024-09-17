import * as React from 'react';
import { PanelTypes } from '../PanelTypes';
import AquaWatchPanel from './AquaWatchPanel';
import Next100Panel from './Next100Panel';

interface BodyProps {
	panelType: PanelTypes;
}

export default function Body({ panelType }: BodyProps) {

	switch (panelType) {
		case 'AQUAWATCH':
			return <AquaWatchPanel />;
		case 'NEXT100':
			return <Next100Panel />;
		default:
			return <></>
	}
}
