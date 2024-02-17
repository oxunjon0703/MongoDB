import mongoose, { ObjectId, Schema } from "mongoose";
import { CreateTransactionDto } from "../validation/create.dto";

export interface ITransaction {
  user_id: string;
  product_id: string;
  product_count: number;
  total_price: number;
}
export class TransactionEntity {
  _id: ObjectId | undefined;
  user_id: string;
  product_id: string;
  product_count: number;
  constructor(dto: CreateTransactionDto) {
    this.user_id = dto.userId;
    this.product_id = dto.productId;
    this.product_count = dto.productCount;
  }
}

const transactionSchema = new Schema<ITransaction>({
  user_id: {type: String, required: true},
  product_id: {type: String, required: true},
  product_count: {type: Number, required: false},
  total_price: {type: Number, required: false},
});

export const TransactionModel = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema,
  "transactions"
);