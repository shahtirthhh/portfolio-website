import { Suspense } from "react";
import { getContributions } from "../_requests/_requests";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./GitGraph"), {
  ssr: false,
});
async function Github() {
  const contributions = await getContributions();

  return (
    <Suspense>
      <DynamicComponentWithNoSSR
        contributions={contributions}
      ></DynamicComponentWithNoSSR>
    </Suspense>
  );
}

export default Github;
