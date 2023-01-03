import React, {Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from '../../config/app-route.jsx';
import HeaderSrub from '../Header/HeaderSrub.js';

class Content extends React.Component {
	render() {
		return (
			<Fragment>
				<div className={'app-content '}>
					<HeaderSrub/>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))}
					
				</div>
			</Fragment>
		)
	}
}

export default withRouter(Content);
