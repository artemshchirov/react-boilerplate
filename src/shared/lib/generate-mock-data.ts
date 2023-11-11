export const fakeImages = [
  {
    id: 1,
    url: "https://ik.imagekit.io/webbuilder/dropzone/admin-ava_PQifMXGlX.jpg?updatedAt=1699190414427",
    width: 564,
    height: 564,
  },
  {
    id: 2,
    url: "https://ik.imagekit.io/webbuilder/dropzone/mary_gcZEDHFGZ.jpg?updatedAt=1699190299890",
    width: 563,
    height: 705,
  },
  {
    id: 3,
    url: "https://ik.imagekit.io/webbuilder/dropzone/rafael_Y5WFAtfKg.jpg?updatedAt=1699190299740",
    width: 236,
    height: 344,
  },
  {
    id: 4,
    url: "https://ik.imagekit.io/webbuilder/dropzone/jane_znSM60jNl.jpg?updatedAt=1699190264289",
    width: 564,
    height: 564,
  },
  {
    id: 5,
    url: "https://ik.imagekit.io/webbuilder/dropzone/admin-avatar_kHob9lNvk.jpg?updatedAt=1699190264361",
    width: 564,
    height: 705,
  },
  {
    id: 6,
    url: "https://ik.imagekit.io/webbuilder/dropzone/3840x2160%201.png?updatedAt=1699276569620",
    width: 3840,
    height: 2160,
  },
  {
    id: 7,
    url: "https://ik.imagekit.io/webbuilder/dropzone/tim-barton-gameofzonesartwork-forpublishing.jpg?updatedAt=1699276569169",
    width: 2560,
    height: 1440,
  },
  {
    id: 8,
    url: "https://ik.imagekit.io/webbuilder/dropzone/3840x2160.jpg?updatedAt=1699276569038",
    width: 3840,
    height: 2160,
  },
  {
    id: 9,
    url: "https://ik.imagekit.io/webbuilder/dropzone/tim-barton-amphitheatre-of-true-glory-by-cosmicspark-d9cx25z.jpg?updatedAt=1699276568965",
    width: 1650,
    height: 1750,
  },
  {
    id: 10,
    url: "https://ik.imagekit.io/webbuilder/dropzone/game_tiled.png?updatedAt=1699276619099",
    width: 468,
    height: 880,
  },
];

enum ProjectType {
  ShortFilm,
  FeatureFilm,
  Documentary,
  MusicVideo,
  Series,
}

enum Privacy {
  Public,
  Private,
  Unlisted,
}

enum StatusType {
  Active,
  Inactive,
  Deleted,
  Banned,
}

enum PlanType {
  Free,
  Pro,
  Max,
}

export interface User {
  id: number;
  username: string;
  name: string;
  role: string;
  isAvailableForHire: boolean;
  isVerified: boolean;
  avatarUrl: string;
  avatarBlurUrl: string;
  emailUpdates: boolean;
  projects?: Project[] | null;
  email: string;
  contactEmail?: string | null;
  bio?: string | null;
  location?: string | null;
  instagramUrl?: string | null;
  twitterUrl?: string | null;
  vimeoUrl?: string | null;
  imdbUrl?: string | null;
  websiteUrl?: string | null;
  facebookUrl?: string | null;
  isAvailable?: boolean | null;
  favoriteColor: string;
  status: StatusType;
  plan: PlanType | null;
  collections?: Collection[] | null;
  sessions?: Session[] | null; // NOTE: Do i need this here?
}

interface Session {
  id: number;
  createdAt: Date;
  deletedAt: Date | null;
  userId: number | null;
  user: User | null;
}

export interface Project {
  id: number;
  path: string;
  userId: number;
  owner?: User;
  title: string;
  director: string;
  description: string;
  cinematographer: string;
  colorist: string;
  productionDesigner?: string | null;
  projectType: ProjectType;
  privacy: Privacy;
  year: number;
  order: number;
  isVisible: boolean;
  camera?: string | null;
  videoUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
  thumbnail: Still;
  stills: Still[];
}

export interface Collection {
  id: number;
  userId: number;
  title: string;
  path: string;
  description: string;
  privacy: Privacy;
  order: number;
  isVisible: boolean;
  owner: User;
  collaborators: User[];
  thumbnail: Still;
  createdAt: Date;
  updatedAt: Date;
  stills: Still[];
}

export interface Still {
  id: number;
  projectId: number;
  name: string;
  order: number;
  blurUrl?: string;
  url: string;
  dominantColors: string[];
  colorTemperature: number | null;
  createdAt: Date;
  updatedAt: Date;
  width: number;
  height: number;
  dominantColor?: string;
  project?: Project;
  collections?: Collection[];
  tags?: string[];
}

const toKebabCase = (text: string): string => {
  const cleaned = text.replace(/[^a-z0-9-]/gi, "-");
  const kebabed = cleaned.replace(/[\s-]+/g, "-");
  return kebabed.toLowerCase();
};

const generateRandomName = (): string => {
  const names = ["Scene", "View", "Moment", "Memory", "Snapshot"];
  return (
    names[Math.floor(Math.random() * names.length)] +
    Math.floor(Math.random() * 100)
  );
};

