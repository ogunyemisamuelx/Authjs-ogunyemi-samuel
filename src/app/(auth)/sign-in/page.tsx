import { GithubSignIn } from "@/app/components/github-sign-in";
import { GoogleSignIn } from "@/app/components/google-sign-in";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className=" w-full max-w-sm mx-auto space-y-6">
      <h1 className=" text-2xl font-semibold text-center mb-6">Sign In</h1>
      <GithubSignIn />
      <GoogleSignIn />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>
      {/* {Email/Password Sign in} */}
      <form
        action={async () => {
          "use server";
        }}
        className="space-y-4"
      >
        {/* <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        /> */}
        {/* <Button className="w-full" type="submit">
          Sign In
        </Button> */}
      </form>
      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-up">Dont&apos;t have an account? Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
