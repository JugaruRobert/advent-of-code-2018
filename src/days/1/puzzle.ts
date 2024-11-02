import Puzzle from '../../types/abstract-puzzle';
import { PuzzleResult } from '../../types/puzzle.types';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): PuzzleResult {
    let result = 0;
    for (const char of this.input) {
      result += char === '(' ? 1 : -1;
    }
    return result;
  }

  public solveSecond(): PuzzleResult {
    let result = 0;
    for (let i = 0; i < this.input.length; i++) {
      result += this.input[i] === '(' ? 1 : -1;
      if (result === -1) {
        return i + 1;
      }
    }

    return -1;
  }
}
