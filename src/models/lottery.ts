export class LotterPickGenerator {
  private panelA: number[];
  private panelB: number[];
  panelAPick: number;
  panelBPick: number;

  constructor(
    panelASize: number,
    panelBSize: number,
    panelAPick: number,
    panelBPick: number
  ) {
    this.panelA = LotterPickGenerator.initialArr(panelASize);
    this.panelB = LotterPickGenerator.initialArr(panelBSize);
    this.panelAPick = panelAPick;
    this.panelBPick = panelBPick;
  }

  private static initialArr(size: number): number[] {
    return [...Array(size).keys()].map((i) => i + 1);
  }

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private swap(arr: number[], i: number, j: number) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  private shuffle(arr: number[]) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      let nextIdx = this.random(i, len);
      this.swap(arr, i, nextIdx);
    }
  }

  private generatePicks(arr: number[], num: number): number[] {
    this.shuffle(arr);
    const len = arr.length;
    let result: number[] = [],
      picked: number[] = [];

    for (let i = 0; i < num; i++) {
      let curIdx = this.random(0, len);
      while (picked.includes(arr[curIdx])) {
        curIdx = this.random(0, len);
      }
      result.push(arr[curIdx]);
      picked.push(arr[curIdx]);
    }

    return result;
  }

  generateLottery(): string {
    const panelAPicks = this.generatePicks(this.panelA, this.panelAPick),
      panelBPicks = this.generatePicks(this.panelB, this.panelBPick);
    return `${panelAPicks} [${panelBPicks}]`;
  }
}

// let lp = new LotterPickGenerator(69, 26, 5, 1);
// let picks = lp.generateLottery();
