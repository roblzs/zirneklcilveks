import Head from "next/head"
import Library from "../src/components/Library";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Saulgozis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Library />
    </div>
  )
}
