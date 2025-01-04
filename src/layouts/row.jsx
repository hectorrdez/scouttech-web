export function Row({ children, className = "", ...args }) {
  const newClassName = ["flex flex-row", className].filter(Boolean).join(" ");

  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
