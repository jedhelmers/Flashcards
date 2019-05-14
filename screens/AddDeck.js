import React from 'react';
import { ScrollView, Link, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import { addDeckActionHandler } from '../redux/actions/shared'
import { createSwitchNavigator } from "react-navigation"
import { createBrowserApp } from "react-navigation"

class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.changeHandler = this.changeHandler.bind(this)
    this.actionHandler = this.actionHandler.bind(this)
  }

  static navigationOptions = {
    title: 'Add Deck',
  };

  actionHandler(){
    this.props.addDeckActionHandler({ key: this.textCleaner(this.state.text), title: this.state.text})
    // this.props.pageHandler('home')
    this.props.navigation.navigate('Decks')
    console.log('ADDDECK: ')
  }

  changeHandler(txt){
    this.setState({
      text: txt
    })
  }

  textCleaner(txt){
    return txt.replace(/[^\w\s]/gi, '')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <View style={{ width: 300, height: 60 }}>
              <View style={{ flex: 1 }}>

              </View>
            </View>
          </View>



          <Text style={{ fontSize: 30 }}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            placeholder='Enter Deck Title'
            value={this.state.text}
          />
          <Button
            title='+ Add Deck'
            onPress={() => this.actionHandler()}
            color='#7caee3'
          ></Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    borderBottomWidth: 2,
    borderColor: 'pink',
    borderStyle: 'solid',
    height: 40,
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 4,
    borderColor: '#24292e',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
    width: 300,
    height: 150,
    flex: 1,
    justifyContent: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

function mapStateToProps(){
  return {
    title: 'butts',
    key: 'keyButt'
  }
}

export default connect(mapStateToProps, {addDeckActionHandler})(AddDeck)
