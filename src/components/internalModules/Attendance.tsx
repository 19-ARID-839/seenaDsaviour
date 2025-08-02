import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar, UserCheck, Users, Search } from "lucide-react";
import { useState } from "react";
import AttendanceTable from "@/components/internalUI/AttendanceTable";
import AttendanceToggle from "../internalUI/AttendanceToggle";
import AttendanceHeaderSection from "../internalUI/AttendanceHeaderSection";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "../ui/pagination";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  gender: string;
  email: string;
  date: string;
  isPresent: boolean;
}
const Attendance = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Ayesha Khan",
      rollNumber: "STU001",
      isPresent: true,
      email: "aysha@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "2",
      name: "Ali Raza",
      rollNumber: "STU002",
      isPresent: false,
      email: "ali@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "3",
      name: "Sara Ali",
      rollNumber: "STU003",
      isPresent: true,
      email: "sara@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "4",
      name: "Bilal Ahmed",
      rollNumber: "STU004",
      isPresent: false,
      email: "bilal@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "5",
      name: "Fatima Noor",
      rollNumber: "STU005",
      isPresent: true,
      email: "fatima@gmail.com",
      gender: "Male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "6",
      name: "Hassan Ali",
      rollNumber: "STU006",
      isPresent: true,
      email: "hassan@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "7",
      name: "Zainab Khan",
      rollNumber: "STU007",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "8",
      name: "Omar Farooq",
      rollNumber: "STU008",
      isPresent: true,
      email: "omar@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "9",
      name: "Laila Ahmed",
      rollNumber: "STU009",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "10",
      name: "Tariq Hussain",
      rollNumber: "STU010",
      isPresent: true,
      email: "omar@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "11",
      name: "Nida Shah",
      rollNumber: "STU011",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "12",
      name: "Usman Malik",
      rollNumber: "STU012",
      isPresent: true,
      email: "zainab@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "13",
      name: "Amina Qureshi",
      rollNumber: "STU013",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "14",
      name: "Raza Ali",
      rollNumber: "STU014",
      isPresent: true,
      email: "zainab@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "15",
      name: "Sana Khan",
      rollNumber: "STU015",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "16",
      name: "Bilal Ahmed",
      rollNumber: "STU016",
      isPresent: true,
      email: "zainab@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "17",
      name: "Fatima Noor",
      rollNumber: "STU017",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "female",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "18",
      name: "Hassan Ali",
      rollNumber: "STU018",
      isPresent: true,
      email: "zainab@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "19",
      name: "Zainab Khan",
      rollNumber: "STU019",
      isPresent: false,
      email: "zainab@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
    {
      id: "20",
      name: "Omar Farooq",
      rollNumber: "STU020",
      isPresent: true,
      email: "zainab@gmail.com",
      gender: "male",
      date: new Date().toISOString().slice(0, 10),
    },
  ]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const paginatedData = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(students.length / itemsPerPage);

  return (
    <div className="space-y-8">
      <h2 className="bg-gradient-primary bg-clip-text text-transparent hover-colorchange mobileSm:text-3xl lg:text:4x1 text-center">
        Attendance Portal
      </h2>
      {/* <Card className="shadow-md p-5"> */}
        <AttendanceHeaderSection />
      {/* </Card> */}

      <Card className="shadow-md h-full">
        <CardContent className="p-6 space-y-4">
          <AttendanceTable
            data={paginatedData}
            columns={[
              {
                title: "Name",
                render: (s) => (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                      {s.name[0]}
                    </div>
                    <span>{s.name}</span>
                  </div>
                ),
              },
              { title: "Roll No", render: (s) => s.rollNumber },
              { title: "Gender", render: (s) => s.gender },
              { title: "Email", render: (s) => s.email },
              { title: "Date", render: (s) => s.date },
              {
                title: "Status",
                render: (s) => (
                  <AttendanceToggle
                    isPresent={s.isPresent}
                    onToggle={() => {
                      setStudents((prev) =>
                        prev.map((x) =>
                          x.id === s.id ? { ...x, isPresent: !x.isPresent } : x
                        )
                      );
                    }}
                  />
                ),
              },
            ]}
          />
        </CardContent>
      </Card>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                isActive={currentPage === idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Attendance;
