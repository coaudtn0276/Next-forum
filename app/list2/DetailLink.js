"use client";

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  const router = useRouter();
  const a = usePathname();
  const b = useSearchParams();
  const c = useParams();
  console.log(a);

  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      버튼
    </button>
  );
}
