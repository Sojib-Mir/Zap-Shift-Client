import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Register ======>", location);

  const handleRegister = (data) => {
    console.log("after register", data);
    const profileImg = data.photo[0];

    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        // store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImg);

        //send the data photo to store and get the url
        const img_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMG_HOST_KEY
        }`;
        axios.post(img_API_URL, formData).then((res) => {
          console.log("img upload ===>>", res.data.data.url);

          //update user profile to filebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("User Profile Updated Done!");
              alert("User Profile Updated Done!");
              navigate(location?.state || "/");
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h2 className="text-4xl text-secondary font-bold">Create an Account</h2>
        <p className="font-semibold opacity-70">Register with ZapShift</p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input w-full"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is Required!</p>
            )}

            {/* photo */}
            <label className="">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input w-full"
              placeholder="Your Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is Required!</p>
            )}

            {/* email */}
            <label className="">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required!</p>
            )}

            {/* password */}
            <label className="">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is Required!</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer!
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must be one uppercase, one lowercase, one number and
                one special character!
              </p>
            )}
            <button className="btn btn-primary mt-4 text-black font-bold">
              Register
            </button>
          </fieldset>
          <p className="text-center font-semibold">
            Already have an account? Please{" "}
            <Link
              state={location?.state}
              to={"/login"}
              className="underline text-blue-500 hover:text-pink-500"
            >
              Login
            </Link>
          </p>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
