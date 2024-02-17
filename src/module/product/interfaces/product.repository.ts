import { IProductQueryDto } from "../validation/query.dto";
import { IProduct, ProductEntity } from "../entity/product.entity";
export interface IProductRepository {
  getOneById(id: string): Promise<IProduct | null>;
  delete(id: string): Promise<IProduct | null>;
  getAll(query: IProductQueryDto): Promise<IProduct[]>;
  insert(entity: ProductEntity): Promise<IProduct>;
  update(id: string, entity: IProduct): Promise<IProduct | null>;
}
