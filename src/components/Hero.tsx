import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Brain,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  GraduationCap,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const words = ["Future", "Smart", "Intelligent", "Revolutionary"];

  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setTypedText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  const features = [
    { icon: Brain, label: "AI-Powered Analytics" },
    { icon: Zap, label: "Instant Automation" },
    { icon: Users, label: "Multi-Stakeholder" },
    { icon: Shield, label: "Secure & Reliable" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "6rem", paddingBottom: "3rem" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-dark-surface to-darker-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,69,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-purple/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center animate-slide-up">
          <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium glow-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing SeenaDsaviour v2.0
          </Badge>
        </div>

        {/* Main Heading */}
        <div
          className="mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground hover-colorchange">The </span>
            <span className="relative">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
                {typedText}
              </span>
            </span>
            <br />
            <span className="text-electric-purple hover-colorchange">
              AI Education
            </span>
            <br />
            <span className="text-electric-purple hover-colorchange">
              Powerd by{" "}
            </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              SDS
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up "
          style={{ animationDelay: "0.4s" }}
        >
          Experience the next generation of Learning Management System with
          <span className="text-foreground font-semibold">
            {" "}
            AI-driven automation
          </span>
          ,
          <span className="text-foreground font-semibold">
            {" "}
            personalized dashboards
          </span>
          , and
          <span className="text-foreground font-semibold">
            {" "}
            intelligent insights
          </span>{" "}
          for every stakeholder.
        </p>

        {/* Feature Icons */}
        <div
          className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="flex items-center space-x-2 glass-card px-4 py-2 rounded-lg hover-lift"
            >
              <feature.icon className="w-5 h-5 text-electric-purple" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            size="lg"
            className="btn-futuristic text-lg px-8 py-4"
            onClick={() => navigate("/dashboard")}
          >
            <span className="flex items-center">
              Explore Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="neon-border text-lg px-8 py-4 hover-lift"
            onClick={() => navigate("/dashboard")}
          >
            Video Guide
            <Zap className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-electric-purple mb-2">
              15K+
            </div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground">Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-pink mb-2">
              98%
            </div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-electric-purple mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-1/4 left-10 w-4 h-4 bg-electric-purple rounded-full animate-float opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-16 w-6 h-6 bg-neon-blue rounded-full animate-float opacity-40"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-pink rounded-full animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-electric-purple rounded-full animate-float opacity-30"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default Hero;
