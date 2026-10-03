import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useEffect } from "react";
import { useToast } from "../context/ToastContext";

export default function Toast() {
  const {
    toast,
    hideToast,
  } = useToast();

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      hideToast();
    }, 2500);

    return () => clearTimeout(timer);
  }, [toast]);

  if (!toast) {
    return null;
  }

  return (
    <View style={styles.toast}>
      <Text style={styles.text}>
        {toast.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 30,
    left: 25,
    right: 25,

    backgroundColor: "#222222",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,

    paddingVertical: 15,
    paddingHorizontal: 20,

    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});