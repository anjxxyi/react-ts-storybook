import { useState } from "react";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";
import PrimaryButton from "./components/PrimaryButton";
import TagList from "./components/TagList";

function App() {
  const [isError, setIsError] = useState(false);

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
      <div className="p-10 border border-solid border-mono300 bg-white rounded-primary-button">
        <h1 className="font-bold text-2xl mb-10">✏️ TextField</h1>
        <div className="mb-5">
          <Label htmlFor="email">이메일</Label>
          <DefaultTextField
            id="email"
            placeholder="이메일을 입력하세요."
            value=""
            errorMessage="이메일을 확인해 주세요."
            isError={isError}
            iconPath="/icons/ic-delete-dark.svg"
            iconAlt="delete"
            onChange={() => {}}
            onIconClick={() => {}}
          />
        </div>
        <div className="mb-5">
          <Label htmlFor="address">주소</Label>
          <DefaultTextField
            id="address"
            placeholder="주소를 입력하세요."
            value=""
            errorMessage="주소를 확인해 주세요."
            isError={isError}
            iconPath="/icons/ic-delete-dark.svg"
            iconAlt="delete"
            onChange={() => {}}
            onIconClick={() => {}}
          />
        </div>
        <div className="mt-5">
          <PrimaryButton
            children="Error Toggle Button"
            disabled={false}
            theme="dark"
            onClick={() => setIsError((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
