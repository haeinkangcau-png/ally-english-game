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

  /* ── 5월 4주차 ── */
  "may_w4": {
    label: "5월 4주차",
    words: [
      { word: "jump",     meaning: "점프",  emoji: "⬆️",  pron: "dʒʌmp"      },
      { word: "kiwi",     meaning: "키위",  emoji: "🥝",  pron: "ˈkiːwi"     },
      { word: "king",     meaning: "왕",    emoji: "👑",  pron: "kɪŋ"        },
      { word: "jam",      meaning: "잼",    emoji: "🍓🍇🍑", pron: "dʒæm"      },
      { word: "kid",      meaning: "아이",  emoji: "👦",  pron: "kɪd"        },
      { word: "lid",      meaning: "뚜껑",  emoji: "🍯",  pron: "lɪd"        },
      { word: "legs",     meaning: "다리",  emoji: "🏃",  pron: "lɛɡz"       },
      { word: "lips",     meaning: "입술",  emoji: "👄",  pron: "lɪps"       },
      { word: "jet",      meaning: "제트기", emoji: "✈️",  pron: "dʒɛt"       },
      { word: "clown",    meaning: "광대",  emoji: "🤡",  pron: "klaʊn"      },
      { word: "circle",   meaning: "원",    emoji: "⭕",  pron: "ˈsɜːrkəl"   },
      { word: "nine",     meaning: "아홉",  emoji: "9️⃣",  pron: "naɪn"       },
      { word: "ten",      meaning: "열",    emoji: "🔟",  pron: "tɛn"        },
      { word: "eleven",   meaning: "열하나", emoji: "⚽",  pron: "ɪˈlɛvən"   },
      { word: "twelve",   meaning: "열둘",  emoji: "🕛",  pron: "twɛlv"      },
      { word: "thirteen", meaning: "열셋",  emoji: "⭐",  pron: "ˌθɜːrˈtiːn" },
      { word: "fourteen", meaning: "열넷",  emoji: "❤️",  pron: "ˌfɔːrˈtiːn" },
      { word: "hour",     meaning: "시간",  emoji: "⏰",  pron: "aʊər"       },
      { word: "minute",   meaning: "분",    emoji: "⏱️",  pron: "ˈmɪnɪt"    },
      { word: "second",   meaning: "초",    emoji: "⚡",  pron: "ˈsɛkənd"   },
    ]
  },

};

/* 주차 순서: 오래된 것 → 최신 순으로 유지 */
const WEEK_ORDER = ["may_w2", "may_w3", "may_w4"];

/* ══════════════════════════════════════════════
   대화 게임 데이터 — 표현 듣고 대답 고르기
   ══════════════════════════════════════════════
   필드 설명:
     question : 질문 문장
     correct  : 올바른 대답 후보 (게임마다 1개 랜덤 선택)
     wrong    : 틀린 대답 후보 (게임마다 3개 랜덤 선택)
*/
const CONVERSATION_DATA = {

  /* ── 5월 5주차 ── */
  "may_conv_w1": {
    label: "5월 5주차",
    questions: [
      {
        question: "How are you today?",
        questionKorean: "오늘 어떻게 지냈어요?",
        correct: [
          { text: "I'm pretty good!",   korean: "꽤 잘 지내요!" },
          { text: "I'm great, thanks!", korean: "너무 좋아요, 고마워요!" },
          { text: "Not bad, thanks!",   korean: "나쁘지 않아요, 고마워요!" },
          { text: "I'm doing well!",    korean: "잘 지내고 있어요!" },
          { text: "Not so good.",       korean: "그다지 좋지 않아요." },
          { text: "I'm a little tired.", korean: "조금 피곤해요." },
          { text: "Not great.",         korean: "별로예요." }
        ],
        wrong: [
          { text: "No, thanks.",        korean: "아니요, 괜찮아요." },
          { text: "Yes, please.",       korean: "네, 부탁해요." },
          { text: "It's a cat.",        korean: "그건 고양이예요." },
          { text: "I like pizza.",      korean: "나는 피자를 좋아해요." },
          { text: "My name is Allie.",   korean: "제 이름은 Ally예요." },
          { text: "I am 8 years old.",  korean: "나는 8살이에요." },
          { text: "It's sunny today.",  korean: "오늘 날씨가 맑아요." },
          { text: "I like dogs.",       korean: "나는 강아지를 좋아해요." },
          { text: "It's on the table.", korean: "그건 탁자 위에 있어요." },
          { text: "She is my sister.",  korean: "그녀는 내 여동생이에요." },
          { text: "I want some water.", korean: "물이 마시고 싶어요." },
          { text: "It's blue.",         korean: "그건 파란색이에요." },
          { text: "I can swim.",        korean: "나는 수영할 수 있어요." },
          { text: "I go to school.",    korean: "나는 학교에 가요." },
          { text: "It's very big.",     korean: "그건 매우 커요." }
        ]
      },
      {
        question: "Do you like it?",
        questionKorean: "이거 좋아해요?",
        correct: [
          { text: "Yes, I love it!",       korean: "네, 정말 좋아해요!" },
          { text: "Yes, I like it a lot!", korean: "네, 많이 좋아해요!" },
          { text: "I really like it!",     korean: "진짜 좋아해요!" },
          { text: "Of course I do!",       korean: "당연하죠!" },
          { text: "Not really.",           korean: "별로요." },
          { text: "No, I don't.",          korean: "아니요, 안 좋아해요." },
          { text: "Not much.",             korean: "그다지요." }
        ],
        wrong: [
          { text: "I'm fine, thanks.",  korean: "잘 지내요, 고마워요." },
          { text: "It's a dog.",        korean: "그건 강아지예요." },
          { text: "I'm 8 years old.",   korean: "나는 8살이에요." },
          { text: "My name is Allie.",   korean: "제 이름은 Ally예요." },
          { text: "She is happy.",      korean: "그녀는 행복해요." },
          { text: "It's very cold.",    korean: "날씨가 매우 추워요." },
          { text: "I can run fast.",    korean: "나는 빨리 달릴 수 있어요." },
          { text: "It's purple.",       korean: "그건 보라색이에요." },
          { text: "I have a sister.",   korean: "나는 여동생이 있어요." },
          { text: "It's Monday.",       korean: "오늘은 월요일이에요." },
          { text: "We go to the park.", korean: "우리는 공원에 가요." },
          { text: "He is my brother.",  korean: "그는 내 오빠예요." },
          { text: "I want to sleep.",   korean: "나는 자고 싶어요." },
          { text: "It's very small.",   korean: "그건 매우 작아요." },
          { text: "I like bananas.",    korean: "나는 바나나를 좋아해요." }
        ]
      }
    ]
  }

};

/* 대화 주차 순서 */
const CONVERSATION_WEEK_ORDER = ["may_conv_w1"];
