import * as React from "react";
export * from "./data-table";
export * from "./columns";

export type Contributor = {
  name: string;
  home: string;
  openPRsNumber: number;
  mergedPRsNumber: number;
  issuesNumber: number;
};

export async function getData(fetchUrl: string): Promise<Contributor[]> {
  const res = await fetch(`${fetchUrl}/api/data`);

  const data = await res.json();

  const objectArray = [];

  for (const username in data) {
    if (data.hasOwnProperty(username)) {
      const user = {
        name: username,
        ...data[username],
      };

      objectArray.push(user);
    }
  }

  return objectArray;
}
