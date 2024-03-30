type TProduct = {
  _id: string;
  title: string;
  description: string;
  dimension: string;
  price: number;
  photo: string;
  category: string;
  promotion: boolean;
  promPrice: number;
};

type TProductsArr = TProduct[];

type TFavoritesArr = Pick<TProduct, '_id' | 'category'>[];

type TInfo = {
  address?: string | undefined;
  comment?: string;
  delivery: boolean;
  name: string;
  number: string;
};

type TOrdered = Pick<TCartItem, 'title' | 'quantity'>[];

type TSummaryOrder = {
  customerInfo: TInfo;
  order: TOrdered;
  orderSum: number;
};

type TCartItem = {
  _id: string;
  photo: string;
  quantity: number;
  title: string;
  totalPrice: number;
};

type TCart = CartItem[];

type TProductItem = {
  _id: string;
  totalQuantity: number;
  promotion: boolean;
  totalPrice: number;
  totalPromPrice: number;
};

type TAddToCart = (
  _id: string,
  totalQuantity: number,
  promotion: boolean,
  totalPrice: number,
  TotalPromPrice: number
) => void;

type TResponse = {
  code: number;
  status: string;
  data: {
    result: TProductsArr;
  };
};

type ApiResponse = {
  data: {
    location: {
      name: string;
    };
    forecast: {
      forecastday: {
        date: string;
        day: {
          avgtemp_c: string;
          condition: {
            text: string;
            icon: string;
          };
        };
      }[];
    };
  };
};

type FilteredApiResponse = {
  date: string;
  day: {
    avgtemp_c: string;
    condition: {
      text: string;
      icon: string;
    };
  };
}[];

interface ForecastDay {
  date: string;
  avgtemp: string;
  conditionText: string;
  icon: string;
}

type Forecast = ForecastDay[];
