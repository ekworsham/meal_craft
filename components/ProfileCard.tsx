type ProfileCardProps = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};

export default function ProfileCard({
  firstName,
  lastName,
  email,
  username,
}: ProfileCardProps) {
  return (
    <div className="card p-6">
      <h2 className="mb-6 text-2xl font-bold text-[#003566]">
        Profile Information
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">First Name:</span>{" "}
          {firstName}
        </p>

        <p>
          <span className="font-semibold">Last Name:</span>{" "}
          {lastName}
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {email}
        </p>

        <p>
          <span className="font-semibold">Username:</span>{" "}
          {username}
        </p>
      </div>
    </div>
  );
}