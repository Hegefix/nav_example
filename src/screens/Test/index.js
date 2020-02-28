import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import styles from './styles';

const TestScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmitEditing = () => {
    const nextMessages = [...messages];
    nextMessages.push(newMessage);
    setNewMessage('');
    setMessages(nextMessages);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {messages.map((message, index) => (
          <Text key={index.toString()}>{message}</Text>
        ))}
      </ScrollView>
      <View style={styles.inputWrapper}>
        <TextInput
          value={newMessage}
          placeholder="Placeholder"
          onChangeText={text => setNewMessage(text)}
          multiline
          style={styles.input}
        />
        <Button title="Send" onPress={handleSubmitEditing} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TestScreen;
