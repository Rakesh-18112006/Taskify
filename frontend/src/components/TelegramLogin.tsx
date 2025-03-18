import React, { useEffect, useRef } from "react";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
    telegramAuth?: (user: TelegramUser) => void;
  }
}

const TelegramLogin: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-widget.js?7";
      script.async = true;
      script.setAttribute("data-telegram-login", "rakhi3690Bot"); // Replace with your bot username
      script.setAttribute("data-size", "large");
      script.setAttribute("data-auth-url", "https://9238-2409-40f0-3036-cf56-25d9-2fc3-ad5d-1519.ngrok-free.app/auth");
      script.setAttribute("data-request-access", "write");
      script.setAttribute("data-userpic", "true");
      script.setAttribute("data-radius", "10");
      script.setAttribute("data-onAuth", "telegramAuth");

      containerRef.current.appendChild(script);
    }

    // Define the global Telegram authentication function
    window.telegramAuth = (user: TelegramUser) => {
      console.log("Telegram Auth Data:", user);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Login To Telegram</h2>
      <div ref={containerRef} id="telegram-login-container"></div>
    </div>
  );
};

export default TelegramLogin;
