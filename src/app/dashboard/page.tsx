import { auth } from "@/services/auth";

export default async function Dashboard() {
    const session = await auth()
    return (
        <div>
            Welcome : {session?.user ? session.user.name : 'Unknown'}
        </div>
    );
}
