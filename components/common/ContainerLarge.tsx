// Define width classes for different screen sizes. By default, the container will take the full width of its parent.
const widths = {
  mobile: "w-full", // 0 - 479

  mobileL: "min-[480px]:w-full", // 480 - 767

  tablet: "min-[768px]:w-full", // 768 - 991

  desktop: "min-[992px]:w-full", // 992+
};

export default function ContainerLarge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${widths.desktop} ${widths.tablet} ${widths.mobileL} ${widths.mobile}`}
    >
      {children}
    </div>
  );
}
