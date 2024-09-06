import * as React from 'react';
import BasicTabs from './Test';

export default function Body() {
	return <div className='backdrop-blur p-4 mt-8  w-full md:w-1/2 bg-[#ffcd55] bg-opacity-20 rounded-2xl shadow-custom-yellow h-96'>
		<BasicTabs />
	</div>
}
