
import { Link } from "react-router-dom";
import { MarbleBackground } from "@/components/ui/marble-background";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/ui/user-avatar";
import { CircleArrowDown } from "lucide-react";

export default function WelcomePage() {
  return (
    <MarbleBackground>
      <div className="flex flex-col items-center justify-between min-h-screen p-6 bg-gradient-to-b from-[#D3E4FD] to-[#E5DEFF]">
        <div className="w-full"></div>
        
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl font-bold mb-6 text-thrive-dark-blue drop-shadow-sm">Welcome</h1>
          <div className="mb-4">
            <UserAvatar 
              name="Akhmad Mamirov" 
              image="/lovable-uploads/5cc1789e-4978-46a1-b53d-5d67b8b668ea.png"
              size="xl"
              className="mx-auto mb-4 border-2 border-thrive-light-purple shadow-sm"
            />
            <div className="mt-2 text-sm">
              <p className="font-medium text-thrive-dark-blue text-xl drop-shadow-sm">Akhmad Mamirov</p>
              <p className="text-thrive-neutral-gray text-base drop-shadow-sm">@papa_needs_an_A</p>
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-4 animate-scale-in px-4">
          <Link to="/login" className="block">
            <Button 
              variant="outline" 
              className="w-full py-5 text-lg bg-white/20 text-thrive-dark-blue hover:bg-white/30 border-thrive-light-purple/30"
            >
              LOG IN
            </Button>
          </Link>
          <Link to="/register" className="block">
            <Button 
              className="w-full bg-thrive-light-purple/50 py-5 text-lg text-thrive-dark-blue hover:bg-thrive-light-purple/70 border-thrive-light-purple/30"
            >
              REGISTER
            </Button>
          </Link>
        </div>

        <div className="w-full flex justify-center mt-8">
          <CircleArrowDown className="text-thrive-neutral-gray animate-bounce" size={32} />
        </div>
      </div>
    </MarbleBackground>
  );
}

