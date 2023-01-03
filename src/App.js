import React, {Fragment} from 'react';
// Components
import Content from './Components/Content/Content.jsx'
import Header from './Components/Header/Header.jsx'
import SideBarLeft from './Components/SideBar/Sidebar-left/Sidebar-left'
// Css
import './Css/App.css';
// Redux
import { connect } from 'react-redux'
import HeaderSrub from './Components/Header/HeaderSrub.js';
import ModalApp from './Components/Lib/ModalApp.js';

const App = (props) => {
  const {configTemplate} = props

  return (    
    <Fragment>
        <div className={ 
					'app app-sidebar-fixed ' + 
					('app-header-fixed ') + 
					(configTemplate.appSidebarEnd ? 'app-with-end-sidebar ' : '') +
					(configTemplate.appSidebarMinify ? 'app-sidebar-minified ' : '') + 
					(configTemplate.appSidebarMobileToggled ? 'app-sidebar-mobile-toggled ' : '') + 
					(configTemplate.appSidebarTwo ? 'app-with-two-sidebar ' : '') +
					(configTemplate.appSidebarEndToggled ? 'app-sidebar-end-toggled ' : '') +
					(configTemplate.appSidebarEndMobileToggled ? 'app-sidebar-end-mobile-toggled ' : '') +
          /* Style ecriture */
          'font-link'
				}>
          <Header/>
          <SideBarLeft/>
          <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
              <Content/>
            </div>
            <div className='col-lg-1'></div>
          </div>
          <ModalApp/>
        </div>

    </Fragment>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    configTemplate: state.ReducerConfigTemplate
  }
}

export default connect(mapStateToProps)(App);

