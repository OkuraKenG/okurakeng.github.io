import * as React from 'react';
import P5Background from './components/Sketch';

import Body from './components/Body';


export default function App() {
	return (
		<div className='m-4 md:mt-8 md:ml-8'>
			<P5Background />
			<Body />
		</div>
	);
}
