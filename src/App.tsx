import { useState } from "react";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
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
      <button className="mt-6 font-semibold" onClick={() => setIsError((prev) => !prev)}>
        Error Toggle Button
      </button>
    </>
  );
}

export default App;
