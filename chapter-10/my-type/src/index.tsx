import React, { useState } from "react";
import ReactDOM from "react-dom";

type AppProps = {
  item: string;
};

function App({ item }: AppProps) {
  const [fabricColor, setFabricColor] = useState("purple");
  return (
    <div>
      <h1>
        {fabricColor} {item}
      </h1>
      {/* Change the value sent to the `setFabricColor` function from `3` to `blue` to fix */}
      <button onClick={() => setFabricColor(3)}>
        Make the Jacket Blue
      </button>
    </div>
  );
}

ReactDOM.render(
  <App item="jacket" />,
  document.getElementById("root")
);
