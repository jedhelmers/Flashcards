import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import LottieView from 'lottie-react-native'

export default class Deck extends React.Component {
  static navigationOptions = {
    title: 'Links',
  }

  static navigationOptions = {
    header: null,
  }

  async componentDidMount(){
    this.animation.play()
    this.animation.play(30, 120)
  }

  render() {
    let { deck } = this.props

    return (
      <View style={styles.container}>

          <View style={styles.welcomeContainer}>
            <View style={{ width: 300, height: 60 }}>
              <View style={{ flex: 1 }}>
                <LottieView
                  ref={animation => {
                    this.animation = animation
                  }}
                  source={require('../../assets/lottie/topBounceAlt.json')}
                />
              </View>
            </View>
          </View>

          <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={styles.getStartedContainer, { marginBottom: 30 }}>
              <Text style={{ color: '#24292e', textAlign: 'center', fontSize: 38 }}>
                {deck.title}
              </Text>
              <Text style={{ color: '#24292e', textAlign: 'center' }}>
                {deck.questions.length > 1 || deck.questions.length === 0 ? `${deck.questions.length} Questions` : `${deck.questions.length} Question`}
              </Text>
            </View>

            <View>
            <View style={styles.button}>
              <Button
                title='Add Card'
                color= '#24292e'
                onPress={() => this.props.pageHandler('addQuestion', deck)}
              ></Button>
            </View>

              <TouchableOpacity style={styles.buttonBlack}>
                <Button
                  title='Start Quiz'
                  color= 'white'
                  onPress={() => this.props.pageHandler('question', deck)}
                ></Button>
              </TouchableOpacity>
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {
    borderRadius: 4,
    borderColor: '#24292e',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10
  },
  buttonBlack: {
    borderRadius: 4,
    backgroundColor: '#24292e',
    color: 'white',
    borderColor: '#24292e',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderRadius: 4,
    borderColor: '#7caee3',
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