"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [haveUser, setHaveUser] = useState(true);

  const logOut = async () => {
    await signOut(auth)
      .then(() => {
        setHaveUser(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!haveUser) {
    redirect("/");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logOut}>Sign out</button>
    </div>
  );
}
