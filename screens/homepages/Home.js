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
import { WebBrowser } from 'expo';
import { connect } from 'react-redux'
import { MonoText } from '../../components/StyledText';
import LottieView from 'lottie-react-native'

class Home extends React.Component {
  static navigationOptions = {
    header: null,
    isLoadingComplete: false,
  };

  async componentDidMount(){
    this.animation.play()
    this.animation.play(30, 120)


  }

  render() {
    let { decks } = this.props


    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={[styles.welcomeContainer, styles.borderBottom]}>
            <View style={{ width: '100%', height: 100, marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <LottieView
                  ref={animation => {
                    this.animation = animation
                  }}
                  source={require('../../assets/lottie/topBounceAlt2.json')}
                />
              </View>
            </View>
          </View>

          <View style={styles.getStartedContainer}>
            {Object.values(decks).map((deck, index) => (
              <TouchableOpacity key={index} style={styles.card} onPress={() => this.props.pageHandler('deck', deck)}>
                <Text style={{ color: '#24292e', textAlign: 'center', fontSize: 24 }}>
                  {deck.title}
                </Text>
                <Text style={{ color: '#24292e', textAlign: 'center' }}>{deck.questions.length > 1 || deck.questions.length === 0 ? `${deck.questions.length} Questions` : `${deck.questions.length} Question`}</Text>
              </TouchableOpacity>
            ))}

          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  borderBottom: {
    backgroundColor: '#fff',
    borderColor: '#24292e',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#7caee3',
    borderStyle: 'solid',
    borderBottomWidth: 1,
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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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


export default Home
