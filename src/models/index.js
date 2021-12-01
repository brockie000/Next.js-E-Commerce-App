// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrderedItems, Orders, Products } = initSchema(schema);

export {
  OrderedItems,
  Orders,
  Products
};