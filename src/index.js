import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAzA6qgVeyEEbCMtT9ETswIkphBU4owx8s';


const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.querySelector(".container")
)