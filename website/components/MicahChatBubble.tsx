"use client";

import { useState } from "react";
import { tj4bParkTemplate } from "@/lib/tj4b-park";

export function MicahChatBubble() {
  const [open, setOpen] = useState(false);
  const { micah } = tj4bParkTemplate;

  return (
    <div className="fixed bottom-20 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          className="w-[min(100vw-2rem,340px)] overflow-hidden rounded-2xl border border-tan/30 bg-white shadow-2xl shadow-charcoal/20"
          role="dialog"
          aria-label="Chat with Micah"
        >
          <div className="flex items-center gap-3 bg-forest px-4 py-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-charcoal">
              M
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-bold">Micah</p>
              <p className="text-xs text-tan-light/90">{micah.bubble.status}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-white/10"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3 p-4">
            <div className="rounded-2xl rounded-bl-md bg-cream px-3 py-2.5 text-sm leading-relaxed text-charcoal/85">
              {micah.bubble.greeting}
            </div>
            <p className="text-center text-xs text-charcoal/50">
              {micah.bubble.footer}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={micah.bubble.primaryCta.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gold py-2.5 text-center text-sm font-bold text-charcoal hover:bg-gold-light"
              >
                {micah.bubble.primaryCta.label}
              </a>
              <a
                href={micah.bubble.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] py-2.5 text-center text-sm font-bold text-white hover:bg-[#1fb855]"
              >
                {micah.bubble.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-lg shadow-forest/40 ring-4 ring-gold/30 transition-transform hover:scale-105 active:scale-95"
        aria-expanded={open}
        aria-label={open ? "Close Micah chat" : "Open chat with Micah"}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-extrabold text-charcoal">
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
}
