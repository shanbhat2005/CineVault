import { Mail, Lock, Clapperboard, Ticket } from "lucide-react";
import useAuth from "../hooks/authHooks";
import { Navigate } from "react-router";

export default function Login() {
  const {
    register,
    errors,
    handleLogin,
    handleSubmit,
    navigate
  } = useAuth();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0a0b10] text-[#f5f1e8]">

      {/* LEFT SIDE */}
      <div className="relative hidden lg:flex items-center overflow-hidden px-14 bg-gradient-to-b from-[#0a0b10] via-[#120c14] to-[#170f14]">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(122,25,48,0.55),transparent_60%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(231,181,75,0.12),transparent_55%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-lg">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-[#e7b54b]/40 text-[#e7b54b] text-xs tracking-widest">
            <Clapperboard size={18} />
            <span>WELCOME BACK, MEMBER</span>
          </div>

          {/* Heading */}
          <h1 className="text-7xl font-bold leading-[0.9] tracking-tight">
            THE SHOW
            <br />
            CONTINUES
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-[#b9b3ae] leading-relaxed">
            Pick up right where you left off — your watchlist, your ratings,
            and your picks are all waiting for you.
          </p>

          {/* Features */}
          <div className="mt-9 pt-5 border-t border-dashed border-[#c9cdd6]/25 text-xs tracking-widest text-[#a8823b]">
            <span className="text-[#e7b54b]">★</span> UNLIMITED WATCHLISTS{" "}
            <span className="text-[#e7b54b]">★</span> PERSONAL RATINGS{" "}
            <span className="text-[#e7b54b]">★</span> DAILY PICKS{" "}
            <span className="text-[#e7b54b]">★</span>
          </div>

        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-5 py-12 bg-[#14121a]">

        {/* Ticket */}
        <div className="relative w-full max-w-md p-9 rounded-2xl border border-[#e7b54b]/20 bg-gradient-to-b from-[#191319] to-[#150f14] shadow-2xl">

          {/* Ticket inner border */}
          <div className="absolute inset-2.5 rounded-xl border border-dashed border-[#e7b54b]/20 pointer-events-none" />

          {/* Stamp */}
          <div className="absolute top-7 right-[-35px] rotate-[38deg] px-10 py-1 border border-[#e7b54b]/30 text-[#e7b54b]/40 text-xs tracking-widest">
            ADMIT ONE
          </div>


          {/* Header */}
          <div className="relative z-10 flex items-start gap-3 mb-8 text-[#e7b54b]">

            <Ticket size={22} />

            <div>
              <p className="text-xs tracking-widest text-[#a8823b] uppercase">
                Member Sign In
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#f5f1e8]">
                Welcome back
              </h2>
            </div>

          </div>


          {/* FORM */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="relative z-10 flex flex-col gap-5"
          >

            {/* EMAIL */}
            <label className="flex flex-col gap-2">

              <span className="text-xs tracking-wider uppercase text-[#b9b3ae]">
                Email
              </span>

              <div
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg bg-[#f5f1e8]/5 border ${
                  errors.email
                    ? "border-[#a8324f]"
                    : "border-[#c9cdd6]/20"
                } focus-within:border-[#e7b54b]`}
              >

                <Mail
                  size={17}
                  className="text-[#b9b3ae] shrink-0"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent outline-none text-[#f5f1e8] placeholder:text-[#6b6570]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />

              </div>

              {errors.email && (
                <span className="text-xs text-[#e08a97]">
                  {errors.email.message}
                </span>
              )}

            </label>


            {/* PASSWORD */}
            <label className="flex flex-col gap-2">

              <span className="text-xs tracking-wider uppercase text-[#b9b3ae]">
                Password
              </span>

              <div
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg bg-[#f5f1e8]/5 border ${
                  errors.password
                    ? "border-[#a8324f]"
                    : "border-[#c9cdd6]/20"
                } focus-within:border-[#e7b54b]`}
              >

                <Lock
                  size={17}
                  className="text-[#b9b3ae] shrink-0"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="flex-1 bg-transparent outline-none text-[#f5f1e8] placeholder:text-[#6b6570]"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

              </div>

              {errors.password && (
                <span className="text-xs text-[#e08a97]">
                  {errors.password.message}
                </span>
              )}

            </label>


            {/* FORGOT PASSWORD */}
            <p className="text-right -mt-2 text-sm text-[#b9b3ae]">
              <a
                href="/forgot-password"
                className="text-[#e7b54b] hover:underline"
              >
                Forgot password?
              </a>
            </p>


            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-2 px-4 py-3.5 rounded-lg bg-gradient-to-b from-[#e7b54b] to-[#a8823b] text-[#1a1108] font-semibold shadow-lg shadow-[#e7b54b]/20 hover:-translate-y-0.5 transition"
            >
              Sign in
            </button>


            {/* REGISTER */}
            <p className="text-center text-sm text-[#b9b3ae]">
              New here?{" "}
              <span
                onClick={()=> navigate("/register")}
                className="text-[#e7b54b] hover:underline cursor-pointer"
              >
                Create an account
              </span>
            </p>

          </form>


          {/* Ticket perforation */}
          <div className="absolute left-[-12px] right-[-12px] bottom-20 border-t-2 border-dotted border-[#c9cdd6]/20" />

        </div>

      </div>

    </div>
  );
}