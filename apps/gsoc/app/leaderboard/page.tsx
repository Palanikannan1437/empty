import { Contributor, columns } from "./columns"
import { DataTable } from "./data-table"
async function getData(): Promise<Contributor[]> {
  const res = await fetch(`http://localhost:8080/api/data`)

  const data = await res.json();

  const objectArray = [];

  for (const username in data) {
    if (data.hasOwnProperty(username)) {
      const user = {
        name: username,
        ...data[username]
      };

      objectArray.push(user);
    }
  }

  return objectArray
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
