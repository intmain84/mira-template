import ContainerLarge from "./ContainerLarge";

// Define padding classes for different screen sizes
const paddings = {
  base: "px-4",
  md: "min-[768px]:px-12.5",
  sm: "min-[480px]:px-5",
};

export default function PaddingGlobal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${paddings.base} ${paddings.sm} ${paddings.md}`}>
      <ContainerLarge>{children}</ContainerLarge>
    </div>
  );
}
