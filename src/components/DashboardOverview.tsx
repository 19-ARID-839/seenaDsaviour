import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Calendar } from "./ui/calendar";
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
import { isSameDay } from "date-fns";

const specialDays: { date: Date; label: string }[] = [
  { date: new Date(2025, 7, 14), label: "Independence Day 🇵🇰" },
  { date: new Date(2025, 8, 6), label: "Defence Day" },
  { date: new Date(2025, 11, 25), label: "Quaid-e-Azam Day" },
  // Add more as needed
];

const sliderData = [
  {
    image: "/Assets/slider/moral.jpg",
    title: "Moral Values",
    description:
      "Empowering future leaders through integrity, empathy, and responsibility.",
  },
  {
    image: "/Assets/slider/iq.jpg",
    title: "Intelligence Quotient",
    description: "Smart minds. Strong morals. A better tomorrow.",
  },
  {
    image: "/Assets/slider/social.jpg",
    title: "Social Impact",
    description:
      "Fostering moral values for a stronger, more compassionate society.",
  },
  {
    image: "/Assets/slider/vision.jpg",
    title: "Vision",
    description:
      "A vision rooted in values shaping minds, uplifting communities.",
  },
  {
    image: "/Assets/slider/health.jpg",
    title: "Health",
    description: "A healthy mind with strong moral heart, a better society.",
  },
  {
    image: "/Assets/slider/tech.jpg",
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

  const performanceData = [
    { subject: "Math", score: 78 },
    { subject: "English", score: 85 },
    { subject: "Physics", score: 65 },
    { subject: "Computer", score: 92 },
    { subject: "Urdu", score: 23 },
    // { subject: "chemistry", score: 72 },
    // { subject: "Pak Studies", score: 99 },
    // { subject: "Islamiat", score: 43 },
  ];

  const config = {
    score: {
      label: "Score",
      color: "#4f46e5", // Primary color
    },
  } satisfies ChartConfig;

  const displayedImages = [
    sliderData[(current - 1 + sliderData.length) % sliderData.length],
    sliderData[current],
    sliderData[(current + 1) % sliderData.length],
  ];

  const specialDayMap = new Map(
    specialDays.map((day) => [day.date.toDateString(), day.label])
  );

  return (
    <div className="space-y-6">
      <div className="">
        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row w-full gap-4 ">
          <div className="flex flex-row flex-wrap justify-evenly content-center w-full md:w-2/5 gap-2 rounded-xl border shadow-lg p-2">
            {overviewCards.map((card, index) => (
              <div
                className="w-full sm:w-[220px] h-auto rounded-lg border"
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
          <div className="w-full md:w-3/5">
            <div className="relative h-full rounded-xl border shadow-lg p-4 flex flex-col items-center justify-between">
              {/* Image slider */}
              <div className="relative w-full h-[280px] flex items-center justify-center overflow-hidden">
                {displayedImages.map((slide, i) => (
                  <div
                    key={i}
                    className={`
    absolute text-center rounded-2xl border shadow-md p-4 transition-all duration-700 ease-in-out bg-background
    ${
      i === 0
        ? "left-[-50px] w-[180px] h-[220px] opacity-40 scale-[0.9] blur-sm z-10"
        : ""
    }
    ${
      i === 1
        ? "relative z-30 w-[360px] h-[280px] scale-100 opacity-100 shadow-xl"
        : ""
    }
    ${
      i === 2
        ? "right-[-50px] w-[180px] h-[220px] opacity-40 scale-[0.9] blur-sm z-10"
        : ""
    }
  `}
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={slide.image}
                        alt={`Slide ${i}`}
                        className="object-cover w-full h-[160px] rounded-xl border transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </div>

                    {i === 1 && (
                      <div className="mt-3 px-3">
                        <h3 className="text-lg font-semibold text-foreground truncate">
                          {slide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
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
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className=" w-full md:w-3/5  rounded-lg border p-5">
            <h2 className="text-2xl font-bold mb-4">AI-Powered Insights</h2>
            <div className="flex flex-row flex-wrap justify-evenly gap-4">
              {aiInsights.map((item, index) => (
                <div
                  className="w-full sm:w-[320px] h-auto rounded-lg border"
                  key={index}
                >
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
          {/* Chart Section */}
          <div className="w-full md:w-2/5 rounded-lg border  flex justify-center items-center">
            <div className="w-full w-100 pr-10 ">
              <h2 className="text-2xl font-bold mb-4 pl-7">Performance</h2>
              <ChartContainer config={config}>
                <BarChart data={performanceData} width={500} height={300}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="score"
                    fill="var(--color-score)"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row w-full self-center gap-4 mt-6">
        {/* Left: Calender*/}
        <div className="w-full md:w-1/4 rounded-lg border p-5">
          <h2 className="text-2xl font-bold mb-4">Calender</h2>
          <Calendar
            className="w-full"
            modifiers={{
              special: specialDays.map((d) => d.date),
            }}
            modifiersClassNames={{
              special:
                "relative group bg-green-200 text-green-900 rounded-full",
            }}
            components={{
              DayContent: (day) => {
                const key = day.date.toDateString();
                const label = specialDayMap.get(key);
                return (
                  <div className="relative group flex items-center justify-center h-10 w-10">
                    <span>{day.date.getDate()}</span>
                    {label && (
                      <div className="absolute bottom-full mb-1 w-max bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50">
                        {label}
                      </div>
                    )}
                  </div>
                );
              },
            }}
          />
        </div>

        {/* Right: */}
        <div className="w-full md:w-3/4 rounded-lg border p-5 flex justify-center items-center">
          <div className="w-full max-w-[360px]  mx-auto text-center">
            <h1>Second Section</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
