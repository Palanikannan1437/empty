"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "./button"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
export type Contributor = {
  name: string
  home: string
  openPRsNumber: number
  mergedPRsNumber: number
  issuesNumber: number
}

export const columns: ColumnDef<Contributor>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="m-5 ml-10 capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "home",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          GitHub
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="ml-10 lowercase">{row.getValue("home")}</div>
    ),
  },
  {
    accessorKey: "openPRsNumber",
    header: () => <div className="text-right">Open PRs</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("openPRsNumber"))
      return <div className="m-5 text-right font-medium">{amount}</div>
    },
  },
  {
    accessorKey: "issuesNumber",
    header: () => <div className="text-right">Open Issues</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("issuesNumber"))
      return <div className="m-5 text-right font-medium">{amount}</div>
    },
  },
  {
    accessorKey: "mergedPRsNumber",
    header: () => <div className="text-right">Merged PRs</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("mergedPRsNumber"))
      return <div className="m-5 text-right font-medium">{amount}</div>
    },
  },
]
