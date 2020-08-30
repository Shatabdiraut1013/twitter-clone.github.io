import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
	return (
		<div className='app'>
			{/* sidebar */}
			<Sidebar />

			{/* feed */}
			<Feed />

			{/* widgets means like what happening */}
			<Widgets />
		</div>
	);
}

export default App;
