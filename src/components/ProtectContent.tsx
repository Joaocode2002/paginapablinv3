import { useEffect } from "react";

export function ProtectContent() {
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd + (U, S, P, C, X, A)
      if ((e.ctrlKey || e.metaKey) && ["u", "s", "p", "c", "x", "a"].includes(key)) {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd + Shift + (I, J, C, K)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c", "k"].includes(key)) {
        e.preventDefault();
        return;
      }
    };
    const blockDrag = (e: DragEvent) => e.preventDefault();
    const blockSelect = (e: Event) => e.preventDefault();

    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("dragstart", blockDrag);
    document.addEventListener("selectstart", blockSelect);

    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("dragstart", blockDrag);
      document.removeEventListener("selectstart", blockSelect);
    };
  }, []);

  return null;
}
