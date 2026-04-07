import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../store/actions/clientActions";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.client.user);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  
  const from = (location.state?.from === "/signup" || !location.state?.from) 
             ? "/" 
             : location.state?.from;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
    mode: "all",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await dispatch(loginUserAction(data));
      navigate(from, { replace: true });
    } catch (err) {
      console.log("Login failed, keeping user on page.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (user && user.token) {
    navigate(from, { replace: true });
  }
}, [user, navigate, from]);

  return (
    <div className="container mx-auto py-24 px-4 max-w-lg min-h-[70vh] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-2 text-center text-text">Login</h2>
      <p className="text-second-text text-center mb-8">
        Enter your details to access your account
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-sm border border-light-gray-1"
      >
        {/* Email */}
        <div className="flex flex-col gap-2 text-left">
          <label className="font-bold text-sm text-second-text">
            Email Address *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
            placeholder="example@mail.com"
            className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] focus:outline-none focus:border-primary text-text transition-all"
          />
          {errors.email && (
            <p className="text-danger text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 text-left">
          <label className="font-bold text-sm text-second-text">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Enter your password"
              className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] w-full focus:outline-none focus:border-primary text-text transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-second-text cursor-pointer hover:text-text transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-danger text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            {...register("rememberMe")}
            className="w-4 h-4 rounded border-light-gray-3 text-primary focus:ring-primary cursor-pointer"
          />
          <label
            htmlFor="rememberMe"
            className="text-sm font-medium text-second-text cursor-pointer select-none"
          >
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          disabled={!isValid || loading}
          className="bg-primary text-light-background py-4 rounded-[5px] font-bold mt-2 
                     hover:bg-hover transition-all flex justify-center items-center shadow-md 
                     cursor-pointer disabled:cursor-not-allowed 
                     disabled:bg-muted disabled:opacity-60"
        >
          {loading ? <Loader2 className="animate-spin h-6 w-6" /> : "Login"}
        </button>
      </form>
    </div>
  );
}