import { ITransaction, TransactionEntity } from "../entity/transactions.entity";

export interface ITransactionRepository {
    getAll(): Promise<ITransaction[]>
    getById(id: string): Promise<ITransaction | null>
    create(dto: TransactionEntity): Promise<ITransaction>
    delete(id: string): Promise<ITransaction | null>
    
}
