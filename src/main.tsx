import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const restoreGitHubPagesRoute = () => {
  const { pathname, search, hash } = window.location;

  if (!search.startsWith("?/") && !sessionStorage.getItem("redirect")) {
    return;
  }

  const storedRedirect = sessionStorage.getItem("redirect");
  if (storedRedirect) {
    sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", storedRedirect);
    return;
  }

  const [route, ...queryParts] = search
    .slice(1)
    .split("&")
    .map((segment) => segment.replace(/~and~/g, "&"));

  const restoredPath = `${pathname.replace(/\/$/, "")}${route}${queryParts.length ? `?${queryParts.join("&")}` : ""}${hash}`;
  window.history.replaceState(null, "", restoredPath);
};

restoreGitHubPagesRoute();

createRoot(document.getElementById("root")!).render(<App />);

