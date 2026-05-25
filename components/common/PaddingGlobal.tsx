import ContainerLarge from "./ContainerLarge";

// Define padding classes for different screen sizes
const paddings = {
  mobile: "px-4", // 0 - 479

  mobileL: "min-[480px]:px-5", // 480 - 767

  tablet: "min-[768px]:px-8", // 768 - 991

  desktop: "min-[992px]:px-12", // 992+
};

export default function PaddingGlobal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${paddings.desktop} ${paddings.tablet} ${paddings.mobileL} ${paddings.mobile}`}
    >
      <ContainerLarge>{children}</ContainerLarge>
    </div>
  );
}
