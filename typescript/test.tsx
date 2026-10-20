// Звичайні типи
const userName: string = "S1monsy";
const age: number = 21;
const isDeveloper: boolean = true;

// Type inference
const city = "Zachepilovka";
const expience = 2;
const isLearingTypeScript = true;

// Arrays with types

const technologies: string[] = ["Java", "React"];

// Type inference with arrays
const scores = [11, 44, 33];

scores.push(81);

// Objects
const product: {
  name: string;
  price: number;
  isDeveloper: boolean;
} = {
  name: "Laptop",
  price: 1400,
  isDeveloper: true,
};

const game = {
  title: "Asassin's creed Unity",
  rating: 8.5,
  isMultiolayer: false,
};

game.rating = 9;

// type

type Game = {
  title: string;
  rating: number;
  isOnline: boolean;
};

const game1: Game = {
  title: "Asassin's creed Black Flag",
  rating: 9,
  isOnline: false,
};

const games: Game[] = [
  {
    title: "Game 1",
    rating: 6,
    isOnline: false,
  },
  {
    title: "Game 2",
    rating: 10,
    isOnline: true,
  },
];

// interface

interface Product4 {
  name: string;
  price: number;
}

const product1: Product4 = {
  name: "Shirt",
  price: 120,
};

interface DigitalProduct extends Product4 {
  downloadSize: number;
}

const game2: DigitalProduct = {
  name: "Cyberpunk 2077",
  price: 60,
  downloadSize: 70,
};

// Union types and Literal types

let userId: string | number;

userId = 11;
userId = "12";

type Theme = "light" | "dark";
const currentTheme: Theme = "dark";

// Function Type

function sum(a: number, b: number): number {
  return a + b;
}

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

// Optional

interface User1 {
  name: string;
  age: number;
  email?: string;
}

const user1: User1 = {
  name: "Bohdan",
  age: 21,
};

const user2: User1 = {
  name: "Denys",
  age: 21,
  email: "Test@gmail.com",
};

function createUser(name: string, age?: number): void {
  console.log(name, age);
}

// ReadOnly

interface Product5 {
  readonly id: number;
  name: string;
  price: number;
}

const product3: Product5 = {
  id: 21,
  name: "PC",
  price: 2000,
};

product3.name = "Phone";

// Narrowing

function formatId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toFixed(2);
  }
}

type User = {
  name: string;
  email?: string;
};

function printEmail(user: User): void {
  if (user.email) console.log(user.email);
  else console.log("No Email");
}

const userInfo: [string, number, boolean] = ["Denys", 21, true];

// any && unknown

let data1: any = "hello";
data1 = 25;

let value: unknown = "typescript";

if (typeof value === "string") value.toUpperCase();

// null and undefined

let currentUser: string | null = null;

currentUser = "Denys";

let message: string | null = null;

message = "hello";

if (message !== null) {
  message.toUpperCase();
}

// Intersection Types &

type Person = {
  name: string;
  age: number;
};

type Employer = {
  company: string;
};

type Worker1 = Person & Employer;

const Denys: Worker1 = {
  name: "Denys",
  age: 21,
  company: "Freelancing",
};

// Type Assertions as

let data: unknown = "TypeScript";
const text = data as string;
text.toUpperCase();

// enum

enum UserRole {
  User = "USER",
  Admin = "ADMIN",
  Moderator = "MODERATOR",
}

const role: UserRole = UserRole.Admin;

enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

// const status: OrderStatus = OrderStatus.Pending;

// Generics

function identity<T>(value: T): T {
  return value;
}

const identity1 = identity<string>("Hello");
const identity2 = identity(14);

function getFirst<T>(items: T[]): T {
  return items[0];
}

getFirst(["React", "TypeScript"]);
getFirst([10, 20, 30]);

// Generic Constraints

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("TypeScript");
getLength([1, 2, 3, 4]);

function getId<T extends { id: number }>(item: T): number {
  return item.id;
}

const obj = {
  name: "Denys",
  id: 11,
  isPlayer: true,
  isDeveloper: true,
};

getId(obj);

// Keyof

const something = {
  name: "Denys",
  age: 21,
  dude: true,
};

function getSomething<T>(obj: T, key: keyof T) {
  return obj[key];
}

type Product6 = {
  name: string;
  price: number;
  isAvailable: boolean;
};

type ProductKey = keyof Product6;

const key1: ProductKey = "price";
const key2: ProductKey = "name";
const key3: ProductKey = "isAvailable";

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Denys",
  age: 21,
};

getProperty(user, "age");
getProperty(user, "name");

// Indexed Access Types T[K]

type Product7 = {
  title: string;
  price: number;
  isStock: boolean;
};

type TitleType = Product7["title"]; // string
type PriceType = Product7["price"]; // number

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Utility Type Partial Partial<T>

type Product = {
  title: string;
  price: number;
  isAvailable: boolean;
};

const updateProduct: Partial<Product> = {
  price: 150,
};

function updateProduct1(data: Partial<Product>): void {
  console.log(data);
}

updateProduct1({ title: "Something" });

// Utility Type Required Required<T>

type AppPreferences = {
  colorScheme?: string;
  fontSize?: number;
  soundsEnable?: boolean;
};

const fullPreferences: Required<AppPreferences> = {
  colorScheme: "blue",
  fontSize: 11,
  soundsEnable: true,
};

type ProfileOptions = {
  nickName?: string;
  avatarUrl?: string;
};

type FinishedProfile = Required<ProfileOptions>;

const fullProfileData: FinishedProfile = {
  nickName: "s1monsy",
  avatarUrl: "dsadjsaidjasidsajdsad.jpg",
};

