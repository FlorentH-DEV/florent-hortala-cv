import {actionListe} from './TypeActions'

/* Header */
export const handleSetAppHeaderInverse = (value) => {
  return async (dispatch) => {
    dispatch({         
      type: actionListe.APP_HEADER_INVERSE,   
      appHeaderInverse: value      
    })
  }
}

/* Sidebar Left */
export const toggleAppSidebarMinify = (appSidebarMinify, appSidebarFloatSubMenuActive) => {
  if (appSidebarMinify) {
    appSidebarFloatSubMenuActive = false
  }
  return async (dispatch) => {
    dispatch({         
      type: actionListe.SIDEBAR_LEFT_MINIFY,   
      appSidebarFloatSubMenuActive: appSidebarFloatSubMenuActive,
      appSidebarMinify: !appSidebarMinify
    })
  }
}
/* Responsive */
export const toggleAppSidebarMobile = (appSidebarMobileToggled) => {
  return async (dispatch) => {
    dispatch({         
      type: actionListe.SIDEBAR_LEFT_TOGGLE_MOBIL,  
      appSidebarMobileToggled: appSidebarMobileToggled 
    })
  }
}

 // SideBar Right
export const toggleAppSidebarEnd = (appSidebarEndToggled) => {
  return async (dispatch) => {
    dispatch({
      type: actionListe.SIDEBAR_RIGHT_TOOGLE_END,
      appSidebarEndToggled: !appSidebarEndToggled
    })
  }
}
/* Responsive */
export const toggleAppSidebarEndMobile = () => {
  return async (dispatch) => {
    dispatch({
      type: actionListe.SIDEBAR_RIGHT_TOOGLE_MOBILE,
    })
  }
}