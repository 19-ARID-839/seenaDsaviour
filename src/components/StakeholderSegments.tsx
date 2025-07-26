import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Heart,
  Settings,
  BookOpen,
  BarChart3,
  Calendar,
  Shield,
  Brain,
  Clock,
  Target,
  Zap,
} from "lucide-react";

const StakeholderSegments = () => {
 const stakeholders = [
  {
    id: "students",
    title: "Students",
    icon: GraduationCap,
    gradient: "from-electric-purple to-neon-blue",
    description: "AI-powered personalized learning.",
    features: [
      { icon: BookOpen, text: "Interactive Modules" },
      { icon: Brain, text: "Smart Study Tips" },
    ],
    benefits: "94% better outcomes",
    cta: "Start Learning",
  },
  {
    id: "teachers",
    title: "Teachers",
    icon: Users,
    gradient: "from-neon-blue to-neon-pink",
    description: "Intelligent tools for educators.",
    features: [
      { icon: Zap, text: "Auto Grading" },
      { icon: BarChart3, text: "Analytics Dashboard" },
    ],
    benefits: "75% less admin work",
    cta: "Teach Smarter",
  },
  {
    id: "parents",
    title: "Parents",
    icon: Heart,
    gradient: "from-neon-pink to-electric-purple",
    description: "Stay involved effortlessly.",
    features: [
      { icon: Clock, text: "Live Performance Updates" },
      { icon: BarChart3, text: "Progress Reports" },
    ],
    benefits: "89% more engagement",
    cta: "Stay Connected",
  },
  {
    id: "admins",
    title: "Administrators",
    icon: Settings,
    gradient: "from-electric-purple via-neon-blue to-neon-pink",
    description: "Manage every operation with ease.",
    features: [
      { icon: Shield, text: "System Control" },
      { icon: BarChart3, text: "Fee & Finance" },
    ],
    benefits: "60% more efficiency",
    cta: "Manage Everything",
  },
  {
    id: "owner",
    title: "Director",
    icon: Shield,
    gradient: "from-electric-purple to-neon-blue",
    description: "Strategic overview and insights.",
    features: [
      { icon: BarChart3, text: "Analytics" },
      { icon: Clock, text: "Productivity Reports" },
    ],
    benefits: "Full operational visibility",
    cta: "Explore Insights",
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    gradient: "from-neon-blue to-neon-pink",
    description: "Engage with alumni and mentors.",
    features: [
      { icon: Zap, text: "Live Updates" },
      { icon: Heart, text: "Social Tools" },
    ],
    benefits: "Stronger network retention",
    cta: "Connect Now",
  },
  {
    id: "principal",
    title: "Principal",
    icon: GraduationCap,
    gradient: "from-neon-pink to-electric-purple",
    description: "Lead academic excellence.",
    features: [
      { icon: Shield, text: "Discipline" },
      { icon: Clock, text: "Time Reports" },
    ],
    benefits: "Improved academic leadership",
    cta: "Lead Effectively",
  },
];


  return (
    <section className="py-24 bg-gradient-to-b from-background to-dark-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,69,255,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2 mb-6">
            <Brain className="w-4 h-4 mr-2" />
            For Every Stakeholder
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Tailored Experiences for </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Role
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SeenaDsaviour provides specialized dashboards and features designed
            specifically for each stakeholder in the educational ecosystem.
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={stakeholder.id}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 hover-lift neon-border transition-all duration-500 flex flex-col justify-between h-full"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stakeholder.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Header */}
              <div className="relative flex items-center mb-6">
                <div
                  className={`w-20 h-16 bg-gradient-to-br ${stakeholder.gradient} rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stakeholder.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {stakeholder.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stakeholder.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="relative space-y-4 mb-6">
                {stakeholder.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-electric-purple" />
                    </div>
                    <span className="text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="relative mb-2">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-electric-purple">
                      {stakeholder.benefits}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="relative">
                <Button className="w-full btn-futuristic group-hover:scale-105 transition-transform duration-300">
                  <span>{stakeholder.cta}</span>
                </Button>
              </div> */}
            </div>
          ))}
        </div>

        

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-surface rounded-2xl p-8 neon-border">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">Ready to transform </span>
              <span className="text-electric-purple">
                your educational experience?
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of institutions already using SeenaDsaviour to
              revolutionize education with AI-powered insights and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-futuristic">
                <span>Get Started Today</span>
              </Button>
              <Button size="lg" variant="outline" className="neon-border">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSegments;
