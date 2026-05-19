// Define width classes for different screen sizes. By default, the container will take the full width of its parent.
const widths = {
  base: "w-full",
  md: "min-[768px]:w-full",
  sm: "min-[480px]:w-full",
};

export default function ContainerLarge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${widths.base} ${widths.sm} ${widths.md}`}>{children}</div>
  );
}
