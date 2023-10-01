import {
  AppWindowIcon,
  BriefcaseIcon,
  FileBadgeIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import avatarImage from "@/assets/images/avatar.jpeg";
import { StaticImageData } from "next/image";
import angryReactionImg from "@/assets/images/reactions/angry.png";
import sadReactionImg from "@/assets/images/reactions/sad.png";
import wowReactionImg from "@/assets/images/reactions/wow.png";
import hahaReactionImg from "@/assets/images/reactions/haha.png";
import careReactionImg from "@/assets/images/reactions/care.png";
import loveReactionImg from "@/assets/images/reactions/love.png";
import likeReactionImg from "@/assets/images/reactions/like.png";
import sdImg from "@/assets/images/schools/SD.png";
import tkImg from "@/assets/images/schools/TK.png";
import smpImg from "@/assets/images/schools/SMP.png";
import smaImg from "@/assets/images/schools/SMA.png";
import universityImg from "@/assets/images/schools/UNIVERSITY.png";

export const navigationList = [
  {
    name: "Developer Feeds",
    icon: LayoutDashboardIcon,
    href: "/",
  },
  {
    name: "Developer Showcase",
    icon: AppWindowIcon,
    href: "/showcase",
  },
  {
    name: "Developer Certification",
    icon: FileBadgeIcon,
    href: "/certification",
  },
  {
    name: "Developer Experience",
    icon: BriefcaseIcon,
    href: "/experience",
  },
  {
    name: "Developer Education",
    icon: GraduationCapIcon,
    href: "/education",
  },
].map((item, i) => {
  let temp = Object({ ...item });
  if (i !== 0 && i !== 4) {
    temp.href = "//";
  }
  return temp;
});

export type TFeedPost = {
  postId: number;
  user: {
    name: string;
    avatar: StaticImageData;
  };
  content: string;
  media: {
    type: string | "image" | "video";
    src: string;
    width?: number;
    height?: number;
  }[];
  likes: {
    id: number;
    reactionId: number;
  }[];
  createdAt: string;
  updatedAt: string;
};

export const feedPosts: TFeedPost[] = [
  {
    postId: 1,
    content: "Just tasting the coffee I've never tried at my favorite cafe",
    media: [
      {
        type: "image",
        src: "https://i.pinimg.com/564x/35/cd/21/35cd218bab9b3cd07468de889149397d.jpg",
        width: 160,
        height: 320,
      },
      {
        id: 2,
        type: "image",
        src: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 160,
        height: 320,
      },
      {
        id: 2,
        type: "image",
        src: "https://images.pexels.com/photos/2067399/pexels-photo-2067399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 160,
        height: 320,
      },
    ],
    likes: [
      {
        id: 1,
        reactionId: 1,
      },
      {
        id: 2,
        reactionId: 2,
      },
      {
        id: 3,
        reactionId: 2,
      },
      {
        id: 4,
        reactionId: 5,
      },
      {
        id: 5,
        reactionId: 5,
      },
    ],
    createdAt: "2023-09-21T13:55:51.366Z",
    updatedAt: "2023-09-21T13:55:51.366Z",
  },
  {
    postId: 2,
    content:
      "Hello guys, I'm Deri Kurniawan, a Full Stack Developer from Indonesia 🇮🇩",
    media: [],
    likes: [
      {
        id: 1,
        reactionId: 2,
      },
    ],
    createdAt: "2023-09-21T13:55:51.366Z",
    updatedAt: "2023-09-21T13:55:51.366Z",
  },
  {
    postId: 3,
    content:
      "I'm tired of being what you want me to be Feeling so faithless, lost under the surface Don't know what you're expecting of me Put under the pressure of walking in your shoes (Caught in the undertow, just caught in the undertow) Every step that I take is another mistake to you (Caught in the undertow, just caught in the undertow)",
    media: [
      {
        type: "image",
        src: "https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        width: 182.84,
        height: 320,
      },
    ],
    likes: [],
    createdAt: "2023-09-20T13:55:51.366Z",
    updatedAt: "2023-09-20T13:55:51.366Z",
  },
].map((post) => ({
  user: {
    name: "Deri Kurniawan",
    avatar: avatarImage,
  },
  ...post,
}));

export const gallery = [
  {
    id: 1,
    type: "image",
    src: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.pexels.com/photos/9443229/pexels-photo-9443229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.pexels.com/photos/2067399/pexels-photo-2067399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export type TReactionOption = {
  id: number;
  label: string;
  imageSrc: StaticImageData;
};

export const reactionOptions: TReactionOption[] = [
  {
    id: 1,
    label: "Like",
    imageSrc: likeReactionImg,
  },
  {
    id: 2,
    label: "Love",
    imageSrc: loveReactionImg,
  },
  {
    id: 3,
    label: "Care",
    imageSrc: careReactionImg,
  },
  {
    id: 4,
    label: "Haha",
    imageSrc: hahaReactionImg,
  },
  {
    id: 5,
    label: "Wow",
    imageSrc: wowReactionImg,
  },
  {
    id: 6,
    label: "Sad",
    imageSrc: sadReactionImg,
  },
  {
    id: 7,
    label: "Angry",
    imageSrc: angryReactionImg,
  },
].reverse();

export type TEducation = {
  id: string;
  title: string;
  logoSrc: StaticImageData;
  school: string;
  yearStart: number;
  yearEnd: number;
  imageSrc: string | StaticImageData | null;
};

export const educationList: TEducation[] = [
  {
    id: "university",
    title: "University/College (Bachelor's Degree in Computer)",
    school: "Universitas Muhammadiyah Sukabumi",
    logoSrc: universityImg,
    yearStart: 2019,
    yearEnd: 2023,
    imageSrc:
      "https://lh5.googleusercontent.com/p/AF1QipMYL15JIJURiK5OvN3dfn-9RPMl14W8Dikx2I81=s1316-k-no",
  },
  {
    id: "senior-high-school",
    title: "Senior High School (Science Major)",
    logoSrc: smaImg,
    school: "SMAN 4 Kota Sukabumi",
    yearStart: 2016,
    yearEnd: 2019,
    imageSrc: null,
  },
  {
    id: "junior-high-school",
    title: "Junior High School",
    logoSrc: smpImg,
    school: "SMPN 1 Cireunghas",
    yearStart: 2013,
    yearEnd: 2016,
    imageSrc: null,
  },
  {
    id: "elementary-school",
    title: "Elementary School",
    logoSrc: sdImg,
    school: "SDN 1 Cimapag",
    yearStart: 2007,
    yearEnd: 2013,
    imageSrc: null,
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    logoSrc: tkImg,
    school: "TK. Tunas Harapan",
    yearStart: 2006,
    yearEnd: 2007,
    imageSrc: null,
  },
];
