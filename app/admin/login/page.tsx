import { redirect } from "next/navigation";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import LoginForm from "./_components/LoginForm";

export default async function LoginPage() {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        redirect("/admin/projects");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold font-display text-foreground">
                        Admin Login
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Sign in to access the dashboard
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
