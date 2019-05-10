import thunk from 'redux-thunk'
import { applyMiddleWare } from 'redux'
import logger from './logger'

export default applyMiddleWare(
  thunk,
  logger
)
