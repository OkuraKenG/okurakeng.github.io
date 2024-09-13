import * as React from 'react';
import { PanelTypes } from '../PanelTypes';
import AquaWatchPanel from './AquaWatchPanel';

interface BodyProps {
	panelType: PanelTypes;
}

export default function Body({ panelType }: BodyProps) {

	switch (panelType) {
		case 'AQUAWATCH':
			return <AquaWatchPanel />
		default:
			return <></>
	}
}
