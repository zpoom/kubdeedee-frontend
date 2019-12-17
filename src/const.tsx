import firebase from "firebase";
interface MenuItemPayload {
  icon: string;
  word: string;
}
export const MENU_ITEMS: Array<MenuItemPayload> = [
  { icon: "warning", word: "Dangerous Driver" },
  { icon: "bar-chart", word: "Visualize" }
];

interface Stat {
  img?: string;
  yawn: number;
  warning: number;
  status: string;
  possibility: number;
}

interface HeartRate {
  time: number;
  value: number;
}

var firebaseConfig = {
  apiKey: "AIzaSyB3z5BFbT_EuZmfO5MhHK8dsShEO95s7h0",
  authDomain: "kubdeedee-3f5e2.firebaseapp.com",
  databaseURL: "https://kubdeedee-3f5e2.firebaseio.com",
  projectId: "kubdeedee-3f5e2",
  storageBucket: "kubdeedee-3f5e2.appspot.com",
  messagingSenderId: "944937426202",
  appId: "1:944937426202:web:87b6081a02bf37e486a0a3",
  measurementId: "G-8X3BJW97LQ"
};
export const app = firebase.initializeApp(firebaseConfig);
