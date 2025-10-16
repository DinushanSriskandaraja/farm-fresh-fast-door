import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Share2 } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SuccessModal = ({ open, onOpenChange }: SuccessModalProps) => {
  const handleShare = () => {
    const shareText = "I just joined FarmEra! Get farm-fresh fruits & veggies delivered in 15 minutes. Join the waitlist!";
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: "FarmEra - Farm Fresh Delivery",
          text: shareText,
          url: shareUrl,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">You're on the list! 🎉</DialogTitle>
          <DialogDescription className="text-center space-y-3 pt-2">
            <p className="text-base">
              Thank you for joining! We'll bring FarmEra to your city soon.
            </p>
            <p className="text-sm font-medium text-foreground">
              Help us prioritize your city — invite your friends!
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <Button
            onClick={handleShare}
            className="w-full gradient-primary"
            size="lg"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share with Friends
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Close
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-2">
          More friends = Higher priority for your city! 🚀
        </p>
      </DialogContent>
    </Dialog>
  );
};
