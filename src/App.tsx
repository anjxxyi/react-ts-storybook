import "./App.css";
import { TagList, LoginForm } from "./components";

function App() {
  return (
    <>
      <div className="mb-20">
        <h1 className="font-bold text-2xl mb-5">🏷️ TagList</h1>
        <div className=" bg-primary bg-opacity-25 px-10 py-5">
          <TagList
            tagList={["All", "React", "TypeScript"]}
            onTagClick={console.log}
          />
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-5">🔐 LoginForm</h1>
      <div className="p-10 border border-solid border-mono300 bg-white rounded-button-default">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
