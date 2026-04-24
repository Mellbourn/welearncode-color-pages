import { notFound } from "next/navigation";

import colors from "../../data/colors.json";

type Color = {
  name: string;
  hex: string;
};

export function generateStaticParams() {
  return colors.map((color) => ({ color: color.name }));
}

export default function ColorPage({ params }: { params: { color: string } }) {
  const color = colors.find((item) => item.name === params.color);

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
