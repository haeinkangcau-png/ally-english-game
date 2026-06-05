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

### 주차 블록 옵션
```javascript
"jun_w1a": {
  label: "6월 1주차 A",
  quizMode: "flash",   // 4지선다 양방향(한↔영) 플래시카드. 생략하면 철자 완성 게임
  words: [ ... ]
}
```
- 단어가 많으면 한 주를 `jun_w1a`, `jun_w1b`로 나눠도 됨
- 게임은 키 끝의 알파벳을 떼어 같은 주차 그룹(`jun_w1`)으로 묶어 "이번 주"로 함께 다룸

### WEEK_ORDER 유지 규칙
- 오래된 것 → 최신 순으로 유지
- 배열의 **마지막 키**가 속한 주차 그룹이 "이번 주" (a·b 등 하위 목록 모두 포함)

### 단어 게임 출제 규칙 (`quizMode: "flash"` 기준)
- **오늘의 퀴즈 — 12문제**: 이번 주 한→영 3 + 영→한 3, 지난 단어(이번 주 제외) 한→영 3 + 영→한 3
- **이번 주 복습 — 최대 20문제**: 이번 주(a·b) 전체를 양방향으로
  - N ≤ 10 → 전 단어 양방향(2N문제)
  - N > 10 → 방향당 10문제(총 20), 모든 단어가 최소 1회 나오도록 균등 분배
- 객관식 오답 보기는 같은 풀(이번 주끼리 / 지난 단어끼리)에서 추출
- `quizMode` 없는 옛 주차: 이모지 보고 알파벳으로 철자 완성

### 대화 게임 (CONVERSATION_DATA)
- **대화 복습 / 대화 퀴즈** 두 모드, 각 6문제 (듣고 대답 고르기)

### 별점 (정답률 비례)
- 정답률 90% 이상 ★★★ / 70% 이상 ★★ / 40% 이상 ★
- 단어 게임은 그 미만 0개 가능, 대화·플래시는 최소 1개

### 이번 주 기록 (Weekly Strip)
- 게임 완료 시 localStorage(`ally_game_records`)에 날짜별 자동 저장 (같은 모드는 더 높은 별점만 갱신)
- 하루에 **4종**이 각각 스탬프 + 별점으로 표시:
  📖 단어복습(`review`) · ⭐ 단어퀴즈(`main`) · 💬 대화복습(`convReview`) · 🗣️ 대화퀴즈(`convQuiz`)
- 화면 상단 주간 달력 + 🔥 연속일 배지

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

### 5월 4주차 (may_w4) — 20단어, 2페이지씩
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
| 12 | nine | naɪn | 아홉 | 9️⃣ | n _ _ e |
| 13 | ten | tɛn | 열 | 🔟 | t _ n |
| 14 | eleven | ɪˈlɛvən | 열하나 | ⚽ | e _ _ v _ n |
| 15 | twelve | twɛlv | 열둘 | 🕛 | t _ _ l _ e |
| 16 | thirteen | ˌθɜːrˈtiːn | 열셋 | ⭐ | t _ _ r _ _ _ n |
| 17 | fourteen | ˌfɔːrˈtiːn | 열넷 | ❤️ | f _ _ r _ _ _ n |
| 18 | hour | aʊər | 시간 | ⏰ | h _ _ r |
| 19 | minute | ˈmɪnɪt | 분 | ⏱️ | m _ n _ t _ |
| 20 | second | ˈsɛkənd | 초 | ⚡ | s _ c _ n _ |

### 6월 1주차 A (jun_w1a) — 8단어, 농장 동물 (quizMode: flash)
| # | 단어 | 발음기호 | 뜻 | 이모지 | 힌트 |
|---|------|---------|-----|--------|------|
| 1 | cat | kæt | 고양이 | 🐱 | c _ t |
| 2 | dog | dɔːɡ | 강아지 | 🐶 | d _ g |
| 3 | duck | dʌk | 오리 | 🦆 | d _ c k |
| 4 | sheep | ʃiːp | 양 | 🐑 | s _ e _ p |
| 5 | pig | pɪɡ | 돼지 | 🐷 | p _ g |
| 6 | goat | ɡoʊt | 염소 | 🐐 | g _ a t |
| 7 | hen | hɛn | 암탉 | 🐔 | h _ n |
| 8 | cow | kaʊ | 소 | 🐄 | c _ w |

### 6월 1주차 B (jun_w1b) — 8단어, 야생/아기 동물 (quizMode: flash)
| # | 단어 | 발음기호 | 뜻 | 이모지 | 힌트 |
|---|------|---------|-----|--------|------|
| 1 | wild animal | waɪld ˈænɪməl | 야생 동물 | 🦁 | w _ l d  a _ _ m a l |
| 2 | livestock | ˈlaɪvstɒk | 가축 | 🐄 | l _ v e s t _ c k |
| 3 | piglet | ˈpɪɡlɪt | 아기 돼지 | 🐷 | p _ g l _ t |
| 4 | cub | kʌb | 아기 곰, 아기 사자 | 🧸 | c _ b |
| 5 | lamb | læm | 아기 양 | 🐑 | l _ m b |
| 6 | pup | pʌp | 아기 늑대 | 🐾 | p _ p |
| 7 | wolf | wʊlf | 늑대 | 🐺 | w _ l f |
| 8 | bear | bɛr | 곰 | 🐻 | b _ a r |
