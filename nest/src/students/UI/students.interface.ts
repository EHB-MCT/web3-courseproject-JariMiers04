import {Document} from 'mongoose';

export interface Istudents extends Document {
    readonly ID: number;
    readonly Name: string;
    readonly Color: string;
    readonly Eyes: string;
    readonly EyeType: string;
}