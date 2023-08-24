import { redirect } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

export async function action() {
  const signOutTask = await signOut(auth);

  return redirect("/");
}
