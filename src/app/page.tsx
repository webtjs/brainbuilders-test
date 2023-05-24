"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haveUser, setHaveUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setHaveUser(true);
    } else {
      console.log("no user");
    }
  });

  if (haveUser) {
    redirect("/home");
  }

  const signIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <h1>BrainBuilders</h1>
      <h2>Login page</h2>
      <form onSubmit={signIn}>
        <label htmlFor="fname">Email:</label>
        <br />
        <input
          placeholder="Email..."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Password:</label>
        <br />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign In</button>
        <input type="reset" id="sbutton" name="sbutton" value="Reset" />
      </form>
      <a href="/create-account"> New Account? </a> <br />
      <a href="https://www.google.co.nz"> Remember password? </a>
    </div>
  );
}
