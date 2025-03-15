import { useState } from 'react'
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
  const [participants, setParticipans] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista com esse nome.'
      )
    }

    setParticipans((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipans((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          onChangeText={setParticipantName}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
          disabled={!participantName}
        >
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
