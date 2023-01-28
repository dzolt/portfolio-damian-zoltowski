interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: SanityImage;
  dateEnded: string;
  dateStarted: string;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
  isCurrentlyWorkingHere: boolean;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  heroImage: SanityImage;
  name: string;
  phoneNumber: string;
  profilePic: SanityImage;
  role: string;
}

export interface Project extends SanityBody {
  _type: "project";
  image: SanityImage;
  linkToBuild: string;
  summary: string;
  technologies: Skill[];
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: SanityImage;
  title: string;
  url: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Resume {
  _id: string;
  url: string;
}
