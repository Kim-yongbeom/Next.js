## Next.js 에서 제공하는 Image 컴포넌트 장점
- lazy loading (로딩 안된 이미지는 블러 처리)
- 이미지 사이즈 최적화
  - 웹 -> 네트워크 탭 -> 프리뷰 에서 이미지의 용량이 15kB 인걸 확인 할 수 있다(뷰 포트 크기에 따라 이미지의 용량이 달라짐, 이미지 파일 형태도 달라짐 만약 jpg 파일인데 Next.js의 Image 컴포넌트를 사용했다면 구글 이미지에 최적화된 webp로 변경된 것을 볼 수 있다.)
- 레이아웃 안정성 (이미지 로드 전에 placeholder를 제공해서 CLS(Cumulative Layout Shift) 방지)

```
image-app 에서는 간단한 Next.js 의 image 컴포넌트의 기능만 살펴볼것
```
