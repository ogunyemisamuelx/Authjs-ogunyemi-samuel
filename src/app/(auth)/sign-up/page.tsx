const Page = async () => {
  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
      <div>GithubSignIn</div>
      <div className="relative">
        <div className=" absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>
      {/* {Email/Password Sign Up} */}
      <form
        className="space-y-4"
        action={async () => {
          "use server";
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <button>Sign Up</button>
      </form>
      <div className="text-center">
        <button>
          <link href="/sign-in" />
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
};

export default Page;
