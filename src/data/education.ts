export type EducationItem = {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
  description?: string;
};

export const education: EducationItem[] = [
  {
    institution: "SLIIT — Faculty of Computing",
    degree: "BSc (Hons) in Information Technology",
    period: "2023 – 2027",
    location: "Colombo, Sri Lanka",
    description:
      "Undergraduate in Information Technology. Active member of the IT community through ITSC events, Career Day, and IEEE SLIIT programs focused on industry-relevant skills and professional growth.",
  },
  {
    institution: "St. Joseph's Girls' School, Nugegoda",
    degree: "Secondary Education",
    period: "2018 – 2020",
    location: "Nugegoda, Sri Lanka",
    description:
      "Completed secondary education before pursuing higher studies in Information Technology at SLIIT.",
  },
];
