export type Message = {
  sender: string;
  content: string;
  sentAt: Date;
};

export type MessageOverview = {
  id: string;
  name: string;
  imageURI: string;
  messages: Array<Message>;
};

export const messageData: Array<MessageOverview> = [
  {
    id: "helix",
    name: "Helix",
    imageURI: "/linjeforeninger/helix.png",
    messages: [
      {
        sender: "bekk",
        content: "Hei fra bekk!",
        sentAt: new Date(),
      }, 
      {
        sender: "bekk",
        content: "Hvordan går det?",
        sentAt: new Date(),
      },
      {
        sender: "helix",
        content: "Hei, det går bra!",
        sentAt: new Date(),
      }
    ],
  },
  {
    id: "echo",
    name: "echo",
    imageURI: "/linjeforeninger/echo.webp",
    messages: [
      {
        sender: "bekk",
        content: "Hello",
        sentAt: new Date(),
      },
    ],
  },
];
