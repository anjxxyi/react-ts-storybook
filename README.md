# anjxxyi-react-ts-storybook

anjxxyi-react-ts-storybook is a comprehensive design system built with Tailwind CSS and Storybook, designed to empower developers and designers to build consistent and beautiful interfaces efficiently.

## Installation

Install anjxxyi-react-ts-storybook into your project with NPM:

```bash
npm install anjxxyi-react-ts-storybook
```

## Usage

After installation, you must import the main CSS file in your project to access the full range of styles provided by Tailwind CSS. Add the following line to the root of your project such as `App.tsx` or `main.tsx`:

```javascript
import "anjxxyi-react-ts-storybook/index.css";
```

And then you can import components from `anjxxyi-react-ts-storybook` directly like below

```typescript
import { DefaultTextField, PrimaryButton } from "anjxxyi-react-ts-storybook";

export default function LoginPage() {
  return (
    ...
      <DefaultTextField
        id="username"
        type="email"
        placeholder="이메일을 입력해 주세요."
        onChange={handleUsernameChange}
      />
      <DefaultTextField
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handlePasswordChange}
      />
      <PrimaryButton onClick={() => handleLogin(username, password)}>로그인</PrimaryButton>
    ...
  );
}
```

This ensures that all anjxxyi-react-ts-storybook components render with the intended design specifications.

## Components

anjxxyi-react-ts-storybook offers a wide range of components that are ready to use in your projects. To see the components available and learn how to use them, refer to the Storybook documentation provided with the package.

## Contributing

We welcome contributions to the anjxxyi-react-ts-storybook project! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

anjxxyi-react-ts-storybook is released under the MIT License. See the LICENSE file for more details.
