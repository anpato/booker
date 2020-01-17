import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { GlobalStyles } from '../../../styles/GlobalStyle'
import { Card } from '../../../shared'
import { Primary, Danger } from '../../../styles/Colors'

export default class Home extends Component {
  state = {
    appointments: [
      {
        id: 1,
        location: 'Beexa',
        date: new Date().toLocaleDateString(),
        time: `${new Date()
          .getHours()
          .toLocaleString()}:${new Date().getMinutes()}`
      }
    ]
  }

  renderItem = (data: any) => {
    const { item } = data
    console.log(item)
    return (
      <View style={styles.card}>
        <Text>{item.location}</Text>
        <Text>At {item.time}</Text>
      </View>
    )
  }

  renderList = () => (
    <FlatList
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={(item: any) => this.renderItem(item)}
      data={this.state.appointments}
    />
  )

  render() {
    const appointmentCount = 3

    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text
                style={[
                  GlobalStyles.text,
                  styles.counterStyle,
                  { color: appointmentCount > 0 ? Primary : Danger }
                ]}
              >
                {appointmentCount}
              </Text>
            </View>
            <Text style={[GlobalStyles.text, styles.cardText]}>
              Upcoming appointments
            </Text>
          </View>
        </Card>
        {this.renderList()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { ...GlobalStyles.container, marginTop: 10 },
  counterStyle: {
    fontSize: 32,
    marginHorizontal: 5
  },
  card: {
    padding: 40,
    marginHorizontal: 20,
    textAlign: 'left'
  },
  cardText: {
    fontSize: 22
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
