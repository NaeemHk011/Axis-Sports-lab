import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// After a new deployment, old hashed chunk files no longer exist on the server.
// Vite fires this event when a dynamic import fails to load; reloading fetches
// the new HTML and the updated file hashes, recovering transparently.
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
