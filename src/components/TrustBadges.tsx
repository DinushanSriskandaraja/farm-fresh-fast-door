import { Clock, Users2, Leaf, Shield } from "lucide-react";

const badges = [
  {
    icon: Users2,
    title: "Direct from Farmers",
    description: "No middleman markup",
  },
  {
    icon: Clock,
    title: "15-Minute Delivery",
    description: "Lightning fast service",
  },
  {
    icon: Leaf,
    title: "Harvested Fresh Daily",
    description: "No artificial storage",
  },
  {
    icon: Shield,
    title: "100% Quality Promise",
    description: "Fresh or money back",
  },
];

export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
        >
          <div className="mb-3 p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
            <badge.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};
