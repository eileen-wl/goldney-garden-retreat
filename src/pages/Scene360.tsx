import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { ArrowLeft, Sparkles, Info } from "lucide-react";
import grottoImage from "@/assets/grotto-360.jpg";

const Scene360 = () => {
  const { sceneId } = useParams();
  const navigate = useNavigate();
  const [showActivities, setShowActivities] = useState(false);

  const sceneData: Record<string, { name: string; image: string }> = {
    grotto: { name: "The Grotto", image: grottoImage },
    rotunda: { name: "The Rotunda", image: grottoImage },
    terrace: { name: "Canal Terrace", image: grottoImage },
    cascade: { name: "The Cascade", image: grottoImage },
  };

  const scene = sceneData[sceneId || "grotto"];

  if (showActivities) {
    navigate(`/activities/${sceneId}`);
    return null;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 360° Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${scene.image})` }}
      />

      {/* Minimal UI Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />

      {/* Top Info */}
      <header className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start">
        <Button 
          variant="glass" 
          size="sm"
          onClick={() => navigate("/map")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Map
        </Button>

        <GlassCard variant="subtle" className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{scene.name}</span>
          </div>
        </GlassCard>
      </header>

      {/* Interactive Hotspots */}
      <button 
        className="absolute glow-marker"
        style={{ left: "30%", top: "40%" }}
      >
        <div className="w-8 h-8 rounded-full bg-accent/40 backdrop-blur-sm border border-accent flex items-center justify-center hover:scale-125 transition-all">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
      </button>

      <button 
        className="absolute glow-marker"
        style={{ left: "65%", top: "50%" }}
      >
        <div className="w-8 h-8 rounded-full bg-accent/40 backdrop-blur-sm border border-accent flex items-center justify-center hover:scale-125 transition-all">
          <Sparkles className="w-4 h-4 text-accent" />
        </div>
      </button>

      {/* Bottom Control Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <GlassCard variant="panel" className="px-8 py-4">
          <div className="flex items-center gap-6">
            <div className="text-sm text-muted-foreground">
              Drag to explore • Click hotspots for details
            </div>
            <div className="w-px h-6 bg-border" />
            <Button 
              variant="glass-primary" 
              size="lg"
              onClick={() => setShowActivities(true)}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Activities
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Scene360;
