import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import Modal from "./components/ModalComponent";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [showTickIcon, setShowTickIcon] = useState(false);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  // const handleRowClick = (index, title, text) => {
  //   setSelectedTitle(title);
  //   setSelectedText(text);

  //   setSelectedRowIndex(index);
  //   setModalVisible(true);
  // };

  // const handleTextChange = (text) => {
  //   const updatedData = [...task];
  //   updatedData[selectedRowIndex] = text;
  //   setTask(updatedData);
  //   console.log(
  //     updatedData[selectedRowIndex],
  //     updatedData[selectedRowIndex].task,
  //     selectedRowIndex
  //   );
  // };

  // const handleTextChange = (text) => {
  //   const updatedRowData = [...taskItems];
  //   updatedRowData[index].text = text;
  //   setTaskItems(updatedRowData);
  // };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  // const handleClick = () => {
  //   setShowTickIcon(true);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today Task's</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} showTickIcon={showTickIcon} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a Task!"
          value={task}
          onChangeText={(title) => setTask(title)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* <Modal
        isVisible={isModalVisible}
        title={selectedTitle}
        text={selectedText}
        index={selectedRowIndex}
        onClose={() => setModalVisible(false)}
        onTextChange={handleTextChange}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
