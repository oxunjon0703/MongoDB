import { ResonseData } from "../../common/resData";
import { CreateProductDto } from "./validation/create.dto";
import { IProductQueryDto } from "./validation/query.dto";
import { UpdateProductDto } from "./validation/update.dto";
import { IProduct, ProductEntity } from "./entity/product.entity";
import { ProductNotFoundException } from "./exception/product.exception";
import { IProductRepository } from "./interfaces/product.repository";
import { IProductService } from "./interfaces/product.service";
import { ProductRepository } from "./product.repository";

export class ProductService implements IProductService {
  private productRepository: IProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAll(query: IProductQueryDto): Promise<ResonseData<IProduct[]>> {
    const products = await this.productRepository.getAll(query);

    return new ResonseData<IProduct[]>("get all product", 200, products);
  }

  async getOneById(id: string): Promise<ResonseData<IProduct>> {
    const foundProduct = await this.productRepository.getOneById(id);

    if (!foundProduct) {
      throw new ProductNotFoundException();
    }

    return new ResonseData<IProduct>("success", 200, foundProduct);
  }

  async create(dto: CreateProductDto): Promise<ResonseData<IProduct>> {
    const newProduct: ProductEntity = new ProductEntity(dto);

    const createdProduct = await this.productRepository.insert(newProduct);

    return new ResonseData<IProduct>("created", 201, createdProduct);
  }

  async update(
    id: string,
    dto: UpdateProductDto
  ): Promise<ResonseData<IProduct>> {
    const foundProductByIdResponse: ResonseData<IProduct> =
      await this.getOneById(id);

    const foundProduct = foundProductByIdResponse.data as IProduct;

    const updatedProductData = Object.assign(foundProduct, dto);

    const updatedProduct = await this.productRepository.update(
      id,
      updatedProductData
    );

    return new ResonseData<IProduct>("updated", 200, updatedProduct);
  }

  async delete(id: string): Promise<ResonseData<IProduct>> {
    const foundProduct = await this.productRepository.getOneById(id);

    if (!foundProduct) {
      throw new ProductNotFoundException();
    }

    await this.productRepository.delete(id);

    return new ResonseData<IProduct>("success", 200, foundProduct);
  }
}
