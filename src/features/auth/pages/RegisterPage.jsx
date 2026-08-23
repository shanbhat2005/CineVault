import { User, Mail, Lock, Clapperboard, Ticket } from "lucide-react";
import useAuth from "../hooks/authHooks";

export default function Register() {
  const {
    register,
    errors,
    handleRegister,
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
            <span>NOW CASTING NEW MEMBERS</span>
          </div>

          {/* Heading */}
          <h1 className="text-7xl font-bold leading-[0.9] tracking-tight">
            YOUR SEAT
            <br />
            IS WAITING
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-[#b9b3ae] leading-relaxed">
            Track what you're watching, save what you're craving, and never
            forget a title again. Create an account to start your watchlist.
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

          {/* Inner ticket border */}
          <div className="absolute inset-2.5 rounded-xl border border-dashed border-[#e7b54b]/20 pointer-events-none" />

          {/* Stamp */}
          <div className="absolute top-7 right-[-35px] rotate-[38deg] px-10 py-1 border border-[#e7b54b]/30 text-[#e7b54b]/40 text-xs tracking-widest">
            ADMIT ONE
          </div>


          {/* HEADER */}
          <div className="relative z-10 flex items-start gap-3 mb-8 text-[#e7b54b]">

            <Ticket size={22} />

            <div>
              <p className="text-xs tracking-widest text-[#a8823b] uppercase">
                Member Admission
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#f5f1e8]">
                Create your account
              </h2>
            </div>

          </div>


          {/* FORM */}
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="relative z-10 flex flex-col gap-5"
          >

            {/* NAME */}
            <label className="flex flex-col gap-2">

              <span className="text-xs tracking-wider uppercase text-[#b9b3ae]">
                Full name
              </span>

              <div
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg bg-[#f5f1e8]/5 border ${
                  errors.name
                    ? "border-[#a8324f]"
                    : "border-[#c9cdd6]/20"
                } focus-within:border-[#e7b54b]`}
              >

                <User
                  size={17}
                  className="text-[#b9b3ae] shrink-0"
                />

                <input
                  type="text"
                  placeholder="Your name"
                  className="flex-1 bg-transparent outline-none text-[#f5f1e8] placeholder:text-[#6b6570]"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                />

              </div>

              {errors.name && (
                <span className="text-xs text-[#e08a97]">
                  {errors.name.message}
                </span>
              )}

            </label>


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
                    minLength: {
                      value: 4,
                      message: "Password must be at least 4 characters",
                    },
                  })}
                />

              </div>

              {errors.password && (
                <span className="text-xs text-[#e08a97]">
                  {errors.password.message}
                </span>
              )}

            </label>


            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-2 px-4 py-3.5 rounded-lg bg-gradient-to-b from-[#e7b54b] to-[#a8823b] text-[#1a1108] font-semibold shadow-lg shadow-[#e7b54b]/20 hover:-translate-y-0.5 transition"
            >
              Create account
            </button>


            {/* LOGIN LINK */}
            <p className="text-center text-sm text-[#b9b3ae]">
              Already a member?{" "}
              <p
                onClick={()=> navigate("/") } 
                className="text-[#e7b54b] hover:underline cursor-pointer"
              >
                Sign in instead
              </p>
            </p>

          </form>


          {/* Ticket perforation */}
          <div className="absolute left-[-12px] right-[-12px] bottom-20 border-t-2 border-dotted border-[#c9cdd6]/20" />

        </div>

      </div>

    </div>
  );
}