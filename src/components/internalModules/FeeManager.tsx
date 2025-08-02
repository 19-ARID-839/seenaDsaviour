import {
  Download,
  Upload,
  CalendarDays,
  Mouse,
  MousePointer2,
} from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const FeeManager = () => {
  return (
    <>
    
    <h2 className="bg-gradient-primary bg-clip-text text-transparent hover-colorchange text-4xl md:text-6xl lg:text-4xl text-center">
        Task Manager
      </h2>
       <div className="flex gap-4 p-2 flex-col lg:flex-col">
      {/* Left Column */}
      <div className="flex flex-row gap-3">
        <div className="w-full lg:w-full flex flex-col lg:flex-row p-3 rounded-lg gap-4 ">
          {/* Top Boxes */}
          <div className="w-full lg:w-1/4 gap-4 border p-3 rounded-lg">
            <div className=" flex flex-col gap-4">
              {[
                {
                  title: "Fee History",
                  description: "Last Month",
                  icon: <Download />,
                },
                {
                  title: "PrePayment",
                  description: "Upload Here",
                  icon: <Upload />,
                },
                {
                  title: "Reminder",
                  description: "15 Days",
                  icon: <CalendarDays />,
                },
              ].map((item, i) => (
                <Card key={i} className="w-full rounded-xl shadow-md">
                  <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between px-4 py-6 text-lg font-semibold">
                    <span>{item.description}</span>
                    <span className="text-purple-500">{item.icon}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
 
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4 border p-3 rounded-lg">
            {/* Currently Enrolled Section */}
         
              <Card className="rounded-xl shadow-md h-auto">
                <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
                  <CardTitle>Currently Enrolled</CardTitle>
                </CardHeader>
                <CardContent className="p-4 grid grid-cols-2 mobileSm:flex-col gap-2">
                  {[
                    { label: "Normal Fee", color: "bg-[#d3ef8e]" },
                    { label: "Disable", color: "bg-yellow-200" },
                    { label: "Deserving", color: "bg-green-100" },
                    { label: "Hafiz-e-Quran", color: "bg-teal-200" },
                    { label: "Kinship", color: "bg-pink-200" },
                    { label: "Referable", color: "bg-pink-100" },
                    {
                      label: "Position Holder",
                      color: "bg-blue-200 col-span-2",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`text-sm font-semibold px-3 py-2 rounded-lg ${item.color} color-white text-center`}
                    >
                      {item.label} 100%
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Fee Details Section */}
              <Card className="rounded-xl shadow-md h-auto ">
                <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
                  <CardTitle>Fee Details</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-sm space-y-3">
                  {[
                    {
                      label: "Due Date",
                      date: "17/07/2025",
                      amount: "112,300",
                    },
                    {
                      label: "First Due Date",
                      date: "25/07/2025",
                      amount: "114,300",
                    },
                    {
                      label: "Second Due Date",
                      date: "05/08/2025",
                      amount: "120,000",
                    },
                  ].map((fee, i) => (
                    <div key={i} className="flex justify-between border-b pb-1">
                      <span>
                        {fee.label}: {fee.date}
                      </span>
                      <span className="font-bold">Rs. {fee.amount}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
          
            <Card className="rounded-xl shadow-md h-auto">
              <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
                <CardTitle>Upload Request Here</CardTitle>
              </CardHeader>

              <CardContent className="p-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Upload className="text-purple-500 size-16" />

                  <Button
                    variant="purple"
                    className="flex items-center gap-2 text-white"
                  >
                    Upload <MousePointer2 />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full flex flex-col lg:flex-row gap-4 border p-3 rounded-lg">
        {/* Challan Form Section */}
        <Card className="rounded-xl shadow-md  w-full lg:w-3/4 ">
          <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
            <CardTitle>Download/Upload Your Challan Form</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3 ">
            {[
              { name: "SaraAli.september fee.zip", action: "Download" },
              { name: "SaraAli.september fee.zip", action: "Upload" },
            ].map((file, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between items-center bg-muted p-3 rounded-md"
              >
                <span className="font-medium">{file.name}</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-purple-500 text-white rounded-md">
                    {file.action}
                  </button>
                  <button className="px-3 py-1 border rounded-md">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-md w-full lg:w-3/4">
          <CardHeader className="bg-electric-purple text-white text-sm py-2 px-4 rounded-t-xl">
            <CardTitle>Installment Rules</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {/* Dummy Rules */}
            {[
              {
                ruleSymbal: false,
                discription: "Read before Requesting an installment",
              },
              {
                ruleSymbal: true,
                discription: "Installment will be processed within 30 days",
              },
              {
                ruleSymbal: true,
                discription: "Installment will be processed within 30 days",
              },
              {
                ruleSymbal: true,
                discription: "Installment will be processed within 30 days",
              },
              {
                ruleSymbal: true,
                discription: "Installment will be processed within 30 days",
              },
            ].map((rule, i) => (
              <div key={i} className="text-lg">
                <>
                  <span className="text-green-600">
                    {rule.ruleSymbal ? "✅" : "❌"}
                  </span>{" "}
                  <span className={`${!rule.ruleSymbal && "text-red-500"}`}>
                    {rule.discription}
                  </span>
                </>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
    </>
   
  );
};

export default FeeManager;
