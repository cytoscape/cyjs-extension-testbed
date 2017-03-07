import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import {PageNotFound} from './PageNotFound.jsx';
import {Edgehandles} from './edgehandles/Edgehandles.jsx';
import {Spread} from './spread/Spread.jsx';
import {Dagre} from './dagre/Dagre.jsx';
import {Cose} from './cose/Cose.jsx';

export class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/edgehandles" component={Edgehandles}/>
				<Route path="/spread" component={Spread}/>
				<Route path="/dagre" component={Dagre}/>
				<Route path="/cose" component={Cose}/>
				<Route path="*" component={PageNotFound}/>
			</Router>
		);
	}
}
