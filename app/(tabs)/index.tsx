import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const cor_principal = "#1C1E1F";
  const cor_secundaria = "#F2F0EF";
  const cor_destaque = "#FF0000";

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Filmes Geral</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#1C1E1F', // 🎨 COLOQUE AQUI A COR DE FUNDO DA TELA
  },

  texto: {
    color: '#FF0000', // 🎨 COLOQUE AQUI A COR DO TEXTO DO CONTEÚDO
    fontSize: 18,
  }
});