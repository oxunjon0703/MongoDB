import mongoose, { ObjectId, Schema } from "mongoose";
import { CreateProductDto } from "../validation/create.dto";

export interface IProduct {
  name: string;
  price: number;
  count: number;
}

export class ProductEntity implements IProduct {
  _id: ObjectId | undefined;
  name: string;
  price: number;
  count: number;
  constructor(dto: CreateProductDto) {
    this.name = dto.name;
    this.price = dto.price;
    this.count = dto.count;
  }
}

const productSchema = new Schema<IProduct>({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  count: {type: Number, required: true},
});

export const ProductModel = mongoose.model<IProduct>(
  "Product",
  productSchema,
  "products"
);