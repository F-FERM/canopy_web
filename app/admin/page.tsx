"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LocalStorage } from "@/utility/LocalStorage";

export default function AdminPanel() {
  const router = useRouter();

  useEffect(() => {
    const token = LocalStorage.getItem("access_token");

    if (!token) {
      router.replace("/login");
    } else {
      router.replace("/admin/home/hero");
    }
  }, [router]);
  return <div>Admin Panel</div>;
}
