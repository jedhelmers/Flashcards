import { addDeck, addCard, answerQuestion } from '../../utils/sampledata'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_SCORE = 'ANSWER_QUESTION'
export const RESET_DECK = 'RESET_DECK'

export function getDecks(decks){
  return {
    type: GET_DECKS,
    decks
  }
}

export function addDeckAction(deck){
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCardToDeckAction(deck, { question, answer }){
  deck.questions = deck.questions.concat({ question, answer })
  return {
    type: ADD_CARD,
    deck
  }
}

export function answerQuestionAction(deck){
  return {
    type: ANSWER_QUESTION,
    deck
  }
}

export function getScoreAction(deck){

  return {
    type: ADD_SCORE,
    deck
  }
}

export function resetDeckAction(deck){
  console.log('ACTIONS: ', deck)
  deck.questions.map(question => question.correct = undefined)
  return {
    type: RESET_DECK,
    deck
  }
}
