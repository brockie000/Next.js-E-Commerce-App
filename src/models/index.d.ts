import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderedItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrdersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OrderedItems {
  readonly id: string;
  readonly name?: string;
  readonly size?: string;
  readonly price?: number;
  readonly quantity?: number;
  readonly ordersID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderedItems, OrderedItemsMetaData>);
  static copyOf(source: OrderedItems, mutator: (draft: MutableModel<OrderedItems, OrderedItemsMetaData>) => MutableModel<OrderedItems, OrderedItemsMetaData> | void): OrderedItems;
}

export declare class Orders {
  readonly id: string;
  readonly items?: number;
  readonly price?: number;
  readonly ordered?: boolean;
  readonly OrderedItems?: (OrderedItems | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Orders, OrdersMetaData>);
  static copyOf(source: Orders, mutator: (draft: MutableModel<Orders, OrdersMetaData>) => MutableModel<Orders, OrdersMetaData> | void): Orders;
}

export declare class Products {
  readonly id: string;
  readonly name?: string;
  readonly slug?: string;
  readonly categories?: (string | null)[];
  readonly image?: (string | null)[];
  readonly price?: number;
  readonly description?: string;
  readonly sizes?: (string | null)[];
  readonly colours?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}