import Label from "./Label";
import DefaultTextField from "./DefaultTextField";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="mb-4">
        <Label htmlFor={email}>이메일</Label>
        <DefaultTextField
          id="email"
          type="email"
          errorMessage="이메일을 확인해 주세요."
          iconPath="/icons/ic-delete-dark.svg"
          iconAlt="삭제"
          placeholder="이메일을 입력해 주세요."
          value={email}
          isError={false}
          onIconClick={() => setEmail("")}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <Label htmlFor={password}>비밀번호</Label>
        <DefaultTextField
          id="password"
          type="password"
          errorMessage="비밀번호를 확인해 주세요."
          iconPath="/icons/ic-delete-dark.svg"
          iconAlt="삭제"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          isError={false}
          onIconClick={() => setPassword("")}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <PrimaryButton
        theme="dark"
        disabled={!email || !password}
        onClick={() => {}}
      >
        로그인
      </PrimaryButton>
    </div>
  );
}
