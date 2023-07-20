import { useRouter } from "next/navigation"

import { auth } from "@/config/firebase-config";
import { signOut } from "firebase/auth";

export default async function Logout() {
    const router = useRouter()

    await signOut(auth);

    const response = await fetch("http://localhost:3000/api/signOut", {
      method: "POST",
    });

    if (response.status === 200) {
      router.push("/login");
    }
  }
