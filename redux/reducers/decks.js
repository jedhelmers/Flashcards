import { GET_DECKS, ADD_DECK, ADD_CARD, ANSWER_QUESTION, RESET_DECK } from '../actions/decks'

export default function decks(state = [], action){
  switch(action.type){
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD:
      return {
        ...state,
        ...action.deck
      }
    case ANSWER_QUESTION:
      return {
        ...state,
        ...action.deck
      }
    case RESET_DECK:
      console.log('RESET_DECK: ', action.deck)
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}