const generateRandomColor = (): string => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33FF"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const generateRandomStill = (projectId: number, order: number): Still => {
  const randomImageNumber = Math.floor(Math.random() * fakeImages.length);
  return {
    id: Math.floor(Math.random() * 10000),
    projectId,
    name: generateRandomName(),
    order,
    width: fakeImages[randomImageNumber].width,
    height: fakeImages[randomImageNumber].height,
    url: fakeImages[randomImageNumber].url,
    dominantColors: new Array(3).fill(null).map(generateRandomColor),
    colorTemperature:
      Math.random() > 0.5 ? Math.floor(Math.random() * 10000) : null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const generateRandomProject = (userId: number, order: number): Project => {
  const stills: Still[] = [];
  const numberOfStills = Math.floor(Math.random() * 5) + 1;
  for (let i = 0; i < numberOfStills; i++) {
    stills.push(generateRandomStill(userId, i + 1));
  }
  const thumbnail: Still = getRandomFromArray(stills);
  const projectName = `Project ${Math.floor(Math.random() * 100)}`;
  return {
    id: Math.floor(Math.random() * 10000),
    path: toKebabCase(projectName),
    userId,
    title: projectName,
    director: `Director ${Math.floor(Math.random() * 100)}`,
    cinematographer: `Cinematographer ${Math.floor(Math.random() * 100)}`,
    colorist: `Colorist ${Math.floor(Math.random() * 100)}`,
    description:
      "Full description of project a lot of text for testing this description project field hello world!",
    productionDesigner:
      Math.random() > 0.5
        ? `Designer ${Math.floor(Math.random() * 100)}`
        : undefined,
    projectType: Math.floor(
      (Math.random() * Object.keys(ProjectType).length) / 2,
    ),
    privacy: Math.floor((Math.random() * Object.keys(Privacy).length) / 2),
    year: new Date().getFullYear() - Math.floor(Math.random() * 20),
    order,
    isVisible: Math.random() > 0.5,
    camera:
      Math.random() > 0.5
        ? `Camera ${Math.floor(Math.random() * 100)}`
        : undefined,
    videoUrl:
      Math.random() > 0.5
        ? `http://example.com/video/${Math.floor(Math.random() * 10000)}`
        : undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnail,
    stills,
  };
};

const roles = [
  "Director",
  "Cinematographer",
  "Editor",
  "Producer",
  "Screenwriter",
];

const plans = ["FREE", "PRO", "MAX"];
const statuses = ["ACTIVE", "INACTIVE", "DELETED", "BANNED"];

const getRandomFromArray = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

const generateRandomUser = (
  id: number,
  projects: Project[],
  collections: Collection[],
): User => {
  const avatarImage = getRandomFromArray(fakeImages).url;
  const getRandomBoolean = () => Math.random() > 0.5;
  return {
    id,
    username: `user-${id}`,
    name: `User ${id}`,
    location: getRandomBoolean() ? "Israel, Tel Aviv" : undefined,
    role: "User Role",
    isAvailableForHire: getRandomBoolean(),
    isVerified: getRandomBoolean(),
    avatarUrl: avatarImage,
    avatarBlurUrl: avatarImage,
    projects: getRandomBoolean() ? projects : undefined,
    collections: getRandomBoolean() ? collections : undefined,
    email: "email@example.com",
    favoriteColor: generateRandomColor(),
    plan: getRandomFromArray(plans),
    status: getRandomFromArray(statuses),
    emailUpdates: getRandomBoolean(),
    contactEmail: getRandomBoolean() ? "contact.email@example.com" : undefined,
    bio: getRandomBoolean() ? "This is a bio" : undefined,
    instagramUrl: getRandomBoolean() ? "https://instagram.com/user" : undefined,
    vimeoUrl: getRandomBoolean() ? "https://vimeo.com/user" : undefined,
    imdbUrl: getRandomBoolean()
      ? "https://www.imdb.com/name/nm0000000"
      : undefined,
    facebookUrl: getRandomBoolean() ? "https://facebook.com/user" : undefined,
    twitterUrl: getRandomBoolean() ? "https://twitter.com/user" : undefined,
    websiteUrl: getRandomBoolean() ? "https://website.com" : undefined,
  };
};

const generateRandomCollection = (
  userId: number,
  order: number,
): Collection => {
  const title = `Collection ${Math.floor(Math.random() * 100)}`;
  const stills: Still[] = [];
  const numberOfStills = Math.floor(Math.random() * 5) + 1;
  for (let i = 0; i < numberOfStills; i++) {
    stills.push(generateRandomStill(userId, i + 1));
  }
  const thumbnail: Still = getRandomFromArray(stills);
  const { users: fakeCollaborators } = generateData(4, 0, 0);

  return {
    id: Math.floor(Math.random() * 10000),
    userId,
    title,
    path: toKebabCase(title),
    description: `Description for ${title}`,
    privacy: Math.floor((Math.random() * Object.keys(Privacy).length) / 2),
    order,
    isVisible: Math.random() > 0.5,
    owner: generateRandomUser(userId, [], []),
    collaborators: fakeCollaborators,
    thumbnail,
    createdAt: new Date(),
    updatedAt: new Date(),
    stills,
  };
};

export const generateData = (
  userCount: number,
  projectsPerUser: number,
  collectionsPerUser: number,
): { users: User[]; projects: Project[]; collections: Collection[] } => {
  const users: User[] = [];
  const projects: Project[] = [];
  const collections: Collection[] = [];

  for (let i = 0; i < userCount; i++) {
    const userProjects: Project[] = [];
    for (let j = 0; j < projectsPerUser; j++) {
      const project = generateRandomProject(i + 1, j);
      userProjects.push(project);
      projects.push(project);
    }

    const userCollections: Collection[] = [];
    for (let j = 0; j < collectionsPerUser; j++) {
      const collection = generateRandomCollection(i + 1, j);
      userCollections.push(collection);
      collections.push(collection);
    }

    users.push(generateRandomUser(i + 1, userProjects, userCollections));
  }

  return { users, projects, collections };
};
