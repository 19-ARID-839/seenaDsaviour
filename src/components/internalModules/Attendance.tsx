import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar, UserCheck, Users, Search } from "lucide-react";
import { useState } from "react";
import AttendanceTable from "@/components/internalUI/AttendanceTable";



const Attendance = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Ayesha Khan",
      rollNumber: "STU001",
      isPresent: true,
    },
    {
      id: "2",
      name: "Ali Raza",
      rollNumber: "STU002",
      isPresent: false,
    },
    {
      id: "3",
      name: "Sara Ali",
      rollNumber: "STU003",
      isPresent: true,
    },
    {
      id: "4",
      name: "Bilal Ahmed",
      rollNumber: "STU004",
      isPresent: false,
    },
    { id: "5", name: "Fatima Noor", rollNumber: "STU005", isPresent: true },
    { id: "6", name: "Hassan Ali", rollNumber: "STU006", isPresent: true },
    { id: "7", name: "Zainab Khan", rollNumber: "STU007", isPresent: false },
    { id: "8", name: "Omar Farooq", rollNumber: "STU008", isPresent: true },
    { id: "9", name: "Laila Ahmed", rollNumber: "STU009", isPresent: false },
    { id: "10", name: "Tariq Hussain", rollNumber: "STU010", isPresent: true },
    { id: "11", name: "Nida Shah", rollNumber: "STU011", isPresent: false },
    { id: "12", name: "Usman Malik", rollNumber: "STU012", isPresent: true },
    { id: "13", name: "Amina Qureshi", rollNumber: "STU013", isPresent: false },
    { id: "14", name: "Raza Ali", rollNumber: "STU014", isPresent: true },
    { id: "15", name: "Sana Khan", rollNumber: "STU015", isPresent: false },
    { id: "16", name: "Bilal Ahmed", rollNumber: "STU016", isPresent: true },
    { id: "17", name: "Fatima Noor", rollNumber: "STU017", isPresent: false },
    { id: "18", name: "Hassan Ali", rollNumber: "STU018", isPresent: true },
    { id: "19", name: "Zainab Khan", rollNumber: "STU019", isPresent: false },
    { id: "20", name: "Omar Farooq", rollNumber: "STU020", isPresent: true },
  ]);
     

 
  return (
    <div className="space-y-8">
      <h2 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl text-center">
        Attendance Management
      </h2>

      <Card className="shadow-md h-80 overflow-auto">
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 position-fixed top-0 left-0 right-0">
            <div className="flex items-center gap-2">
              <Search className="text-muted-foreground" />
              <Input
                placeholder="Search name or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-muted-foreground" />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <Button className="w-full md:w-auto" variant="default">
              <UserCheck className="mr-2" /> Mark Attendance
            </Button>
          </div>

          {/* <AttendanceTable data={sampleAttendanceData} search={search} date={date} /> */}

          <AttendanceTable
            students={students}
            onToggle={(id) => {
              setStudents((prev) =>
                prev.map((s) =>
                  s.id === id ? { ...s, isPresent: !s.isPresent } : s
                )
              );
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;
