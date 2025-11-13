import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/goldney-garden-hero.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, filter: "blur(3px)" }}
      />
      
      {/* Volumetric Light Overlay */}
      <div className="absolute inset-0 volumetric-light" />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 pt-8">
        <div className="glass-card px-6 py-3">
          <h2 className="text-sm font-semibold tracking-wider text-foreground/90">GOLDNEY GARDEN</h2>
        </div>
        <nav className="glass-card px-6 py-3">
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-120px)] items-center justify-center px-8">
        <GlassCard variant="panel" className="max-w-3xl p-12 text-center space-y-8">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            A Digital Retreat
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Step into the tranquil beauty of Bristol's historic Goldney Garden. 
            Explore serene landscapes, discover hidden grottos, and find your moment of peace 
            through immersive 360° experiences and therapeutic activities.
          </p>

          <div className="pt-4">
            <Button 
              variant="glass-primary" 
              size="xl" 
              onClick={() => navigate("/map")}
              className="font-semibold"
            >
              Begin Your Journey
            </Button>
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default Home;
