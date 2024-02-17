import { ResonseData } from "../../../common/resData";
import { CreateProductDto } from "../validation/create.dto";
import { IProductQueryDto } from "../validation/query.dto";
import { UpdateProductDto } from "../validation/update.dto";
import { IProduct, ProductEntity } from "../entity/product.entity";

export interface IProductService {
  getAll(query: IProductQueryDto): Promise<ResonseData<IProduct[]>>;
  getOneById(id: string): Promise<ResonseData<IProduct>>;
  create(dto: CreateProductDto): Promise<ResonseData<IProduct>>;
  update(id: string, dto: UpdateProductDto): Promise<ResonseData<IProduct>>;
  delete(id: string): Promise<ResonseData<IProduct>>;
}
