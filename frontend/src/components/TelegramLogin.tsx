import React, { useEffect } from "react";

const TelegramLogin: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("telegram-login-container");

    if (container) {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-widget.js?7";
      script.async = true;
      script.setAttribute("data-telegram-login", "rakhi3690Bot"); // Replace with your bot name
      script.setAttribute("data-size", "large");
      script.setAttribute("data-auth-url", "https://eba5-2401-4900-4e1b-f97e-79af-72ac-3aa1-6ec2.ngrok-free.app/auth");
      script.setAttribute("data-request-access", "write");

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
