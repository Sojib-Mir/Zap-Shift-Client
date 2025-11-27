import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeUser = (user) => {
    const roleInfo = { role: "admin" };

    Swal.fire({
      title: "Promote User?",
      text: `Are you sure you want to make ${user.displayName} an Admin? This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Promote!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} has been promoted to Admin 🎉`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };

    Swal.fire({
      title: "Remove Admin?",
      text: `Are you sure you want to remove Admin access from ${user.displayName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} is no longer an Admin ❌`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-secondary">
        Manage Users {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-500"
                    >
                      <span className="invert">
                        <FiShieldOff />
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeUser(user)}
                      className="btn bg-green-500"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
