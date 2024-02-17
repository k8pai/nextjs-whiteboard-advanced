import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Whiteboard from "../src";
import { useSelf, useOthers } from "../liveblocks.config";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <Whiteboard id={router.query.room as string} />
    </div>
  );
}
