
import { Link } from "react-router-dom";
import { MarbleBackground } from "@/components/ui/marble-background";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/ui/user-avatar";

export default function WelcomePage() {
  return (
    <MarbleBackground>
      <div className="flex flex-col items-center justify-between min-h-screen p-6 bg-gradient-to-b from-[#0EA5E9] to-[#33C3F0]">
        <div className="w-full"></div>
        
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">Welcome</h1>
          <div className="mb-4">
            <UserAvatar 
              name="Akhmad Mamirov" 
              image="/lovable-uploads/5cc1789e-4978-46a1-b53d-5d67b8b668ea.png"
              size="xl"
              className="mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <div className="mt-2 text-sm">
              <p className="font-medium text-white text-2xl drop-shadow-md">Akhmad Mamirov</p>
              <p className="text-gray-100 text-lg drop-shadow-md">@papa_needs_an_A</p>
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-4 animate-scale-in px-4">
          <Link to="/login">
            <Button variant="outline" className="w-full py-6 text-lg bg-white/20 text-white hover:bg-white/30 border-white/30">
              LOG IN
            </Button>
          </Link>
          <Link to="/register">
            <Button className="w-full bg-white/20 py-6 text-lg text-white hover:bg-white/30 border-white/30">
              REGISTER
            </Button>
          </Link>
        </div>
      </div>
    </MarbleBackground>
  );
}
