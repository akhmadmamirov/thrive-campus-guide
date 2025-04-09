
import { UserAvatar } from "@/components/ui/user-avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { BottomNav } from "@/components/navigation/BottomNav";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/welcome");
  };

  const handleCrisisResources = () => {
    navigate("/crisis-resources");
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="p-6 flex flex-col items-center">
        <UserAvatar 
          name={user?.name || "User"} 
          image={user?.avatar}
          size="xl"
          className="mb-4"
        />
        
        <h1 className="text-2xl font-bold mb-1">{user?.name || "User"}</h1>
        <p className="text-gray-500 mb-4">{user?.location || "Location not set"}</p>
        
        <Button 
          variant="outline" 
          className="w-full py-6 mb-4"
        >
          EDIT PROFILE
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full py-6 mb-8"
          onClick={handleCrisisResources}
        >
          CRISIS RESOURCES
        </Button>
        
        <div className="w-full mt-auto">
          <Button 
            variant="outline" 
            className="w-full border-red-300 text-red-500 hover:bg-red-50"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}
