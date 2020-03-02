import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const TestScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmitEditing = () => {
    messages.push(newMessage);
    setNewMessage('');
    setMessages(messages);
  };

  return (
    <SafeAreaView style={styles.container}>
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
            numberOfLines={1}
            returnKeyType="send"
            onSubmitEditing={handleSubmitEditing}
            style={styles.input}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TestScreen;
