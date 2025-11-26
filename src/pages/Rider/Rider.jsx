import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  // watch region values
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const handleRiderApplication = (data) => {
    console.log(data);
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
          {/* Sender */}
          <fieldset className="fieldset">
            <h2 className="text-4xl font-bold">Rider Details</h2>

            <label>Sender Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input w-full"
              {...register("senderName")}
              placeholder="Sender Name"
            />

            <label>Sender Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input w-full"
              {...register("senderEmail")}
              placeholder="Sender Email"
            />

            <fieldset className="fieldset">
              <legend>Sender Region</legend>
              <select
                {...register("senderRegion")}
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

            <fieldset className="fieldset">
              <legend>Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue=""
                className="select w-full"
              >
                <option value="">Pick a District</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            <label className="mt-2">Sender Address</label>
            <input
              type="text"
              className="input w-full"
              {...register("senderAddress")}
              placeholder="Sender Address"
            />

            <label className="mt-2">Sender Phone No</label>
            <input
              type="tel"
              className="input w-full"
              {...register("senderPhoneNo")}
              placeholder="Sender Phone No"
            />

            <label className="mt-2">Pickup Instruction</label>
            <textarea
              className="textarea w-full"
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
            ></textarea>
          </fieldset>

          {/* Receiver */}
          <fieldset className="fieldset">
            <h2 className="text-4xl font-bold">Receiver Details</h2>

            <label>Receiver Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("receiverName")}
              placeholder="Receiver Name"
            />

            <label>Receiver Email</label>
            <input
              type="email"
              className="input w-full"
              {...register("receiverEmail")}
              placeholder="Receiver Email"
            />

            <fieldset className="fieldset">
              <legend>Receiver Region</legend>
              <select
                {...register("receiverRegion")}
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

            <label className="mt-2">Receiver Address</label>
            <input
              type="text"
              className="input w-full"
              {...register("receiverAddress")}
              placeholder="Receiver Address"
            />

            <label className="mt-2">Receiver Phone No</label>
            <input
              type="tel"
              className="input w-full"
              {...register("receiverPhoneNo")}
              placeholder="Receiver Phone No"
            />

            <label className="mt-2">Delivery Instruction</label>
            <textarea
              className="textarea w-full"
              {...register("deliveryInstruction")}
              placeholder="Delivery Instruction"
            ></textarea>
          </fieldset>
        </div>

        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default Rider;
