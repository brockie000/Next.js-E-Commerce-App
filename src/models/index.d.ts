import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Products {
  readonly id: string;
  readonly name?: string;
  readonly slug?: string;
  readonly categories?: (string | null)[];
  readonly image?: string;
  readonly price?: number;
  readonly description?: string;
  readonly sizes?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}