"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { messageData, MessageOverview } from "@/app/bedrift/dashboard/data";
import { cn } from "@/lib/cn";

export const MessageComponent = ({ m }: { m: MessageOverview }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollableContainerRef.current?.scrollTo({
      top: bottomRef.current?.offsetTop,
      behavior: "smooth",
    });
  };
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(m.messages);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    if (!text.trim()) {
      return;
    }
    setMessages([
      ...messages,
      {
        content: text,
        sentAt: new Date(),
        sender: "Liraly me",
      },
    ]);
    setText("");
    scrollToBottom();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="m-4 flex flex-col gap-2 rounded-lg bg-offwhite p-10">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">{m.id}</p>
        <Link href="/bedrift/dashboard">Tilbake</Link>
      </div>

      <hr className="my-2" />
      <div className="flex h-[500px] flex-col overflow-y-scroll" ref={scrollableContainerRef}>
        <div className="mt-auto" />
        {messages.map((message, i) => {
          return (
            <div key={`${message.content}${message.sentAt}`}>
              <p
                className={cn("w-fit rounded-lg border p-2", {
                  "mr-auto": message.sender === m.id,
                  "ml-auto bg-blue-500 text-white": message.sender !== m.id,
                })}
              >
                {message.content}
              </p>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
      <div className="flex w-full items-center rounded-lg border bg-white p-2">
        <textarea
          className="w-full resize-none p-2 text-lg outline-0"
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleTextChange}
        />
        <div className="p-3">
          <button
            className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-300"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
