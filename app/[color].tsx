import colors from "../data/colors.json";

export async function getStaticPaths() {
  const paths = colors.map((color) => ({
    params: { color: color.name },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { color: string };
}) {
  const color = colors.find((c) => c.name === params.color);
  return {
    props: {
      color,
    },
  };
}

export default function Color({ color }: { color: { name: string; hex: string } }) {
  return (
    <div style={{ backgroundColor: color.hex, height: "100vh", color: "#fff" }}>
      <h1>{color.name}</h1>
      <p>{color.hex}</p>
    </div>
  );
}
