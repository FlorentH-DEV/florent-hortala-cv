import React, {Fragment} from "react";
import { connect } from 'react-redux'
import PerfectScrollbar from "react-perfect-scrollbar";
import SidebarNav from "./Sidebar-nav.jsx";
import {toggleAppSidebarMinify, toggleAppSidebarMobile} from '../../../Redux/Actions/ActionConfigTemplate.js'
import {useParams } from "react-router-dom";

const Sidebar = (props) => {
  const {configTemplate} = props 

  const {} = useParams()
  return (    
    <Fragment>
      <div id="sidebar" className="app-sidebar">
        <PerfectScrollbar
          className="app-sidebar-content h-100"
          options={{ suppressScrollX: true }}
        >
        
          <SidebarNav />
          <div className="menu">
            <div className="menu-item d-flex">
              <div
                className="app-sidebar-minify-btn ms-auto"
                onClick={() =>
                  props.toggleAppSidebarMinify(
                    configTemplate.appSidebarMinify,
                    configTemplate.appSidebarFloatSubMenuActive
                  )
                }
              >
                <i className="fa fa-angle-double-left"></i>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      <div className="app-sidebar-bg"></div>
      <div className="app-sidebar-mobile-backdrop">
        <div
          onClick={() => props.toggleAppSidebarMobile(!configTemplate.appSidebarMobileToggled)}
          className="stretched-link"
        ></div>
      </div>
    </Fragment>     
  );
}

const mapStateToProps = (state) => {
  return{
    configTemplate: state.ReducerConfigTemplate
  }
}

export default connect(mapStateToProps, {toggleAppSidebarMinify, toggleAppSidebarMobile})(Sidebar);
