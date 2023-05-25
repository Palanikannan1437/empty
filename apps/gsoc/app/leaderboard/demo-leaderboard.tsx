"use client"

import { Contributor, DataTable } from "leaderboard"
import { columns } from "./columns"

export default function DemoPage({ data }: { data: Contributor[] }) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
