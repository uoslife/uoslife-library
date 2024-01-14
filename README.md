# Uoslife-library

- 시대생 프로덕트에서 공통적으로 사용하는 Design System, custom react hook, webview 등의 기능을 관리하는 라이브러리입니다.


## Stack

<div style="display: flex; flex-direction: row;">
  <img src="https://img.shields.io/badge/lerna-9333EA?style=for-the-badge&logo=lerna&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white">
</div>
<div style="display: flex; flex-direction: row;">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
</div>

## Installing Dependencies

```bash
$ pnpm install
```

## 소개

### Design-system
- 시대생팀에서 만드는 모든 서비스에서 사용자에게 일관된 경험을 제공하기 위해 만들어진 디자인 시스템을 제공합니다.

### React
- 시대생팀 프로덕트에서 자주 사용하는 유용한 hooks를 관리합니다.

### Webview
- Native와 Webview 서비스 간 정보 통신을 위한 Bridge 환경설정을 제공하는 라이브러리입니다.

## 배포 및 사용

### 배포 방법

1. 관련 이슈를 해당 repository에 등록합니다.
2. 해당 이슈명으로 branch를 생성한 다음 작업합니다.
3. (Design-system) 작업시 아래 명령어로 스토리북을 확인할 수 있습니다.

```bash
$ lerna run storybook --scope @uoslife/design-system
```

4. 작업이 완료되었다면 루트폴더에 아래 명령어를 진행합니다.

```bash
$ pnpm run publish
```

5. 패치 버전을 업데이트합니다. cli에서 선택할 수 있습니다.
6. 성공적으로 배포가 완료되었다면 PR을 올리고 review를 request합니다.
7. (Design-system) 리뷰 후 main에 merge하면 chromatic 배포 CI가 자동으로 진행됩니다.

- 배포 완료된 패키지는 [이 곳](https://github.com/orgs/uoslife/packages?repo_name=uoslife-library)에서 확인할 수 있습니다.

### 사용 방법

- [시대생 팀 노션 페이지](https://www.notion.so/Uoslife-library-b9d9a079c2dd4d5980fb561af8b3c7ac?pvs=4)에서 확인할 수 있습니다.
