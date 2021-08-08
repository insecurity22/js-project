const quotes = [
  {
    quote: "Why can I langh for no reason? That's why you're here.",
    author: "- Disney, Lion King",
    koreanQuote: "왜 이유없이 웃을 수 있냐고요? 당신이 그 이유니까요.",
    koreanAuthor: "디즈니, 라이온 킹",
  },
  {
    quote: "Today's special moments are tomorrow's memories.",
    author: "- Disney, Aladdin",
    koreanQuote: "오늘의 특별한 순간들은 내일의 추억들이야.",
    koreanAuthor: "디즈니, 알라딘",
  },
  {
    quote: "Remember who you are.",
    author: "- Disney, Lion King",
    koreanQuote: "네가 누구인지 잊지 말아라",
    koreanAuthor: "디즈니, 라이온 킹",
  },
  {
    quote: "Oh yes, the past can hurt. but the way I see it, you can either run from it or learn from it.",
    author: "- Disney, Lion King",
    koreanQuote: "그래, 맞아. 과거는 아플 수 있어. 하지만 넌 그 과거로부터 도망칠 수도 있고, 무언가를 배울 수도 있어.",
    koreanAuthor: "디즈니, 라이온 킹",
  },
  {
    quote: "I can't go back to yesterday. because I was a different person then.",
    author: "- Disney, Alice in Wonderland",
    koreanQuote: "나는 어제로 돌아갈 수 없다. 왜냐하면 나는 그때와 다른 사람이기 때문이다.",
    koreanAuthor: "디즈니, 이상한 나라의 앨리스 中",
  },
  {
    quote: "To have broken heart means you have tried for something.",
    author: "- Eat Pray Love (2010)",
    koreanQuote: "마음을 다쳤다는 건 당신이 뭔가를 위해 노력했다는 증거에요.",
    koreanAuthor: "영화 <먹고 기도하고 사랑하라>",
  },
  {
    quote: "No owners means no heartbreak. We are masters of our own fate.",
    author: "- Disney, Toy Story",
    koreanQuote: "주인이 없으면 가슴 아파할 일도 안 생겨. 우린 각자 운명의 주인이야.",
    koreanAuthor: "디즈니, 토이스토리 3 中",
  },
  {
    quote: "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
    author: "- Disney, Ratatouille",
    koreanQuote: "남이 당신의 한계를 정하게 하지 마세요. 당신이 어디에서 왔는지는 중요치 않아요. 당신의 한계는 당신의 영혼밖에 없답니다.",
    koreanAuthor: "디즈니, 라따뚜이",
  },
  {
    quote: "It's not until you lose everything that you can truly appreciate everything",
    author: "- Disney, Beauty and the beast",
    koreanQuote: "모든 것을 잃고 나서야 비로소 진정으로 감사함을 알 수 있습니다.",
    koreanAuthor: "디즈니, 미녀와 야수",
  },
  {
    quote: "The only way to get what you want in this world is through hard work",
    author: "- Disney, The princess and the Frog",
    koreanQuote: "이 세상에서 원하는 것을 얻을 수 있는 유일한 방법은 힘든 일을 통해서에요.",
    koreanAuthor: "디즈니, 공주와 개구리",
  },
  {
    quote: "Venture outside your comfort zone. The rewards are worth it.",
    author: "- Disney, Tangled",
    koreanQuote: "안전지대 밖에서 모험을 해보세요. 보상은 그만한 가치가 있을 거에요.",
    koreanAuthor: "디즈니, 라푼젤",
  },
  {
    quote: "You control your destiny. You don't need magic to do it.",
    author: "- Disney, Brave",
    koreanQuote: "당신의 운명은 당신이 통제해요. 마법은 필요 없어요.",
    koreanAuthor: "디즈니, 라푼젤",
  },
  {
    quote: "The very things that hold you down are going to lift you up.",
    author: "- Disney, Dumbo",
    koreanQuote: "당신을 억누르고 있는 그것들이 당신을 끌어올릴 수 있을 거에요.",
    koreanAuthor: "디즈니, 덤보",
  },
  {
    quote: "If watching is all you're gonna do, then you're gonna watch your life go by without ya.",
    author: "- Disney, Notre Dame",
    koreanQuote: "당신이 하는 일이 구경하는 것이라면 당신은 당신 없이 당신의 삶이 지나가는 것을 보게 될 거예요.",
    koreanAuthor: "디즈니, 노트르담의 꼽추",
  },
  {
    quote: "Don't spend your time lookin' around for something you want that can't be found.",
    author: "- Disney, Jungle book",
    koreanQuote: "찾을 수 없는 것을 찾느라 시간을 낭비하지 마세요.",
    koreanAuthor: "디즈니, 정글북",
  },
  {
    quote: "When life gets you down, do you wanna know what you've gotta do? Just keep swimming, swimming and swimming.",
    author: "- Disney, Finding Nemo",
    koreanQuote: "삶이 너를 힘들게 할 때는 어떻게 해야 하는지 알아? 그냥 계속 헤엄치고 또 헤엄쳐!",
    koreanAuthor: "디즈니, 니모를 찾아서",
  },
  {
    quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
    author: "- Disney, Mulan",
    koreanQuote: "역경 속에서 피어난 꽃은 꽃 중에서 가장 흔치않고 아름다운 꽃이야.",
    koreanAuthor: "디즈니, 뮬란",
  },
  {
    quote: "Every day, every minutes, every second you have a chance to change your life.",
    author: "- Disney, baby elephant dumbo",
    koreanQuote: "매일, 매분, 모든 초 단위마다 너의 인생을 바꿀 수 있는 기회가 있어.",
    koreanAuthor: "디즈니, 덤보",
  },
  {
    quote: "The road i'm going is the way.",
    author: "- Disney, Wreck-It Ralph2",
    koreanQuote: "내가 가는 길이 곧 길 아니겠어.",
    koreanAuthor: "디즈니, 덤보",
  },
  {
    quote: "Things that make me who i am make me special.",
    author: "- Disney, Winnie the Pooh",
    koreanQuote: "나를 더 나답게 만드는 것, 그건 날 더 특별하게 만들어준단다.",
    koreanAuthor: "디즈니, 곰돌이 푸",
  },
  {
    quote: "There comes a day when you're gonna look around and realize happiness is where you are.",
    author: "- Disney, Moana",
    koreanQuote: "주위를 둘러보고 행복이 자신이 있는 그곳이라는 것을 깨달은 날이 올 거야",
    koreanAuthor: "디즈니, 모아나",
  },
  {
    quote: "Things that make me who i am make me special.",
    author: "- Disney, Winnie the Pooh",
    koreanQuote: "나를 더 나답게 만드는 것, 그건 날 더 특별하게 만들어준단다.",
    koreanAuthor: "디즈니, 곰돌이 푸",
  },
];

const quote = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:nth-child(4)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
