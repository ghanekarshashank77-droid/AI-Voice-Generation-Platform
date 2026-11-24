import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background
        gap-4">
          <h1 className="text-2xl font semi-bold">Welcome to Resonance</h1>
          <div className="flex items-centergap-4">
            <OrganizationSwitcher/>
            <UserButton/>
          </div>
        
        
        </div>
          
    );
} 
            