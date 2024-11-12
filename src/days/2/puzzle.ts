import { splitIntoLines } from '../../helpers/split-into-lines';
import Puzzle from '../../types/abstract-puzzle';
import { PuzzleResult } from '../../types/puzzle.types';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzleResult {
    let twoCount = 0;
    let threeCount = 0;

    const lines = splitIntoLines(this.input);
    for (let word of lines) {
      const letterCounts = this.getLetterCounts(word);
      twoCount += Object.values(letterCounts).some((count) => count === 2)
        ? 1
        : 0;
      threeCount += Object.values(letterCounts).some((count) => count === 3)
        ? 1
        : 0;
    }

    return twoCount * threeCount;
  }

  public solveSecond(): PuzzleResult {
    const lines = splitIntoLines(this.input);
    for (let i = 0; i < lines.length - 1; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        const first = lines[i];
        const second = lines[j];

        if (this.areStringsAlmostTheSame(first, second)) {
          return this.getCommonSubstring(first, second);
        }
      }
    }

    return '';
  }

  private getLetterCounts(word: string) {
    const letterCountMap: Record<string, number> = {};
    for (const letter of word) {
      letterCountMap[letter] = (letterCountMap[letter] ?? 0) + 1;
    }
    return letterCountMap;
  }

  private areStringsAlmostTheSame(first: string, second: string) {
    let diffs = 0;
    if (first.length !== second.length) {
      return false;
    }

    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        diffs++;
      }

      if (diffs > 1) {
        break;
      }
    }

    return diffs === 1;
  }

  private getCommonSubstring(first: string, second: string) {
    let result = '';
    for (let i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        result += first[i];
      }
    }

    return result;
  }
}
