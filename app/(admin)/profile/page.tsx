import ProfileCard from "@/components/ProfileCard";
import ProfileForm from "@/components/ProfileForm";
import { logout } from "@/lib/actions";

export default function MyProfilePage() {
  // Temporary placeholder data
  // Replace with database/API data later
  const user = {
    firstName: "Michael",
    lastName: "Rosser",
    email: "michael@example.com",
    username: "mrosser",
  };

  return (
    <div className="page-container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#003566]">
          My Profile
        </h1>

        <p className="mt-2 text-gray-600">
          View and manage your MealCraft account information.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <ProfileCard
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          username={user.username}
        />

        <ProfileForm
          initialFirstName={user.firstName}
          initialLastName={user.lastName}
          initialEmail={user.email}
          initialUsername={user.username}
        />
      </div>
      <div className="mt-8 flex justify-end">
        <form action={logout}>
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </form>
    </div>

    </div> 
  );
}