
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Register
 * 
 */
export type Register = $Result.DefaultSelection<Prisma.$RegisterPayload>
/**
 * Model Observation
 * 
 */
export type Observation = $Result.DefaultSelection<Prisma.$ObservationPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  doorman: 'doorman'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserDestination: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
};

export type UserDestination = (typeof UserDestination)[keyof typeof UserDestination]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserDestination = $Enums.UserDestination

export const UserDestination: typeof $Enums.UserDestination

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.register`: Exposes CRUD operations for the **Register** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registers
    * const registers = await prisma.register.findMany()
    * ```
    */
  get register(): Prisma.RegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.observation`: Exposes CRUD operations for the **Observation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Observations
    * const observations = await prisma.observation.findMany()
    * ```
    */
  get observation(): Prisma.ObservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Register: 'Register',
    Observation: 'Observation',
    Vehicle: 'Vehicle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "register" | "observation" | "vehicle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Register: {
        payload: Prisma.$RegisterPayload<ExtArgs>
        fields: Prisma.RegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          findFirst: {
            args: Prisma.RegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          findMany: {
            args: Prisma.RegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          create: {
            args: Prisma.RegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          createMany: {
            args: Prisma.RegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          delete: {
            args: Prisma.RegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          update: {
            args: Prisma.RegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          deleteMany: {
            args: Prisma.RegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          upsert: {
            args: Prisma.RegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          aggregate: {
            args: Prisma.RegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegister>
          }
          groupBy: {
            args: Prisma.RegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisterCountArgs<ExtArgs>
            result: $Utils.Optional<RegisterCountAggregateOutputType> | number
          }
        }
      }
      Observation: {
        payload: Prisma.$ObservationPayload<ExtArgs>
        fields: Prisma.ObservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          findFirst: {
            args: Prisma.ObservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          findMany: {
            args: Prisma.ObservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          create: {
            args: Prisma.ObservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          createMany: {
            args: Prisma.ObservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          delete: {
            args: Prisma.ObservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          update: {
            args: Prisma.ObservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          deleteMany: {
            args: Prisma.ObservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>[]
          }
          upsert: {
            args: Prisma.ObservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObservationPayload>
          }
          aggregate: {
            args: Prisma.ObservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObservation>
          }
          groupBy: {
            args: Prisma.ObservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObservationCountArgs<ExtArgs>
            result: $Utils.Optional<ObservationCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    register?: RegisterOmit
    observation?: ObservationOmit
    vehicle?: VehicleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    registers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registers?: boolean | UserCountOutputTypeCountRegistersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    registration: string | null
    password: string | null
    role: $Enums.UserRole | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    registration: string | null
    password: string | null
    role: $Enums.UserRole | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    registration: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    registration?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    registration?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    registration?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    registration: string
    password: string
    role: $Enums.UserRole
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    registration?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    registers?: boolean | User$registersArgs<ExtArgs>
    observations?: boolean | User$observationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    registration?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    registration?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    registration?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "registration" | "password" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registers?: boolean | User$registersArgs<ExtArgs>
    observations?: boolean | User$observationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      registers: Prisma.$RegisterPayload<ExtArgs>[]
      observations: Prisma.$ObservationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      registration: string
      password: string
      role: $Enums.UserRole
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registers<T extends User$registersArgs<ExtArgs> = {}>(args?: Subset<T, User$registersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    observations<T extends User$observationsArgs<ExtArgs> = {}>(args?: Subset<T, User$observationsArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly registration: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.registers
   */
  export type User$registersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    cursor?: RegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * User.observations
   */
  export type User$observationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    where?: ObservationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Register
   */

  export type AggregateRegister = {
    _count: RegisterCountAggregateOutputType | null
    _min: RegisterMinAggregateOutputType | null
    _max: RegisterMaxAggregateOutputType | null
  }

  export type RegisterMinAggregateOutputType = {
    id: string | null
    name: string | null
    destination: $Enums.UserDestination | null
    authorizedBy: string | null
    entry: Date | null
    exit: Date | null
    observation: string | null
    date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegisterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    destination: $Enums.UserDestination | null
    authorizedBy: string | null
    entry: Date | null
    exit: Date | null
    observation: string | null
    date: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegisterCountAggregateOutputType = {
    id: number
    name: number
    destination: number
    authorizedBy: number
    entry: number
    exit: number
    observation: number
    date: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegisterMinAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    authorizedBy?: true
    entry?: true
    exit?: true
    observation?: true
    date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegisterMaxAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    authorizedBy?: true
    entry?: true
    exit?: true
    observation?: true
    date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegisterCountAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    authorizedBy?: true
    entry?: true
    exit?: true
    observation?: true
    date?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Register to aggregate.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registers
    **/
    _count?: true | RegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisterMaxAggregateInputType
  }

  export type GetRegisterAggregateType<T extends RegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegister[P]>
      : GetScalarType<T[P], AggregateRegister[P]>
  }




  export type RegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithAggregationInput | RegisterOrderByWithAggregationInput[]
    by: RegisterScalarFieldEnum[] | RegisterScalarFieldEnum
    having?: RegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisterCountAggregateInputType | true
    _min?: RegisterMinAggregateInputType
    _max?: RegisterMaxAggregateInputType
  }

  export type RegisterGroupByOutputType = {
    id: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date
    exit: Date | null
    observation: string | null
    date: Date
    userId: string
    createdAt: Date
    updatedAt: Date | null
    _count: RegisterCountAggregateOutputType | null
    _min: RegisterMinAggregateOutputType | null
    _max: RegisterMaxAggregateOutputType | null
  }

  type GetRegisterGroupByPayload<T extends RegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisterGroupByOutputType[P]>
            : GetScalarType<T[P], RegisterGroupByOutputType[P]>
        }
      >
    >


  export type RegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    authorizedBy?: boolean
    entry?: boolean
    exit?: boolean
    observation?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Register$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    authorizedBy?: boolean
    entry?: boolean
    exit?: boolean
    observation?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    authorizedBy?: boolean
    entry?: boolean
    exit?: boolean
    observation?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectScalar = {
    id?: boolean
    name?: boolean
    destination?: boolean
    authorizedBy?: boolean
    entry?: boolean
    exit?: boolean
    observation?: boolean
    date?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "destination" | "authorizedBy" | "entry" | "exit" | "observation" | "date" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["register"]>
  export type RegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Register$vehicleArgs<ExtArgs>
  }
  export type RegisterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegisterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Register"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      destination: $Enums.UserDestination
      authorizedBy: string
      entry: Date
      exit: Date | null
      observation: string | null
      date: Date
      userId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["register"]>
    composites: {}
  }

  type RegisterGetPayload<S extends boolean | null | undefined | RegisterDefaultArgs> = $Result.GetResult<Prisma.$RegisterPayload, S>

  type RegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegisterCountAggregateInputType | true
    }

  export interface RegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Register'], meta: { name: 'Register' } }
    /**
     * Find zero or one Register that matches the filter.
     * @param {RegisterFindUniqueArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisterFindUniqueArgs>(args: SelectSubset<T, RegisterFindUniqueArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Register that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegisterFindUniqueOrThrowArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Register that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindFirstArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisterFindFirstArgs>(args?: SelectSubset<T, RegisterFindFirstArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Register that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindFirstOrThrowArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registers
     * const registers = await prisma.register.findMany()
     * 
     * // Get first 10 Registers
     * const registers = await prisma.register.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registerWithIdOnly = await prisma.register.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisterFindManyArgs>(args?: SelectSubset<T, RegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Register.
     * @param {RegisterCreateArgs} args - Arguments to create a Register.
     * @example
     * // Create one Register
     * const Register = await prisma.register.create({
     *   data: {
     *     // ... data to create a Register
     *   }
     * })
     * 
     */
    create<T extends RegisterCreateArgs>(args: SelectSubset<T, RegisterCreateArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registers.
     * @param {RegisterCreateManyArgs} args - Arguments to create many Registers.
     * @example
     * // Create many Registers
     * const register = await prisma.register.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisterCreateManyArgs>(args?: SelectSubset<T, RegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registers and returns the data saved in the database.
     * @param {RegisterCreateManyAndReturnArgs} args - Arguments to create many Registers.
     * @example
     * // Create many Registers
     * const register = await prisma.register.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registers and only return the `id`
     * const registerWithIdOnly = await prisma.register.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Register.
     * @param {RegisterDeleteArgs} args - Arguments to delete one Register.
     * @example
     * // Delete one Register
     * const Register = await prisma.register.delete({
     *   where: {
     *     // ... filter to delete one Register
     *   }
     * })
     * 
     */
    delete<T extends RegisterDeleteArgs>(args: SelectSubset<T, RegisterDeleteArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Register.
     * @param {RegisterUpdateArgs} args - Arguments to update one Register.
     * @example
     * // Update one Register
     * const register = await prisma.register.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisterUpdateArgs>(args: SelectSubset<T, RegisterUpdateArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registers.
     * @param {RegisterDeleteManyArgs} args - Arguments to filter Registers to delete.
     * @example
     * // Delete a few Registers
     * const { count } = await prisma.register.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisterDeleteManyArgs>(args?: SelectSubset<T, RegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registers
     * const register = await prisma.register.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisterUpdateManyArgs>(args: SelectSubset<T, RegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registers and returns the data updated in the database.
     * @param {RegisterUpdateManyAndReturnArgs} args - Arguments to update many Registers.
     * @example
     * // Update many Registers
     * const register = await prisma.register.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registers and only return the `id`
     * const registerWithIdOnly = await prisma.register.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, RegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Register.
     * @param {RegisterUpsertArgs} args - Arguments to update or create a Register.
     * @example
     * // Update or create a Register
     * const register = await prisma.register.upsert({
     *   create: {
     *     // ... data to create a Register
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Register we want to update
     *   }
     * })
     */
    upsert<T extends RegisterUpsertArgs>(args: SelectSubset<T, RegisterUpsertArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterCountArgs} args - Arguments to filter Registers to count.
     * @example
     * // Count the number of Registers
     * const count = await prisma.register.count({
     *   where: {
     *     // ... the filter for the Registers we want to count
     *   }
     * })
    **/
    count<T extends RegisterCountArgs>(
      args?: Subset<T, RegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegisterAggregateArgs>(args: Subset<T, RegisterAggregateArgs>): Prisma.PrismaPromise<GetRegisterAggregateType<T>>

    /**
     * Group by Register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisterGroupByArgs['orderBy'] }
        : { orderBy?: RegisterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Register model
   */
  readonly fields: RegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Register.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends Register$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Register$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Register model
   */
  interface RegisterFieldRefs {
    readonly id: FieldRef<"Register", 'String'>
    readonly name: FieldRef<"Register", 'String'>
    readonly destination: FieldRef<"Register", 'UserDestination'>
    readonly authorizedBy: FieldRef<"Register", 'String'>
    readonly entry: FieldRef<"Register", 'DateTime'>
    readonly exit: FieldRef<"Register", 'DateTime'>
    readonly observation: FieldRef<"Register", 'String'>
    readonly date: FieldRef<"Register", 'DateTime'>
    readonly userId: FieldRef<"Register", 'String'>
    readonly createdAt: FieldRef<"Register", 'DateTime'>
    readonly updatedAt: FieldRef<"Register", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Register findUnique
   */
  export type RegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register findUniqueOrThrow
   */
  export type RegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register findFirst
   */
  export type RegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registers.
     */
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register findFirstOrThrow
   */
  export type RegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registers.
     */
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register findMany
   */
  export type RegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Registers to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register create
   */
  export type RegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a Register.
     */
    data: XOR<RegisterCreateInput, RegisterUncheckedCreateInput>
  }

  /**
   * Register createMany
   */
  export type RegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registers.
     */
    data: RegisterCreateManyInput | RegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Register createManyAndReturn
   */
  export type RegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * The data used to create many Registers.
     */
    data: RegisterCreateManyInput | RegisterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Register update
   */
  export type RegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a Register.
     */
    data: XOR<RegisterUpdateInput, RegisterUncheckedUpdateInput>
    /**
     * Choose, which Register to update.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register updateMany
   */
  export type RegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registers.
     */
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyInput>
    /**
     * Filter which Registers to update
     */
    where?: RegisterWhereInput
    /**
     * Limit how many Registers to update.
     */
    limit?: number
  }

  /**
   * Register updateManyAndReturn
   */
  export type RegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * The data used to update Registers.
     */
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyInput>
    /**
     * Filter which Registers to update
     */
    where?: RegisterWhereInput
    /**
     * Limit how many Registers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Register upsert
   */
  export type RegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the Register to update in case it exists.
     */
    where: RegisterWhereUniqueInput
    /**
     * In case the Register found by the `where` argument doesn't exist, create a new Register with this data.
     */
    create: XOR<RegisterCreateInput, RegisterUncheckedCreateInput>
    /**
     * In case the Register was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisterUpdateInput, RegisterUncheckedUpdateInput>
  }

  /**
   * Register delete
   */
  export type RegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter which Register to delete.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register deleteMany
   */
  export type RegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registers to delete
     */
    where?: RegisterWhereInput
    /**
     * Limit how many Registers to delete.
     */
    limit?: number
  }

  /**
   * Register.vehicle
   */
  export type Register$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Register without action
   */
  export type RegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Register
     */
    omit?: RegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
  }


  /**
   * Model Observation
   */

  export type AggregateObservation = {
    _count: ObservationCountAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  export type ObservationMinAggregateOutputType = {
    id: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObservationMaxAggregateOutputType = {
    id: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObservationCountAggregateOutputType = {
    id: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObservationMinAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObservationMaxAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObservationCountAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observation to aggregate.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Observations
    **/
    _count?: true | ObservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObservationMaxAggregateInputType
  }

  export type GetObservationAggregateType<T extends ObservationAggregateArgs> = {
        [P in keyof T & keyof AggregateObservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObservation[P]>
      : GetScalarType<T[P], AggregateObservation[P]>
  }




  export type ObservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObservationWhereInput
    orderBy?: ObservationOrderByWithAggregationInput | ObservationOrderByWithAggregationInput[]
    by: ObservationScalarFieldEnum[] | ObservationScalarFieldEnum
    having?: ObservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObservationCountAggregateInputType | true
    _min?: ObservationMinAggregateInputType
    _max?: ObservationMaxAggregateInputType
  }

  export type ObservationGroupByOutputType = {
    id: string
    description: string
    userId: string
    createdAt: Date
    updatedAt: Date | null
    _count: ObservationCountAggregateOutputType | null
    _min: ObservationMinAggregateOutputType | null
    _max: ObservationMaxAggregateOutputType | null
  }

  type GetObservationGroupByPayload<T extends ObservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObservationGroupByOutputType[P]>
            : GetScalarType<T[P], ObservationGroupByOutputType[P]>
        }
      >
    >


  export type ObservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["observation"]>

  export type ObservationSelectScalar = {
    id?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["observation"]>
  export type ObservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ObservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ObservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ObservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Observation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      userId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["observation"]>
    composites: {}
  }

  type ObservationGetPayload<S extends boolean | null | undefined | ObservationDefaultArgs> = $Result.GetResult<Prisma.$ObservationPayload, S>

  type ObservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObservationCountAggregateInputType | true
    }

  export interface ObservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Observation'], meta: { name: 'Observation' } }
    /**
     * Find zero or one Observation that matches the filter.
     * @param {ObservationFindUniqueArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObservationFindUniqueArgs>(args: SelectSubset<T, ObservationFindUniqueArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Observation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObservationFindUniqueOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ObservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Observation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObservationFindFirstArgs>(args?: SelectSubset<T, ObservationFindFirstArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Observation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindFirstOrThrowArgs} args - Arguments to find a Observation
     * @example
     * // Get one Observation
     * const observation = await prisma.observation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ObservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Observations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Observations
     * const observations = await prisma.observation.findMany()
     * 
     * // Get first 10 Observations
     * const observations = await prisma.observation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const observationWithIdOnly = await prisma.observation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObservationFindManyArgs>(args?: SelectSubset<T, ObservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Observation.
     * @param {ObservationCreateArgs} args - Arguments to create a Observation.
     * @example
     * // Create one Observation
     * const Observation = await prisma.observation.create({
     *   data: {
     *     // ... data to create a Observation
     *   }
     * })
     * 
     */
    create<T extends ObservationCreateArgs>(args: SelectSubset<T, ObservationCreateArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Observations.
     * @param {ObservationCreateManyArgs} args - Arguments to create many Observations.
     * @example
     * // Create many Observations
     * const observation = await prisma.observation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObservationCreateManyArgs>(args?: SelectSubset<T, ObservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Observations and returns the data saved in the database.
     * @param {ObservationCreateManyAndReturnArgs} args - Arguments to create many Observations.
     * @example
     * // Create many Observations
     * const observation = await prisma.observation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Observations and only return the `id`
     * const observationWithIdOnly = await prisma.observation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ObservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Observation.
     * @param {ObservationDeleteArgs} args - Arguments to delete one Observation.
     * @example
     * // Delete one Observation
     * const Observation = await prisma.observation.delete({
     *   where: {
     *     // ... filter to delete one Observation
     *   }
     * })
     * 
     */
    delete<T extends ObservationDeleteArgs>(args: SelectSubset<T, ObservationDeleteArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Observation.
     * @param {ObservationUpdateArgs} args - Arguments to update one Observation.
     * @example
     * // Update one Observation
     * const observation = await prisma.observation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObservationUpdateArgs>(args: SelectSubset<T, ObservationUpdateArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Observations.
     * @param {ObservationDeleteManyArgs} args - Arguments to filter Observations to delete.
     * @example
     * // Delete a few Observations
     * const { count } = await prisma.observation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObservationDeleteManyArgs>(args?: SelectSubset<T, ObservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Observations
     * const observation = await prisma.observation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObservationUpdateManyArgs>(args: SelectSubset<T, ObservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Observations and returns the data updated in the database.
     * @param {ObservationUpdateManyAndReturnArgs} args - Arguments to update many Observations.
     * @example
     * // Update many Observations
     * const observation = await prisma.observation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Observations and only return the `id`
     * const observationWithIdOnly = await prisma.observation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ObservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Observation.
     * @param {ObservationUpsertArgs} args - Arguments to update or create a Observation.
     * @example
     * // Update or create a Observation
     * const observation = await prisma.observation.upsert({
     *   create: {
     *     // ... data to create a Observation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Observation we want to update
     *   }
     * })
     */
    upsert<T extends ObservationUpsertArgs>(args: SelectSubset<T, ObservationUpsertArgs<ExtArgs>>): Prisma__ObservationClient<$Result.GetResult<Prisma.$ObservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Observations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationCountArgs} args - Arguments to filter Observations to count.
     * @example
     * // Count the number of Observations
     * const count = await prisma.observation.count({
     *   where: {
     *     // ... the filter for the Observations we want to count
     *   }
     * })
    **/
    count<T extends ObservationCountArgs>(
      args?: Subset<T, ObservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObservationAggregateArgs>(args: Subset<T, ObservationAggregateArgs>): Prisma.PrismaPromise<GetObservationAggregateType<T>>

    /**
     * Group by Observation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObservationGroupByArgs['orderBy'] }
        : { orderBy?: ObservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Observation model
   */
  readonly fields: ObservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Observation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Observation model
   */
  interface ObservationFieldRefs {
    readonly id: FieldRef<"Observation", 'String'>
    readonly description: FieldRef<"Observation", 'String'>
    readonly userId: FieldRef<"Observation", 'String'>
    readonly createdAt: FieldRef<"Observation", 'DateTime'>
    readonly updatedAt: FieldRef<"Observation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Observation findUnique
   */
  export type ObservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findUniqueOrThrow
   */
  export type ObservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation findFirst
   */
  export type ObservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation findFirstOrThrow
   */
  export type ObservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observation to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Observations.
     */
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation findMany
   */
  export type ObservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter, which Observations to fetch.
     */
    where?: ObservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Observations to fetch.
     */
    orderBy?: ObservationOrderByWithRelationInput | ObservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Observations.
     */
    cursor?: ObservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Observations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Observations.
     */
    skip?: number
    distinct?: ObservationScalarFieldEnum | ObservationScalarFieldEnum[]
  }

  /**
   * Observation create
   */
  export type ObservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Observation.
     */
    data: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
  }

  /**
   * Observation createMany
   */
  export type ObservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Observations.
     */
    data: ObservationCreateManyInput | ObservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Observation createManyAndReturn
   */
  export type ObservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * The data used to create many Observations.
     */
    data: ObservationCreateManyInput | ObservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Observation update
   */
  export type ObservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Observation.
     */
    data: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
    /**
     * Choose, which Observation to update.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation updateMany
   */
  export type ObservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Observations.
     */
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     */
    where?: ObservationWhereInput
    /**
     * Limit how many Observations to update.
     */
    limit?: number
  }

  /**
   * Observation updateManyAndReturn
   */
  export type ObservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * The data used to update Observations.
     */
    data: XOR<ObservationUpdateManyMutationInput, ObservationUncheckedUpdateManyInput>
    /**
     * Filter which Observations to update
     */
    where?: ObservationWhereInput
    /**
     * Limit how many Observations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Observation upsert
   */
  export type ObservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Observation to update in case it exists.
     */
    where: ObservationWhereUniqueInput
    /**
     * In case the Observation found by the `where` argument doesn't exist, create a new Observation with this data.
     */
    create: XOR<ObservationCreateInput, ObservationUncheckedCreateInput>
    /**
     * In case the Observation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObservationUpdateInput, ObservationUncheckedUpdateInput>
  }

  /**
   * Observation delete
   */
  export type ObservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
    /**
     * Filter which Observation to delete.
     */
    where: ObservationWhereUniqueInput
  }

  /**
   * Observation deleteMany
   */
  export type ObservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Observations to delete
     */
    where?: ObservationWhereInput
    /**
     * Limit how many Observations to delete.
     */
    limit?: number
  }

  /**
   * Observation without action
   */
  export type ObservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Observation
     */
    select?: ObservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Observation
     */
    omit?: ObservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObservationInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    plate: string | null
    brand: string | null
    model: string | null
    registerId: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    plate: string | null
    brand: string | null
    model: string | null
    registerId: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plate: number
    brand: number
    model: number
    registerId: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    registerId?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    registerId?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    registerId?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    plate: string
    brand: string | null
    model: string | null
    registerId: string
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    registerId?: boolean
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    registerId?: boolean
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    registerId?: boolean
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    registerId?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plate" | "brand" | "model" | "registerId", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    register?: boolean | RegisterDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      register: Prisma.$RegisterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plate: string
      brand: string | null
      model: string | null
      registerId: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    register<T extends RegisterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegisterDefaultArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly registerId: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    registration: 'registration',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegisterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    destination: 'destination',
    authorizedBy: 'authorizedBy',
    entry: 'entry',
    exit: 'exit',
    observation: 'observation',
    date: 'date',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegisterScalarFieldEnum = (typeof RegisterScalarFieldEnum)[keyof typeof RegisterScalarFieldEnum]


  export const ObservationScalarFieldEnum: {
    id: 'id',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObservationScalarFieldEnum = (typeof ObservationScalarFieldEnum)[keyof typeof ObservationScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plate: 'plate',
    brand: 'brand',
    model: 'model',
    registerId: 'registerId'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserDestination'
   */
  export type EnumUserDestinationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserDestination'>
    


  /**
   * Reference to a field of type 'UserDestination[]'
   */
  export type ListEnumUserDestinationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserDestination[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    registration?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    registers?: RegisterListRelationFilter
    observations?: XOR<ObservationNullableScalarRelationFilter, ObservationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    registration?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    registers?: RegisterOrderByRelationAggregateInput
    observations?: ObservationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registration?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeFilter<"User"> | Date | string
    registers?: RegisterListRelationFilter
    observations?: XOR<ObservationNullableScalarRelationFilter, ObservationWhereInput> | null
  }, "id" | "registration">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    registration?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    registration?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RegisterWhereInput = {
    AND?: RegisterWhereInput | RegisterWhereInput[]
    OR?: RegisterWhereInput[]
    NOT?: RegisterWhereInput | RegisterWhereInput[]
    id?: StringFilter<"Register"> | string
    name?: StringFilter<"Register"> | string
    destination?: EnumUserDestinationFilter<"Register"> | $Enums.UserDestination
    authorizedBy?: StringFilter<"Register"> | string
    entry?: DateTimeFilter<"Register"> | Date | string
    exit?: DateTimeNullableFilter<"Register"> | Date | string | null
    observation?: StringNullableFilter<"Register"> | string | null
    date?: DateTimeFilter<"Register"> | Date | string
    userId?: StringFilter<"Register"> | string
    createdAt?: DateTimeFilter<"Register"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Register"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }

  export type RegisterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    authorizedBy?: SortOrder
    entry?: SortOrder
    exit?: SortOrderInput | SortOrder
    observation?: SortOrderInput | SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type RegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegisterWhereInput | RegisterWhereInput[]
    OR?: RegisterWhereInput[]
    NOT?: RegisterWhereInput | RegisterWhereInput[]
    name?: StringFilter<"Register"> | string
    destination?: EnumUserDestinationFilter<"Register"> | $Enums.UserDestination
    authorizedBy?: StringFilter<"Register"> | string
    entry?: DateTimeFilter<"Register"> | Date | string
    exit?: DateTimeNullableFilter<"Register"> | Date | string | null
    observation?: StringNullableFilter<"Register"> | string | null
    date?: DateTimeFilter<"Register"> | Date | string
    userId?: StringFilter<"Register"> | string
    createdAt?: DateTimeFilter<"Register"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Register"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }, "id">

  export type RegisterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    authorizedBy?: SortOrder
    entry?: SortOrder
    exit?: SortOrderInput | SortOrder
    observation?: SortOrderInput | SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: RegisterCountOrderByAggregateInput
    _max?: RegisterMaxOrderByAggregateInput
    _min?: RegisterMinOrderByAggregateInput
  }

  export type RegisterScalarWhereWithAggregatesInput = {
    AND?: RegisterScalarWhereWithAggregatesInput | RegisterScalarWhereWithAggregatesInput[]
    OR?: RegisterScalarWhereWithAggregatesInput[]
    NOT?: RegisterScalarWhereWithAggregatesInput | RegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Register"> | string
    name?: StringWithAggregatesFilter<"Register"> | string
    destination?: EnumUserDestinationWithAggregatesFilter<"Register"> | $Enums.UserDestination
    authorizedBy?: StringWithAggregatesFilter<"Register"> | string
    entry?: DateTimeWithAggregatesFilter<"Register"> | Date | string
    exit?: DateTimeNullableWithAggregatesFilter<"Register"> | Date | string | null
    observation?: StringNullableWithAggregatesFilter<"Register"> | string | null
    date?: DateTimeWithAggregatesFilter<"Register"> | Date | string
    userId?: StringWithAggregatesFilter<"Register"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Register"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Register"> | Date | string | null
  }

  export type ObservationWhereInput = {
    AND?: ObservationWhereInput | ObservationWhereInput[]
    OR?: ObservationWhereInput[]
    NOT?: ObservationWhereInput | ObservationWhereInput[]
    id?: StringFilter<"Observation"> | string
    description?: StringFilter<"Observation"> | string
    userId?: StringFilter<"Observation"> | string
    createdAt?: DateTimeFilter<"Observation"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Observation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ObservationOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ObservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ObservationWhereInput | ObservationWhereInput[]
    OR?: ObservationWhereInput[]
    NOT?: ObservationWhereInput | ObservationWhereInput[]
    description?: StringFilter<"Observation"> | string
    createdAt?: DateTimeFilter<"Observation"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Observation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ObservationOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ObservationCountOrderByAggregateInput
    _max?: ObservationMaxOrderByAggregateInput
    _min?: ObservationMinOrderByAggregateInput
  }

  export type ObservationScalarWhereWithAggregatesInput = {
    AND?: ObservationScalarWhereWithAggregatesInput | ObservationScalarWhereWithAggregatesInput[]
    OR?: ObservationScalarWhereWithAggregatesInput[]
    NOT?: ObservationScalarWhereWithAggregatesInput | ObservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Observation"> | string
    description?: StringWithAggregatesFilter<"Observation"> | string
    userId?: StringWithAggregatesFilter<"Observation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Observation"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Observation"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    registerId?: StringFilter<"Vehicle"> | string
    register?: XOR<RegisterScalarRelationFilter, RegisterWhereInput>
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    registerId?: SortOrder
    register?: RegisterOrderByWithRelationInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    registerId?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    brand?: StringNullableFilter<"Vehicle"> | string | null
    model?: StringNullableFilter<"Vehicle"> | string | null
    register?: XOR<RegisterScalarRelationFilter, RegisterWhereInput>
  }, "id" | "plate" | "registerId">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    registerId?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    model?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    registerId?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
    registers?: RegisterCreateNestedManyWithoutUserInput
    observations?: ObservationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
    registers?: RegisterUncheckedCreateNestedManyWithoutUserInput
    observations?: ObservationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: RegisterUpdateManyWithoutUserNestedInput
    observations?: ObservationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: RegisterUncheckedUpdateManyWithoutUserNestedInput
    observations?: ObservationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisterCreateInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRegistersInput
    vehicle?: VehicleCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUncheckedCreateInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    vehicle?: VehicleUncheckedCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRegistersNestedInput
    vehicle?: VehicleUpdateOneWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUncheckedUpdateOneWithoutRegisterNestedInput
  }

  export type RegisterCreateManyInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type RegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationCreateInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutObservationsInput
  }

  export type ObservationUncheckedCreateInput = {
    id?: string
    description: string
    userId?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutObservationsNestedInput
  }

  export type ObservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationCreateManyInput = {
    id?: string
    description: string
    userId?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    id?: string
    plate: string
    brand?: string | null
    model?: string | null
    register?: RegisterCreateNestedOneWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    plate: string
    brand?: string | null
    model?: string | null
    registerId?: string
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    register?: RegisterUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    registerId?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateManyInput = {
    id?: string
    plate: string
    brand?: string | null
    model?: string | null
    registerId?: string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    registerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegisterListRelationFilter = {
    every?: RegisterWhereInput
    some?: RegisterWhereInput
    none?: RegisterWhereInput
  }

  export type ObservationNullableScalarRelationFilter = {
    is?: ObservationWhereInput | null
    isNot?: ObservationWhereInput | null
  }

  export type RegisterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registration?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registration?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registration?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserDestinationFilter<$PrismaModel = never> = {
    equals?: $Enums.UserDestination | EnumUserDestinationFieldRefInput<$PrismaModel>
    in?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    not?: NestedEnumUserDestinationFilter<$PrismaModel> | $Enums.UserDestination
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegisterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    authorizedBy?: SortOrder
    entry?: SortOrder
    exit?: SortOrder
    observation?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    authorizedBy?: SortOrder
    entry?: SortOrder
    exit?: SortOrder
    observation?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegisterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    authorizedBy?: SortOrder
    entry?: SortOrder
    exit?: SortOrder
    observation?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserDestinationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserDestination | EnumUserDestinationFieldRefInput<$PrismaModel>
    in?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    not?: NestedEnumUserDestinationWithAggregatesFilter<$PrismaModel> | $Enums.UserDestination
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserDestinationFilter<$PrismaModel>
    _max?: NestedEnumUserDestinationFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ObservationCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObservationMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegisterScalarRelationFilter = {
    is?: RegisterWhereInput
    isNot?: RegisterWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    registerId?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    registerId?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    registerId?: SortOrder
  }

  export type RegisterCreateNestedManyWithoutUserInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type ObservationCreateNestedOneWithoutUserInput = {
    create?: XOR<ObservationCreateWithoutUserInput, ObservationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ObservationCreateOrConnectWithoutUserInput
    connect?: ObservationWhereUniqueInput
  }

  export type RegisterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type ObservationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ObservationCreateWithoutUserInput, ObservationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ObservationCreateOrConnectWithoutUserInput
    connect?: ObservationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegisterUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutUserInput | RegisterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutUserInput | RegisterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutUserInput | RegisterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type ObservationUpdateOneWithoutUserNestedInput = {
    create?: XOR<ObservationCreateWithoutUserInput, ObservationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ObservationCreateOrConnectWithoutUserInput
    upsert?: ObservationUpsertWithoutUserInput
    disconnect?: ObservationWhereInput | boolean
    delete?: ObservationWhereInput | boolean
    connect?: ObservationWhereUniqueInput
    update?: XOR<XOR<ObservationUpdateToOneWithWhereWithoutUserInput, ObservationUpdateWithoutUserInput>, ObservationUncheckedUpdateWithoutUserInput>
  }

  export type RegisterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput> | RegisterCreateWithoutUserInput[] | RegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutUserInput | RegisterCreateOrConnectWithoutUserInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutUserInput | RegisterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegisterCreateManyUserInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutUserInput | RegisterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutUserInput | RegisterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type ObservationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ObservationCreateWithoutUserInput, ObservationUncheckedCreateWithoutUserInput>
    connectOrCreate?: ObservationCreateOrConnectWithoutUserInput
    upsert?: ObservationUpsertWithoutUserInput
    disconnect?: ObservationWhereInput | boolean
    delete?: ObservationWhereInput | boolean
    connect?: ObservationWhereUniqueInput
    update?: XOR<XOR<ObservationUpdateToOneWithWhereWithoutUserInput, ObservationUpdateWithoutUserInput>, ObservationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutRegistersInput = {
    create?: XOR<UserCreateWithoutRegistersInput, UserUncheckedCreateWithoutRegistersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistersInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutRegisterInput = {
    create?: XOR<VehicleCreateWithoutRegisterInput, VehicleUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRegisterInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUncheckedCreateNestedOneWithoutRegisterInput = {
    create?: XOR<VehicleCreateWithoutRegisterInput, VehicleUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRegisterInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumUserDestinationFieldUpdateOperationsInput = {
    set?: $Enums.UserDestination
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutRegistersNestedInput = {
    create?: XOR<UserCreateWithoutRegistersInput, UserUncheckedCreateWithoutRegistersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistersInput
    upsert?: UserUpsertWithoutRegistersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistersInput, UserUpdateWithoutRegistersInput>, UserUncheckedUpdateWithoutRegistersInput>
  }

  export type VehicleUpdateOneWithoutRegisterNestedInput = {
    create?: XOR<VehicleCreateWithoutRegisterInput, VehicleUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRegisterInput
    upsert?: VehicleUpsertWithoutRegisterInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutRegisterInput, VehicleUpdateWithoutRegisterInput>, VehicleUncheckedUpdateWithoutRegisterInput>
  }

  export type VehicleUncheckedUpdateOneWithoutRegisterNestedInput = {
    create?: XOR<VehicleCreateWithoutRegisterInput, VehicleUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRegisterInput
    upsert?: VehicleUpsertWithoutRegisterInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutRegisterInput, VehicleUpdateWithoutRegisterInput>, VehicleUncheckedUpdateWithoutRegisterInput>
  }

  export type UserCreateNestedOneWithoutObservationsInput = {
    create?: XOR<UserCreateWithoutObservationsInput, UserUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutObservationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutObservationsNestedInput = {
    create?: XOR<UserCreateWithoutObservationsInput, UserUncheckedCreateWithoutObservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutObservationsInput
    upsert?: UserUpsertWithoutObservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutObservationsInput, UserUpdateWithoutObservationsInput>, UserUncheckedUpdateWithoutObservationsInput>
  }

  export type RegisterCreateNestedOneWithoutVehicleInput = {
    create?: XOR<RegisterCreateWithoutVehicleInput, RegisterUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutVehicleInput
    connect?: RegisterWhereUniqueInput
  }

  export type RegisterUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<RegisterCreateWithoutVehicleInput, RegisterUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutVehicleInput
    upsert?: RegisterUpsertWithoutVehicleInput
    connect?: RegisterWhereUniqueInput
    update?: XOR<XOR<RegisterUpdateToOneWithWhereWithoutVehicleInput, RegisterUpdateWithoutVehicleInput>, RegisterUncheckedUpdateWithoutVehicleInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserDestinationFilter<$PrismaModel = never> = {
    equals?: $Enums.UserDestination | EnumUserDestinationFieldRefInput<$PrismaModel>
    in?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    not?: NestedEnumUserDestinationFilter<$PrismaModel> | $Enums.UserDestination
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserDestinationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserDestination | EnumUserDestinationFieldRefInput<$PrismaModel>
    in?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserDestination[] | ListEnumUserDestinationFieldRefInput<$PrismaModel>
    not?: NestedEnumUserDestinationWithAggregatesFilter<$PrismaModel> | $Enums.UserDestination
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserDestinationFilter<$PrismaModel>
    _max?: NestedEnumUserDestinationFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RegisterCreateWithoutUserInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    vehicle?: VehicleCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    vehicle?: VehicleUncheckedCreateNestedOneWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutUserInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput>
  }

  export type RegisterCreateManyUserInputEnvelope = {
    data: RegisterCreateManyUserInput | RegisterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ObservationCreateWithoutUserInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ObservationCreateOrConnectWithoutUserInput = {
    where: ObservationWhereUniqueInput
    create: XOR<ObservationCreateWithoutUserInput, ObservationUncheckedCreateWithoutUserInput>
  }

  export type RegisterUpsertWithWhereUniqueWithoutUserInput = {
    where: RegisterWhereUniqueInput
    update: XOR<RegisterUpdateWithoutUserInput, RegisterUncheckedUpdateWithoutUserInput>
    create: XOR<RegisterCreateWithoutUserInput, RegisterUncheckedCreateWithoutUserInput>
  }

  export type RegisterUpdateWithWhereUniqueWithoutUserInput = {
    where: RegisterWhereUniqueInput
    data: XOR<RegisterUpdateWithoutUserInput, RegisterUncheckedUpdateWithoutUserInput>
  }

  export type RegisterUpdateManyWithWhereWithoutUserInput = {
    where: RegisterScalarWhereInput
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyWithoutUserInput>
  }

  export type RegisterScalarWhereInput = {
    AND?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
    OR?: RegisterScalarWhereInput[]
    NOT?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
    id?: StringFilter<"Register"> | string
    name?: StringFilter<"Register"> | string
    destination?: EnumUserDestinationFilter<"Register"> | $Enums.UserDestination
    authorizedBy?: StringFilter<"Register"> | string
    entry?: DateTimeFilter<"Register"> | Date | string
    exit?: DateTimeNullableFilter<"Register"> | Date | string | null
    observation?: StringNullableFilter<"Register"> | string | null
    date?: DateTimeFilter<"Register"> | Date | string
    userId?: StringFilter<"Register"> | string
    createdAt?: DateTimeFilter<"Register"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Register"> | Date | string | null
  }

  export type ObservationUpsertWithoutUserInput = {
    update: XOR<ObservationUpdateWithoutUserInput, ObservationUncheckedUpdateWithoutUserInput>
    create: XOR<ObservationCreateWithoutUserInput, ObservationUncheckedCreateWithoutUserInput>
    where?: ObservationWhereInput
  }

  export type ObservationUpdateToOneWithWhereWithoutUserInput = {
    where?: ObservationWhereInput
    data: XOR<ObservationUpdateWithoutUserInput, ObservationUncheckedUpdateWithoutUserInput>
  }

  export type ObservationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObservationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutRegistersInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
    observations?: ObservationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegistersInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
    observations?: ObservationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegistersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistersInput, UserUncheckedCreateWithoutRegistersInput>
  }

  export type VehicleCreateWithoutRegisterInput = {
    id?: string
    plate: string
    brand?: string | null
    model?: string | null
  }

  export type VehicleUncheckedCreateWithoutRegisterInput = {
    id?: string
    plate: string
    brand?: string | null
    model?: string | null
  }

  export type VehicleCreateOrConnectWithoutRegisterInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRegisterInput, VehicleUncheckedCreateWithoutRegisterInput>
  }

  export type UserUpsertWithoutRegistersInput = {
    update: XOR<UserUpdateWithoutRegistersInput, UserUncheckedUpdateWithoutRegistersInput>
    create: XOR<UserCreateWithoutRegistersInput, UserUncheckedCreateWithoutRegistersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistersInput, UserUncheckedUpdateWithoutRegistersInput>
  }

  export type UserUpdateWithoutRegistersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: ObservationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: ObservationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VehicleUpsertWithoutRegisterInput = {
    update: XOR<VehicleUpdateWithoutRegisterInput, VehicleUncheckedUpdateWithoutRegisterInput>
    create: XOR<VehicleCreateWithoutRegisterInput, VehicleUncheckedCreateWithoutRegisterInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutRegisterInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutRegisterInput, VehicleUncheckedUpdateWithoutRegisterInput>
  }

  export type VehicleUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUncheckedUpdateWithoutRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutObservationsInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
    registers?: RegisterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutObservationsInput = {
    id?: string
    name: string
    registration: string
    password: string
    role?: $Enums.UserRole
    created_at?: Date | string
    registers?: RegisterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutObservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutObservationsInput, UserUncheckedCreateWithoutObservationsInput>
  }

  export type UserUpsertWithoutObservationsInput = {
    update: XOR<UserUpdateWithoutObservationsInput, UserUncheckedUpdateWithoutObservationsInput>
    create: XOR<UserCreateWithoutObservationsInput, UserUncheckedCreateWithoutObservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutObservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutObservationsInput, UserUncheckedUpdateWithoutObservationsInput>
  }

  export type UserUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: RegisterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutObservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: RegisterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RegisterCreateWithoutVehicleInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRegistersInput
  }

  export type RegisterUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type RegisterCreateOrConnectWithoutVehicleInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutVehicleInput, RegisterUncheckedCreateWithoutVehicleInput>
  }

  export type RegisterUpsertWithoutVehicleInput = {
    update: XOR<RegisterUpdateWithoutVehicleInput, RegisterUncheckedUpdateWithoutVehicleInput>
    create: XOR<RegisterCreateWithoutVehicleInput, RegisterUncheckedCreateWithoutVehicleInput>
    where?: RegisterWhereInput
  }

  export type RegisterUpdateToOneWithWhereWithoutVehicleInput = {
    where?: RegisterWhereInput
    data: XOR<RegisterUpdateWithoutVehicleInput, RegisterUncheckedUpdateWithoutVehicleInput>
  }

  export type RegisterUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRegistersNestedInput
  }

  export type RegisterUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegisterCreateManyUserInput = {
    id?: string
    name: string
    destination: $Enums.UserDestination
    authorizedBy: string
    entry: Date | string
    exit?: Date | string | null
    observation?: string | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type RegisterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUpdateOneWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicle?: VehicleUncheckedUpdateOneWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: EnumUserDestinationFieldUpdateOperationsInput | $Enums.UserDestination
    authorizedBy?: StringFieldUpdateOperationsInput | string
    entry?: DateTimeFieldUpdateOperationsInput | Date | string
    exit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}