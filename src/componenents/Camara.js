/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
  Image
} from 'react-native';

import ImagePicker from 'react-native-image-picker';


class Camara extends Component {
  constructor(props){
    super(props);
    this.state = {
        imagePath:'',
        imageHeight:'',
        imageWidth:''
    };
  }

  async componentDidMount(){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }


  openImagePicker(){
    const options = {
      title : 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
        if(response.didCancel){
            console.log('Usuario cancelo la imagen');
        }else if(response.error){
          console.log('Error '+response.error);
        }else if(response.customButton){
          console.log('Usuario pulso '+response.CustomButton);
        }else{
          console.log(response);
          this.setState({
              imagePath:response.uri,
              imageHeight:response.height,
              imageWidth:response.width
          })

        }
    })
  }

  render(){
    return (
        <View style={styles.body}>
          <Button 
            title='Take picture' 
            onPress={ () => this.openImagePicker() }
          />
          { this.state.imagePath ? 
            <Image 
              style={{width:180,height:250}}
              source={{uri:this.state.imagePath}} />
            :
            null
          }
        </View>
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});

export default Camara;
