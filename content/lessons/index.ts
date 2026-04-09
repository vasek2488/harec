import type { Lesson } from "@/lib/types";
import { technicalTheoryLessons } from "./technical-theory";
import { technicalComponentsLessons } from "./technical-components";
import { technicalCircuitsLessons } from "./technical-circuits";
import { technicalReceiversLessons } from "./technical-receivers";
import { technicalTransmittersLessons } from "./technical-transmitters";
import { technicalAntennasLessons } from "./technical-antennas";
import { technicalPropagationLessons } from "./technical-propagation";
import { technicalMeasurementsLessons } from "./technical-measurements";
import { technicalInterferenceLessons } from "./technical-interference";
import { technicalSafetyLessons } from "./technical-safety";
import { operatingPrefixesLessons } from "./operating-prefixes";
import { operatingFrequenciesLessons } from "./operating-frequencies";
import { operatingSkillsLessons } from "./operating-skills";
import { operatingPhoneticLessons } from "./operating-phonetic";
import { operatingQCodesLessons } from "./operating-q-codes";
import { operatingAbbreviationsLessons } from "./operating-abbreviations";
import { regulationsItuLessons } from "./regulations-itu";
import { regulationsCeptLessons } from "./regulations-cept";
import { regulationsCzechLawLessons } from "./regulations-czech-law";

export const lessons: Lesson[] = [
  ...technicalTheoryLessons,
  ...technicalComponentsLessons,
  ...technicalCircuitsLessons,
  ...technicalReceiversLessons,
  ...technicalTransmittersLessons,
  ...technicalAntennasLessons,
  ...technicalPropagationLessons,
  ...technicalMeasurementsLessons,
  ...technicalInterferenceLessons,
  ...technicalSafetyLessons,
  ...operatingPrefixesLessons,
  ...operatingFrequenciesLessons,
  ...operatingSkillsLessons,
  ...operatingPhoneticLessons,
  ...operatingQCodesLessons,
  ...operatingAbbreviationsLessons,
  ...regulationsItuLessons,
  ...regulationsCeptLessons,
  ...regulationsCzechLawLessons,
];
