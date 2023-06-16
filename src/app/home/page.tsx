"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Container } from "@mui/material";
import "../styles.css";
import Banner from "./Banner";
import DeckList from "./DeckList";

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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setHaveUser(true);
    } else {
      setHaveUser(false);
    }
  });

  if (!haveUser) {
    redirect("/");
  }

  return (
    <main>
      <div className="App">
        <Banner />
        <Container maxWidth="sm">
          <DeckList />
          <button onClick={logOut}>Sign out</button>
        </Container>
      </div>
    </main>
  );
}
