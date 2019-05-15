import { getInitialData, getAddedDeck, answerQuestion, addDeck, addCard, getScore, resetDeck } from '../../utils/sampledata'
import { getDecks, addDeckAction, addCardToDeckAction, answerQuestionAction, getScoreAction, resetDeckAction } from './decks'

export function handleInitialData(){
  return dispatch => {
    return getInitialData()
    .then(({decks}) => {
      dispatch(getDecks(decks))
    })
  }
}

export function addDeckActionHandler(deck){
  return dispatch => {
    return addDeck(deck)
      .then(deck => {
        dispatch(addDeckAction(deck))
      })
  }
}

export function addCardToDeck(deck){
  return dispatch => {
    return addCard(deck)
      .then(newdeck => {
        console.log('NEWCARD: ', newDeck)
        dispatch(addCardToDeckAction(newdeck))
    })
  }
}

export function answerQuestionHandler(deck){
  return dispatch => {
    return answerQuestion(deck)
      .then(deck => {
        dispatch(answerQuestionAction(deck))
      })
  }
}

export function getScoreHandler(key, answer){
  return dispatch => {
    return getScore(key, answer)
      .then(deck => {
        dispatch(getScoreAction(deck))
      })
  }
}

export function resetDeckHandler(deck){
  console.log('SHARED: ', deck)
  resetDeckAction(deck)
  return dispatch => {
    return resetDeck(deck)
      .then(newDeck => {
        console.log('SHARED: ', newDeck)
        dispatch(resetDeckAction(newDeck))
      })
  }
}
