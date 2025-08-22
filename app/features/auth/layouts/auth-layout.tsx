import { Outlet } from "react-router";
import { FlickeringGrid } from "~/common/components/ui/flickering-grid";

export default function AuthLayout() {
  return (
    <div className = "grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className = "hidden lg:block">
            <FlickeringGrid 
              squareSize={4} 
              gridGap={5} 
              flickerChance={0.2} 
              maxOpacity={0.5}
              color="#E11D48" 
            />
        </div>
        <Outlet/>
    </div>
  );
} 