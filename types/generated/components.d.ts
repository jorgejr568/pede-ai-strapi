import type { Schema, Attribute } from '@strapi/strapi';

export interface SalesSaleProduct extends Schema.Component {
  collectionName: 'components_sales_sale_products';
  info: {
    displayName: 'SaleItem';
    icon: 'cube';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'sales.sale-product',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    price: Attribute.Decimal & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sales.sale-product': SalesSaleProduct;
    }
  }
}
