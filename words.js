/**
 * Ally's English Game — 단어 데이터
 * ─────────────────────────────────────────
 * 매주 새 주차를 WORDS_DATA에 추가하고,
 * WEEK_ORDER 배열에도 키를 추가하세요.
 *
 * 필드 설명:
 *   word     : 영어 단어
 *   meaning  : 한국어 뜻
 *   emoji    : 이모지 (svgEmoji: true 일 때는 결과 화면용 fallback 이모지)
 *   pron     : 발음기호 (현재 게임 화면에서는 미표시, 추후 활용 가능)
 *   svgEmoji : true 시 게임 화면에서 SVG로 렌더링 (일본 국기 등)
 */

const WORDS_DATA = {

  /* ── 5월 2주차 ── */
  "may_w2": {
    label: "5월 2주차",
    words: [
      { word: "one",    meaning: "하나",              emoji: "1️⃣",  pron: "wʌn"      },
      { word: "two",    meaning: "둘",                emoji: "2️⃣",  pron: "tuː"      },
      { word: "three",  meaning: "셋",                emoji: "3️⃣",  pron: "θriː"     },
      { word: "four",   meaning: "넷",                emoji: "4️⃣",  pron: "fɔːr"     },
      { word: "five",   meaning: "다섯",              emoji: "5️⃣",  pron: "faɪv"     },
      { word: "six",    meaning: "여섯",              emoji: "6️⃣",  pron: "sɪks"     },
      { word: "seven",  meaning: "일곱",              emoji: "7️⃣",  pron: "ˈsevən"   },
      { word: "eight",  meaning: "여덟",              emoji: "8️⃣",  pron: "eɪt"      },
      { word: "japan",  meaning: "일본",              emoji: "🏯🏝️", pron: "dʒəˈpæn", svgEmoji: true },
      { word: "ally",   meaning: "도은이의 영어이름", emoji: "👧",   pron: "ˈæli",  speak: "Allie" },
      { word: "rabbit", meaning: "토끼",              emoji: "🐰",   pron: "ˈræbɪt"   },
    ]
  },

  /* ── 5월 3주차 ── */
  "may_w3": {
    label: "5월 3주차",
    words: [
      { word: "ewe",    meaning: "암양",   emoji: "🐑",  pron: "juː"       },
      { word: "alien",  meaning: "외계인", emoji: "👽",  pron: "ˈeɪliən"   },
      { word: "anchor", meaning: "닻",     emoji: "⚓",  pron: "ˈæŋkər"   },
      { word: "ape",    meaning: "유인원", emoji: "🦍",  pron: "eɪp"       },
      { word: "acorn",  meaning: "도토리", emoji: "🐿️",  pron: "ˈeɪkɔːrn"  },
      { word: "angel",  meaning: "천사",   emoji: "😇",  pron: "ˈeɪndʒəl"  },
    ]
  },

  /* ── 다음 주차는 여기에 추가 ──
  "may_w4": {
    label: "5월 4주차",
    words: [
      { word: "apple", meaning: "사과", emoji: "🍎", pron: "ˈæpəl" },
    ]
  },
  */

};

/* 주차 순서: 오래된 것 → 최신 순으로 유지 */
const WEEK_ORDER = ["may_w2", "may_w3"];
