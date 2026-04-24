import { notFound } from "next/navigation";

import colors from "../../data/colors.json";

type Color = {
  name: string;
  hex: string;
};

// remove this to convert from SSG to SSR
export function generateStaticParams() {
  return colors.map((color) => ({ color: encodeURIComponent(color.name) }));
}

export default async function ColorPage({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const { color: colorName } = await params;
  const color = colors.find(
    (item) => item.name === decodeURIComponent(colorName),
  );

  if (!color) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: color.hex, height: "100vh", color: "#fff" }}>
      <h1>{color.name}</h1>
      <p>{color.hex}</p>
    </div>
  );
}
