import { addDeck, addCard, answerQuestion } from '../../utils/sampledata'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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
