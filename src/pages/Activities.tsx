import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/GlassCard";
import { ArrowLeft, Heart, Music, Brain, Leaf } from "lucide-react";
import grottoImage from "@/assets/grotto-360.jpg";

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
}

const activities: Activity[] = [
  {
    id: "meditation",
    title: "Guided Meditation",
    description: "A calming 10-minute meditation session guided by nature sounds",
    icon: Heart,
    duration: "10 min",
  },
  {
    id: "sounds",
    title: "Nature Sounds Loop",
    description: "Immersive ambient sounds of the garden to help you relax",
    icon: Music,
    duration: "Continuous",
  },
  {
    id: "puzzle",
    title: "Botanical Puzzle",
    description: "Explore garden flora through interactive botanical challenges",
    icon: Leaf,
    duration: "15 min",
  },
  {
    id: "breathing",
    title: "Breathing Exercise",
    description: "Visual breathing techniques synced with garden imagery",
    icon: Brain,
    duration: "5 min",
  },
];

const Activities = () => {
  const { sceneId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${grottoImage})`,
          filter: "blur(20px) brightness(0.4)"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Button 
            variant="glass" 
            size="sm"
            onClick={() => navigate(`/scene/${sceneId}`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Scene
          </Button>
        </div>

        {/* Main Activity Panel */}
        <GlassCard variant="panel" className="max-w-5xl w-full p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Choose Your Activity
            </h1>
            <p className="text-muted-foreground">
              Select a therapeutic experience to begin your journey to wellness
            </p>
          </div>

          {/* Activity Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <GlassCard 
                  key={activity.id} 
                  variant="subtle"
                  className="p-6 hover:border-primary/60 hover:bg-primary/5 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 border border-primary/40 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{activity.title}</h3>
                        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {activity.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {activity.description}
                      </p>
                      <Button 
                        variant="glass-secondary" 
                        size="sm"
                        className="w-full"
                      >
                        Launch Activity
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Activities;
