import Link from "next/link";
import DeckCard from "./DeckCard";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

export default function DeckList() {
  const [deckList, setDeckList] = useState<{ id: string }[]>([]);

  const deckListRef = collection(db, "user-id"); // A reference to the collection in firebase

  useEffect(() => {
    const getDeckList = async () => {
      try {
        const data = await getDocs(deckListRef); // Get all the documents from the collection based on the user id
        const filteredData = data.docs.map((doc) => ({
          // Get the data we are interested in (mainly the deck name which is doc.id)
          ...doc.data(),
          id: doc.id,
        }));
        setDeckList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getDeckList();
  }, []);

  return (
    <div>
      {deckList.map((deck) => (
        <div key={deck.id}>
          <Link href={"/home/" + deck.id}>{deck.id}</Link>
          <DeckCard deckId={deck.id}></DeckCard>
        </div>
      ))}
    </div>
  );
}
