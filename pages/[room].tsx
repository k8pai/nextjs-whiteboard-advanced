import { useRouter } from "next/router";
import React from "react";
import Whiteboard from "../src";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <Whiteboard id={router.query.room as string} />
    </div>
  );
}
