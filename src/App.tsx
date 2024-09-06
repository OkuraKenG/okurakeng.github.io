import * as React from 'react';
import Typography from '@mui/material/Typography';
import P5Background from './Sketch';

export default function App() {
  return (
    <div className='m-4'>
        <Typography variant="h4" component="h1" className='text-red-100'>
          Material UI Create React App example with Tailwind CSS in TypeScript
        </Typography>
        <P5Background/>
    </div>
  );
}
