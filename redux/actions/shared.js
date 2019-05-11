import { getInitialData } from '../../utils/sampledata'
import { getDecks } from './decks'

export function handleInitialData(){
  return dispatch => {
    return getInitialData()
    .then(({decks}) => {
      dispatch(getDecks(decks))
    })
  }
}
