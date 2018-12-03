import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';
import Carousel ,{Pagination} from 'react-native-snap-carousel';

export default class HomeCarosel extends Component{
    
    state = {
        entries:  [{
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
            title: 'Acrocorinth, Greece',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
            title: 'The lone tree, majestic landscape of New Zealand',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
            title: 'Middle Earth, Germany',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/lceHsT6l.jpg'
        }],
        activeSlide:0
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'transparent' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'black'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }


    _renderItem ({item, index}) {
        return (
            <View style={{width:Dimensions.get('window').width}} >
                <Image
          style={{width: 200, height: 200}}
          source={{uri: item.illustration}}
        />
            </View>
        );
    }

    render(){
        return (
            <View style={styles.slide}>
                <Carousel
                windowSize={1}
                data={this.state.entries}
                renderItem={this._renderItem}
                itemHeight={200}
                itemWidth={Dimensions.get('window').width}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={200}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
            </View>

            // <View style={{height:200}}>
            //     <Carousel
            //   ref={(c) => { this._carousel = c; }}
            //   data={this.state.entries}
            //   renderItem={this._renderItem}
            //   sliderWidth={200}
            //   itemWidth={200}
            // />
            // </View>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        width: Dimensions.get('window').width,
        height: 200,
        paddingHorizontal: 20
        // other styles for the item container
    },
    slideInnerContainer: {
        width: 280,
        flex: 1
        // other styles for the inner container
    }
});