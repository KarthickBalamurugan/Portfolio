export interface Achievement {
  title: string;
  event: string;
  position: string;
  organization: string;
}

export const achievements: Achievement[] = [
  {
    title: "Hackathon Excellence",
    event: "Envision Hackathon",
    position: "Runner Up",
    organization: "Envision"
  },
  {
    title: "Best Project Award",
    event: "Technical Project Competition",
    position: "Winner",
    organization: "IETE"
  },
  {
    title: "Paper Presentation",
    event: "Technical Symposium",
    position: "First Place",
    organization: "SVCE"
  },
  {
    title: "INVENTE Symposium",
    event: "National Level Technical Symposium",
    position: "Runner Up",
    organization: "SSN"
  }
];
