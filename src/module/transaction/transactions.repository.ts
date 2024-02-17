import { ITransaction, TransactionEntity, TransactionModel } from "./entity/transactions.entity";
import { ITransactionRepository } from "./interfaces/transactions.repository";

export class TransactionRepository implements ITransactionRepository
{
  async getAll(): Promise<ITransaction[]> {
    const transactions: ITransaction[] = await TransactionModel.find().populate(["user_id", "product_id"]);

    return transactions;
  }

  async getById(id: string): Promise<ITransaction | null> {
    const foundTransactionById = await TransactionModel.findById(id).populate(["user_id", "product_id"]);

    return foundTransactionById;
  }

  async create(dto: TransactionEntity): Promise<ITransaction> {
    const newTransaction = new TransactionModel(dto);

    const createdTransaction = await newTransaction.save();

    return createdTransaction;
  }

  async delete(id: string): Promise<ITransaction | null> {
    return await TransactionModel.findByIdAndDelete(id);
  }
}
