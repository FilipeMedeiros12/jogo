import React from 'react';

import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/filipemedeiros12.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Filipe</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitoria</Text>
      </View>
    </View>
  );
}