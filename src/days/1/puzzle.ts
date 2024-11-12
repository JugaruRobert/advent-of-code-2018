import { numberSum } from '../../helpers/number-sum';
import { parseIntoNumbers } from '../../helpers/parse-into-numbers';
import Puzzle from '../../types/abstract-puzzle';
import { PuzzleResult } from '../../types/puzzle.types';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzleResult {
    return numberSum(parseIntoNumbers(this.input));
  }

  public solveSecond(): PuzzleResult {
    const numbers = parseIntoNumbers(this.input);
    const unique = new Set();
    let result = 0;

    while (true) {
      for (let i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
        if (unique.has(result)) {
          return result;
        }

        unique.add(result);
      }
    }
  }
}
