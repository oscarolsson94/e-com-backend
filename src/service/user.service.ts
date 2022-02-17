import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import { UserModel, UserDocument, UserInput } from "../models/user.model";

export const createUser = async (input: UserInput) => {
    try {
        const user = await UserModel.create(input);

        return omit(user.toJSON(), "password");
    } catch (e: any) {
        throw new Error(e);
    }
};
