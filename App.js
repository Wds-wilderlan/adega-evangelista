import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Adeguinha do Evangelista</Text>
      <ScrollView>
        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Askov_FV.png')}
            />

          <View style={styles.cxtext}>
          <Text style={styles.nome}> Askov Frutas Vermelhas </Text>
          <Text style={styles.preco}> R$ 16,00 </Text>
          </View>

        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Cantinho_do_Vale.png')}
          />

          <View>
          <Text style={styles.nome}> Cantinho do Vale </Text>
          <Text style={styles.preco}> R$ 5,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Jack_Daniels.png')}
          />

          <View>
          <Text style={styles.nome}> Jack Daniels </Text>
          <Text style={styles.preco}> R$ 140,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Voss.png')}
          />

          <View>
          <Text style={styles.nome}> Voss </Text>
          <Text style={styles.preco}> R$ 51,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Gin.png')}
          />

          <View>
          <Text style={styles.nome}> Eternity Gin </Text>
          <Text style={styles.preco}> R$ 24,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Cavalo_Branco.png')}
          />

          <View>
          <Text style={styles.nome}> Cavalo Branco </Text>
          <Text style={styles.preco}> R$ 95,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Red_Label.png')}
          />

          <View style={styles.cxtext}>
          <Text style={styles.nome}> Red Label </Text>
          <Text style={styles.preco}> R$ 142,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/51_Ice.png')}
          />

          <View>
          <Text style={styles.nome}> 51 Ice (Limão) </Text>
          <Text style={styles.preco}> R$ 6,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Askov_Vodka.png')}
          />

          <View>
          <Text style={styles.nome}> Askov (Vodka) </Text>
          <Text style={styles.preco}> R$ 15,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Brahma_DM.png')}
          />

          <View>
          <Text style={styles.nome}> {`Brahma`} </Text>
          <Text style={styles.preco}> R$ 5,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Coca_Cola.png')}
          />

          <View>
          <Text style={styles.nome}> Coca Cola </Text>
          <Text style={styles.preco}> R$ 4,00 </Text>
          </View>
        </View>

        <View style={styles.cxfoto}>
          <Image
            style={styles.img}
            resizeMode="strech"
            source={require('./assets/Pepsi.png')}
          />

          <View>
          <Text style={styles.nome}> Pepsi </Text>
          <Text style={styles.preco}> R$ 4,00 </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#999999',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 900,
    textAlign: 'center',
    color: '#000000',
  },
  img: {
    width: 150,
    height: 150,
    margin: 20,
  },
  cxfoto: {
    margin: 5,
    backgroundColor: '#000000',
    borderRadius: 25,
    flexDirection: 'row',
  },
  nome: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 18,
    marginBottom: 35,
    color: '#ffffff',
    marginTop: 60,
  },
  preco: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 350,
    fontSize: 20,
    marginBottom:50 
  },
  cxtext: {
    flex: 10
  }
});
