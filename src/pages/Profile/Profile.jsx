import { FiMail, FiUser, FiShield } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-base-100 rounded-2xl shadow-xl p-8">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={
                user.photoURL ||
                "https://i.ibb.co/ZYW3VTp/brown-brim.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-primary object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="text-3xl font-bold text-center mt-5">
            {user.displayName || "No Name"}
          </h2>

          <p className="text-center text-gray-500">
            Welcome to Urban Meth
          </p>

          <div className="divider"></div>

          {/* Information */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <FiUser className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-semibold">
                  {user.displayName || "Not Provided"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiMail className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiShield className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email Verification</p>
                <p className="font-semibold">
                  {user.emailVerified ? "Verified ✅" : "Not Verified ❌"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiUser className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">User ID</p>
                <p className="font-semibold break-all">
                  {user.uid}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiUser className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Account Created</p>
                <p className="font-semibold">
                  {new Date(
                    user.metadata.creationTime
                  ).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FiUser className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Last Sign In</p>
                <p className="font-semibold">
                  {new Date(
                    user.metadata.lastSignInTime
                  ).toLocaleString()}
                </p>
              </div>
            </div>

          </div>

          <div className="divider"></div>

          <button className="btn btn-primary w-full">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;