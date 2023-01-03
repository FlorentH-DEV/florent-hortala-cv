import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

class SidebarNavList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: -1,
			clicked: -1
		};
	}

	handleExpand(e, i, match) {
		e.preventDefault();

		this.setState(state => ({
			active: (this.state.active === i ? -1 : i),
			clicked: 1
		}));
	}
  
	render() {
		const icon = this.props.data.icon && <div className="menu-icon"><i className={this.props.data.icon}></i></div>;
		const img = this.props.data.img && <div className="menu-icon-img"><img src={this.props.data.img} alt="" /></div>;
		const caret = (this.props.data.children && !this.props.data.badge) && <div className="menu-caret"></div>;
		const label = this.props.data.label && <span className="menu-label ms-5px">{this.props.data.label}</span>;
		const badge = this.props.data.badge && <div className="menu-badge">{this.props.data.badge}</div>;
		const highlight = this.props.data.highlight && <i className="fa fa-paper-plane text-theme"></i>;
		const title = this.props.data.title && <div className="menu-text">{this.props.data.title} {label} {highlight}</div>;
		
		const {configTemplate} = this.props

		// Si la Sibar est minimifiée
		if(configTemplate.appSidebarMinified){
			return (
				<Fragment>
					<Route path={this.props.data.path} exact={this.props.data.exact} children={({ match }) => (
						<div className={"menu-item " + (match ? "active " : "") + ((this.props.active || (this.props.clicked === -1 && match) || this.props.data.search) ? 'expand ' : 'closed ') + (this.props.data.children ? "has-sub " : "")}>
							{this.props.data.children ? (
								<Link to={this.props.data.path}
									className="menu-link"
									onClick={this.props.expand}>{ img } { title } { badge }</Link>
							):(
								
								<Link to={this.props.data.path} className="menu-link">{ img } { icon } { badge } { title }{ caret }</Link>
							)}
	
						</div>
					)}
					/>
				</Fragment>
			);
		}
		else{
			return (
				<Fragment>
					<Route path={this.props.data.path} exact={this.props.data.exact} children={({ match }) => (
						<div className={"menu-item " + (match ? "active " : "") + ((this.props.active || (this.props.clicked === -1 && match) || this.props.data.search) ? 'expand ' : 'closed ') + (this.props.data.children ? "has-sub " : "")}>
							{this.props.data.children ? (
								<Link to={this.props.data.path}
									className="menu-link"
									onClick={this.props.expand}>{ img } { icon } { title }{ caret } { badge }</Link>
							):(
								<Link to={this.props.data.path} className="menu-link">{ img } { icon } { badge } { title }{ caret }</Link>
							)}
	
							
							
	
							{this.props.data.children && (						
								<div className={"menu-submenu " + (((this.props.active || (this.props.clicked === -1 && match) || this.props.data.search) && !configTemplate.appSidebarMinified) ? 'd-block ' : 'd-none')}>
								
									{this.props.data.children && this.props.data.children.map((submenu, i) => (
										<SidebarNavList
											data={submenu} 
											key={i} 
											expand={(e) => this.handleExpand(e, i, match)}
											active={i === this.state.active} 
											clicked={this.state.clicked}
											configTemplate={configTemplate}
										/>
									))}
								</div>
							)}
						</div>
					)}
					/>
				</Fragment>
			);
		}

		
	}
}

const mapStateToProps = (state) => {
return{
	configTemplate: state.ReducerConfigTemplate
}
}

export default connect(mapStateToProps)(SidebarNavList);