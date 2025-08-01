import {Header} from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"
import { Taskcard } from "./components/Taskcard"
import { Taskinput } from "./components/Taskinput"
import type { TaskCardProps } from "./libs/types";


function App() {
  const Taskcards : TaskCardProps[] = [
    {id: 1,title: "Read a book",description: "vite + React + Bootstarp + TS",isDone: false},
    {id: 2,title: "Write code",description: "Finish project for class",isDone: false},
    {id: 3,title: "Deploy app",description: "Push project to GitHub Pages",isDone: false},
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>
      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="tachit" type= "student"></Sidebar>

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <div className="m-2 p-2">
              <Taskinput></Taskinput>
            </div>
            {/* Card รายการ */}
              <Taskcard {...Taskcards[0]}></Taskcard>
              <Taskcard {...Taskcards[1]}></Taskcard>
              <Taskcard {...Taskcards[2]}></Taskcard>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year= "2026" fullName="Tachit Thungcharoenkul" studentId="670610354" ></Footer>
    </div>
  );
}

export default App;
