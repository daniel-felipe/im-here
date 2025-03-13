import {
  ScrollView,
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
    console.log('Participant added!')
  }

  function handleRemoveParticipant() {
    console.log('Participant removed!')
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleRemoveParticipant}
          />
        ))}
      </ScrollView>
    </View>
  )
}
