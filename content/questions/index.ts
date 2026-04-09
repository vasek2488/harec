import type { Question } from "@/lib/types";
import { technicalTheoryQuestions } from "./technical-theory";
import { technicalComponentsQuestions } from "./technical-components";
import { technicalCircuitsQuestions } from "./technical-circuits";
import { technicalReceiversQuestions } from "./technical-receivers";
import { technicalTransmittersQuestions } from "./technical-transmitters";
import { technicalAntennasQuestions } from "./technical-antennas";
import { technicalPropagationQuestions } from "./technical-propagation";
import { technicalMeasurementsQuestions } from "./technical-measurements";
import { technicalInterferenceQuestions } from "./technical-interference";
import { technicalSafetyQuestions } from "./technical-safety";
import { operatingPrefixesQuestions } from "./operating-prefixes";
import { operatingFrequenciesQuestions } from "./operating-frequencies";
import { operatingSkillsQuestions } from "./operating-skills";
import { operatingPhoneticQuestions } from "./operating-phonetic";
import { operatingQCodesQuestions } from "./operating-q-codes";
import { operatingAbbreviationsQuestions } from "./operating-abbreviations";
import { regulationsItuQuestions } from "./regulations-itu";
import { regulationsCeptQuestions } from "./regulations-cept";
import { regulationsCzechLawQuestions } from "./regulations-czech-law";

export const questions: Question[] = [
  ...technicalTheoryQuestions,
  ...technicalComponentsQuestions,
  ...technicalCircuitsQuestions,
  ...technicalReceiversQuestions,
  ...technicalTransmittersQuestions,
  ...technicalAntennasQuestions,
  ...technicalPropagationQuestions,
  ...technicalMeasurementsQuestions,
  ...technicalInterferenceQuestions,
  ...technicalSafetyQuestions,
  ...operatingPrefixesQuestions,
  ...operatingFrequenciesQuestions,
  ...operatingSkillsQuestions,
  ...operatingPhoneticQuestions,
  ...operatingQCodesQuestions,
  ...operatingAbbreviationsQuestions,
  ...regulationsItuQuestions,
  ...regulationsCeptQuestions,
  ...regulationsCzechLawQuestions,
];
