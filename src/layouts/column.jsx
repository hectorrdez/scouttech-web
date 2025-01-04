export function Column({ children, className = "", ...args }) {
  const newClassName = ["flex flex-col", className].filter(Boolean).join(" ");
  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
