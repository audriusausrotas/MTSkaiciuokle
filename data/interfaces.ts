export interface Response {
  success: boolean;
  data: Project[];
  message: string;
}

export interface Calculations {
  client: Client;
  fences: Fence[];
}

export interface Project {
  _id: string;
  creator: Creator;
  client: Client;
  fenceMeasures: Fence[];
  results: Result[];
  works: Works[];
  gates: Gate[];
  totalPrice: number;
  totalCost: number;
  totalProfit: number;
  totalMargin: number;
  priceVAT: number;
  priceWithDiscount: number;
  discount: boolean;
  confirmed: boolean;
  payed: boolean;
  status: string;
  advance: number;
  orderNumber: string;
  dateCreated: string;
  dateExparation: string;
  files: string[];
}

export interface Client {
  address: string;
  username: string;
  phone: string;
  email: string;
}

export interface Fence {
  id: string;
  side: string;
  type: string;
  color: string;
  material: string;
  services: string;
  seeThrough: string;
  direction: string;
  parts: string;
  aditional: string;
  twoSided: string;
  bindings: string;
  anchoredPoles: string;
  space: number;
  elements: number;
  totalLength: number;
  totalQuantity: number;
  startBinding: string;
  endBinding: string;
  measures: Measure[];
}

export interface Measure {
  length: number;
  height: number;
  MeasureSpace: number;
  elements: number;
  gates: GateInfo;
  kampas: {
    exist: boolean;
    value: number;
    aditional: string;
  };
  laiptas: {
    exist: boolean;
    value: number;
    direction: string;
  };
}

export interface Result {
  id: string;
  type: string;
  price: number;
  cost: number;
  category: string;
  quantity: number;
  height: number;
  twoSided: string;
  direction: string;
  seeThrough: string;
  space: number;
  color: string;
  totalPrice: number;
  totalCost: number;
  profit: number;
  margin: number;
  isNew: boolean;
  width: number | null;
}

export interface MontavimasResult {
  type: string;
  category: string;
  quantity: number;
  height: number;
  twoSided: string;
  direction: string;
  seeThrough: string;
  space: number;
  color: string;
  width: number | null;
}

export interface OtherParts {
  color: string;
  quantity: number;
  height: number;
}

export interface Fences {
  type: string;
  color: string;
  length: number;
  height: number;
  quantity: number;
  elements: number;
  material: string;
  space: number;
  seeThrough: string;
  direction: string;
  twoSided: string;
}

export interface Gate {
  _id: string;
  type: string;
  auto: string;
  width: number;
  height: number;
  color: string;
  filling: string;
  ready: boolean;
  bankette: string;
  direction: string;
  lock: string;
  aditional: string;
  option: string;
}

export interface GateObject {
  vartonas: GateSchema[];
  gigasta: GateSchema[];
}

export interface GateSchema {
  _id: string;
  measure: string;
  client: Client;
  orderNr: string;
  comments: Comment[];
  creator: Creator;
  manager: string;
  gates: Gate[];
  dateCreated: string;
}

export interface Creator {
  username: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface GateInfo {
  exist: boolean;
  type: string;
  automatics: string;
  aditional: string;
  direction: string;
  lock: string;
  bankette: string;
  option: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  username: string;
  lastName: string;
  phone: string;
  verified: boolean;
  accountType: string;
  photo: Photo;
}

export interface Photo {
  id: string;
  url: string;
}

export interface ResponseUser {
  success: boolean;
  data: User;
  message: string;
}
export interface ResponseUsers {
  success: boolean;
  data: User[];
  message: string;
}

export interface ProjectsState {
  projects: Project[];
  archive: Project[];
  filteredProjects: Project[];
  selectedProject: string | null;
  selectedFilter: string;
  selectedStatusFilter: string;
}

export interface ProductsState {
  products: Product[];
  parts: Product[];
  works: Product[];
  searchValue: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  cost: number;
  category: string;
  image: string;
}

export interface Works {
  id: string;
  name: string;
  quantity: number;
  price: number;
  cost: number;
  totalCost: number;
  totalPrice: number;
  margin: number;
  profit: number;
  isNew: boolean;
}

export interface MontavimasWorks {
  name: string;
  quantity: number;
}

export interface ResponseProducts {
  success: boolean;
  data: Product[];
  message: string;
}
export interface ResponseProduct {
  success: boolean;
  data: Product;
  message: string;
}

export interface ResponseProject {
  success: boolean;
  data: Project;
  message: string;
}

export interface MenuLinks {
  name: string;
  link: string;
  iconPath: string;
}

export interface Bonus {
  address: string;
  dateFinished: string;
  price: number;
  cost: number;
  profit: number;
  margin: number;
  bonus: number;
}

export interface FenceMeasure {
  name: string;
  height: number;
  width: number;
  seeThrough: number[];
}

export interface Montavimas {
  _id: string;
  client: Client;
  creator: Creator;
  orderNumber: string;
  worker: string;
  status: string;
  fences: GamybaFence[];
  results: MontavimasResult[];
  works: MontavimasWorks[];
  aditional: Comment[];
}

export interface MontavimasMeasure {
  length: number;
  height: number;
  MeasureSpace: number;
  elements: number;
  gates: GateInfo;
  done: number | undefined;
  postone: boolean;
  kampas: {
    exist: boolean;
    value: number;
    aditional: string;
  };
  laiptas: {
    exist: boolean;
    value: number;
    direction: string;
  };
}

export interface Gamyba {
  _id: string;
  client: Client;
  creator: Creator;
  orderNumber: string;
  status: string;
  fences: GamybaFence[];
  bindings: Bindings[] | null;
  aditional: Comment[];
}

export interface MontavimasFence {
  id: string;
  side: string;
  type: string;
  color: string;
  material: string;
  services: string;
  seeThrough: string;
  direction: string;
  parts: string;
  aditional: string;
  twoSided: string;
  bindings: string;
  anchoredPoles: string;
  space: number;
  elements: number;
  totalLength: number;
  totalQuantity: number;
  measures: MontavimasMeasure[];
}

export interface GamybaFence {
  id: string;
  side: string;
  type: string;
  color: string;
  material: string;
  services: string;
  seeThrough: string;
  direction: string;
  parts: string;
  aditional: string;
  twoSided: string;
  bindings: string;
  anchoredPoles: string;
  space: number;
  elements: number;
  totalLength: number;
  totalQuantity: number;
  measures: GamybaMeasure[];
}

export interface GamybaMeasure {
  length: number;
  height: number;
  MeasureSpace: number;
  elements: number;
  gates: GateInfo;
  cut: number | undefined;
  done: number | undefined;
  postone: boolean;
  kampas: {
    exist: boolean;
    value: number;
    aditional: string;
  };
  laiptas: {
    exist: boolean;
    value: number;
    direction: string;
  };
}

export interface Comment {
  date: string;
  creator: string;
  comment: string;
}

export interface Bindings {
  id: string;
  color: string | undefined;
  height: number | undefined;
  type: string | undefined;
  quantity: number | undefined;
  cut: number | undefined;
  done: number | undefined;
  postone: boolean;
}

export interface Montavimas {
  _id: string;
  client: Client;
  creator: Creator;
}

export interface BindingItem {
  bindings: boolean;
  color: string;
  firstHeight: Measure;
  lastHeight: Measure;
}