// Utility Type Readonly Readonly<T>

type PaymentDetaild = {
  method: string;
  amount: number;
  currency: string;
};

const paymentRecord: Readonly<PaymentDetaild> = {
  method: "Buy",
  amount: 100000,
  currency: "USD",
};

type CharacterStats = {
  health: number;
  mana: number;
  level: number;
};

type FrozenCharacterStats = Readonly<CharacterStats>;

const character1: FrozenCharacterStats = {
  health: 100,
  mana: 1000,
  level: 10,
};

// Utility Type Pick Pick<T, K>

type CourseData = {
  id: number;
  title: string;
  price: number;
  duration: number;
  author: string;
};

type CoursePreview = Pick<CourseData, "title" | "price">;

const preview: CoursePreview = {
  title: "TypeScript Course",
  price: 120,
};

type MovieDetails = {
  title: string;
  year: number;
  rating: number;
  description: string;
};

type MoviePreview = Pick<MovieDetails, "title" | "rating">;

// Utility Type Omit Omit<T, K>

type StoreItemData = {
  id: number;
  title: string;
  price: number;
  secretCode: string;
};

type PublicStoreItem = Omit<StoreItemData, "secretCode">;

const item: PublicStoreItem = {
  id: 11,
  title: "Phone",
  price: 1200,
};

type PlayerProfileData = {
  nickname: string;
  level: number;
  email: string;
  password: string;
  token: string;
};

type PublucProfileData = Omit<PlayerProfileData, "password" | "token">;

// Utility Type Record Record<K, V>

type LanguageRatingMap = Record<string, number>;

const languageRatings: LanguageRatingMap = {
  TypeScript: 2,
  JavaScript: 1,
  Python: 3,
};

type AccessRole = "guest" | "user" | "admin";

type AccessLevels = Record<AccessRole, number>;

const accessLevels: AccessLevels = {
  guest: 1,
  user: 2,
  admin: 3,
};

// Utility Type  Exclude Exlude<T, U> (For Union Types)

type DeliveryState = "pending" | "shipping" | "delivered" | "cancelled";

type ActiveDeliveryState = Exclude<DeliveryState, "delivered" | "cancelled">;

type DevicePlatform = "ios" | "android" | "windows" | "macos";

type MobilePlatform = Exclude<DevicePlatform, "windows" | "macos">;

// Utility Type Extract Extract <T, U> (For Union Types)

type NotificationChannel = "email" | "sms" | "push" | "telegram";

type PhoneNotificationChannel = Extract<NotificationChannel, "sms" | "push">;

type SupportedFormat = "jpg" | "png" | "mp4" | "mp3" | "pdf";

type ImageFormat = Extract<SupportedFormat, "jpg" | "png">;

// Utility Type ReturnType ReturnType<typeof someFunction>;

function buildGameInfo() {
  return {
    title: "Cyberpunk",
    rating: 9,
  };
}

type GameInfoResult = ReturnType<typeof buildGameInfo>;

function calculateTotal() {
  return 1500;
}

type TotalResult = ReturnType<typeof calculateTotal>;

//Utility Type Parameters Parametes<typeof someFunction> returns tuple

function sendGameInvite(username: string, gameId: number, isPrivate: boolean): void {
  console.log(username, gameId, isPrivate);
}

type GameInviteParams = Parameters<typeof sendGameInvite>;

const inviteArgs: GameInviteParams = ["The Witcher", 11, true];

// Utility type NonNullable NonNullable<T>

type SearchValue = string | null | undefined;

type ValidSearchVakue = NonNullable<SearchValue>;

// type ValidSeacrhVakue = string

type SessionId = number | string | null | undefined;

type ActiveSessionId = NonNullable<SessionId>;

// Utility type Awaited Awaited<T>

type DownloadResult = Promise<string>;

type DownloadedData = Awaited<DownloadResult>;

//type DownloadedData = string

async function loadPlayerScore() {
  return 1500;
}

type PlayerScorePromise = ReturnType<typeof loadPlayerScore>; // Promise<number>

type PlayerScore = Awaited<PlayerScorePromise>; // number

// typeof in TypeScript

const weaponConfig = {
  name: "Katana",
  damage: 85,
  legendary: true,
};

type WeaponConfigType = typeof weaponConfig;

const maxPlayers = 32;
type MaxPlayersType = typeof maxPlayers;

// as const

const apiConfig = {
  method: "GET",
  timeout: 5000,
} as const;

type ApiConfigType = typeof apiConfig;

// type ApiConfigType = {
//  readonly method: "GET";
//  readonly timeout: 5000;
//};

const directions = ["left", "right", "up", "down"] as const; // Це уже буде як literal tuple

const directions1 = ["left", "right", "up", "down"]; // а це просто масив рядків string[]

// Satisfies

type AudioSettingShape = {
  volume: number;
  quality: "low" | "high";
};

const audioSettings = {
  volume: 80,
  quality: "high",
} satisfies AudioSettingShape;

// Discriminated Unions

type CircleShape = {
  kind: "circle";
  radius: number;
};

type SquareShape = {
  kind: "square";
  radius: number;
};

type DrawingShape = CircleShape | SquareShape;

function printShape(shape: DrawingShape): void {
  if (shape.kind === "circle") console.log(shape.radius);
  else console.log(shape.radius);
}

type LoginSuccessState = {
  status: "success";
  username: string;
};

type LoginErrorState = {
  status: "error";
  message: string;
};

type LoginResultState = LoginSuccessState | LoginErrorState;

const result = {
  status: "success",
  username: "Denys",
};

// Type Guard
