import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as sHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as rHeart} from '@fortawesome/free-regular-svg-icons'

const width = Dimensions.get('screen').width

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <Image 
            style={styles.imgHeader}
            source={{uri :'https://i.imgur.com/ZrDq6UQ.jpg'}} 
          />
          <Text style={styles.userHeader}>andreymasiero</Text>
        </View>
        <Image 
          style={styles.picture}
          source={{uri :'https://i.imgur.com/ZrDq6UQ.jpg'}} 
        />
        <View style={styles.containerLikes}>
          <FontAwesomeIcon icon={false ? sHeart : rHeart} 
            size={32} 
            style={false ? styles.heart : {}}/>
          <Text style={styles.leftSpace} >2 curtidas</Text>
        </View>
        <Text style={styles.leftSpace} numberOfLines={3} >
          <Text style={styles.userPost}>andreymasiero  </Text>
          Landscape painted on the surface of a cut log
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    flexDirection : 'row',
    alignItems: 'center',
    padding : 16
  },
  imgHeader : {
    height : 48,
    width : 48,
    borderRadius : 50,
    marginRight : 8
  },
  userHeader : {
    fontFamily : Platform.os === 'ios' ? 
                'AveniNext-Regular' : 'Roboto',
    fontSize : 16
  },
  picture : {
    width : width,
    height : width
  },
  containerLikes : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 8
  }, 
  heart : {
    color : 'red'
  },
  leftSpace : {
    paddingHorizontal : 8
  },
  userPost : {
    fontWeight : 'bold'
  }
});


export default App;
