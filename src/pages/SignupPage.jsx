import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRolesAction } from "../store/actions/clientActions";
import { API } from "../api/axiosInstance";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roles = useSelector((state) => state.client.roles);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { role_id: "3" }, mode: "all" });

  const selectedRole = watch("role_id");

  useEffect(() => {
    if (roles.length === 0) {
      dispatch(setRolesAction());
    }
  }, [dispatch, roles.length]);

  const onSubmit = async (data) => {
    setLoading(true);
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (data.role_id === "2") {
      payload.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }

    try {
      await API.post("/signup", payload);
      toast.warning(
    "You need to click link in email to activate your account!",
    { autoClose: 5000 }
  );
      setTimeout(() => {
    navigate(-1);
  }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Kayıt başarısız!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* ad soyad */}
        <div className="flex flex-col gap-2 text-left">
          <label className="font-bold text-sm text-second-text">
            Full Name *
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min 3 characters" },
            })}
            placeholder="Enter your full name"
            className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] focus:outline-none focus:border-primary text-text"
          />
          {errors.name && (
            <p className="text-danger text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

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
                message: "Invalid email address",
              },
            })}
            placeholder="example@mail.com"
            className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] focus:outline-none focus:border-primary text-text"
          />
          {errors.email && (
            <p className="text-danger text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* şifre */}
        <div className="flex flex-col gap-2 text-left">
          <label className="font-bold text-sm text-second-text">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Include Upper, Lower, Number and Special char (8+)",
                },
              })}
              placeholder="Enter a strong password"
              className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] w-full focus:outline-none focus:border-primary text-text"
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

        {/* şifre2 (Onay) */}
        <div className="flex flex-col gap-2 text-left">
          <label className="font-bold text-sm text-second-text">
            Confirm Password *
          </label>
          <div className="relative">
            {" "}
            <input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm your password"
              className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] w-full focus:outline-none focus:border-primary text-text"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-danger text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Role seçim */}
        <div className="flex flex-col gap-2 text-left">
          <label className="font-bold text-sm text-second-text">Role</label>
          <select
            {...register("role_id")}
            className="border border-light-gray-3 bg-selection-button p-3 rounded-[5px] focus:outline-none focus:border-primary text-text cursor-pointer"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* store detayları */}
        {selectedRole === "2" && (
          <div className="flex flex-col gap-5 p-5 bg-light-gray-1 rounded-[5px] border border-dashed border-muted mt-2 animate-in fade-in slide-in-from-top-1 duration-300">
            <h3 className="font-bold text-text border-b pb-2 border-light-gray-3 text-left">
              Store Details
            </h3>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-second-text">
                Store Name
              </label>
              <input
                {...register("storeName", {
                  required: "Store name is required",
                  minLength: 3,
                })}
                placeholder="Store Name"
                className="border border-light-gray-3 p-2 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-second-text">
                Store Phone
              </label>
              <input
                {...register("storePhone", {
                  required: "Phone is required",
                  pattern: /^(\+90|0)?\s*5\d{2}\s*\d{3}\s*\d{2}\s*\d{2}$/,
                })}
                placeholder="05xx..."
                className="border border-light-gray-3 p-2 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-second-text">
                Store Tax ID
              </label>
              <input
                {...register("tax_no", {
                  required: "Tax ID is required",
                  pattern: /^T\d{4}V\d{6}$/,
                })}
                placeholder="TXXXXVXXXXXX"
                className="border border-light-gray-3 p-2 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold uppercase text-second-text">
                IBAN
              </label>
              <input
                {...register("bank_account", {
                  required: "IBAN is required",
                  minLength: 26,
                })}
                placeholder="TR..."
                className="border border-light-gray-3 p-2 rounded-[5px]"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!isValid || loading}
          className="bg-primary text-light-background py-4 rounded-[5px] font-bold mt-4 
                     hover:bg-hover transition-all flex justify-center items-center shadow-md 
                     cursor-pointer disabled:cursor-not-allowed 
                     disabled:bg-muted disabled:opacity-60"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
}
