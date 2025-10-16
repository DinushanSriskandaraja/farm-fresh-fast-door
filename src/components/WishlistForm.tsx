import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const productOptions = [
  "Leafy Greens (Spinach, Lettuce, Kale)",
  "Root Vegetables (Carrots, Beets, Radish)",
  "Fruits (Apples, Oranges, Bananas)",
  "Tomatoes & Bell Peppers",
  "Exotic Vegetables",
  "Seasonal Fruits",
  "Fresh Herbs",
  "Organic Staples",
];

const wishlistSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  contact: z.string().trim().min(10, "Please enter a valid contact").max(100),
  location: z.string().trim().min(2, "Location is required").max(200),
  products: z.array(z.string()).min(1, "Please select at least one product"),
  excitementReason: z.string().trim().max(500).optional(),
});

type WishlistFormData = z.infer<typeof wishlistSchema>;

interface WishlistFormProps {
  onSuccess: () => void;
}

export const WishlistForm = ({ onSuccess }: WishlistFormProps) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WishlistFormData>({
    resolver: zodResolver(wishlistSchema),
  });

  const handleProductToggle = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  const onSubmit = async (data: WishlistFormData) => {
    if (selectedProducts.length === 0) {
      toast.error("Please select at least one product");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("wishlists").insert({
        full_name: data.fullName,
        contact: data.contact,
        location: data.location,
        preferred_products: selectedProducts,
        excitement_reason: data.excitementReason || null,
      });

      if (error) throw error;

      reset();
      setSelectedProducts([]);
      onSuccess();
    } catch (error) {
      console.error("Error submitting wishlist:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl mx-auto">
      <div className="space-y-3">
        <Label htmlFor="fullName" className="text-base font-semibold">Full Name *</Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          {...register("fullName")}
          className="bg-background shadow-sm"
        />
        {errors.fullName && <p className="text-sm text-destructive font-medium">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="contact" className="text-base font-semibold">Email or Mobile Number *</Label>
        <Input
          id="contact"
          placeholder="your@email.com or +94 123456789"
          {...register("contact")}
          className="bg-background shadow-sm"
        />
        {errors.contact && <p className="text-sm text-destructive font-medium">{errors.contact.message}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="location" className="text-base font-semibold">Your Location (City/Area) *</Label>
        <Input
          id="location"
          placeholder="e.g., Wellawatta - Colombo"
          {...register("location")}
          className="bg-background shadow-sm"
        />
        {errors.location && <p className="text-sm text-destructive font-medium">{errors.location.message}</p>}
      </div>

      <div className="space-y-3">
        <Label>What products are you most excited about? *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {productOptions.map((product) => (
            <div key={product} className="flex items-center space-x-2">
              <Checkbox
                id={product}
                checked={selectedProducts.includes(product)}
                onCheckedChange={() => handleProductToggle(product)}
              />
              <label
                htmlFor={product}
                className="text-sm cursor-pointer select-none leading-tight"
              >
                {product}
              </label>
            </div>
          ))}
        </div>
        {errors.products && <p className="text-sm text-destructive">{errors.products.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="excitementReason">Why are you excited for FarmEra? (Optional)</Label>
        <Textarea
          id="excitementReason"
          placeholder="Share what excites you most about farm-fresh delivery..."
          {...register("excitementReason")}
          className="bg-card resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full gradient-primary text-lg py-6" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining Wishlist...
          </>
        ) : (
          "Join Wishlist & Get Early Access 🍃"
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        🔒 Secure & Free Registration • We respect your privacy
      </p>
    </form>
  );
};
