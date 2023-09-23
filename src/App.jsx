import { useState } from "react";
import Button from "./assets/button";

function App() {
  const [bg, setBg] = useState("black");
  const changeBg = (clr) => {
    setBg(clr);
  };
  return (
    <>
      <div style={{ backgroundColor: bg }} className="h-screen w-full" />
      <div className="flex absolute bottom-10 justify-center">
        <Button click={changeBg} clr="red" clr_name="red" />
        <Button click={changeBg} clr="blue" clr_name="blue" />
        <Button click={changeBg} clr="green" clr_name="green" />
        <Button click={changeBg} clr="gray" clr_name="gray" />
        <Button click={changeBg} clr="orange" clr_name="orange" />
        <Button click={changeBg} clr="purple" clr_name="purple" />
        <Button click={changeBg} clr="yellow" clr_name="yellow" />
        <Button click={changeBg} clr="olive" clr_name="olive" />
      </div>
    </>
  );
}

export default App;

// {/* Red Button */}
// <button
// onClick={() => {
//   setColor("red");
// }}
// className="border-white border-2 bg-[red] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>

// {/* blue Button */}
// <button
// onClick={() => {
//   setColor("red");
// }}
// className="border-white border-2 bg-[blue] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
// {/* green Button */}
// <button
// onClick={() => {
//   setColor("green");
// }}
// className="border-white border-2 bg-[green] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
// {/* olive Button */}
// <button
// onClick={() => {
//   setColor("olive");
// }}
// className="border-white border-2 bg-[olive] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
// {/* purple Button */}
// <button
// onClick={() => {
//   setColor("purple");
// }}
// className="border-white border-2 bg-[purple] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
// {/* white Button */}
// <button
// onClick={() => {
//   setColor("white");
// }}
// className="border-white border-2 bg-white mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
// {/* orange Button */}
// <button
// onClick={() => {
//   setColor("orange");
// }}
// className="border-white border-2 bg-[orange] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
// {/* gray Button */}
// <button
// onClick={() => {
//   setColor("gray");
// }}
// className="border-white border-2 bg-[gray] mx-2 py-2 px-5 rounded-xl"
// >
// red
// </button>
