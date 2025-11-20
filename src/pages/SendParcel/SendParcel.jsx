// import React from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { useLoaderData } from "react-router";

// const SendParcel = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   const serveiceCenters = useLoaderData();
//   const regionsDuplicate = serveiceCenters.map((c) => c.region);
//   const regions = [...new Set(regionsDuplicate)];
//   //   explore useMemo useCallback
//   const senderRegion = useWatch({ control, name: "senderRegion" });
//   const receiverRegion = useWatch({ control, name: "receiverRegion" });

//   const districtByRegion = (region) => {
//     const regionDistricts = serveiceCenters.filter((c) => c.region === region);
//     const districts = regionDistricts.map((d) => d.district);
//     return districts;
//   };

//   const handleSendParcel = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <h2 className="text-5xl font-bold my-5 text-secondary text-center md:text-start p-4">
//         Send A Parcel
//       </h2>

//       <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
//         {/* parcel type */}
//         <div>
//           <label className="mr-4">
//             <input
//               type="radio"
//               {...register("parcelType")}
//               value="document"
//               className="radio"
//               defaultChecked
//             />{" "}
//             Document
//           </label>
//           <label className="">
//             <input
//               type="radio"
//               {...register("parcelType")}
//               value="non-document"
//               className="radio"
//             />{" "}
//             Non-Document
//           </label>
//         </div>

//         {/* parcel info: name, weight */}
//         <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 my-8">
//           {/* Parcel Name */}
//           <fieldset className="fieldset">
//             <label className="">Parcel Name</label>
//             <input
//               type="text"
//               className="input w-full"
//               {...register("parcelName")}
//               placeholder="Parcel Name"
//             />
//           </fieldset>

//           {/* Parcel Weight */}
//           <fieldset className="fieldset">
//             <label className="">Parcel Weight (kg)</label>
//             <input
//               type="number"
//               className="input w-full"
//               {...register("parcelWeight")}
//               placeholder="Parcel Weight"
//             />
//           </fieldset>
//         </div>

//         {/* tow columns */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Sender info */}
//           <fieldset className="fieldset">
//             <h2 className="text-4xl font-bold">Sender Details</h2>
//             {/* Sender Name */}
//             <label className="">Sender Name</label>
//             <input
//               type="text"
//               className="input w-full"
//               {...register("senderName")}
//               placeholder="Sender Name"
//             />

//             {/* Sender Email */}
//             <label className="">Sender Email</label>
//             <input
//               type="email"
//               className="input w-full"
//               {...register("senderEmail")}
//               placeholder="Sender Email"
//             />

//             {/* Sender region */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Sender Region</legend>
//               <select
//                 {...register("senderRegion")}
//                 defaultValue="Pick a region"
//                 className="select w-full"
//               >
//                 <option disabled={true}>Pick a region</option>
//                 {regions.map((r, i) => (
//                   <option key={i} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             </fieldset>

//             {/* Sender District */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Sender District</legend>
//               <select
//                 {...register("senderDistrict")}
//                 defaultValue="Pick a district"
//                 className="select w-full"
//               >
//                 <option disabled={true}>Pick a District</option>
//                 {districtByRegion(senderRegion).map((r, i) => (
//                   <option key={i} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             </fieldset>

//             {/* Sender Address */}
//             <label className="mt-2">Sender Address</label>
//             <input
//               type="text"
//               className="input w-full"
//               {...register("senderAddress")}
//               placeholder="Sender Address"
//             />

//             {/* Sender Phone No*/}
//             <label className="mt-2">Sender Phone No</label>
//             <input
//               type="tel"
//               className="input w-full"
//               {...register("senderPhoneNo")}
//               placeholder="Sender Phone No"
//             />

//             {/* Sender Text Area*/}
//             <label className="mt-2">Pickup Instruction</label>
//             <textarea
//               type="text"
//               className="textarea w-full"
//               {...register("pickupInstruction")}
//               placeholder="Pickup Instruction"
//             ></textarea>
//           </fieldset>

//           {/* Receiver info */}
//           <fieldset className="fieldset">
//             <h2 className="text-4xl font-bold">Receiver Details</h2>
//             {/* Render Name */}
//             <label className="">Receiver Name</label>
//             <input
//               type="text"
//               className="input w-full"
//               {...register("receiverName")}
//               placeholder="Receiver Name"
//             />

//             {/* Receiver Email */}
//             <label className="">Receiver Email</label>
//             <input
//               type="email"
//               className="input w-full"
//               {...register("receiverEmail")}
//               placeholder="Receiver Email"
//             />

//             {/* Receiver region */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Receiver Region</legend>
//               <select
//                 {...register("receiverRegion")}
//                 defaultValue="Pick a region"
//                 className="select w-full"
//               >
//                 <option disabled={true}>Pick a region</option>
//                 {regions.map((r, i) => (
//                   <option key={i} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             </fieldset>

//             {/* Receiver District */}
//             <fieldset className="fieldset">
//               <legend className="fieldset-legend">Receiver District</legend>
//               <select
//                 {...register("receiverDistrict")}
//                 defaultValue="Pick a district"
//                 className="select w-full"
//               >
//                 <option disabled={true}>Pick a District</option>

//                 {districtByRegion(receiverRegion).map((d, i) => (
//                   <option key={i} value={d}>
//                     {d}
//                   </option>
//                 ))}
//               </select>
//             </fieldset>

//             {/* Receiver Address */}
//             <label className="mt-2">Receiver Address</label>
//             <input
//               type="text"
//               className="input w-full"
//               {...register("receiverAddress")}
//               placeholder="Receiver Address"
//             />

//             {/* Receiver Phone No*/}
//             <label className="mt-2">Receiver Phone No</label>
//             <input
//               type="tel"
//               className="input w-full"
//               {...register("receiverPhoneNo")}
//               placeholder="Receiver Phone No"
//             />

//             {/* Receiver District
//             <label className="mt-2">Your District</label>
//             <input
//               type="text"
//               className="input w-full"
//               {...register("receiverDistrict")}
//               placeholder="Your District"
//             /> */}

//             {/* Receiver Text Area*/}
//             <label className="mt-2">Delivery Instruction</label>
//             <textarea
//               type="text"
//               className="textarea w-full"
//               {...register("deliveryInstruction")}
//               placeholder="Delivery Instruction"
//             ></textarea>
//           </fieldset>
//         </div>
//         <input
//           type="submit"
//           value="Send Parcel"
//           className="btn btn-primary text-black"
//         />
//       </form>
//     </div>
//   );
// };

// export default SendParcel;

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "./../../hooks/useAuth";

const SendParcel = () => {
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
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const exWeight = parcelWeight - 3;
        const exCharge = isSameDistrict ? exWeight * 40 : exWeight * 40 + 40;
        cost = minCharge + exCharge;
      }
    }

    console.log("cost====> ", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info in database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("After saving parcel=====>", res.data);
        });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold my-5 text-secondary text-center md:text-start p-4">
        Send A Parcel
      </h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* parcel type */}
        <div>
          <label className="mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />{" "}
            Document
          </label>
          <label>
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />{" "}
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 my-8">
          <fieldset className="fieldset">
            <label>Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label>Parcel Weight (kg)</label>
            <input
              type="number"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender */}
          <fieldset className="fieldset">
            <h2 className="text-4xl font-bold">Sender Details</h2>

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

            <fieldset className="fieldset">
              <legend>Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue=""
                className="select w-full"
              >
                <option value="">Pick a District</option>
                {districtByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
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

export default SendParcel;
