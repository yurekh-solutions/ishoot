import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { Send } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  whatsapp: z.string().min(10, "Please enter a valid WhatsApp number").max(15),
  city: z.string().min(2, "Please enter your city").max(100),
  instagram: z.string().min(3, "Please provide your Instagram profile").max(255),
  iphone: z.string().min(2, "Please specify your iPhone model").max(50),
  why: z.string().min(10, "Please tell us why you want to join (at least 10 characters)").max(500),
});

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    city: "",
    instagram: "",
    iphone: "",
    why: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      formSchema.parse(formData);

      // Prepare message for WhatsApp
      const whatsappMessage = `*New iShoot Partner Application*%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*Instagram:* ${encodeURIComponent(formData.instagram)}%0A*iPhone Model:* ${encodeURIComponent(formData.iphone)}%0A*Why Join:* ${encodeURIComponent(formData.why)}`;

      // Prepare email body
      const emailSubject = encodeURIComponent("New iShoot Partner Application");
      const emailBody = encodeURIComponent(
        `New Partner Application\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nCity: ${formData.city}\nInstagram: ${formData.instagram}\niPhone Model: ${formData.iphone}\nWhy Join: ${formData.why}`
      );

      // Open WhatsApp
      window.open(`https://wa.me/918657704122?text=${whatsappMessage}`, "_blank");
      
      // Open email client
      window.location.href = `mailto:connect.ishoot@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      toast.success("Application submitted! We'll contact you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        city: "",
        instagram: "",
        iphone: "",
        why: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="glass-card p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email ID</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp Number</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Your WhatsApp number"
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City & Area</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Your city and area"
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram Profile / Reel Samples</Label>
          <Input
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Link to your Instagram profile or reel samples"
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="iphone">Which iPhone do you use?</Label>
          <Input
            id="iphone"
            name="iphone"
            value={formData.iphone}
            onChange={handleChange}
            placeholder="e.g., iPhone 13 Pro, iPhone 14 Pro Max"
            required
            className="glass"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="why">Why do you want to join?</Label>
          <Textarea
            id="why"
            name="why"
            value={formData.why}
            onChange={handleChange}
            placeholder="Tell us in 1-2 lines why you want to join iShoot"
            required
            className="glass min-h-[100px]"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 text-lg py-6"
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              <Send className="mr-2 w-5 h-5" />
              Apply Now to Become a Creator
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default PartnerForm;
