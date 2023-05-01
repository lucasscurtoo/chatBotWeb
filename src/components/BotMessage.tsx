import { Typewriter } from "react-simple-typewriter"
import { isEmpty } from "lodash"
import React, { useState } from "react"
import { BoltIcon } from "@heroicons/react/24/solid"
import { CopyBlock, atomOneDark } from "react-code-blocks"

interface BotMessageProps {
  botMessage: string
}

const BotMessage: React.FC<BotMessageProps> = ({ botMessage }) => {
  const [showCursor, setShowCursor] = useState(true)
  if (isEmpty(botMessage)) {
    return null
  }

  const codeRegex = /(```[\s\S]*?```)/
  const segments = botMessage.split(codeRegex)

  return (
    <div className="w-full shadow-sm p-5 text-lg px-5 break-words bg-white rounded-md max-w-4xl">
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <div className="bg-blue-200 rounded-full p-2 self-start">
          <BoltIcon className="w-10 text-blue-500" />
        </div>
        <div className="w-full overflow-scroll">
          {segments.map((segment, index) => {
            if (segment.startsWith("```")) {
              const codeContent = segment.slice(3, -3)
              return (
                <CopyBlock
                  key={index}
                  language="javascript"
                  theme={atomOneDark}
                  text={codeContent}
                />
              )
            } else {
              return (
                <div key={index} className="my-4 text-black font-medium">
                  <Typewriter
                    key={index}
                    onLoopDone={() => setShowCursor(false)}
                    cursor={showCursor}
                    cursorStyle="_"
                    typeSpeed={40}
                    words={[segment.trim()]}
                  />
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
export default BotMessage

// import { Cursor, Typewriter } from 'react-simple-typewriter';
// import { isEmpty } from 'lodash';
// import React, { useState } from 'react';
// import { BoltIcon } from '@heroicons/react/24/solid';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// interface BotMessageProps {
//   botMessage: string;
// }

// const BotMessage: React.FC<BotMessageProps> = ({ botMessage }) => {
//   const [isTyping, setIsTyping] = useState(true);

//   const codeRegex = /```([\s\S]*?)```/;
//   const codeMatch = botMessage.match(codeRegex);
//   const codeContent = codeMatch ? codeMatch[1] : '';

//   const textContent = botMessage.replace(codeRegex, '').trim();

//   return (
//     <div className="flex items-center">
//       <BoltIcon className="h-6 w-6 text-blue-500" />
//       <div className="ml-2">
//         {codeContent ? (
//           <SyntaxHighlighter language="javascript" style={docco}>
//             {codeContent}
//           </SyntaxHighlighter>
//         ) : (
//           <Typewriter
//             onLoopDone={() => setIsTyping(false)}
//             loop
//             cursor={<Cursor />}
//             cursorStyle="_"
//             typeSpeed={80}
//             deleteSpeed={50}
//             delaySpeed={1000}
//             words={[textContent]}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default BotMessage;

// const codeRegex = /```([\s\S]*?)```/
// const codeMatch = botMessage.match(codeRegex)
// const codeContent = codeMatch ? codeMatch[1] : ""

// const textContent = botMessage.replace(codeRegex, "").trim()

// return (
//   <div className="flex items-center">
//     <BoltIcon className="h-6 w-6 text-blue-500" />
//     <div className="ml-2">
//       <Typewriter
//         onLoopDone={() => setShowCursor(false)}
//         typeSpeed={80}
//         words={[textContent]}
//       />
//       {codeContent && (
//         <SyntaxHighlighter language="javascript" style={docco} >
//           {codeContent}
//         </SyntaxHighlighter>
//       )}
//     </div>
//   </div>
// )
