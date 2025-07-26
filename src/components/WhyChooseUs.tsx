import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Shield, 
  Smartphone,
  BarChart3,
  Users,
  Clock,
  Target,
  Sparkles,
  TrendingUp,
  Globe,
  Lock
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms provide personalized insights, predictive analytics, and automated decision-making for enhanced educational outcomes.",
      features: ["Predictive Analytics", "Smart Recommendations", "Automated Insights"],
      color: "electric-purple"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Automation",
      description: "Streamline repetitive tasks with intelligent automation. From grading to attendance tracking, let AI handle the routine while you focus on what matters.",
      features: ["Auto Grading", "Smart Attendance", "Instant Reports"],
      color: "neon-blue"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your educational dashboard anywhere, anytime. Our responsive design ensures seamless experience across all devices and platforms.",
      features: ["Cross-Platform", "Offline Sync", "Touch Optimized"],
      color: "neon-pink"
    },
    {
      icon: Shield,
      title: "Education-Grade Security",
      description: "Ensure peace of mind for schools, parents, and students with robust, education-specific data protection. Our system safeguards academic records, attendance logs, communication data, and AI-generated insights — all while meeting global compliance standards.Role-Based Secure Access Auto Data Backup & Recovery",
      features: ["", "", ""],
      color: "electric-purple"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting. Track performance, identify trends, and optimize outcomes instantly.",
      features: ["Live Dashboards", "Custom Reports", "Trend Analysis"],
      color: "neon-blue"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Platform",
      description: "Purpose-built interfaces for students, teachers, parents, and administrators. Each role gets tailored features and personalized experiences.",
      features: ["Role-Based UI", "Custom Workflows", "Stakeholder Portals"],
      color: "neon-pink"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { number: "50+", label: "AI Models", icon: Brain },
    { number: "10M+", label: "Data Points", icon: BarChart3 },
    { number: "24/7", label: "Support", icon: Globe }
  ];

  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose SeenaDsaviour
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Experience the </span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">Next Generation</span>
            <br />
            <span className="text-foreground">of Educational Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge AI and designed for the future of education. 
            Discover what makes SeenaDsaviour the smart choice for modern institutions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover-lift neon-border transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-${reason.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className={`w-6 h-6 text-${reason.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{reason.description}</p>

              {/* Features */}
              {/* <div className="space-y-2">
                {reason.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 bg-${reason.color} rounded-full`}></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-surface rounded-2xl p-8 neon-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-foreground">Trusted by </span>
              <span className="text-electric-purple">Educational Leaders</span>
            </h3>
            <p className="text-muted-foreground">Our platform delivers exceptional results across all metrics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-muted/50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-electric-purple" />
                </div>
                <div className="text-3xl font-bold text-electric-purple mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Highlight */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-gradient-accent text-accent-foreground px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Performance Metrics
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-foreground">Measurable </span>
              <span className="text-neon-blue">Impact</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI-powered platform delivers quantifiable improvements across all educational metrics, 
              from student engagement to administrative efficiency.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Student Engagement</span>
                <span className="text-electric-purple font-bold">+85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Administrative Efficiency</span>
                <span className="text-neon-blue font-bold">+72%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Learning Outcomes</span>
                <span className="text-neon-pink font-bold">+94%</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-card/20 to-muted/20 backdrop-blur-sm border border-border rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-electric-purple/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-8 h-8 text-electric-purple" />
                  </div>
                  <div className="text-lg font-bold text-foreground">Secure</div>
                  <div className="text-sm text-muted-foreground">Bank-level encryption</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-neon-blue" />
                  </div>
                  <div className="text-lg font-bold text-foreground">Fast</div>
                  <div className="text-sm text-muted-foreground">Lightning speed</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-neon-pink/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-8 h-8 text-neon-pink" />
                  </div>
                  <div className="text-lg font-bold text-foreground">Smart</div>
                  <div className="text-sm text-muted-foreground">AI-powered insights</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-electric-purple/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-electric-purple" />
                  </div>
                  <div className="text-lg font-bold text-foreground">Focused</div>
                  <div className="text-sm text-muted-foreground">Goal-oriented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;