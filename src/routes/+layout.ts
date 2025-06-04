// src/routes/+layout.ts
// See: https://v2.tauri.app/start/frontend/sveltekit/ for more info
// 이 페이지를 빌드 시점에 미리 정적 HTML 파일로 생성하도록 SvelteKit에 지시합니다.
// 이렇게 하면 초기 로드 성능이 향상되고 SEO에 유리하며, 정적 호스팅 환경에 배포할 수 있습니다.
// 이 페이지의 내용은 사용자 요청마다 동적으로 변경될 필요가 없을 때 주로 사용됩니다.
export const prerender = true;
// 이 페이지에 대해 서버 사이드 렌더링(SSR)을 비활성화합니다.
// true로 설정하면 요청 시 서버에서 페이지를 렌더링하여 HTML을 클라이언트에 보냅니다.
// false로 설정하면 클라이언트 사이드 렌더링(CSR)만 사용되며, 브라우저가 JavaScript를 실행하여 페이지를 구성합니다.
// prerender = true와 함께 사용될 경우, 빌드 시점에 생성된 정적 HTML이 제공된 후 클라이언트에서 앱이 동작합니다.
// 이는 일반적으로 완전한 정적 사이트(Static Site Generation, SSG)를 만들 때 사용되는 조합입니다.
export const ssr = false;
