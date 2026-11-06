# Jungle W11-W12 : Mini React

## 개발 환경

### 요구 사항
- Node.js LTS (확인: `node -v`)
- Git

### 시작하기
```bash
git clone <https://github.com/DavinAn6/jungle-w11w12-react.git>
cd <jungle-w11w12-react>
npm install
npm run dev     # http://localhost:5173
```

### 스크립트
| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 타입 검사 후 빌드 |
| `npm test` | 테스트 실행 (watch) |
| `npm run test:run` | 테스트 1회 실행 |
| `npm run typecheck` | TypeScript 타입 검사 |
| `npm run lint` | Biome 린트 |
| `npm run format` | Biome 서식 정리 |
| `npm run check` | 타입 검사 + Biome 검사 + 테스트 (push 전 필수) |

### 기술 스택
TypeScript, Vite, Vitest(jsdom), Biome. 외부 UI 프레임워크는 사용하지 않음.

### 코드 컨벤션
스페이스 2칸, 큰따옴표, 세미콜론. 서식은 Biome가 관리하며 `npx biome check --write .`로 자동 정리함.

### 폴더 구조
```
src/        vdom, diff, patch, history, component, main.ts
tests/      단위 테스트, 기능 테스트
pages/      검증 페이지 (Phase 1), 데모 페이지 (Phase 2)
```
