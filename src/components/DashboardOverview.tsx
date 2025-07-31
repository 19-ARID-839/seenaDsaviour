import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Brain,
  Target,
  Clock,
  AlertTriangle,
  Award,
  Activity,
} from "lucide-react";
import { useState } from "react";

const sliderData = [
  {
    image: "/src/Assets/slider/moral.jpg",
    title: "Moral Values",
    description:
      "Empowering future leaders through integrity, empathy, and responsibility.",
  },
  {
    image: "/slider/iq.jpg",
    title: "Intelligence Quotient",
    description: "Smart minds. Strong morals. A better tomorrow.",
  },
  {
    image: "/slider/social.jpg",
    title: "Social Impact",
    description:
      "Fostering moral values for a stronger, more compassionate society.",
  },
  {
    image: "/slider/vision.jpg",
    title: "Vision",
    description:
      "A vision rooted in values shaping minds, uplifting communities.",
  },
  {
    image: "/slider/health.jpg",
    title: "Health",
    description: "A healthy mind with strong moral heart, a better society.",
  },
  {
    image: "/slider/tech.jpg",
    title: "Technology",
    description: "Smart technology. Strong morals. Sustainable progress.",
  },
];

const DashboardOverview = () => {
  const [current, setCurrent] = useState(1); // center image index

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };
  const overviewCards = [
    {
      title: "Institutes",
      value: "40",
      change: "+11.0% from this month",
      icon: Activity,
    },
    {
      title: "Total Student",
      value: "15600",
      change: "+8.3% this session",
      icon: Users,
    },
    {
      title: "Teachers",
      value: "5000",
      change: "+2.1% faculty members",
      icon: GraduationCap,
    },
    {
      title: "Success Rate",
      value: "91.34%",
      change: "+3.4% completion rate",
      icon: TrendingUp,
    },
  ];

  const aiInsights = [
    {
      title: "Student Performance Alert",
      description: "5 students grades are declining in physics",
      level: "High",
      color: "bg-red-600",
      icon: AlertTriangle,
    },
    {
      title: "Course Recommendation",
      description: "Advanced Python course ready for top students",
      level: "Medium",
      color: "bg-yellow-400",
      icon: Target,
      action: "Create Course",
    },
    {
      title: "Engagement Boost",
      description: "Interactive quiz format increases participation by 40%",
      level: "Low",
      color: "bg-green-600",
      icon: Brain,
    },
    {
      title: "Attendance Pattern",
      description: "Friday classes have 25% lower attendance rates",
      level: "Medium",
      color: "bg-yellow-400",
      icon: Clock,
    },
  ];


  const displayedImages = [
    sliderData[(current - 1 + sliderData.length) % sliderData.length],
    sliderData[current],
    sliderData[(current + 1) % sliderData.length],
  ];

  //   Moral: Empowering future leaders through integrity, empathy, and responsibility.
  // Social: Fostering moral values for a stronger, more compassionate society
  // Vision: A vision rooted in values shaping minds, uplifting communities
  // IQ: Smart minds. Strong morals. A better tomorrow.
  // Health: A healthy mind with strong moral heart, a better society.
  // Tech: Smart technology. Strong morals. Sustainable progress.

  return (
    <div className="space-y-6">
      <div className="">
        {/* Stats Cards */}
        <div className="flex flex-row w-full gap-4 ">
          <div className="flex flex-row flex-wrap justify-evenly content-center w-2/5 gap-2 rounded-xl border shadow-lg">
            {overviewCards.map((card, index) => (
              <div
                className="w-[220px] h-[120px] rounded-lg border"
                key={index}
              >
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      {card.title}
                    </div>
                    <card.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-3xl font-sm text-foreground mb-2">
                    {card.value}
                  </div>
                  <div className="text-sm text-green-500">{card.change}</div>
                </CardContent>
              </div>
            ))}
          </div>
          <div className="w-3/5">
            <div className="relative h-full rounded-xl border shadow-lg p-4 flex flex-col items-center justify-between">
              {/* Image slider */}
              <div className="relative w-full h-[280px] flex items-center justify-center overflow-hidden">
                {displayedImages.map((slide, i) => (
                  <div
                    key={i}
                    className={`
                          absolute text-center rounded-xl border p-5 transition-all duration-2000 ease-in-out
                          ${
                            i === 0
                              ? "left-[-40px] w-[200px] h-[200px] opacity-50 scale-[0.9] blur-[1px] z-10"
                              : ""
                          }
                          ${
                            i === 1
                              ? "relative z-20 w-[350px] h-[240px] scale-100 opacity-100 shadow-xl"
                              : ""
                          }
                          ${
                            i === 2
                              ? "right-[-40px] w-[200px] h-[200px] opacity-50 scale-[0.9] blur-[1px] z-10"
                              : ""
                          }
                        `}
                  >
                    <img
                      src={slide.image}
                      alt={`Slide ${i}`}
                      className="object-cover w-full h-[150px] rounded-lg border transition-all duration-2000 ease-in-out"
                    />
                    {i === 1 && (
                      <div className="mt-2 px-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {slide.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {slide.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="flex gap-4 mt-4">
                <Button size="sm" variant="outline" onClick={handlePrev}>
                  Prev
                </Button>
                <Button size="sm" variant="outline" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Section */}
      <div className="">
        <div className="flex flex-row w-full gap-4">
          <div className=" w-3/5  rounded-lg border p-5">
            <h2 className="text-2xl font-bold mb-4">AI-Powered Insights</h2>
            <div className="flex flex-row flex-wrap justify-evenly gap-4">
              {aiInsights.map((item, index) => (
                <div className="w-[320px] h-auto rounded-lg border" key={index}>
                  <CardContent className="p-3 flex items-start gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-white ${item.color}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-sm text-foreground">
                          {item.title}
                        </h4>
                        <Badge
                          className={`text-xs px-2 py-0.5 text-white ${item.color}`}
                        >
                          {item.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      {item.action && (
                        <Button size="xs" variant="outline">
                          {item.action}
                        </Button>
                      )}
                      {!item.action && (
                        <Button size="xs" variant="outline">
                          View details
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/5">
            <h1>One</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
