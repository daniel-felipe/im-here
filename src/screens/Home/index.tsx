import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const participants = [
    'Ana',
    'Pedro',
    'Maria',
    'João',
    'Carlos',
    'Fernanda',
    'Lucas',
    'Camila',
    'Rafael',
    'Juliana',
    'Gustavo',
    'Carla',
    'Paulo',
    'Luciana',
    'Felipe',
    'Beatriz',
    'Thiago',
    'Larissa',
    'Eduardo',
    'Bruna',
  ]

  function handleAddParticipant() {
    if (participants.includes('Felipe')) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista com esse nome.'
      )
    }

    console.log('Participant added!')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])

    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ainda? Adicione participantes a sua lista de
            presença.
          </Text>
        )}
      />
    </View>
  )
}
