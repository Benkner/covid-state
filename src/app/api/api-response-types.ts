import { Statistics } from '../_classes/statistics';

export type ResponseListStates = {
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
