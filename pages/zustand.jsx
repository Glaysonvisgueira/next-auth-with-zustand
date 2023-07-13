import { useEffect } from "react";
import { useBookStore } from "../store/bookStore";

export default function Zustand() {
  const amount = useBookStore((state) => state.amount);
  const updateAmount = useBookStore((state) => state.updateAmount);

  return (
    <>
      <h1>AMOUNT: {amount} </h1>
      <button onClick={() => updateAmount(-1)}>DIMINUIR</button>
      <button onClick={() => updateAmount(1)}>AUMENTAR</button>
    </>
  );
}
