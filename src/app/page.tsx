import { auth } from "@/services/auth";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      Landing Page
    </div>
  );
}
