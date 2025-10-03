// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const testimonials = [
//   {
//     name: "Aarav",
//     location: "Hyderabad",
//     quote: "Started as a student, now making ₹25K+ every month part-time.",
//     role: "Student Creator"
//   },
//   {
//     name: "Riya",
//     location: "Dubai",
//     quote: "iShoot gave me freedom and high-paying gigs. All I needed was my iPhone.",
//     role: "Full-time Creator"
//   },
//   {
//     name: "Priya",
//     location: "Mumbai",
//     quote: "The training was excellent and the community is so supportive. Best decision ever!",
//     role: "Weekend Creator"
//   },
//   {
//     name: "Karthik",
//     location: "Bangalore",
//     quote: "From zero experience to confident creator in just 2 weeks. The support team is amazing.",
//     role: "Freelance Creator"
//   }
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const next = () => {
//     setIsAutoPlaying(false);
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setIsAutoPlaying(false);
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16 animate-slide-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Creator Success <span className="text-primary">Stories</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Real Stories, Real Success
//           </p>
//           <p className="text-lg text-muted-foreground mt-2">
//             See how iShoot creators are turning their iPhones into income
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="glass-card p-12 relative">
//             <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
//             <div className="text-center space-y-6 animate-pixel-fade" key={current}>
//               <p className="text-2xl md:text-3xl font-medium leading-relaxed">
//                 "{testimonials[current].quote}"
//               </p>
              
//               <div className="pt-6">
//                 <div className="text-xl font-semibold">{testimonials[current].name}</div>
//                 <div className="text-muted-foreground">{testimonials[current].role}</div>
//                 <div className="text-sm text-primary mt-1">{testimonials[current].location}</div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex justify-center items-center gap-4 mt-8">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={prev}
//                 className="hover:bg-primary/10"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </Button>

//               <div className="flex gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => {
//                       setCurrent(index);
//                       setIsAutoPlaying(false);
//                     }}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       index === current 
//                         ? 'bg-primary w-8' 
//                         : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={next}
//                 className="hover:bg-primary/10"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      text: "iShoot transformed my content creation process. The quality and professionalism of the creators is unmatched!"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "Best platform for finding reliable videographers. My business has grown 3x since using iShoot."
    },
    {
      name: "Emily Rodriguez",
      role: "Influencer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 4,
      text: "The instant booking feature is a game-changer. No more back-and-forth emails!"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied creators and clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
