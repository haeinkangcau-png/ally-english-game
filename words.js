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

  /* ── 5월 5주차 ── */
  "may_w5": {
    label: "5월 5주차",
    words: [
      { word: "eleven",    meaning: "열하나", emoji: "⚽",   pron: "ɪˈlɛvən"    },
      { word: "twelve",    meaning: "열둘",   emoji: "🕛",   pron: "twɛlv"       },
      { word: "thirteen",  meaning: "열셋",   emoji: "🌙",   pron: "ˌθɜːrˈtiːn" },
      { word: "fourteen",  meaning: "열넷",   emoji: "❤️",   pron: "ˌfɔːrˈtiːn" },
      { word: "fifteen",   meaning: "열다섯", emoji: "🎯",   pron: "ˌfɪfˈtiːn"  },
      { word: "sixteen",   meaning: "열여섯", emoji: "🎲",   pron: "ˌsɪksˈtiːn" },
      { word: "seventeen", meaning: "열일곱", emoji: "🌟",   pron: "ˌsɛvənˈtiːn"},
      { word: "eighteen",  meaning: "열여덟", emoji: "🎂",   pron: "ˌeɪˈtiːn"   },
      { word: "nineteen",  meaning: "열아홉", emoji: "🎸",   pron: "ˌnaɪnˈtiːn" },
      { word: "twenty",    meaning: "스물",   emoji: "🎉",   pron: "ˈtwɛnti"    },
    ]
  },

  /* ── 6월 1주차 A ── */
  "jun_w1a": {
    label: "6월 1주차 A",
    quizMode: "flash",
    words: [
      { word: "cat",   meaning: "고양이", emoji: "🐱", pron: "kæt"   },
      { word: "dog",   meaning: "강아지", emoji: "🐶", pron: "dɔːɡ"  },
      { word: "duck",  meaning: "오리",   emoji: "🦆", pron: "dʌk"   },
      { word: "sheep", meaning: "양",     emoji: "🐑", pron: "ʃiːp"  },
      { word: "pig",   meaning: "돼지",   emoji: "🐷", pron: "pɪɡ"   },
      { word: "goat",  meaning: "염소",   emoji: "🐐", pron: "ɡoʊt"  },
      { word: "hen",   meaning: "암탉",   emoji: "🐔", pron: "hɛn"   },
      { word: "cow",   meaning: "소",     emoji: "🐄", pron: "kaʊ"   },
    ]
  },

  /* ── 6월 1주차 B ── */
  "jun_w1b": {
    label: "6월 1주차 B",
    quizMode: "flash",
    words: [
      { word: "wild animal", meaning: "야생 동물", emoji: "🦁",  pron: "waɪld ˈænɪməl" },
      { word: "livestock",   meaning: "가축",     emoji: "🐄",  pron: "ˈlaɪvstɒk"     },
      { word: "piglet",      meaning: "아기 돼지", emoji: "🐷",  pron: "ˈpɪɡlɪt"       },
      { word: "cub",         meaning: "아기 곰, 아기 사자", emoji: "🧸",  pron: "kʌb"  },
      { word: "lamb",        meaning: "아기 양",  emoji: "🐑",  pron: "læm"            },
      { word: "pup",         meaning: "아기 늑대", emoji: "🐾",  pron: "pʌp"            },
      { word: "wolf",        meaning: "늑대",     emoji: "🐺",  pron: "wʊlf"           },
      { word: "bear",        meaning: "곰",       emoji: "🐻",  pron: "bɛr"            },
    ]
  },

  /* ── 6월 2주차 (날씨) ── */
  "jun_w2": {
    label: "6월 2주차",
    quizMode: "flash",
    words: [
      { word: "weather",       meaning: "날씨",            emoji: "🌦️", pron: "ˈweðər"        },
      { word: "sunny",         meaning: "맑은, 화창한",     emoji: "☀️", pron: "ˈsʌni"         },
      { word: "windy",         meaning: "바람 부는",        emoji: "🌬️", pron: "ˈwɪndi"        },
      { word: "rainy",         meaning: "비 오는",          emoji: "🌧️", pron: "ˈreɪni"        },
      { word: "thunderstorm",  meaning: "천둥번개",         emoji: "⛈️", pron: "ˈθʌndərstɔːrm"  },
      { word: "snowy",         meaning: "눈 오는",          emoji: "🌨️", pron: "ˈsnoʊi"        },
      { word: "light cloud",   meaning: "옅은 구름",        emoji: "🌤️", pron: "laɪt klaʊd"    },
      { word: "thick cloud",   meaning: "짙은 구름",        emoji: "☁️", pron: "θɪk klaʊd"     },
      { word: "shower",        meaning: "소나기",           emoji: "☔", pron: "ˈʃaʊər"        },
      { word: "sunshine",      meaning: "햇빛, 햇살",       emoji: "🌞", pron: "ˈsʌnʃaɪn"      },
      { word: "cloud",         meaning: "구름",            emoji: "⛅", pron: "klaʊd"         },
      { word: "overcast",      meaning: "잔뜩 흐린",        emoji: "🌥️", pron: "ˈoʊvərkæst"    },
      { word: "foggy",         meaning: "안개 낀",          emoji: "🌫️", pron: "ˈfɔːɡi"        },
      { word: "frosty",        meaning: "서리 내린",        emoji: "❄️", pron: "ˈfrɔːsti"      },
      { word: "handwriting",   meaning: "손글씨",           emoji: "✍️", pron: "ˈhændˌraɪtɪŋ"  },
    ]
  },

  /* ── 6월 3주차 A (파닉스: a / b·m / c / d) ── */
  "jun_w3a": {
    label: "6월 3주차 A",
    quizMode: "flash",
    words: [
      { word: "alligator",   meaning: "악어",        emoji: "🐊",   pron: "ˈælɪɡeɪtər" },
      { word: "axe",         meaning: "도끼",        emoji: "🪓",   pron: "æks"        },
      { word: "astronaut",   meaning: "우주비행사",   emoji: "👩‍🚀", pron: "ˈæstrənɔːt" },
      { word: "ambulance",   meaning: "구급차",      emoji: "🚑",   pron: "ˈæmbjələns" },
      { word: "butterfly",   meaning: "나비",        emoji: "🦋",   pron: "ˈbʌtərflaɪ" },
      { word: "caterpillar", meaning: "애벌레",      emoji: "🐛",   pron: "ˈkætərpɪlər" },
      { word: "moth",        meaning: "나방",        emoji: "🦋🌙", pron: "mɔːθ"       },
      { word: "mouth",       meaning: "입",          emoji: "👄",   pron: "maʊθ"       },
      { word: "cactus",      meaning: "선인장",      emoji: "🌵",   pron: "ˈkæktəs"    },
      { word: "carrot",      meaning: "당근",        emoji: "🥕",   pron: "ˈkærət"     },
      { word: "cake",        meaning: "케이크",      emoji: "🍰",   pron: "keɪk"       },
      { word: "desk",        meaning: "책상",        emoji: "📖✏️", pron: "dɛsk"       },
      { word: "dolphin",     meaning: "돌고래",      emoji: "🐬",   pron: "ˈdɒlfɪn"    },
      { word: "dollar",      meaning: "달러",        emoji: "💵",   pron: "ˈdɒlər"     },
    ]
  },

  /* ── 6월 3주차 B (숫자 30~100) ── */
  "jun_w3b": {
    label: "6월 3주차 B",
    quizMode: "flash",
    words: [
      { word: "thirty",      meaning: "서른 (30)",  emoji: "🌈", pron: "ˈθɜːrti"     },
      { word: "forty",       meaning: "마흔 (40)",  emoji: "🎈", pron: "ˈfɔːrti"     },
      { word: "fifty",       meaning: "쉰 (50)",    emoji: "🏆", pron: "ˈfɪfti"      },
      { word: "sixty",       meaning: "예순 (60)",  emoji: "🍭", pron: "ˈsɪksti"     },
      { word: "seventy",     meaning: "일흔 (70)",  emoji: "🚀", pron: "ˈsevənti"    },
      { word: "eighty",      meaning: "여든 (80)",  emoji: "🐢", pron: "ˈeɪti"       },
      { word: "ninety",      meaning: "아흔 (90)",  emoji: "🎁", pron: "ˈnaɪnti"     },
      { word: "one hundred", meaning: "백 (100)",   emoji: "💯", pron: "wʌn ˈhʌndrəd" },
    ]
  },

};

