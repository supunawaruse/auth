import { auth } from "@/services/auth";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      Welcome : {session?.user ? session.user.name : 'Unknown'}
    </div>
  );
}
