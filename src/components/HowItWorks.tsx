import { ShoppingCart, Tractor, Truck } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    number: "1",
    title: "Choose Your Favorites",
    description: "Browse fresh fruits & veggies from local farms",
  },
  {
    icon: Tractor,
    number: "2",
    title: "Sourced from Nearby Farmers",
    description: "We connect you directly to farmers in your area",
  },
  {
    icon: Truck,
    number: "3",
    title: "Delivered in 15 Minutes",
    description: "Fresh produce at your doorstep, faster than ever",
  },
];

export const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How FarmEra Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
                <div className="relative bg-gradient-primary p-6 rounded-full">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-secondary text-white font-bold text-lg h-10 w-10 rounded-full flex items-center justify-center border-4 border-background">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
