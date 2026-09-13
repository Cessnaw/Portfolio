export type Field = { key: string; value: string };

export type Job = {
  role: string;
  org: string;
  period: string;
  fields: Field[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer IV",
    org: "Advanced World Solutions",
    period: "2025 – Present",
    fields: [
      {
        key: "focus",
        value:
          "End-to-end feature development using C++ and backend programming principles, from requirements analysis through testing and deployment",
      },
      {
        key: "details",
        value:
          "Designs system architectures and program flows for scalability and maintainability; conducts code reviews and mentors junior engineers; works across teams to manage technical risks, priorities, and delivery timelines; maintains documentation, traceability, and configuration control across releases.",
      },
      { key: "stack", value: "C++, HTML, JavaScript, jQuery, Java, Python, SQL" },
    ],
  },
  {
    role: "Software Engineer II",
    org: "KYOCERA Document Solutions",
    period: "2023 – 2025",
    fields: [
      {
        key: "focus",
        value:
          "Assistant head developer for MFP simulation frameworks used to emulate real device behavior",
      },
      {
        key: "details",
        value:
          "Designed and enhanced C# simulation modules replicating printer workflows, states, and responses; created architecture diagrams and flowcharts for developer and client use; debugged firmware-related behaviors through simulator testing, defect isolation, and regression validation. Led design and implementation of control and processing modules for an intelligent image-forming system (document type identification, paper selection), contributing to Japanese patent JP2024147345A, \"Image Forming Apparatus.\"",
      },
      { key: "stack", value: "C, C++, Python, HTML5, Knockout JS, C#" },
    ],
  },
  {
    role: "Software Engineer I",
    org: "KYOCERA Document Solutions",
    period: "2022 – 2023",
    fields: [
      {
        key: "focus",
        value:
          "Supported development of printer simulation tools using C and C++ backend components",
      },
      {
        key: "details",
        value:
          "Assisted in system validation, bug fixing, and regression testing cycles; updated technical documentation and flow models to reflect system changes.",
      },
      { key: "stack", value: "C, C++, HTML5, Knockout JS" },
    ],
  },
  {
    role: "Junior Salesforce Admin / Developer Intern",
    org: "Accenture",
    period: "2022",
    fields: [
      {
        key: "focus",
        value: "Apex programming, backend data management, system configuration, reporting",
      },
      {
        key: "details",
        value:
          "Configured enterprise systems and backend data structures; managed workflows, roles, access control, and reporting dashboards.",
      },
      { key: "stack", value: "Apex, SQL" },
    ],
  },
];

export type Project = {
  title: string;
  link: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "TASKalfa Pro 15000C — Fiery SNMP Integration",
    link: "https://www.fiery.com/products/fiery-servers-and-software/fiery-digital-print-servers/partners/kyocera/color/kyocera-taskalfa-pro-15000c/#resources",
    description:
      "Developed the SNMP communication layer for the Kyocera TASKalfa Pro 15000C toward the Fiery digital print server application.",
    stack: ["C", "C++", "SNMP"],
  },
  {
    title: "Kyocera Cloud Print and Scan",
    link: "https://www.kyoceradocumentsolutions.com/asia/en/products/business-application/cloud-print-and-scan/features.html",
    description:
      "Helped spearhead this feature with my senior across the scan, print, and job teams organization-wide. Owned testing, reporting, and compilation of fixes and implementation on the service side.",
    stack: ["Backend Systems", "Testing", "Cross-team Coordination"],
  },
  {
    title: "In-House Printer Simulator",
    link: "#",
    description:
      "Maintained Kyocera's in-house printer simulator — a Windows app built in C# and run on CentOS/Fedora/Rocky Linux — used to debug printer functions without physical hardware. Delivered quarterly releases for bug fixes and enhancements.",
    stack: ["C#", "Linux (CentOS/Fedora/Rocky)", "Debugging"],
  },
  {
    title: "PSTI-Compliant Web UI",
    link: "https://www.kyoceradocumentsolutions.co.uk/en/support/product-security.html",
    description:
      "Helped implement a PSTI-compliant web UI application for both new and legacy Kyocera printers.",
    stack: ["C", "C++", "Web UI", "Security"],
  },
  {
    title: "Sharp Web UI — Security Profiles",
    link: "https://global.sharp/restricted/print/manuals/2/bp71c65/us/contents_09-07_019.html",
    description:
      "Implemented Security Profiles in the Sharp MFP web UI.",
    stack: ["C", "C++", "Embedded Web UI"],
  },
  {
    title: "Sharp Certificate Management — SCEP Auto-Enrollment",
    link: "https://global.sharp/restricted/print/manuals/2/bp71c65/us/contents_09-07_019.html",
    description:
      "Implemented Certificate Management (Administration Settings → Request Enrollment page) for automatic certificate renewal via SCEP.",
    stack: ["C", "C++", "SCEP", "Certificate Management"],
  },
];

export const skills: string[] = [
  "C",
  "C++",
  "Java",
  "Python",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Knockout JS",
  "C#",
  "Kotlin",
  "Apex",
  "SNMP",
  "SCEP",
  "SVN / Git",
  "Agile",
  "Japanese → English Translation",
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export const certifications: Certification[] = [];

export type SidebarLink = {
  label: string;
  href: string;
};

export const sidebarLinks: SidebarLink[] = [
  { label: "GitHub", href: "https://github.com/Cessnaw" },
  { label: "LinkedIn", href: "https://linkedin.com/in/cessnaw" },
  { label: "Trailblazer", href: "https://salesforce.com/trailblazer/cessnaw" },
  { label: "Email", href: "mailto:cessnawesleybelarmino@gmail.com" },
];