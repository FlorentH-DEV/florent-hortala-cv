import { actionListe } from '../Actions/TypeActions'

export default (
    state = {
        // Header
        appHeaderInverse: false,
        // Sidebar Left
        appSidebarMinified: false,          // Paramétrage
        appSidebarNone: false,              // Paramétrage


        appSidebarFloatSubMenuActive: false,
        appSidebarMinify: false,
        appSidebarMobileToggled: false,
        appSidebarEndMobileToggled: false,
        // Sidebar Right
        appSidebarTwo: true,
        appSidebarEndToggled: false,
        appSidebarEnd: false,
    },
    action
) => {
    switch (action.type){                
        case actionListe.APP_HEADER_INVERSE:
            return {
                ...state, 
                appHeaderInverse: action.appHeaderInverse
            }  
        case actionListe.SIDEBAR_LEFT_MINIFY:
            return {
                ...state,
                appSidebarFloatSubMenuActive: action.appSidebarFloatSubMenuActive,
                appSidebarMinify: action.appSidebarMinify,
                appSidebarMinified: !state.appSidebarMinified
            }
        case actionListe.SIDEBAR_LEFT_TOGGLE_MOBIL:
            return{
                ...state,
                appSidebarMobileToggled: action.appSidebarMobileToggled
            }
        case actionListe.SIDEBAR_RIGHT_SET_APP:
            return{
                ...state,
                appSidebarTwo: action.appSidebarTwo,
                appSidebarEndToggled: action.appSidebarEndToggled
            }
        case actionListe.SIDEBAR_RIGHT_TOOGLE_END:
            return{
                ...state,
                appSidebarEndToggled: action.appSidebarEndToggled
            }
        case actionListe.SIDEBAR_RIGHT_END:
            return{
                ...state,
                appSidebarEnd: action.appSidebarEnd
            }
        case actionListe.SIDEBAR_RIGHT_TOOGLE_MOBILE:
            return{
                ...state,
                appSidebarEndMobileToggled: !state.appSidebarEndMobileToggled
            }

        default:
            return state
    }
}