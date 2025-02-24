// images.js - Organizing Images for Next.js
import kitchen1 from "@/images/Projects/Kitchen/D 175 KITCHEN VIEW 1.jpg";
import kitchen2 from "@/images/Projects/Kitchen/D 175 KITCHEN VIEW 1.jpg";
import kitchen3 from "@/images/Projects/Kitchen/D 175 KITCHEN VIEW 3.jpg";
import kitchen4 from "@/images/Projects/Kitchen/kitchen_3.jpg";

import bedroom1 from "@/images/Projects/Bed Rooms/FRONT_BEDROOM _VIEW_3.jpg";
import bedroom2 from "@/images/Projects/Bed Rooms/I 103 REAR LEFT BEDROOM VIEW 3.jpg";
import bedroom3 from "@/images/Projects/Bed Rooms/REAR_RIGHT_BEDROOM_VIEW_2.jpg";
import bedroom4 from "@/images/Projects/Bed Rooms/D 175 FRONT BEDROOM  VIEW 1.jpg";
import bedroom5 from "@/images/Projects/Bed Rooms/D 175 FRONT BEDROOM  VIEW 2.jpg";
import bedroom6 from "@/images/Projects/Bed Rooms/D 175 REAR RIGHT BEDROOM VIEW 1.jpg";
import bedroom7 from "@/images/Projects/Bed Rooms/I 103 REAR LEFT BEDROOM OPT 1.jpg";

import drawing1 from "@/images/Projects/Drawing/D 175 DRAWING AND DINNING VIEW 1 OPT 1.jpg";
import drawing2 from "@/images/Projects/Drawing/I 103 DRAWING  VIEW 1.jpg";
import drawing3 from "@/images/Projects/Drawing/drawing_3.jpg";
import drawing4 from "@/images/Projects/Drawing/I 103 DRAWING  VIEW 2.jpg";
import drawing5 from "@/images/Projects/Drawing/I 103 DRAWING  VIEW 3.jpg";
import drawing6 from "@/images/Projects/Drawing/D 175 DRAWING AND DINNING VIEW 2 OPT 1.jpg";

import elevation1 from "@/images/Projects/Elevation/3D FINAL VIEW.jpg";
import elevation2 from "@/images/Projects/Elevation/FINAL 3D VIEW.jpg";
import elevation3 from "@/images/Projects/Elevation/FINAL 3D VIEW.jpg";

import lobby1 from "@/images/Projects/Lobby/D 175 DINNING VIEW 1 OPT 2.jpg";
import lobby2 from "@/images/Projects/Lobby/D 175 DINNING VIEW 2 OPT 2.jpg";
import lobby3 from "@/images/Projects/Lobby/I 103 DINNING  VIEW 1.jpg";
import lobby4 from "@/images/Projects/Lobby/I 103 DINNING  VIEW 2.jpg";
import lobby5 from "@/images/Projects/Lobby/lobby.jpg";

import stilt_1_image from "@/images/Projects/Stilt/D 175 STILT VIEW 1.jpg";
import stilt_2_image from "@/images/Projects/Stilt/D-42 STILT VIEW 1.jpg";
import stilt_3_image from "@/images/Projects/Stilt/D-42 STILT VIEW 1222.jpg";

import washroom1 from "@/images/Projects/Washroom/D-175 CENTRAL PARK TOILET REAR RIGHT  VIEW 1.jpg";
import washroom2 from "@/images/Projects/Washroom/I-103 REAR RIGHT TOILET VIEW 1.jpg";
import washroom3 from "@/images/Projects/Washroom/I-103 REAR RIGHT TOILET VIEW 2.jpg";
import washroom4 from "@/images/Projects/Washroom/D- 42 RER RIGHT TOILET.jpg";
import washroom5 from "@/images/Projects/Washroom/I - 103 REAR LEFT TOILET VIEW 1.jpg";
import washroom6 from "@/images/Projects/Washroom/I - 103 REAR LEFT TOILET VIEW 2.jpg";
import washroom7 from "@/images/Projects/Washroom/D-175 CENTRAL PARK TOILET REAR RIGHT  VIEW 2.jpg";
import washroom8 from "@/images/Projects/Washroom/D 175 FRONT TOILET VIEW.jpeg";

export const carouselItem = [
  { key: "kitchen", value: kitchen3, altText: "vedam homes kitchen" },
  { key: "elevation", value: elevation1, altText: "vedam homes elevation" },
  { key: "stilt", value: stilt_1_image, altText: "vedam homes stilt" },
  { key: "lobby", value: lobby5, altText: "vedam homes lobby" },
  { key: "drawing", value: drawing1, altText: "vedam homes drawing" },
  { key: "bedroom", value: bedroom1, altText: "vedam homes bedroom" },
  { key: "washroom", value: washroom1, altText: "vedam homes washroom" },
];

const IMAGE_DATA = {
  ELEVATION: {
    name: "ELEVATION",
    value: [elevation1, elevation2, elevation3],
  },
  STILT: {
    name: "STILT",
    value: [stilt_1_image, stilt_2_image, stilt_3_image],
  },
  LOBBY: {
    name: "DINING LOBBY",
    value: [lobby1, lobby2, lobby3, lobby4, lobby5],
  },
  DRAWING: {
    name: "LIVING ROOM",
    value: [drawing1, drawing2, drawing3, drawing4, drawing5, drawing6],
  },
  KITCHEN: {
    name: "KITCHEN",
    value: [kitchen1, kitchen2, kitchen3, kitchen4],
  },
  BEDROOM: {
    name: "BEDROOM",
    value: [
      bedroom1,
      bedroom2,
      bedroom3,
      bedroom4,
      bedroom5,
      bedroom6,
      bedroom7,
    ],
  },
  WASHROOM: {
    name: "WASHROOM",
    value: [
      washroom1,
      washroom2,
      washroom3,
      washroom4,
      washroom5,
      washroom6,
      washroom7,
      washroom8,
    ],
  },
};

export default IMAGE_DATA;

// LOBBY => DINING LOBBY
// Drawing => LIVING ROOM
