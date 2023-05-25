import { getData } from "leaderboard"

import DemoPage from "./demo-leaderboard"

export default async function Page() {
  const data = await getData(process.env.GSOC_URL as string)

  return (
    <>
      <DemoPage data={data} />
    </>
  )
}
