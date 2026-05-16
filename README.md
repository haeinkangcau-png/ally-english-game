# Ally's English Game 🎮

Ally(8세)를 위한 영어 단어 플래시카드 게임입니다.
iPad / 갤럭시 탭 브라우저에서 플레이할 수 있어요.

---

## 파일 구조

```
ally-english-game/
├── index.html   ← 게임 본체 (수정 불필요)
├── words.js     ← 단어 데이터 (매주 업데이트)
└── README.md
```

---

## GitHub Pages 배포 방법

1. GitHub에서 **새 저장소** 생성 (예: `ally-english-game`)
2. 이 폴더의 파일 **3개**를 모두 업로드
3. 저장소 → **Settings** → **Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)` → **Save**
4. 몇 분 후 아래 주소에서 플레이 가능!
   ```
   https://[GitHub아이디].github.io/ally-english-game
   ```

---

## 매주 단어 업데이트 방법

`words.js` 파일에 새 주차 블록을 추가합니다.

### 1) WORDS_DATA에 새 주차 추가

```javascript
"jun_w1": {
  label: "6월 1주차",
  words: [
    { word: "apple",  meaning: "사과",  emoji: "🍎", pron: "ˈæpəl"  },
    { word: "banana", meaning: "바나나", emoji: "🍌", pron: "bəˈnænə" },
    // ... 나머지 단어들
  ]
},
```

### 2) WEEK_ORDER 배열에 새 키 추가

```javascript
const WEEK_ORDER = ["may_w2", "may_w3", "jun_w1"];
//                                       ↑ 새로 추가
```

### 3) GitHub에 words.js 업로드 (덮어쓰기)

저장소 → `words.js` → ✏️ Edit → 붙여넣기 → Commit changes

---

## 게임 방식

| 항목 | 내용 |
|------|------|
| 문제 수 | 이번 주 5개 + 지난 단어 5개 = 총 10문제 |
| 게임 방식 | 이모지 보고 알파벳 버튼 눌러 단어 완성 |
| 발음 | 🔊 버튼 또는 단어 완성 시 자동 재생 |
| 힌트 | 💡 버튼으로 한국어 뜻 보기 |
| 결과 | ⭐ 1~3개 + 틀린 단어 복습 |

---

## 특이사항

- **일본 국기** 이모지(🇯🇵)는 Windows에서 "JP" 텍스트로 표시됨
  → `svgEmoji: true` 옵션으로 SVG 직접 렌더링으로 대체
- 인터넷 연결 필요 (Google Fonts 로드)
- iOS Safari에서 자동 발음이 안 될 경우 🔊 버튼 사용

---

## 주차 키 명명 규칙

```
may_w1   → 5월 1주차
may_w2   → 5월 2주차
jun_w1   → 6월 1주차
jun_w2   → 6월 2주차
```