/* 주차 순서: 오래된 것 → 최신 순으로 유지 */
const WEEK_ORDER = ["may_w2", "may_w3", "may_w4", "may_w5", "jun_w1a", "jun_w1b", "jun_w2", "jun_w3a", "jun_w3b"];

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
      },
      {
        question: "What is your favorite animal?",
        questionKorean: "네가 가장 좋아하는 동물은 뭐야?",
        correct: [
          { text: "My favorite animal is a cat.",   korean: "제가 가장 좋아하는 동물은 고양이예요." },
          { text: "I like dogs the most.",          korean: "저는 강아지를 제일 좋아해요." },
          { text: "I love ducks the most.",         korean: "저는 오리를 제일 좋아해요." },
          { text: "My favorite animal is a sheep.", korean: "제가 가장 좋아하는 동물은 양이에요." },
          { text: "I like cows the most.",          korean: "저는 소를 제일 좋아해요." }
        ],
        wrong: [
          { text: "I am eight years old.",   korean: "저는 여덟 살이에요." },
          { text: "It's rainy today.",       korean: "오늘은 비가 와요." },
          { text: "My name is Allie.",       korean: "제 이름은 Ally예요." },
          { text: "I go to school.",         korean: "저는 학교에 가요." },
          { text: "It's on the table.",      korean: "그건 탁자 위에 있어요." },
          { text: "I can swim fast.",        korean: "저는 빨리 수영할 수 있어요." },
          { text: "She is my sister.",       korean: "그녀는 제 여동생이에요." },
          { text: "It's very big.",          korean: "그건 아주 커요." },
          { text: "No, thank you.",          korean: "아니요, 괜찮아요." },
          { text: "I want some water.",      korean: "물을 좀 마시고 싶어요." }
        ]
      },
      {
        question: "What is your favorite food?",
        questionKorean: "네가 가장 좋아하는 음식은 뭐야?",
        correct: [
          { text: "My favorite food is pizza.",   korean: "제가 가장 좋아하는 음식은 피자예요." },
          { text: "I like noodles the most.",    korean: "저는 국수를 제일 좋아해요." },
          { text: "I love chicken the most.",    korean: "저는 치킨을 제일 좋아해요." },
          { text: "My favorite food is rice.",   korean: "제가 가장 좋아하는 음식은 밥이에요." },
          { text: "I like apples the most.",     korean: "저는 사과를 제일 좋아해요." }
        ],
        wrong: [
          { text: "I am very happy.",         korean: "저는 아주 행복해요." },
          { text: "It's a blue bag.",         korean: "그건 파란 가방이에요." },
          { text: "My favorite animal is a dog.", korean: "제가 가장 좋아하는 동물은 강아지예요." },
          { text: "I can jump high.",         korean: "저는 높이 뛸 수 있어요." },
          { text: "It's very cold.",          korean: "아주 추워요." },
          { text: "He is my brother.",        korean: "그는 제 오빠예요." },
          { text: "I have a pencil.",         korean: "저는 연필이 있어요." },
          { text: "It's Monday today.",       korean: "오늘은 월요일이에요." },
          { text: "I go home now.",           korean: "저는 지금 집에 가요." },
          { text: "It's under the chair.",    korean: "그건 의자 아래에 있어요." }
        ]
      }
    ]
  },

  /* ── 6월 2주차 (날씨 대화) ── */
  "jun_conv_w2": {
    label: "6월 2주차",
    questions: [
      {
        question: "What is the weather like today?",
        questionKorean: "오늘 날씨 어때요?",
        correct: [
          { text: "Today the weather is sunny.",   korean: "오늘 날씨는 맑아요." },
          { text: "It's rainy today.",             korean: "오늘은 비가 와요." },
          { text: "It's cloudy outside.",          korean: "밖은 흐려요." },
          { text: "It looks like rain.",           korean: "비가 올 것 같아요." },
          { text: "The weather is nice today.",    korean: "오늘 날씨가 좋아요." },
          { text: "It's cold and windy.",          korean: "춥고 바람이 불어요." },
          { text: "Today the weather is snowy.",   korean: "오늘 날씨는 눈이 와요." },
          { text: "It's foggy this morning.",      korean: "오늘 아침은 안개가 꼈어요." }
        ],
        wrong: [
          { text: "I'm eight years old.", korean: "저는 여덟 살이에요." },
          { text: "My name is Allie.",    korean: "제 이름은 Ally예요." },
          { text: "I like pizza.",        korean: "저는 피자를 좋아해요." },
          { text: "It's a cat.",          korean: "그건 고양이예요." },
          { text: "I go to school.",      korean: "저는 학교에 가요." },
          { text: "She is my sister.",    korean: "그녀는 제 여동생이에요." },
          { text: "It's on the table.",   korean: "그건 탁자 위에 있어요." },
          { text: "I can swim fast.",     korean: "저는 빨리 수영할 수 있어요." },
          { text: "I have a dog.",        korean: "저는 강아지가 있어요." },
          { text: "It's blue.",           korean: "그건 파란색이에요." }
        ]
      },
      {
        question: "What do you do?",
        questionKorean: "무슨 일을 해요? (직업이 뭐예요?)",
        correct: [
          { text: "I'm a student.",                    korean: "저는 학생이에요." },
          { text: "I go to school.",                   korean: "저는 학교에 다녀요." },
          { text: "I'm an elementary school student.", korean: "저는 초등학생이에요." },
          { text: "I study at school.",                korean: "저는 학교에서 공부해요." }
        ],
        wrong: [
          { text: "I'm fine, thank you.",  korean: "저는 잘 지내요, 고마워요." },
          { text: "It's sunny today.",     korean: "오늘은 맑아요." },
          { text: "My name is Allie.",     korean: "제 이름은 Ally예요." },
          { text: "I'm eight years old.",  korean: "저는 여덟 살이에요." },
          { text: "I like ice cream.",     korean: "저는 아이스크림을 좋아해요." },
          { text: "It's a dog.",           korean: "그건 강아지예요." },
          { text: "She is happy.",         korean: "그녀는 행복해요." },
          { text: "It's on the chair.",    korean: "그건 의자 위에 있어요." },
          { text: "I have two pencils.",   korean: "저는 연필이 두 개 있어요." },
          { text: "It's red.",             korean: "그건 빨간색이에요." }
        ]
      }
    ]
  }

};

/* 대화 주차 순서 */
const CONVERSATION_WEEK_ORDER = ["may_conv_w1", "jun_conv_w2"];
