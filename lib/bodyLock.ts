const canUseDom = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

let savedScrollY = 0;

export const lockBodyFixed = () => {
  if (!canUseDom()) return;

  savedScrollY = window.scrollY || 0;
  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.touchAction = "none";
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
};

export const unlockBodyFixed = () => {
  if (!canUseDom()) return;

  document.documentElement.style.overflow = "";
  document.documentElement.style.touchAction = "";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, savedScrollY);
};
