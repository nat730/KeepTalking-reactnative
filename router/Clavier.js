    import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
    
    import image1 from './image_clavier/1.png';
    import image2 from './image_clavier/2.png';
    import image3 from './image_clavier/3.png';
    import image4 from './image_clavier/4.png';
    import image5 from './image_clavier/5.png';
    import image6 from './image_clavier/6.png';
    import image7 from './image_clavier/7.png';
    import image8 from './image_clavier/8.png';
    import image9 from './image_clavier/9.png';
    import image10 from './image_clavier/10.png';
    import image11 from './image_clavier/11.png';
    import image12 from './image_clavier/12.png';
    import image13 from './image_clavier/13.png';
    import image14 from './image_clavier/14.png';   
    import image15 from './image_clavier/15.png';
    import image16 from './image_clavier/16.png';
    import image17 from './image_clavier/17.png';
    import image18 from './image_clavier/18.png';
    import image19 from './image_clavier/19.png';   
    import image20 from './image_clavier/20.png';
    import image21 from './image_clavier/21.png';
    import image22 from './image_clavier/22.png';
    import image23 from './image_clavier/23.png';
    import image24 from './image_clavier/24.png';
    import image25 from './image_clavier/25.png';
    import image26 from './image_clavier/26.png';
    import image27 from './image_clavier/27.png';

    const images = [image1, image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27]

    const colonne1 = [image1, image2,image3,image4,image5,image6,image7]
    const colonne2 = [image8, image1, image7,image9,image10,image6,image11]
    const colonne3 = [image12,image13,image9,image14,image15,image3,image10]
    const colonne4 = [image16,image17,image18,image5,image14,image11,image19 ]
    const colonne5 = [image20,image19,image18,image21,image17,image22,image23]
    const colonne6 = [image16,image8,image24,image25,image20,image26,image27]


    export default function Clavier() {
        const handleImagePress = (index) => {
          console.log(`Image ${index + 1} cliquée`);
        };
      
        return (
          <View style={styles.container}>
            {[0, 1, 2].map((rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((colIndex) => {
                  const index = colIndex + rowIndex * 9;
                  return (
                    <TouchableOpacity
                      key={colIndex}
                      style={styles.imageContainer}
                      onPress={() => handleImagePress(index)}
                    >
                      <Image source={images[index]} style={styles.image} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flexDirection: 'column',
        },
        row: {
          flexDirection: 'row',
          padding: 5,
        },
        imageContainer: {
          width: 50,
          height: 50,
          margin: 5,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 5,
          overflow: 'hidden',
        },
        image: {
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        },
      });