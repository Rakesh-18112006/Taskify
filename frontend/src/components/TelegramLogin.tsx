import React, { useEffect } from "react";

const TelegramLogin: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("telegram-login-container");

    if (container) {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-widget.js?7";
      script.async = true;
      script.setAttribute("data-telegram-login", "rakhi369_bot"); // Replace with your bot username
      script.setAttribute("data-size", "large");
      script.setAttribute("data-auth-url", "https://telegram-auth-3ldq499xw-rakesh-18112006s-projects.vercel.app/auth");
      script.setAttribute("data-request-access", "write");
      script.setAttribute("data-userpic", "true");
      script.setAttribute("data-radius", "10");

      container.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Login To Telegram</h2>
      <div id="telegram-login-container"></div>
    </div>
  );
};

export default TelegramLogin;
