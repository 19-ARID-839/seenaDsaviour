import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Download,
  Upload,
  CalendarDays,
  Image,
  CloudUpload,
  Link2,
  Plus,
  Mic,
} from "lucide-react";
import { Input } from "../ui/input";

const ExamPortal = () => {
  return (
    <div className="space-y-8">
      <h2 className="bg-gradient-primary bg-clip-text text-transparent hover-colorchange mobileSm:text-3xl lg:text:4x1 text-center">
        Exam Portal
      </h2>
      <div className="space-y-4">
        <Card className="shadow-md p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Exam Download",
                titleIcon: <Download />,
                description: "Click Here to Download",
                discIcon: <Image />,
              },
              {
                title: "Exam Upload",
                titleIcon: <CloudUpload />,
                description: "Click here to upload",
                discIcon: <Link2 />,
              },
              {
                title: "Exam Datesheet",
                titleIcon: <Download />,
                description: "Click Here to download",
                discIcon: <Image />,
              },
            ].map((item, i) => (
              <Card key={i} className="rounded-xl shadow-md">
                <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
                  <CardTitle className="flex flex-row justify-between">
                    {item.title}
                    {item.titleIcon}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-between px-4 py-3 gap-3">
                  <div className="flex flex-row bg-muted/50 p-3 rounded-xl gap-3">
                    {item.description}
                    {item.discIcon}
                  </div>
                  <div className="flex flex-row rounded-xl gap-3">
                    <Button variant="purple">
                      Preview <Image />
                    </Button>
                    <Button variant="outline">Download {item.titleIcon}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="shadow-md p-5">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* First Card - 2/3 Width */}
            <div className="w-full lg:w-1/3">
              <Card className="rounded-xl shadow-md h-full">
                <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
                  <CardTitle className="flex flex-row justify-between">
                    Resuly Day
                    <Download />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col px-4 py-3 gap-3">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Note:</span> All students
                    above 80% marks must attempt the Challenge Exam for better
                    assessment. No exceptions.
                  </div>
                  <div className="flex flex-row items-center bg-muted/50 p-3 rounded-xl gap-3">
                    <Image />
                    <span>Click here to download</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Note:</span> For any
                    result-related queries or concerns, students are advised to
                    drop an application.
                  </div>
                  <div className="flex flex-row items-center bg-muted/50 p-3 rounded-xl gap-3">
                    <Image />
                    <span>Click here to upload</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Card - 1/3 Width */}
            <div className="w-full lg:w-2/3">
              <Card className="rounded-xl shadow-md h-full">
                <CardHeader className="bg-violet-600 text-white text-sm py-2 px-4 rounded-t-xl">
                  <CardTitle className="flex flex-row justify-between">
                    Challenge Exam
                    <CloudUpload />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col px-4 py-3 gap-3">
                  <div className="text-sm text-muted-foreground">
                    Submit your answer sheets for the challenge exam within 2
                    days after result day.
                  </div>
                  <div className="flex flex-row items-center bg-muted/50 p-3 rounded-xl gap-3">
                    <Link2 />
                    <span>Click here to upload</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    For any issues, contact the examination cell through your
                    portal.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>

        <div>
          <div className="w-full p-4">
            <div className="relative bg-white dark:bg-muted shadow-md rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Plus className="w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Ask me anything & track your improvement record here!"
                  className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                >
                  <Mic />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPortal;
