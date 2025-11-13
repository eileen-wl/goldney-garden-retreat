import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { Home, MapPin } from "lucide-react";
import mapImage from "@/assets/garden-map-clean.jpg";

interface SceneMarker {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  description: string;
}

const scenes: SceneMarker[] = [
  { id: "grotto", name: "The Grotto", x: 35, y: 60, description: "A mystical stone sanctuary" },
  { id: "rotunda", name: "The Rotunda", x: 55, y: 45, description: "Classical pavilion of reflection" },
  { id: "terrace", name: "Canal Terrace", x: 70, y: 55, description: "Peaceful water gardens" },
  { id: "cascade", name: "The Cascade", x: 45, y: 30, description: "Flowing water feature" },
];

const MapSelection = () => {
  const navigate = useNavigate();
  const [selectedScene, setSelectedScene] = useState<SceneMarker | null>(null);

  return (
    <div className="relative min-h-screen w-full flex">
      {/* Sidebar */}
      <aside className="glass-panel w-80 p-8 space-y-6 relative z-20">
        <Button 
          variant="glass" 
          size="sm" 
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>

        <div>
          <h2 className="text-2xl font-bold mb-2">Explore the Garden</h2>
          <p className="text-sm text-muted-foreground">
            Select a location to begin your immersive 360° experience
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Available Scenes
          </h3>
          {scenes.map((scene) => (
            <GlassCard 
              key={scene.id} 
              variant="subtle" 
              className={`p-4 cursor-pointer transition-all ${
                selectedScene?.id === scene.id ? "border-primary/60 bg-primary/10" : ""
              }`}
              onClick={() => setSelectedScene(scene)}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">{scene.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{scene.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </aside>

      {/* Map Area */}
      <main className="flex-1 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mapImage})` }}
        />
        <div className="absolute inset-0 bg-background/20" />

        {/* Scene Markers */}
        {scenes.map((scene) => (
          <button
            key={scene.id}
            className="absolute glow-marker"
            style={{ 
              left: `${scene.x}%`, 
              top: `${scene.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            onClick={() => setSelectedScene(scene)}
          >
            <div className="w-12 h-12 rounded-full bg-primary/30 backdrop-blur-sm border-2 border-primary flex items-center justify-center hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
          </button>
        ))}

        {/* Selection Popup */}
        {selectedScene && (
          <div 
            className="absolute z-30 animate-scale-in"
            style={{ 
              left: `${selectedScene.x}%`, 
              top: `${selectedScene.y - 15}%`,
              transform: "translate(-50%, -100%)"
            }}
          >
            <GlassCard variant="panel" className="p-6 min-w-[300px]">
              <h3 className="text-xl font-bold mb-2">{selectedScene.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{selectedScene.description}</p>
              <Button 
                variant="glass-primary" 
                size="default"
                onClick={() => navigate(`/scene/${selectedScene.id}`)}
                className="w-full"
              >
                Enter 360° View
              </Button>
            </GlassCard>
          </div>
        )}
      </main>
    </div>
  );
};

export default MapSelection;
