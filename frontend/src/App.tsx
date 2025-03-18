
// // import AddTodo from "./components/AddTodo";
// // import { Todo } from "./components/Model";
// // import { useState } from "react";
// // import TodoItems from "./components/TodoItems";

// import TelegramLogin from "./components/TelegramLogin";


// function App() {
//   // const [Todos, setTodos] = useState<Todo[]>([]);
//   // const [coins, setCoins] = useState<number>(0);

//   return (
//     // <div className="bg-gradient-to-r from-green-400 to-lime-300 min-h-screen flex flex-col items-center py-10 relative">
      
//     //   {/* Header Section */}
//     //   <div className="w-full flex justify-between items-center px-10 absolute top-5">
//     //     {/* App Title */}
//     //     <h1 className="text-white text-3xl font-bold">Taskify 😊</h1>

//     //     {/* Coin Display (Moved to top-right) */}
//     //     <h2 className="text-white text-xl font-semibold flex items-center gap-2">
//     //       Coins: {coins} 🪙
//     //     </h2>
//     //   </div>

//     //   <div className="mt-16 w-full flex flex-col items-center">
//     //     <AddTodo setTodos={setTodos} Todos={Todos} />
//     //     <TodoItems Todos={Todos} setTodos={setTodos} coins={coins} setCoins={setCoins} />
//     //   </div>
//     // </div>
//     <TelegramLogin />
//   );
// }

// export default App;

import { LoginButton } from "@telegram-auth/react";

function App() {
  const handleAuth = async (data: any) => {
    console.log("Telegram Auth Data:", data);

    try {
      const response = await fetch("https://telegram-auth-lilac.vercel.app/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error sending auth data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Login with Telegram</h2>
      <LoginButton
        botUsername="rakhi369_bot" // Replace with your bot username
        onAuthCallback={handleAuth}
        buttonSize="large"
        cornerRadius={5}
        showAvatar={true}
        lang="en"
      />
    </div>
  );
}

export default App;
