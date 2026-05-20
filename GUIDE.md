# Ally's English Homework — VS Code 작업 가이드

## 폴더 구조

```
ally game/
├── index.html                ← 플래시카드 게임 (메인)
├── words.js                  ← 단어 데이터 (매주 업데이트)
├── TEMPLATE_trace.html       ← Trace 워크시트 템플릿
├── TEMPLATE_look.html        ← Look & Write 워크시트 템플릿
├── may_w5_trace.html         ← 이번 주 Trace 워크시트
├── may_w5_look.html          ← 이번 주 Look & Write 워크시트
├── assets/                   ← 게임 이미지 (bunny.png 등)
├── manifest.json             ← PWA 설정
└── GUIDE.md                  ← 이 파일
```

---

## 매주 워크시트 제작 절차

### 1. 단어 목록 준비
```
단어 / 발음기호 / 뜻 / 이모지 / 빈칸힌트
예) rabbit / ˈræbɪt / 토끼 / 🐰 / r _ b _ _ t
```

### 2. 워크시트 생성 지시
```
이번 주 단어로 워크시트 생성해줘:

nine / naɪn / 아홉 / 9️⃣ / n _ _ e
ten / tɛn / 열 / 🔟 / t _ n
...
```
- Copilot이 TEMPLATE_*.html 기반으로 jun_w1_trace.html / jun_w1_look.html 생성

### 3. 게임 데이터 업데이트
```
words.js 에 jun_w1 주차 데이터 추가하고
WEEK_ORDER 배열에도 "jun_w1" 추가해줘
```

---

## 워크시트 디자인 규칙

### 색상
| 용도 | 값 |
|------|----|
| Sheet 1 (Trace) 테마 | `#f59e0b` amber |
| Sheet 2 (Look) 테마 | `#6366f1` indigo |
| Ally's 강조색 | `#ff6b35` orange |
| 4선 일반선 | `#000` opacity 0.25 |
| 4선 기준선(3번째) | `#c00` opacity 0.35 |
| 따라쓰기 글자 | stroke `#ccc` fill none |
| 빈칸 힌트 | `#4f46e5` |

### 폰트
| 용도 | 폰트 | 크기 |
|------|------|------|
| 제목 | Fredoka One | 26pt |
| Ally's 강조 | Fredoka One | 30pt |
| 부제 | Nunito | 11pt |
| 단어 | Fredoka One | 15pt |
| 발음기호 | Nunito | 10pt |
| 한국어 뜻 | Nunito | 11pt |
| 이모지 (Sheet 1) | — | 20pt |
| 이모지 (Sheet 2) | — | 48pt |
| 빈칸 힌트 | Fredoka One | 18pt |
| Name/Date 라벨 | Nunito | 14pt |

### 4선 노트 핵심 규칙
- SVG `<line>` 4개만 사용 (CSS border 금지)
- `preserveAspectRatio="none"` 필수
- Sheet 1: viewBox 800×60 / 선 y=1,20,40,59
- Sheet 2: viewBox 600×50 / 선 y=1,17,33,49

### 페이지 구성
- A4 (210mm × 297mm), padding 8mm 12mm
- 단어 6개 이하: 1페이지
- 단어 7개 이상: 2페이지 분할 (1~6 / 7~끝)
- Sheet 2 홀수 마지막 카드: 중앙 배치

### 이모지 특이사항
- 🇯🇵 일본 국기는 Windows에서 JP 텍스트로 표시됨
- 대안: 인라인 SVG 일장기 사용
  ```html
  <svg width="28" height="20" viewBox="0 0 28 20">
    <rect width="28" height="20" fill="#fff" stroke="#ddd" stroke-width="0.5"/>
    <circle cx="14" cy="10" r="6" fill="#bc002d"/>
  </svg>
  ```

### 안드로이드 이모지 호환성 (5년+ 구형폰 기준)
- Unicode 6.0 이하 이모지는 모든 안드로이드에서 안전
- **피해야 할 것**: Unicode 12.0+(2019) 이후 추가된 이모지
  - 🫙 항아리(Unicode 14, 2021) ❌ → 🍯 꿀단지(Unicode 9) ✅
  - 🫐 블루베리(Unicode 13, 2020) ❌ → 🍇 포도(Unicode 6) ✅
  - 🦵 다리(Unicode 11, 2018) → 구형폰 일부 미지원 주의
- **항상 안전**: 숫자 키캡(0️⃣~🔟), 기본 동물/음식/날씨, ❤️⭐⚽⏰⚡

---

## 게임(words.js) 업데이트 규칙

### 주차 키 명명 규칙
```
may_w1, may_w2, may_w3, may_w4
jun_w1, jun_w2, jun_w3, jun_w4
jul_w1 ...
```

### 단어 데이터 형식
```javascript
{ word: "rabbit", meaning: "토끼", emoji: "🐰", pron: "ˈræbɪt" }

// 일본국기처럼 SVG가 필요한 경우
{ word: "japan", meaning: "일본", emoji: "🏝️", pron: "dʒəˈpæn", svgEmoji: true }
```

