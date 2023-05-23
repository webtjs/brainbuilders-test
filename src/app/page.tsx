"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password).catch((err) => {
      console.log(err);
    });
  };

  return (
    <body>
      <h1>BrainBuilders</h1>
      <h2>Login page</h2>
      <form onSubmit={signIn}>
        <label htmlFor="fname">Email:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label htmlFor="lname">Password:</label>
        <br />
        <input type="password" id="lname" name="lname" /> <br />
        <button type="submit">Sign In</button>
        <input type="reset" id="sbutton" name="sbutton" value="Reset" />
      </form>
      <a href="/create-account"> New Account? </a> <br />
      <a href="https://www.google.co.nz"> Remember password? </a>
    </body>
  );
}
