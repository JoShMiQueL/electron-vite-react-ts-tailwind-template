import { createRoot } from "react-dom/client";

function App() {
  return (
    <>
      <p className="font-black">electron-vite-react-ts-tailwind-template 😊</p>
    </>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);