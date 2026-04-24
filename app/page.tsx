import Head from "next/head";
import Link from "next/link";

import colors from "../data/colors.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Color List</title>
        <meta
          name="description"
          content="A list of colors with their hex codes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {colors.map((color) => (
        <div key={color.name}>
          <Link href={`/${color.name}`}>
            <h2>{color.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
