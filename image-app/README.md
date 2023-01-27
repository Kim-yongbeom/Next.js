## Next.js 에서 제공하는 Image 컴포넌트 기능
- lazy loading (로딩 안된 이미지는 블러 처리)
- 이미지 사이즈 최적화
  - 웹 -> 네트워크 탭 -> 프리뷰 에서 이미지의 용량이 15kB 인걸 확인 할 수 있다(뷰 포트 크기에 따라 이미지의 용량이 달라짐)
- 레이아웃 안정성 (이미지 로드 전에 placeholder를 제공해서 CLS(Cumulative Layout Shift) 방지)
