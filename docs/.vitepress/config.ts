import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  lang: "en-US",
  title: "Student Management System",
  description:
    "Comprehensive documentation for Student Management System built with FilamentPHP v3 and Laravel 12",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3c82f6" }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "Features", link: "/features" },
      { text: "Support", link: "/support" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Overview", link: "/overview" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Installation", link: "/installation" },
          { text: "Configuration", link: "/configuration" },
        ],
      },
      {
        text: "Academic Management",
        items: [
          { text: "Sessions", link: "/academic/sessions" },
          { text: "Classes", link: "/academic/classes" },
          { text: "Sections", link: "/academic/sections" },
          { text: "Shifts", link: "/academic/shifts" },
          { text: "Departments", link: "/academic/departments" },
          { text: "Subjects", link: "/academic/subjects" },
          { text: "Subject Assignment", link: "/academic/assign-subjects" },
        ],
      },
      {
        text: "Student Management",
        items: [
          { text: "Student Registration", link: "/students/registration" },
          { text: "Attendance Tracking", link: "/students/attendance" },
          { text: "ID Card Generation", link: "/students/id-cards" },
        ],
      },
      {
        text: "Teacher Management",
        items: [
          { text: "Teacher Profiles", link: "/teachers/profiles" },
          { text: "Teacher Attendance", link: "/teachers/attendance" },
          { text: "Subject Assignment", link: "/teachers/assignments" },
        ],
      },
      {
        text: "Exam Management",
        items: [
          { text: "Exam Setup", link: "/exams/setup" },
          { text: "Marks Entry", link: "/exams/marks" },
          { text: "Report Cards", link: "/exams/report-cards" },
          { text: "Grade Configuration", link: "/exams/grades" },
        ],
      },
      {
        text: "Timetable Management",
        items: [
          { text: "Creating Timetables", link: "/timetable/creation" },
          { text: "Weekly Schedules", link: "/timetable/weekly" },
          { text: "Room Allocation", link: "/timetable/rooms" },
        ],
      },
      {
        text: "Library Management",
        items: [
          { text: "Book Catalog", link: "/library/books" },
          { text: "Book Issues", link: "/library/issues" },
        ],
      },
      {
        text: "Reporting",
        items: [
          { text: "Attendance Reports", link: "/reports/attendance" },
          { text: "Fee Summary Reports", link: "/reports/fees" },
          { text: "Performance Reports", link: "/reports/performance" },
        ],
      },
      {
        text: "Communications",
        items: [
          { text: "Messaging System", link: "/communications/messages" },
          { text: "Announcements", link: "/communications/announcements" },
          { text: "Events Management", link: "/communications/events" },
        ],
      },
      {
        text: "System Administration",
        items: [
          { text: "User Management", link: "/admin/users" },
          { text: "Roles & Permissions", link: "/admin/roles" },
          { text: "Activity Logs", link: "/admin/activity-logs" },
          { text: "System Health", link: "/admin/health" },
        ],
      },
      {
        text: "Settings & Configuration",
        items: [
          { text: "General Settings", link: "/settings/general" },
          { text: "Environment Configuration", link: "/settings/environment" },
          { text: "Backup Management", link: "/settings/backups" },
          { text: "Localization", link: "/settings/localization" },
          { text: "Log Viewer", link: "/settings/logs" },
        ],
      },
      {
        text: "Developer Resources",
        items: [{ text: "Database Schema", link: "/database-schema" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/masrur447",
      },
    ],

    footer: {
      message: "Built with FilamentPHP v3 and Laravel 12",
      copyright: "Copyright © 2025 Student Management System",
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/masrur447/school-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
