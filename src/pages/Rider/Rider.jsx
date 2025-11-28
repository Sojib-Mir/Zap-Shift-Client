import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    // formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  // watch region values
  const riderRegion = useWatch({ control, name: "region" });
  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you in 145 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-secondary text-center font-bold my-10 m-10">
        Be a Rider
      </h1>

      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 p-4"
      >
        {/* two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Rider */}
          <fieldset className="fieldset">
            <h2 className="text-4xl font-bold">Rider Details</h2>
            {/* name */}
            <label>Rider Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input w-full"
              {...register("name")}
              placeholder="Rider Name"
            />
            {/* email */}
            <label>Rider Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input w-full"
              {...register("email")}
              placeholder="Rider Email"
            />
            {/* region */}
            <fieldset className="fieldset">
              <legend>Sender Region</legend>
              <select
                {...register("region")}
                defaultValue=""
                className="select w-full"
              >
                <option value="">Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* district */}
            <fieldset className="fieldset">
              <legend>District</legend>
              <select
                {...register("district")}
                defaultValue=""
                className="select w-full"
              >
                <option value="">Pick a District</option>
                {districtByRegion(riderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* address */}
            <label className="mt-2">Your Address</label>
            <input
              type="text"
              className="input w-full"
              {...register("address")}
              placeholder="Rider Address"
            />
          </fieldset>

          {/* Receiver */}
          <fieldset className="fieldset">
            <h2 className="text-4xl font-bold">More Details</h2>
            {/* Driving License */}
            <label>Driving License</label>
            <input
              type="text"
              className="input w-full"
              {...register("license")}
              placeholder="Driving License"
            />
            {/* Nid */}
            <label>NID</label>
            <input
              type="number"
              className="input w-full"
              {...register("nid")}
              placeholder="NID"
            />
            {/* Bike info */}
            <label className="mt-2">Bike Info</label>
            <input
              type="text"
              className="input w-full"
              {...register("bike")}
              placeholder="Bike Info"
            />
          </fieldset>
        </div>

        <input
          type="submit"
          value="Apply as a Rider"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default Rider;
