import getPriceItem from "~/utils/getPriceItem";
import type { Result, Product } from "~/data/interfaces";
import { v4 as uuidv4 } from "uuid";
import { verticals } from "~/data/selectFieldData";

export default function createResultElement(item: any) {
  const results = useResultsStore().results;
  const product: Product = getPriceItem(item.type);
  if (verticals.includes(item.type)) {
    const newPrice = (product.price * item.height) / 100;
    product.price = +newPrice.toFixed(2);
  }

  const totalPrice = product.price * item.quantity;
  const totalCost = product.cost * item.quantity;
  const profit = totalPrice - totalCost;
  const margin = (Math.round((profit / totalPrice) * 10000) / 100).toFixed(2);

  const resultData: Result = {
    id: uuidv4(),
    type: item.type,
    quantity: item.quantity,
    color: item.color || "",
    height: item.height || 0,
    space: item.space || 0,
    twoSided: item.twoSided || "",
    direction: item.direction || "",
    seeThrough: item.seeThrough || "",
    price: product.price || 0,
    totalPrice: totalPrice,
    cost: product.cost || 0,
    totalCost: totalCost,
    profit: profit,
    margin: +margin,
    isNew: false,
    category: "",
  };

  results.push(resultData);
}
