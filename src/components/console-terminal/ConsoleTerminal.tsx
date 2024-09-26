import React, { useEffect, useState } from "react";
import './ConsoleTerminal.css'; // Assuming you use a separate CSS file for styling

const ConsoleTerminal = () => {
  const commands = [
    "Welcome to Hynfratech",
    "Sign in...",
    "Create VM ...",
    ">Creating ... ",
    ">Installing packages ..",
    "Host Service",
    "> Server started on port 433",
  ];

  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    if (currentLine < commands.length) {
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex < commands[currentLine].length) {
          setTypedText((prev) => prev + commands[currentLine].charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
            setTypedText("");
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-gray-900 flex items-start justify-start h-full">
      <div className="w-full pl-2 mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
        <div className="text-green-400 rounded-md  overflow-hidden relative">
          {/* Background image for console (optional) */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat opacity-10"
            ></div>

          {/* Display command lines */}
          <div>
          {commands.slice(0, currentLine).map((command, index) => (
              <div key={index} className="py-1">
                <span className="text-yellow-400">root@hynfra:~$ </span>
                <span>{command}</span>
              </div>
            ))}
            <div className="inline-block">
              <span className="text-yellow-400">root@hynfra:~$ </span>
              {typedText}
              <span className={`cursor ${isBlinking ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </div>
            
                      </div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleTerminal;
