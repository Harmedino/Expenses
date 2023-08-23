import { redirect } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

export function action() {
  signOut(auth)
    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
  return redirect("/");
}
