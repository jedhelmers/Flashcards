import { getInitialData, getAddedDeck, answerQuestion, addDeck, addCard, getScore } from '../../utils/sampledata'
import { getDecks, addDeckAction, addCardToDeckAction, answerQuestionAction, getScoreAction } from './decks'

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
