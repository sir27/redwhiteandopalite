// Keys match data-id on <span class="annot"> in index.html.
// `body` is HTML; `questions` are civics test question numbers (see questions.js).
// `title` is optional (defaults to the highlighted lyric text).
const ANNOTATIONS = {
  "amendments": {
    body: "The Constitution has 27 amendments.",
    questions: [5, 7]
  },
  "authors": {
    body: "Alexander Hamilton, James Madison, and John Jay were writers of the Federalist Papers.",
    questions: [83, 88, 89]
  },
  "helped": {
    body: "The Federalist Papers explained and defended the Constitution to the public.",
    questions: [84]
  },
  "commander": {
    body: "The U.S. President is Commander in Chief of the military.",
    questions: [41, 42]
  },
  "twoterms": {
    body: "U.S. Presidents serve a maximum of two terms.",
    questions: [37]
  },
  "justices": {
    body: "There are nine judges in the Supreme Court. The judicial branch interprets law.",
    questions: [50, 51, 53]
  },
  "tillgone": {
    body: "Supreme Court justices serve for life.",
    questions: [55]
  },
  "wethepeople": {
    body: "The Constitution establishes self-government for the United States.",
    questions: [4]
  },
  "forms": {
    body: "The Constitution is the country’s founding document.",
    questions: [3]
  },
  "oath": {
    body: "In making the Oath of Allegiance, naturalized citizens promised to defend the Constitution. (Note: At least one other answer is expected for this question; see the question below.)",
    questions: [67]
  },
  "assembly": {
    body: "The moving assembly line was developed for the Ford Model T in Michigan in 1913.",
    questions: [118]
  },
  "branches": {
    body: "The three branches of the government (executive, legislative, judicial) establish checks and balances to prevent any one branch from becoming too powerful.",
    questions: [15]
  },
  "nolaw": {
    body: "The rule of law states that no one is above the law.",
    questions: [13]
  },
  "choctaw": {
    body: "The Choctaw are a people indigenous to the Southeastern Woodlands region of the U.S. (modern Louisiana, Mississippi, and Alabama).",
    questions: [117]
  },
  "liz": {
    body: "Susan B. Anthony and Elizabeth Cady Stanton were key figures in the women’s suffrage movement.",
    questions: [99]
  },
  "y1920": {
    body: "Women got the vote in 1920.",
    questions: [102]
  },
  "fdr": {
    body: "Franklin D. Roosevelt was president during the Great Depression.",
    questions: [105]
  },
  "y1929": {
    body: "The stock market crash of 1929 kicked off the Great Depression.",
    questions: [104]
  },
  "vote18": {
    body: "The 26th amendment establishes that U.S. citizens over 18 have the right to vote.",
    questions: [63]
  },
  "civic": {
    body: "Voting is one example of civic participation in the United States.",
    questions: [69]
  },
  "service": {
    body: "Voting is one way in which citizens of the United States can serve their country.",
    questions: [70]
  },
  "senate": {
    body: "Each state has two senators (for 100 total). A senator’s term lasts six years. The Senate is one of the parts of the U.S. Congress.",
    questions: [19, 21, 22, 27]
  },
  "house": {
    body: "The House of Representatives has 435 voting members. The House is one of the parts of the U.S. Congress.",
    questions: [19, 24]
  },
  "driver": {
    body: "Only states can provide driver’s licenses.",
    questions: [59]
  },
  "tenth": {
    body: "The 10th Amendment establishes that the powers not given to the federal government belong to the states or the people.",
    questions: [60]
  },
  "ben": {
    body: "Benjamin Franklin was a diplomat and helped Thomas Jefferson write the Declaration of Independence.",
    questions: [85]
  },
  "tom": {
    body: "Thomas Jefferson wrote the Declaration of Independence.",
    questions: [78, 87]
  },
  "taxation": {
    body: "Taxation without representation was a key driver of the American Revolution.",
    questions: [9, 77]
  },
  "abe": {
    body: "Abraham Lincoln was President during the Civil War and was assassinated toward the end of the Civil War.",
    questions: [93, 94]
  },
  "dwight": {
    body: "Dwight D. Eisenhower was the 34th president.",
    questions: [107]
  },
  "citizens": {
    body: "You can become a U.S. citizen by being born in the U.S., naturalizing, or deriving citizenship.",
    questions: [68]
  },
  "fourteenth": {
    body: "The 14th amendment is the constitutional basis of birthright citizenship and establishes that anyone born in or naturalized in the United States is a citizen of the United States.",
    questions: [97]
  }
};
