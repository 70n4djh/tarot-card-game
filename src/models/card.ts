import {MajorArcana as majors} from "../constants/majorArcana";
import {MinorArcana as minors} from "../constants/minorArcana";

enum TarotSuit {
    WAND = "Wand", CUP = "Cup", SWORD = "Sword", PENTACLE = "Pentacle"
}

export interface Card {
    readonly name: string;
    readonly imageSrc: string;
    isReversed: boolean;
}

export interface MajorArcana extends Card {
    readonly number: number;
}

export interface MinorArcana extends Card {
    readonly rank: number;
    readonly suit: TarotSuit;
    readonly icon: string;
}

function swap(cards: Card[], idx: number, nextIdx: number) {
    let tmpCard = cards[idx];
    cards[idx] = cards[nextIdx];
    cards[nextIdx] = tmpCard;
}

export class Deck {
    cards: Card[];

    constructor() {
        this.cards = this.initialize();
    }

    private initialize(): Card[] {
        let majorArcana: MajorArcana[] = [];
        let wands: MinorArcana[] = [];
        let cups: MinorArcana[] = [];
        let swords: MinorArcana[] = [];
        let pentacles: MinorArcana[] = [];

        majors.forEach((name, index) => majorArcana.push({
            name: name, imageSrc: "", isReversed: false, number: index
        }));

        minors.forEach((name, index) => {
            wands.push({
                imageSrc: "", isReversed: false, name: name, rank: index, suit: TarotSuit.WAND, icon: "🪄"
            });
            cups.push({
                imageSrc: "", isReversed: false, name: name, rank: index, suit: TarotSuit.CUP, icon: "🍸"
            });
            swords.push({
                imageSrc: "", isReversed: false, name: name, rank: index, suit: TarotSuit.SWORD, icon: "⚔️"
            });
            pentacles.push({
                imageSrc: "", isReversed: false, name: name, rank: index, suit: TarotSuit.PENTACLE, icon: "🪙"
            });
        })


        return [...majorArcana, ...wands, ...cups, ...swords, ...pentacles];
    }

    shuffle(): void {
        console.log("shuffling")
        for (let idx = 0; idx < this.cards.length; idx++) {
            let nextIdx = this.getRandomInt(idx, this.cards.length-1);
            this.cards[idx].isReversed = this.getRandom();
            swap(this.cards, idx, nextIdx)
        }
        console.log("shuffled")

    }


    drawCard(index: number): Card {
        return this.cards[index];
    }

    describeCard(card: Card): string {
        if ("suit" in card) {
            let minorCard = card as MinorArcana;
            return `${minorCard.name} of ${minorCard.suit}`;
        } else {
            let majorCard = card as MajorArcana;
            return `${majorCard.name}`;
        }
    }

    displayAll(): string[] {
        let cardList: string[] = [];
        this.cards.forEach(card => cardList.push(this.describeCard(card)));

        return cardList;
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private getRandom(): boolean {
        return Math.random() >= 0.5;
    }


}
