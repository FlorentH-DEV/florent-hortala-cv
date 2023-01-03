import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {toggleAppSidebarEndMobile, toggleAppSidebarEnd, toggleAppSidebarMobile} from '../../Redux/Actions/ActionConfigTemplate.js'

const Header = (props) => {
	const {configTemplate} = props
	return (
		<Fragment>
			<div id="header" className={'app-header ' + (configTemplate.appHeaderInverse ? 'app-header-inverse' : '')}>
				<div className="navbar-header">
				
					<Link to="/" className="navbar-brand"><strong>{process.env.REACT_APP_NOM_APPLICATION}</strong></Link>

					{!configTemplate.appSidebarNone && (
						<button type="button" className="navbar-mobile-toggler" onClick={props.toggleAppSidebarMobile}>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					)}
				</div>
				
			</div>
		</Fragment>					
	)
	
}

const mapStateToProps = (state) => {
	return{
	  configTemplate: state.ReducerConfigTemplate
	}
}

export default connect(mapStateToProps, {toggleAppSidebarEndMobile, toggleAppSidebarEnd, toggleAppSidebarMobile})(Header);
