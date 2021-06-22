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
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
    back: Array<{
        date: number;
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
    arms: Array<{
        date: number;
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
    triceps: Array<{
        date: number;
        name: string;
        load: number;
        sets: number;
        reps: number;
        done: boolean;
        note: string;
    }>;
    biceps: Array<{
        date: number;
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
    legs: Array<{
        date: number;
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
    calfes: Array<{
        date: number;
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
    abs: Array<{
        date: number;
        name: string;
        sets: number;
        reps: number;
        load: number;
        done: boolean;
        note: string;
    }>;
}
