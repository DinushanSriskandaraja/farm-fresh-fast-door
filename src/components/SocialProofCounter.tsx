import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export const SocialProofCounter = () => {
  const [count, setCount] = useState(0);
  const targetCount = 627; // Can be updated from database in the future

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(targetCount);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
      <Users className="h-5 w-5 text-primary" />
      <span className="text-lg font-semibold text-primary">
        {count.toLocaleString()}+ people joined!
      </span>
    </div>
  );
};
