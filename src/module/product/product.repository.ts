import { IProductQueryDto } from "./validation/query.dto";
import { IProduct, ProductEntity, ProductModel } from "./entity/product.entity";
import { IProductRepository } from "./interfaces/product.repository";

export class ProductRepository implements IProductRepository {
  async getAll(query: IProductQueryDto) {
    const searchQuery = query.name ? `%${query.name}%` : "%%";

    const product: IProduct[] = await ProductModel.find();

    return product;
  }

  async getOneById(id: string): Promise<IProduct | null> {
    const foundProductById = await ProductModel.findById(id);

    return foundProductById;
  }

  async insert(entity: ProductEntity): Promise<IProduct> {
    const newProduct = new ProductModel(entity);

    const createdProduct = await newProduct.save();

    return createdProduct;
  }

  async update(id: string, entity: IProduct): Promise<IProduct | null> {
    return await ProductModel.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id: string): Promise<IProduct | null> {
    return await ProductModel.findByIdAndDelete(id);
  }
}
