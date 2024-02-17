import { ResonseData } from "../../../common/resData";
import { ITransaction, TransactionEntity } from "../entity/transactions.entity";
import { CreateTransactionDto } from "../validation/create.dto";

export interface ITransactionService {
    getAll(): Promise<ResonseData<ITransaction[]>>
    getById(id : string): Promise<ResonseData<ITransaction>>
    create(dto : CreateTransactionDto): Promise<ResonseData<ITransaction>>
    delete(id: string): Promise<ResonseData<ITransaction>>
}
