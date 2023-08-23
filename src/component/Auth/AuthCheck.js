import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

export function AuthCheck() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return resolve(user);
      } else {
        return resolve(null);
      }
    });
  });
}

export function loader() {
  return AuthCheck();
}
