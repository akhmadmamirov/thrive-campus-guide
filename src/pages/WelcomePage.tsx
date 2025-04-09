
import { Link } from "react-router-dom";
import { MarbleBackground } from "@/components/ui/marble-background";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/ui/user-avatar";

export default function WelcomePage() {
  return (
    <MarbleBackground>
      <div className="flex flex-col items-center justify-between min-h-screen p-6">
        <div className="w-full"></div>
        
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-6">Welcome</h1>
          <div className="mb-4">
            <UserAvatar 
              name="Mo Jordan" 
              image="/lovable-uploads/fb117cac-9aff-4f6c-9622-06e458dbff5e.png"
              size="md"
            />
            <div className="mt-2 text-sm">
              <p className="font-medium">Mo Jordan</p>
              <p className="text-gray-500">@papa_needs_an_A</p>
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-4 animate-scale-in">
          <Link to="/login">
            <Button variant="outline" className="w-full py-6 text-lg">
              LOG IN
            </Button>
          </Link>
          <Link to="/register">
            <Button className="w-full bg-black py-6 text-lg">
              REGISTER
            </Button>
          </Link>
        </div>
      </div>
    </MarbleBackground>
  );
}
