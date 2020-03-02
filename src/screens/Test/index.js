import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import { ScreenContainer } from '@components';
import styles from './styles';

const TestScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // useEffect(() => {
  //   Geolocation.requestAuthorization();
  // }, []);

  const handleSubmitEditing = () => {
    messages.push(newMessage);
    setNewMessage('');
    setMessages(messages);
  };

  return (
    <ScreenContainer withKeyboard>
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
    </ScreenContainer>
  );
};

export default TestScreen;
