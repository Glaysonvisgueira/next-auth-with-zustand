import { useBookStore } from "../store/bookStore";
import { useEffect, useState } from "react";

export default function Home() {
  const amount = useBookStore((state) => state.amount);
  const updateAmount = useBookStore((state) => state.updateAmount);
  const reset = useBookStore((state) => state.reset);

  const [amountState, setAmountState] = useState("");

  useEffect(() => {
    setAmountState(amount);
  }, [amount]);

  console.log(amount);

  return (
    <>
      <h1>AMOUNT: {amountState} </h1>
      <button onClick={() => updateAmount(-5)}>DIMINUIR</button>
      <button onClick={() => updateAmount(5)}>AUMENTAR</button>
      <button onClick={() => reset()}>resetar</button>
    </>
  );
}
