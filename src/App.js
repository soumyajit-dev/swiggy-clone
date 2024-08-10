import React from 'react';
import ReactDOM from 'react-dom/client';
import { BodyComponent } from './components/Body';
import Header from './components/Header';

const AppLayout = () => {
	return (
		<div className='app'>
			<Header></Header>
			<BodyComponent></BodyComponent>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