### WEEK_ORDER 유지 규칙
- 오래된 것 → 최신 순으로 유지
- 게임 퀴즈: 이번 주 단어 50% + 이전 주차들 50% 랜덤 혼합
- 게임 복습: 선택한 주차 단어만 100%

### 이번 주 기록 (Weekly Strip)
- 게임 완료 시 localStorage에 자동 저장
- 복습(📖) / 퀴즈(⭐) 각각 별도 기록, 화면 상단에 주간 달력으로 표시

---

## 인쇄 방법
브라우저에서 HTML 열기 → Ctrl+P
- 용지: A4
- 여백: **없음**
- 배경 그래픽: **체크**

---

## 주차별 단어 목록 히스토리

### 5월 2주차 (may_w2) — 11단어, 2페이지
| # | 단어 | 발음기호 | 뜻 | 이모지 | 힌트 |
|---|------|---------|-----|--------|------|
| 1 | one | wʌn | 하나 | 1️⃣ | o _ e |
| 2 | two | tuː | 둘 | 2️⃣ | t _ o |
| 3 | three | θriː | 셋 | 3️⃣ | t _ _ _ e |
| 4 | four | fɔːr | 넷 | 4️⃣ | f _ _ r |
| 5 | five | faɪv | 다섯 | 5️⃣ | f _ v _ |
| 6 | six | sɪks | 여섯 | 6️⃣ | s _ x |
| 7 | seven | ˈsevən | 일곱 | 7️⃣ | s _ v _ n |
| 8 | eight | eɪt | 여덟 | 8️⃣ | e _ g _ t |
| 9 | japan | dʒəˈpæn | 일본 | 일장기SVG+🏝️ | j _ p _ n |
| 10 | ally | ˈæli | 도은이의 영어이름 | 👧 | a _ _ y |
| 11 | rabbit | ˈræbɪt | 토끼 | 🐰 | r _ b _ _ t |

### 5월 3주차 (may_w3) — 6단어, 1페이지
| # | 단어 | 발음기호 | 뜻 | 이모지 | 힌트 |
|---|------|---------|-----|--------|------|
| 1 | ewe | juː | 암양 | 🐑 | e _ e |
| 2 | alien | ˈeɪliən | 외계인 | 👽 | a _ _ _ n |
| 3 | anchor | ˈæŋkər | 닻 | ⚓ | a _ _ _ _ r |
| 4 | ape | eɪp | 유인원 | 🦍 | a _ e |
| 5 | acorn | ˈeɪkɔːrn | 도토리 | 🐿️ | a _ _ _ n |
| 6 | angel | ˈeɪndʒəl | 천사 | 😇 | a _ _ _ l |

### 5월 4주차 (may_w4) — 11단어, 2페이지
| # | 단어 | 발음기호 | 뜻 | 이모지 | 힌트 |
|---|------|---------|-----|--------|------|
| 1 | jump | dʒʌmp | 점프 | ⬆️ | j _ m p |
| 2 | kiwi | ˈkiːwi | 키위 | 🥝 | k _ w _ |
| 3 | king | kɪŋ | 왕 | 👑 | k _ n g |
| 4 | jam | dʒæm | 잼 | 🍓🍇🍑 | j _ m |
| 5 | kid | kɪd | 아이 | 👦 | k _ d |
| 6 | lid | lɪd | 뚜껑 | 🍯 | l _ d |
| 7 | legs | lɛɡz | 다리 | 🏃 | l _ g s |
| 8 | lips | lɪps | 입술 | 👄 | l _ p s |
| 9 | jet | dʒɛt | 제트기 | ✈️ | j _ t |
| 10 | clown | klaʊn | 광대 | 🤡 | c _ _ w n |
| 11 | circle | ˈsɜːrkəl | 원 | ⭕ | c _ r c _ _ |

### 5월 5주차 (may_w5) — 9단어, 2페이지
| # | 단어 | 발음기호 | 뜻 | 이모지 | 힌트 |
|---|------|---------|-----|--------|------|
| 1 | nine | naɪn | 아홉 | 9️⃣ | n _ _ e |
| 2 | ten | tɛn | 열 | 🔟 | t _ n |
| 3 | eleven | ɪˈlɛvən | 열하나 | ⚽ | e _ _ v _ n |
| 4 | twelve | twɛlv | 열둘 | 🕛 | t _ _ l _ e |
| 5 | thirteen | ˌθɜːrˈtiːn | 열셋 | ⭐ | t _ _ r _ _ _ n |
| 6 | fourteen | ˌfɔːrˈtiːn | 열넷 | ❤️ | f _ _ r _ _ _ n |
| 7 | hour | aʊər | 시간 | ⏰ | h _ _ r |
| 8 | minute | ˈmɪnɪt | 분 | ⏱️ | m _ n _ t _ |
| 9 | second | ˈsɛkənd | 초 | ⚡ | s _ c _ n _ |
