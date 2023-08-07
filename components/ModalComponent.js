import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const ModalComponent = ({
  isVisible,
  title,
  text,
  index,
  onClose,
  onTextChange,
}) => {
  const [editText, setEditText] = useState("");
  console.log(index, title, text);

  const [editedText, setEditedText] = useState(text);

  useEffect(() => {
    setEditedText(text);
  }, [text]);

  const handleOnChangeText = (text) => {
    setEditText(text);
  };

  const handleSave = () => {
    onTextChange(editText);
    onClose();
  };

  return (
    <Modal visible={isVisible} index={index} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            width: 350,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            {title}
          </Text>
          <Text>{text}</Text>
          <TextInput
            multiline
            numberOfLines={4}
            value={editedText}
            onChangeText={(text) => handleOnChangeText(text)}
            style={styles.textInput}
          />

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={styles.closeButton}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#6495ED",
    padding: 8,
    alignItems: "center",
  },
});

export default ModalComponent;
