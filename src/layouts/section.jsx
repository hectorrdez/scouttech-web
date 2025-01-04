export default function Section({
  children,
  containerClassName = "",
  contentClassName = "",
  ...args
}) {
  const newContainerClassName = [
    "flex w-full justify-center",
    containerClassName,
  ]
    .join(" ")
    .trim();
  const newContentClassName = ["w-full max-w-screen-xl", contentClassName]
    .join(" ")
    .trim();
  return (
    <section className={newContainerClassName} {...args}>
      <div className={newContentClassName}>{children}</div>
    </section>
  );
}
