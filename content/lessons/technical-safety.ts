import type { Lesson } from "@/lib/types";

export const technicalSafetyLessons: Lesson[] = [
  {
    id: "safety-01",
    examPartId: "technical",
    sectionId: "safety",
    order: 1,
    title: "Elektrick\u00e1 bezpe\u010dnost",
    objective:
      "Rozpoznat nebezpe\u010d\u00ed elektrick\u00e9ho proudu a zn\u00e1t z\u00e1sady ochrany.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Elektrick\u00fd proud je nebezpe\u010dn\u00fd ji\u017e od 30 mA - m\u016f\u017ee zp\u016fsobit srde\u010dn\u00ed fibrilaci. Nebezpe\u010d\u00ed z\u00e1vis\u00ed na proudu, ne na nap\u011bt\u00ed. Nap\u011bt\u00ed nad 50 V AC (nebo 120 V DC) se pova\u017euje za \u017eivotuNebezpe\u010dn\u00e9.",
        note: "Vlhk\u00e1 k\u016f\u017ee v\u00fdrazn\u011b sni\u017euje odpor t\u011bla, \u010d\u00edm\u017e zvy\u0161uje nebezpe\u010d\u00ed.",
      },
      {
        type: "slider",
        question: "Od jak\u00e9ho proudu hroz\u00ed srde\u010dn\u00ed fibrilace?",
        min: 0,
        max: 200,
        step: 10,
        unit: "mA",
        correctValue: 30,
        tolerance: 10,
        explanation:
          "Proud 30-50 mA m\u016f\u017ee vyvolat srde\u010dn\u00ed fibrilaci. Proto se pou\u017e\u00edvaj\u00ed proudov\u00e9 chr\u00e1ni\u010de (FI/RCD) s vyp\u00ednac\u00edm proudem 30 mA.",
      },
      {
        type: "select-answer",
        question: "Co je to proudov\u00fd chr\u00e1ni\u010d (FI/RCD)?",
        choices: [
          { id: "a", text: "Za\u0159\u00edzen\u00ed, kter\u00e9 odpoj\u00ed obvod p\u0159i \u00faniku proudu" },
          { id: "b", text: "Pojistka proti zkratu" },
          { id: "c", text: "Stabiliz\u00e1tor nap\u011bt\u00ed" },
          { id: "d", text: "P\u0159ep\u011b\u0165ov\u00e1 ochrana" },
        ],
        correctId: "a",
        explanation:
          "FI/RCD detekuje rozd\u00edl mezi proudem v f\u00e1zov\u00e9m a nulov\u00e9m vodi\u010di. Pojistka chr\u00e1n\u00ed proti nadproudu, ne p\u0159ed \u00farazem.",
      },
      {
        type: "order",
        instruction: "Se\u0159a\u010fte kroky prvn\u00ed pomoci p\u0159i z\u00e1sahu elektrick\u00fdm proudem:",
        items: [
          "Odpojit zdroj proudu (vyp\u00edna\u010d, jisti\u010d)",
          "Ov\u011b\u0159it, \u017ee nen\u00ed nebezpe\u010d\u00ed pro zachr\u00e1nce",
          "Zavolat z\u00e1chrannou slu\u017ebu",
          "Zah\u00e1jit resuscitaci, pokud neD\u00fdch\u00e1",
        ],
        explanation:
          "Nejprve bezpe\u010dnost zachr\u00e1nce, pak odpojit proud, volat pomoc, poskytovat prvn\u00ed pomoc.",
      },
      {
        type: "reveal",
        prompt: "Pro\u010d se pou\u017e\u00edv\u00e1 ochrann\u00e9 uzemn\u011bn\u00ed kovov\u00fdch \u010d\u00e1st\u00ed za\u0159\u00edzen\u00ed?",
        answer:
          "Aby p\u0159i poruše izolace tekl proud do zem\u011b a vyp\u00e1dnul jisti\u010d, m\u00edsto aby protékal t\u011blem \u010dlov\u011bka.",
        explanation:
          "Bez uzemn\u011bn\u00ed by se kovov\u00fd kryt dostal na nebezpe\u010dn\u00e9 nap\u011bt\u00ed a p\u0159i dotyku by proud proch\u00e1zel t\u011blem.",
      },
      {
        type: "exam-question",
        questionId: "T-SAF-001",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte v\u0161echna spr\u00e1vn\u00e1 bezpe\u010dnostn\u00ed pravidla:",
        pool: [
          { text: "Pracovat na za\u0159\u00edzen\u00ed a\u017e po odpojen\u00ed od s\u00edt\u011b", correct: true },
          { text: "Pou\u017e\u00edvat proudov\u00fd chr\u00e1ni\u010d v d\u00edln\u011b", correct: true },
          { text: "Vyb\u00edt kondenz\u00e1tory p\u0159ed prac\u00ed na za\u0159\u00edzen\u00ed", correct: true },
          { text: "Pracovat jednou rukou za z\u00e1dy", correct: true },
          { text: "M\u011b\u0159it nap\u011bt\u00ed p\u0159\u00edmo prsty", correct: false },
        ],
        explanation:
          "Pr\u00e1ce jednou rukou za z\u00e1dy br\u00e1n\u00ed pr\u016fchodu proudu p\u0159es srdce. M\u011b\u0159en\u00ed prsty je \u017eivotuNebezpe\u010dn\u00e9.",
      },
    ],
    relatedQuestionIds: [
      "T-SAF-001",
      "T-SAF-002",
      "T-SAF-003",
      "T-SAF-004",
      "T-SAF-005",
      "T-SAF-006",
    ],
    tags: ["bezpecnost", "uraz-proudem", "uzemneni", "analyze"],
  },
  {
    id: "safety-02",
    examPartId: "technical",
    sectionId: "safety",
    order: 2,
    title: "Bezpe\u010dnost ant\u00e9n a RF z\u00e1\u0159en\u00ed",
    objective:
      "Zajistit bezpe\u010dnou instalaci ant\u00e9n a minimalizovat expozici RF z\u00e1\u0159en\u00ed.",
    estimatedMinutes: 5,
    slides: [
      {
        type: "explain",
        content:
          "Ant\u00e9ny na st\u0159e\u0161e nebo sto\u017e\u00e1ru p\u0159edstavuj\u00ed riziko p\u00e1du a \u00faderu blesku. St\u00e1n\u00edm bl\u00edzko vys\u00edlac\u00ed ant\u00e9n\u011b se \u010dlov\u011bk vystavuje RF z\u00e1\u0159en\u00ed, kter\u00e9 m\u016f\u017ee zp\u016fsobit tep\u0165eln\u00e9 po\u0161kozen\u00ed tk\u00e1n\u00ed.",
      },
      {
        type: "select-answer",
        question: "Pro\u010d mus\u00ed b\u00fdt ant\u00e9nn\u00ed sto\u017e\u00e1r uzemn\u011bn?",
        choices: [
          { id: "a", text: "Jako ochrana p\u0159ed \u00faderem blesku" },
          { id: "b", text: "Pro lep\u0161\u00ed p\u0159\u00edjem" },
          { id: "c", text: "Pro sn\u00ed\u017een\u00ed PSV" },
          { id: "d", text: "Pro zv\u00fd\u0161en\u00ed v\u00fdkonu" },
        ],
        correctId: "a",
        explanation:
          "Uzemn\u011bn\u00ed sto\u017e\u00e1ru svede energii blesku do zem\u011b. Neovliv\u0148uje v\u00fdkon ani PSV.",
      },
      {
        type: "fill-blank",
        textBefore: "P\u0159ed pr\u00e1c\u00ed na ant\u00e9n\u011b je nutn\u00e9",
        blank: "odpojit vys\u00edla\u010d a vyb\u00edt kondenz\u00e1tory",
        distractors: [
          "zv\u00fd\u0161it v\u00fdkon na maximum",
          "p\u0159epnout na jin\u00e9 p\u00e1smo",
          "zkontrolovat PSV",
        ],
        textAfter: ".",
        explanation:
          "Na ant\u00e9nn\u00edm vedení m\u016f\u017ee b\u00fdt nebezpe\u010dn\u00e9 VF nap\u011bt\u00ed, zvl\u00e1\u0161t\u011b p\u0159i v\u00fdsok\u00e9m PSV.",
      },
      {
        type: "reveal",
        prompt: "Co je to SAR a jak souvis\u00ed s RF bezpe\u010dnost\u00ed?",
        answer:
          "SAR (Specific Absorption Rate) ud\u00e1v\u00e1 mno\u017estv\u00ed RF energie absorbovan\u00e9 t\u011blem. M\u011b\u0159\u00ed se ve W/kg.",
        explanation:
          "Limity SAR chr\u00e1n\u00ed p\u0159ed tepeln\u00fdm po\u0161kozen\u00edm tk\u00e1n\u00ed vysoko\u017efrekven\u010dn\u00edm z\u00e1\u0159en\u00edm.",
      },
      {
        type: "match",
        instruction: "P\u0159i\u0159a\u010fte riziko k p\u0159\u00edslu\u0161n\u00e9mu opat\u0159en\u00ed:",
        pairs: [
          { left: "\u00dader blesku", right: "Uzemn\u011bn\u00ed sto\u017e\u00e1ru + bleskosvod" },
          { left: "P\u00e1d ant\u00e9ny", right: "Bezpe\u010dn\u00e9 kotven\u00ed a \u00fa\u010deln\u00e9 lano" },
          { left: "RF expozice", right: "Dostate\u010dn\u00e1 vzd\u00e1lenost od ant\u00e9ny" },
          { left: "VF pop\u00e1len\u00ed", right: "Odpojit vys\u00edla\u010d p\u0159ed manipulac\u00ed" },
        ],
      },
      {
        type: "highlight",
        instruction: "Vyberte situace, kdy je RF expozice nebezpe\u010dn\u00e1:",
        terms: [
          { text: "St\u00e1n\u00ed pod Yagi p\u0159i vys\u00edl\u00e1n\u00ed 100 W", correct: true },
          { text: "Poslouch\u00e1n\u00ed na p\u0159ij\u00edma\u010di", correct: false },
          { text: "Dotyk ant\u00e9ny p\u0159i vys\u00edl\u00e1n\u00ed", correct: true },
          { text: "Pou\u017e\u00edv\u00e1n\u00ed handheldu u hlavy na plný v\u00fdkon", correct: true },
          { text: "Ant\u00e9na na sto\u017e\u00e1ru 10 m nad zem\u00ed", correct: false },
        ],
        explanation:
          "P\u0159ij\u00edma\u010d nevys\u00edl\u00e1. Ant\u00e9na vysoko na sto\u017e\u00e1ru je dostate\u010dn\u011b daleko od lid\u00ed.",
      },
      {
        type: "exam-question",
        questionId: "T-SAF-007",
      },
      {
        type: "pool-pick",
        instruction: "Vyberte spr\u00e1vn\u00e1 pravidla pro instalaci ant\u00e9n:",
        pool: [
          { text: "Udr\u017eovat vzd\u00e1lenost od elektrick\u00e9ho veden\u00ed", correct: true },
          { text: "Uzemnit sto\u017e\u00e1r", correct: true },
          { text: "Instalovat za bou\u0159ky pro lep\u0161\u00ed podmínky", correct: false },
          { text: "Pou\u017e\u00edt bleskojistku na koaxi\u00e1ln\u00edm kabelu", correct: true },
          { text: "Pracovat v\u017edy ve dvou lid\u00ed", correct: true },
        ],
        explanation:
          "Instalace za bou\u0159ky je \u017eivotuNebezpe\u010dn\u00e1 - riziko \u00faderu blesku.",
      },
    ],
    relatedQuestionIds: [
      "T-SAF-007",
      "T-SAF-008",
      "T-SAF-009",
      "T-SAF-010",
      "T-SAF-011",
      "T-SAF-012",
    ],
    tags: ["bezpecnost", "anteny", "blesk", "rf-expozice", "analyze"],
  },
];
