export function Bento({
  children,
  className = "",
  cols = 1,
  rows = 1,
  ...args
}) {
  const newClassName = [
    "grid",
    `grid-rows-${rows}`,
    `grid-cols-${cols}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}

export function BentoCell({
  children,
  className = "",
  cols = 1,
  rows = 1,
  ...args
}) {
  const newClassName = ["", `col-span-${cols}`, `row-span-${rows}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={newClassName} {...args}>
      {children}
    </article>
  );
}
