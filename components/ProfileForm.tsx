"use client";

import { useState } from "react";

type ProfileFormProps = {
  initialFirstName?: string;
  initialLastName?: string;
  initialEmail?: string;
  initialUsername?: string;
};

export default function ProfileForm({
  initialFirstName = "",
  initialLastName = "",
  initialEmail = "",
  initialUsername = "",
}: ProfileFormProps) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState("");

  const handleSave = async () => {
    const profile = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    // Replace with API call later
    console.log("Saving profile:", profile);

    alert("Profile saved successfully.");
  };

  return (
    <div className="card p-8">
      <h2 className="mb-6 text-3xl font-bold text-[#003566]">
        Edit Profile
      </h2>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block font-semibold"
          >
            First Name
          </label>

          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block font-semibold"
          >
            Last Name
          </label>

          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-semibold"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="mb-2 block font-semibold"
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block font-semibold"
          >
            New Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a new password"
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
          />
        </div>

        <button
          onClick={handleSave}
          className="rounded-lg bg-[#F77F00] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}