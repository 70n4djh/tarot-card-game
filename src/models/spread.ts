export interface Layout {
  legends: SpreadLegend[][];
}
export interface SpreadLegend {
  description: string;
  meaning: string;
  index: number;
}
export enum SpreadCategory {
  LOVE,
  CAREER,
  DECISION,
}

export class Spread {
  layout: Layout; // grid system 5*5
  size: number;
  description!: string;
  title: string;
  category: SpreadCategory;

  constructor(
    size: number,
    layout: Layout,
    title: string,
    description: string,
    category: SpreadCategory
  ) {
    this.size = size;
    this.layout = layout;
    this.title = title;
    this.description = description;
    this.category = category;
  }
}

export class Spreads {
    spreads: Spread[] = [];

    constructor() {
        const layout: SpreadLegend[][] = new Array(5).fill(undefined).map(row => Array(5));
        layout[1][0] = {
            index: 1,
            meaning: "If Yes",
            description: ""
        }
        layout[1][2] = {
            index: 2,
            meaning: "If No",
            description: ""
        }
        layout[1][4] = {
            index: 3,
            meaning: "Guidance",
            description: ""
        }
        const spread = new Spread(
          3,
          {
            legends: layout,
          },
          "Yes or No",
          "Most of the time, yes or no questions are asked from a place of anxiety, and one way of dealing with anxiety is to envision the scenarios that could happen and face them head on. Sometimes what we consider the most terrifying thing may not be so scary at all, and what we wanted to happen may be something that isn’t very good for us.",
          SpreadCategory.DECISION
        );

        this.spreads[0] = spread;

    }
}
