export interface BodyParts {
    chest: string[];
    back: string[];
    arms: string[];
    triceps: string[];
    biceps: string[];
    legs: string[];
    calfes: string[];
    abs: string[];
}

export interface BodyPartsDetails {
    chest: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    back: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    arms: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    triceps: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    biceps: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    legs: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    calfes: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
    abs: Array<{
        date: number;
        done: boolean;
        load: number;
        note: string;
    }>;
}
