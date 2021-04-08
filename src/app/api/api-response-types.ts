import { Statistics } from '../_classes/statistics';

export type ResponseStates = {
    features: {
        attributes: {
            Bundesland: string;
            IdBundesland: number;
        }
    }[],
    fields: any[];
};

export type ResponseStatistics = {
    features: {
        attributes: Statistics
    }[],
    fields: any[];
};
