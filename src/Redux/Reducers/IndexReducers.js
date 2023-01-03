import { combineReducers } from 'redux'
// Liste des reducers de l'application
import ReducerConfigTemplate from './ReducerConfigTemplate'
import ReducerActionCard from './ReducerActionCard'
import ReducerModal from './ReducerModal'
import ReducerAutre from './ReducerAutre'

const allReducers = combineReducers({
    ReducerConfigTemplate:  ReducerConfigTemplate,
    ReducerActionCard:      ReducerActionCard,
    ReducerModal:           ReducerModal,
    ReducerAutre:           ReducerAutre
})

export default allReducers