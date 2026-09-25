import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Home, Building2, HelpCircle, FileText } from 'lucide-react';

export default function YunaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeTopic, setIframeTopic] = useState(null);

  const openTopic = (topic) => {
    setIframeTopic(topic);
  };

  const resetChat = () => {
    setIframeTopic(null);
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <button
        id="yuna-bubble"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Yuna Assistant"
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-gradient-to-tr from-pink-400 to-rose-300 text-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all z-50 text-2xl border-2 border-white/50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Yuna Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 md:w-96 h-[480px] bg-card text-card-foreground rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-sm">
                🌸
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight">Yuna – Assistant</h3>
                <p className="text-xs text-white/80">Online & Ready to Help</p>
              </div>
            </div>
            {iframeTopic ? (
              <button
                type="button"
                onClick={resetChat}
                className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors"
              >
                Topics
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Body */}
          <div className="flex-1 bg-background overflow-hidden relative">
            {iframeTopic ? (
              <iframe
                src={`https://chat.openai.com/g/g-6920b2ac44388191a1a7a4d20f8ee3ee-yuna?topic=${iframeTopic}`}
                className="w-full h-full border-0"
                title="Yuna AI Chat"
              />
            ) : (
              <div className="p-4 flex flex-col h-full justify-between bg-muted/20">
                <div>
                  <div className="bg-muted p-3.5 rounded-2xl rounded-tl-sm text-sm text-foreground/90 mb-4 shadow-sm border border-border/40">
                    <p className="font-medium mb-1 flex items-center gap-1.5 text-primary">
                      <Sparkles className="w-4 h-4" /> Hi! I&apos;m Yuna.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      How can I help you with student accommodation today? Pick an option below to get started:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      onClick={() => openTopic('hostels')}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border/60 hover:border-primary hover:bg-primary/5 text-left text-sm transition-all shadow-xs"
                    >
                      <Home className="w-4 h-4 text-pink-500" />
                      <span className="font-medium">🏠 Find Hostels near Campus</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openTopic('pgs')}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border/60 hover:border-primary hover:bg-primary/5 text-left text-sm transition-all shadow-xs"
                    >
                      <Building2 className="w-4 h-4 text-purple-500" />
                      <span className="font-medium">🛏️ Find Verified PGs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openTopic('flats')}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border/60 hover:border-primary hover:bg-primary/5 text-left text-sm transition-all shadow-xs"
                    >
                      <Building2 className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium">🏡 Find Shared Flats</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openTopic('rent')}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border/60 hover:border-primary hover:bg-primary/5 text-left text-sm transition-all shadow-xs"
                    >
                      <HelpCircle className="w-4 h-4 text-amber-500" />
                      <span className="font-medium">💬 Inquire About Pricing & Rent</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openTopic('process')}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card border border-border/60 hover:border-primary hover:bg-primary/5 text-left text-sm transition-all shadow-xs"
                    >
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">📄 How Nivora Works</span>
                    </button>
                  </div>
                </div>

                <div className="text-center text-[11px] text-muted-foreground pt-2">
                  Powered by Nivora AI
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
