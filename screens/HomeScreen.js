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
import Deck from './homepages/Deck'
import AddQuestion from './homepages/AddQuestion'
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

  pageHandler(page, deck = {}){
    this.setState({
      page: page,
      deck: deck
    })
  }

  async componentDidMount(){
    this.setState({
      page: 'home',
      deck: {}
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log('HOMESCREEN 1: ', prevProps )
    // console.log('HOMESCREEN 2: ', prevState )
    // console.log('HOMESCREEN 3: ', snapshot )

    if(prevState.page !== this.state.page){
      // this.setState({
      //   page: 'home'
      // })
      // console.log("HOMESCREEN 4: ", this.props.navigation.actions.setParams({ page: 'home' }))
    }

  }

  render() {
    let { decks } = this.props
    let { page, deck } = this.state

    // console.log('PROPS: ', this.props.navigation.state.routeName)

    return (
      <React.Fragment>
        {page === 'home' && (
          <Home decks={decks} pageHandler={this.pageHandler}/>
        )}
        {page === 'question' && (
          <Question deck={deck} pageHandler={this.pageHandler}/>
        )}
        {page === 'deck' && (
          <Deck deck={deck} pageHandler={this.pageHandler}/>
        )}
        {page === 'addQuestion' && (
          <AddQuestion deck={deck} pageHandler={this.pageHandler}/>
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
