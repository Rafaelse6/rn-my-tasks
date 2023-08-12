import {FlatList, TouchableOpacity, StyleSheet, Text} from "react-native";
import {ITasksContext, TasksContext} from "../../context/TasksContext";
import React from "react";

export const TaskList = () => {
  const tasks = React.useContext(TasksContext);

  return (
    <FlatList
      data={tasks as unknown as ITasksContext[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: "#29292e",
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  titleTask: {
    color: "#f1f1f1",
    fontSize: 20,
    fontWeight: "bold",
  },
});
