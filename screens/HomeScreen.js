import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import Question from './homepages/Question'
import Home from './homepages/Home'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      deck: {}
    }

    this.pageHandler = this.pageHandler.bind(this)
  }

  static navigationOptions = {
    header: null,
  }

  pageHandler(page, deck){
    this.setState({
      page: page,
      deck: deck
    })
  }

  componentDidMount(){
    this.setState({
      page: 'home',
      deck: {}
    })
  }

  render() {
    let { decks } = this.props
    let { page, deck } = this.state

    return (
      <React.Fragment>
        {page === 'home' && (
          <Home decks={decks} pageHandler={this.pageHandler}/>
        )}
        {page === 'question' && (
          <Question deck={deck} pageHandler={this.pageHandler}/>
        )}
      </React.Fragment>
    )
  }
}


function mapStateToProps({decks}){
  return {
    decks
  }
}

export default connect(mapStateToProps)(HomeScreen)
