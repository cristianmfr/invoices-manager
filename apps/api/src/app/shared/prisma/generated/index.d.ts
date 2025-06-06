/**
 * Client
 **/

import * as runtime from './runtime/library.js'
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
 * Model EmailsLog
 *
 */
export type EmailsLog = $Result.DefaultSelection<Prisma.$EmailsLogPayload>
/**
 * Model MessagesLog
 *
 */
export type MessagesLog = $Result.DefaultSelection<Prisma.$MessagesLogPayload>

/**
 * Enums
 */
export namespace $Enums {
	export const SendStatus: {
		sent: 'sent'
		failed: 'failed'
	}

	export type SendStatus = (typeof SendStatus)[keyof typeof SendStatus]
}

export type SendStatus = $Enums.SendStatus

export const SendStatus: typeof $Enums.SendStatus

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
	U = 'log' extends keyof ClientOptions
		? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions['log']>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
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

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
	)
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
		) => void,
	): PrismaClient

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>

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
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>

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
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>

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
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>

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
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number
			timeout?: number
			isolationLevel?: Prisma.TransactionIsolationLevel
		},
	): $Utils.JsPromise<R>

	$extends: $Extensions.ExtendsHook<
		'extends',
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs
			}
		>
	>

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.emailsLog`: Exposes CRUD operations for the **EmailsLog** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more EmailsLogs
	 * const emailsLogs = await prisma.emailsLog.findMany()
	 * ```
	 */
	get emailsLog(): Prisma.EmailsLogDelegate<ExtArgs, ClientOptions>

	/**
	 * `prisma.messagesLog`: Exposes CRUD operations for the **MessagesLog** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more MessagesLogs
	 * const messagesLogs = await prisma.messagesLog.findMany()
	 * ```
	 */
	get messagesLog(): Prisma.MessagesLogDelegate<ExtArgs, ClientOptions>
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
	 * Prisma Client JS version: 6.9.0
	 * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
	export type PromiseType<T extends PromiseLike<any>> =
		T extends PromiseLike<infer U> ? U : T

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P]
	}

	export type Enumerable<T> = T | Array<T>

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
		[key in keyof T]: key extends keyof U ? T[key] : never
	}

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & (T extends SelectAndInclude
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
	} & K

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
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

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>
		0: EitherLoose<O, K>
	}[strict]

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
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
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
	} & {}

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>
			}
		>
	>

	type Key = string | number | symbol
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never
	type AtStrict<O extends object, K extends Key> = O[K & keyof O]
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>
		0: AtLoose<O, K>
	}[strict]

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K]
			} & {}

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K]
	} & {}

	type _Record<K extends keyof any, T> = {
		[P in K]: T
	}

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

	type Cast<A, B> = A extends B ? A : B

	export const type: unique symbol

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never
			}
		: never

	type FieldPaths<
		T,
		U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
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
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
					>
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
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>

	export const ModelName: {
		User: 'User'
		EmailsLog: 'EmailsLog'
		MessagesLog: 'MessagesLog'
	}

	export type ModelName = (typeof ModelName)[keyof typeof ModelName]

	export type Datasources = {
		db?: Datasource
	}

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this['params']['extArgs'],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions
		}
		meta: {
			modelProps: 'user' | 'emailsLog' | 'messagesLog'
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
			EmailsLog: {
				payload: Prisma.$EmailsLogPayload<ExtArgs>
				fields: Prisma.EmailsLogFieldRefs
				operations: {
					findUnique: {
						args: Prisma.EmailsLogFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.EmailsLogFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>
					}
					findFirst: {
						args: Prisma.EmailsLogFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.EmailsLogFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>
					}
					findMany: {
						args: Prisma.EmailsLogFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>[]
					}
					create: {
						args: Prisma.EmailsLogCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>
					}
					createMany: {
						args: Prisma.EmailsLogCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.EmailsLogCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>[]
					}
					delete: {
						args: Prisma.EmailsLogDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>
					}
					update: {
						args: Prisma.EmailsLogUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>
					}
					deleteMany: {
						args: Prisma.EmailsLogDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.EmailsLogUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.EmailsLogUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>[]
					}
					upsert: {
						args: Prisma.EmailsLogUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$EmailsLogPayload>
					}
					aggregate: {
						args: Prisma.EmailsLogAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateEmailsLog>
					}
					groupBy: {
						args: Prisma.EmailsLogGroupByArgs<ExtArgs>
						result: $Utils.Optional<EmailsLogGroupByOutputType>[]
					}
					count: {
						args: Prisma.EmailsLogCountArgs<ExtArgs>
						result: $Utils.Optional<EmailsLogCountAggregateOutputType> | number
					}
				}
			}
			MessagesLog: {
				payload: Prisma.$MessagesLogPayload<ExtArgs>
				fields: Prisma.MessagesLogFieldRefs
				operations: {
					findUnique: {
						args: Prisma.MessagesLogFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.MessagesLogFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>
					}
					findFirst: {
						args: Prisma.MessagesLogFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.MessagesLogFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>
					}
					findMany: {
						args: Prisma.MessagesLogFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>[]
					}
					create: {
						args: Prisma.MessagesLogCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>
					}
					createMany: {
						args: Prisma.MessagesLogCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.MessagesLogCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>[]
					}
					delete: {
						args: Prisma.MessagesLogDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>
					}
					update: {
						args: Prisma.MessagesLogUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>
					}
					deleteMany: {
						args: Prisma.MessagesLogDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.MessagesLogUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateManyAndReturn: {
						args: Prisma.MessagesLogUpdateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>[]
					}
					upsert: {
						args: Prisma.MessagesLogUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$MessagesLogPayload>
					}
					aggregate: {
						args: Prisma.MessagesLogAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateMessagesLog>
					}
					groupBy: {
						args: Prisma.MessagesLogGroupByArgs<ExtArgs>
						result: $Utils.Optional<MessagesLogGroupByOutputType>[]
					}
					count: {
						args: Prisma.MessagesLogCountArgs<ExtArgs>
						result:
							| $Utils.Optional<MessagesLogCountAggregateOutputType>
							| number
					}
				}
			}
		}
	} & {
		other: {
			payload: any
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
			}
		}
	}
	export const defineExtension: $Extensions.ExtendsHook<
		'define',
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>
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
		emailsLog?: EmailsLogOmit
		messagesLog?: MessagesLogOmit
	}

	/* Types for Logging */
	export type LogLevel = 'info' | 'query' | 'warn' | 'error'
	export type LogDefinition = {
		level: LogLevel
		emit: 'stdout' | 'event'
	}

	export type GetLogType<T extends LogLevel | LogDefinition> =
		T extends LogDefinition
			? T['emit'] extends 'event'
				? T['level']
				: never
			: never
	export type GetEvents<T extends any> =
		T extends Array<LogLevel | LogDefinition>
			?
					| GetLogType<T[0]>
					| GetLogType<T[1]>
					| GetLogType<T[2]>
					| GetLogType<T[3]>
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
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>,
	): LogLevel | undefined

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>

	export type Datasource = {
		url?: string
	}

	/**
	 * Count Types
	 */

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
		email: string | null
		name: string | null
		password: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export type UserMaxAggregateOutputType = {
		id: string | null
		email: string | null
		name: string | null
		password: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export type UserCountAggregateOutputType = {
		id: number
		email: number
		name: number
		password: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export type UserMinAggregateInputType = {
		id?: true
		email?: true
		name?: true
		password?: true
		createdAt?: true
		updatedAt?: true
	}

	export type UserMaxAggregateInputType = {
		id?: true
		email?: true
		name?: true
		password?: true
		createdAt?: true
		updatedAt?: true
	}

	export type UserCountAggregateInputType = {
		id?: true
		email?: true
		name?: true
		password?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: UserWhereInput
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[]
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
		email: string
		name: string | null
		password: string
		createdAt: Date
		updatedAt: Date
		_count: UserCountAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T['by']> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>
			}
		>
	>

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			name?: boolean
			password?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['user']
	>

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			name?: boolean
			password?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['user']
	>

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			name?: boolean
			password?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['user']
	>

	export type UserSelectScalar = {
		id?: boolean
		email?: boolean
		name?: boolean
		password?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type UserOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'email' | 'name' | 'password' | 'createdAt' | 'updatedAt',
		ExtArgs['result']['user']
	>

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'User'
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				id: string
				email: string
				name: string | null
				password: string
				createdAt: Date
				updatedAt: Date
			},
			ExtArgs['result']['user']
		>
		composites: {}
	}

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: UserCountAggregateInputType | true
	}

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['User']
			meta: { name: 'User' }
		}
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
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>

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
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

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
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>

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
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

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
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

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
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>

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
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

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
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>,
		): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
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
		readonly id: FieldRef<'User', 'String'>
		readonly email: FieldRef<'User', 'String'>
		readonly name: FieldRef<'User', 'String'>
		readonly password: FieldRef<'User', 'String'>
		readonly createdAt: FieldRef<'User', 'DateTime'>
		readonly updatedAt: FieldRef<'User', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
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
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
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
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
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
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>
	}

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
	}

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	}

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
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
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
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
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
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
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null
	}

	/**
	 * Model EmailsLog
	 */

	export type AggregateEmailsLog = {
		_count: EmailsLogCountAggregateOutputType | null
		_min: EmailsLogMinAggregateOutputType | null
		_max: EmailsLogMaxAggregateOutputType | null
	}

	export type EmailsLogMinAggregateOutputType = {
		id: string | null
		email: string | null
		status: $Enums.SendStatus | null
		error: string | null
		message: string | null
		data: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export type EmailsLogMaxAggregateOutputType = {
		id: string | null
		email: string | null
		status: $Enums.SendStatus | null
		error: string | null
		message: string | null
		data: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export type EmailsLogCountAggregateOutputType = {
		id: number
		email: number
		status: number
		error: number
		message: number
		data: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export type EmailsLogMinAggregateInputType = {
		id?: true
		email?: true
		status?: true
		error?: true
		message?: true
		data?: true
		createdAt?: true
		updatedAt?: true
	}

	export type EmailsLogMaxAggregateInputType = {
		id?: true
		email?: true
		status?: true
		error?: true
		message?: true
		data?: true
		createdAt?: true
		updatedAt?: true
	}

	export type EmailsLogCountAggregateInputType = {
		id?: true
		email?: true
		status?: true
		error?: true
		message?: true
		data?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export type EmailsLogAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which EmailsLog to aggregate.
		 */
		where?: EmailsLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of EmailsLogs to fetch.
		 */
		orderBy?:
			| EmailsLogOrderByWithRelationInput
			| EmailsLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: EmailsLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` EmailsLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` EmailsLogs.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned EmailsLogs
		 **/
		_count?: true | EmailsLogCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: EmailsLogMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: EmailsLogMaxAggregateInputType
	}

	export type GetEmailsLogAggregateType<T extends EmailsLogAggregateArgs> = {
		[P in keyof T & keyof AggregateEmailsLog]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateEmailsLog[P]>
			: GetScalarType<T[P], AggregateEmailsLog[P]>
	}

	export type EmailsLogGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: EmailsLogWhereInput
		orderBy?:
			| EmailsLogOrderByWithAggregationInput
			| EmailsLogOrderByWithAggregationInput[]
		by: EmailsLogScalarFieldEnum[] | EmailsLogScalarFieldEnum
		having?: EmailsLogScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: EmailsLogCountAggregateInputType | true
		_min?: EmailsLogMinAggregateInputType
		_max?: EmailsLogMaxAggregateInputType
	}

	export type EmailsLogGroupByOutputType = {
		id: string
		email: string
		status: $Enums.SendStatus
		error: string | null
		message: string | null
		data: string | null
		createdAt: Date
		updatedAt: Date
		_count: EmailsLogCountAggregateOutputType | null
		_min: EmailsLogMinAggregateOutputType | null
		_max: EmailsLogMaxAggregateOutputType | null
	}

	type GetEmailsLogGroupByPayload<T extends EmailsLogGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<EmailsLogGroupByOutputType, T['by']> & {
					[P in keyof T & keyof EmailsLogGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], EmailsLogGroupByOutputType[P]>
						: GetScalarType<T[P], EmailsLogGroupByOutputType[P]>
				}
			>
		>

	export type EmailsLogSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			status?: boolean
			error?: boolean
			message?: boolean
			data?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['emailsLog']
	>

	export type EmailsLogSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			status?: boolean
			error?: boolean
			message?: boolean
			data?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['emailsLog']
	>

	export type EmailsLogSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			email?: boolean
			status?: boolean
			error?: boolean
			message?: boolean
			data?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['emailsLog']
	>

	export type EmailsLogSelectScalar = {
		id?: boolean
		email?: boolean
		status?: boolean
		error?: boolean
		message?: boolean
		data?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type EmailsLogOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| 'id'
		| 'email'
		| 'status'
		| 'error'
		| 'message'
		| 'data'
		| 'createdAt'
		| 'updatedAt',
		ExtArgs['result']['emailsLog']
	>

	export type $EmailsLogPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'EmailsLog'
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				id: string
				email: string
				status: $Enums.SendStatus
				error: string | null
				message: string | null
				data: string | null
				createdAt: Date
				updatedAt: Date
			},
			ExtArgs['result']['emailsLog']
		>
		composites: {}
	}

	type EmailsLogGetPayload<
		S extends boolean | null | undefined | EmailsLogDefaultArgs,
	> = $Result.GetResult<Prisma.$EmailsLogPayload, S>

	type EmailsLogCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		EmailsLogFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: EmailsLogCountAggregateInputType | true
	}

	export interface EmailsLogDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['EmailsLog']
			meta: { name: 'EmailsLog' }
		}
		/**
		 * Find zero or one EmailsLog that matches the filter.
		 * @param {EmailsLogFindUniqueArgs} args - Arguments to find a EmailsLog
		 * @example
		 * // Get one EmailsLog
		 * const emailsLog = await prisma.emailsLog.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends EmailsLogFindUniqueArgs>(
			args: SelectSubset<T, EmailsLogFindUniqueArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one EmailsLog that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {EmailsLogFindUniqueOrThrowArgs} args - Arguments to find a EmailsLog
		 * @example
		 * // Get one EmailsLog
		 * const emailsLog = await prisma.emailsLog.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends EmailsLogFindUniqueOrThrowArgs>(
			args: SelectSubset<T, EmailsLogFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first EmailsLog that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogFindFirstArgs} args - Arguments to find a EmailsLog
		 * @example
		 * // Get one EmailsLog
		 * const emailsLog = await prisma.emailsLog.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends EmailsLogFindFirstArgs>(
			args?: SelectSubset<T, EmailsLogFindFirstArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first EmailsLog that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogFindFirstOrThrowArgs} args - Arguments to find a EmailsLog
		 * @example
		 * // Get one EmailsLog
		 * const emailsLog = await prisma.emailsLog.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends EmailsLogFindFirstOrThrowArgs>(
			args?: SelectSubset<T, EmailsLogFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more EmailsLogs that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all EmailsLogs
		 * const emailsLogs = await prisma.emailsLog.findMany()
		 *
		 * // Get first 10 EmailsLogs
		 * const emailsLogs = await prisma.emailsLog.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const emailsLogWithIdOnly = await prisma.emailsLog.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends EmailsLogFindManyArgs>(
			args?: SelectSubset<T, EmailsLogFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>

		/**
		 * Create a EmailsLog.
		 * @param {EmailsLogCreateArgs} args - Arguments to create a EmailsLog.
		 * @example
		 * // Create one EmailsLog
		 * const EmailsLog = await prisma.emailsLog.create({
		 *   data: {
		 *     // ... data to create a EmailsLog
		 *   }
		 * })
		 *
		 */
		create<T extends EmailsLogCreateArgs>(
			args: SelectSubset<T, EmailsLogCreateArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many EmailsLogs.
		 * @param {EmailsLogCreateManyArgs} args - Arguments to create many EmailsLogs.
		 * @example
		 * // Create many EmailsLogs
		 * const emailsLog = await prisma.emailsLog.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends EmailsLogCreateManyArgs>(
			args?: SelectSubset<T, EmailsLogCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many EmailsLogs and returns the data saved in the database.
		 * @param {EmailsLogCreateManyAndReturnArgs} args - Arguments to create many EmailsLogs.
		 * @example
		 * // Create many EmailsLogs
		 * const emailsLog = await prisma.emailsLog.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many EmailsLogs and only return the `id`
		 * const emailsLogWithIdOnly = await prisma.emailsLog.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends EmailsLogCreateManyAndReturnArgs>(
			args?: SelectSubset<T, EmailsLogCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>

		/**
		 * Delete a EmailsLog.
		 * @param {EmailsLogDeleteArgs} args - Arguments to delete one EmailsLog.
		 * @example
		 * // Delete one EmailsLog
		 * const EmailsLog = await prisma.emailsLog.delete({
		 *   where: {
		 *     // ... filter to delete one EmailsLog
		 *   }
		 * })
		 *
		 */
		delete<T extends EmailsLogDeleteArgs>(
			args: SelectSubset<T, EmailsLogDeleteArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one EmailsLog.
		 * @param {EmailsLogUpdateArgs} args - Arguments to update one EmailsLog.
		 * @example
		 * // Update one EmailsLog
		 * const emailsLog = await prisma.emailsLog.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends EmailsLogUpdateArgs>(
			args: SelectSubset<T, EmailsLogUpdateArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more EmailsLogs.
		 * @param {EmailsLogDeleteManyArgs} args - Arguments to filter EmailsLogs to delete.
		 * @example
		 * // Delete a few EmailsLogs
		 * const { count } = await prisma.emailsLog.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends EmailsLogDeleteManyArgs>(
			args?: SelectSubset<T, EmailsLogDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more EmailsLogs.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many EmailsLogs
		 * const emailsLog = await prisma.emailsLog.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends EmailsLogUpdateManyArgs>(
			args: SelectSubset<T, EmailsLogUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more EmailsLogs and returns the data updated in the database.
		 * @param {EmailsLogUpdateManyAndReturnArgs} args - Arguments to update many EmailsLogs.
		 * @example
		 * // Update many EmailsLogs
		 * const emailsLog = await prisma.emailsLog.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more EmailsLogs and only return the `id`
		 * const emailsLogWithIdOnly = await prisma.emailsLog.updateManyAndReturn({
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
		updateManyAndReturn<T extends EmailsLogUpdateManyAndReturnArgs>(
			args: SelectSubset<T, EmailsLogUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>

		/**
		 * Create or update one EmailsLog.
		 * @param {EmailsLogUpsertArgs} args - Arguments to update or create a EmailsLog.
		 * @example
		 * // Update or create a EmailsLog
		 * const emailsLog = await prisma.emailsLog.upsert({
		 *   create: {
		 *     // ... data to create a EmailsLog
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the EmailsLog we want to update
		 *   }
		 * })
		 */
		upsert<T extends EmailsLogUpsertArgs>(
			args: SelectSubset<T, EmailsLogUpsertArgs<ExtArgs>>,
		): Prisma__EmailsLogClient<
			$Result.GetResult<
				Prisma.$EmailsLogPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of EmailsLogs.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogCountArgs} args - Arguments to filter EmailsLogs to count.
		 * @example
		 * // Count the number of EmailsLogs
		 * const count = await prisma.emailsLog.count({
		 *   where: {
		 *     // ... the filter for the EmailsLogs we want to count
		 *   }
		 * })
		 **/
		count<T extends EmailsLogCountArgs>(
			args?: Subset<T, EmailsLogCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], EmailsLogCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a EmailsLog.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends EmailsLogAggregateArgs>(
			args: Subset<T, EmailsLogAggregateArgs>,
		): Prisma.PrismaPromise<GetEmailsLogAggregateType<T>>

		/**
		 * Group by EmailsLog.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {EmailsLogGroupByArgs} args - Group by arguments.
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
			T extends EmailsLogGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: EmailsLogGroupByArgs['orderBy'] }
				: { orderBy?: EmailsLogGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, EmailsLogGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetEmailsLogGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the EmailsLog model
		 */
		readonly fields: EmailsLogFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for EmailsLog.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__EmailsLogClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the EmailsLog model
	 */
	interface EmailsLogFieldRefs {
		readonly id: FieldRef<'EmailsLog', 'String'>
		readonly email: FieldRef<'EmailsLog', 'String'>
		readonly status: FieldRef<'EmailsLog', 'SendStatus'>
		readonly error: FieldRef<'EmailsLog', 'String'>
		readonly message: FieldRef<'EmailsLog', 'String'>
		readonly data: FieldRef<'EmailsLog', 'String'>
		readonly createdAt: FieldRef<'EmailsLog', 'DateTime'>
		readonly updatedAt: FieldRef<'EmailsLog', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * EmailsLog findUnique
	 */
	export type EmailsLogFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * Filter, which EmailsLog to fetch.
		 */
		where: EmailsLogWhereUniqueInput
	}

	/**
	 * EmailsLog findUniqueOrThrow
	 */
	export type EmailsLogFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * Filter, which EmailsLog to fetch.
		 */
		where: EmailsLogWhereUniqueInput
	}

	/**
	 * EmailsLog findFirst
	 */
	export type EmailsLogFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * Filter, which EmailsLog to fetch.
		 */
		where?: EmailsLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of EmailsLogs to fetch.
		 */
		orderBy?:
			| EmailsLogOrderByWithRelationInput
			| EmailsLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for EmailsLogs.
		 */
		cursor?: EmailsLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` EmailsLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` EmailsLogs.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of EmailsLogs.
		 */
		distinct?: EmailsLogScalarFieldEnum | EmailsLogScalarFieldEnum[]
	}

	/**
	 * EmailsLog findFirstOrThrow
	 */
	export type EmailsLogFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * Filter, which EmailsLog to fetch.
		 */
		where?: EmailsLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of EmailsLogs to fetch.
		 */
		orderBy?:
			| EmailsLogOrderByWithRelationInput
			| EmailsLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for EmailsLogs.
		 */
		cursor?: EmailsLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` EmailsLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` EmailsLogs.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of EmailsLogs.
		 */
		distinct?: EmailsLogScalarFieldEnum | EmailsLogScalarFieldEnum[]
	}

	/**
	 * EmailsLog findMany
	 */
	export type EmailsLogFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * Filter, which EmailsLogs to fetch.
		 */
		where?: EmailsLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of EmailsLogs to fetch.
		 */
		orderBy?:
			| EmailsLogOrderByWithRelationInput
			| EmailsLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing EmailsLogs.
		 */
		cursor?: EmailsLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` EmailsLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` EmailsLogs.
		 */
		skip?: number
		distinct?: EmailsLogScalarFieldEnum | EmailsLogScalarFieldEnum[]
	}

	/**
	 * EmailsLog create
	 */
	export type EmailsLogCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * The data needed to create a EmailsLog.
		 */
		data: XOR<EmailsLogCreateInput, EmailsLogUncheckedCreateInput>
	}

	/**
	 * EmailsLog createMany
	 */
	export type EmailsLogCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many EmailsLogs.
		 */
		data: EmailsLogCreateManyInput | EmailsLogCreateManyInput[]
	}

	/**
	 * EmailsLog createManyAndReturn
	 */
	export type EmailsLogCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * The data used to create many EmailsLogs.
		 */
		data: EmailsLogCreateManyInput | EmailsLogCreateManyInput[]
	}

	/**
	 * EmailsLog update
	 */
	export type EmailsLogUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * The data needed to update a EmailsLog.
		 */
		data: XOR<EmailsLogUpdateInput, EmailsLogUncheckedUpdateInput>
		/**
		 * Choose, which EmailsLog to update.
		 */
		where: EmailsLogWhereUniqueInput
	}

	/**
	 * EmailsLog updateMany
	 */
	export type EmailsLogUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update EmailsLogs.
		 */
		data: XOR<
			EmailsLogUpdateManyMutationInput,
			EmailsLogUncheckedUpdateManyInput
		>
		/**
		 * Filter which EmailsLogs to update
		 */
		where?: EmailsLogWhereInput
		/**
		 * Limit how many EmailsLogs to update.
		 */
		limit?: number
	}

	/**
	 * EmailsLog updateManyAndReturn
	 */
	export type EmailsLogUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * The data used to update EmailsLogs.
		 */
		data: XOR<
			EmailsLogUpdateManyMutationInput,
			EmailsLogUncheckedUpdateManyInput
		>
		/**
		 * Filter which EmailsLogs to update
		 */
		where?: EmailsLogWhereInput
		/**
		 * Limit how many EmailsLogs to update.
		 */
		limit?: number
	}

	/**
	 * EmailsLog upsert
	 */
	export type EmailsLogUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * The filter to search for the EmailsLog to update in case it exists.
		 */
		where: EmailsLogWhereUniqueInput
		/**
		 * In case the EmailsLog found by the `where` argument doesn't exist, create a new EmailsLog with this data.
		 */
		create: XOR<EmailsLogCreateInput, EmailsLogUncheckedCreateInput>
		/**
		 * In case the EmailsLog was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<EmailsLogUpdateInput, EmailsLogUncheckedUpdateInput>
	}

	/**
	 * EmailsLog delete
	 */
	export type EmailsLogDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
		/**
		 * Filter which EmailsLog to delete.
		 */
		where: EmailsLogWhereUniqueInput
	}

	/**
	 * EmailsLog deleteMany
	 */
	export type EmailsLogDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which EmailsLogs to delete
		 */
		where?: EmailsLogWhereInput
		/**
		 * Limit how many EmailsLogs to delete.
		 */
		limit?: number
	}

	/**
	 * EmailsLog without action
	 */
	export type EmailsLogDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the EmailsLog
		 */
		select?: EmailsLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the EmailsLog
		 */
		omit?: EmailsLogOmit<ExtArgs> | null
	}

	/**
	 * Model MessagesLog
	 */

	export type AggregateMessagesLog = {
		_count: MessagesLogCountAggregateOutputType | null
		_min: MessagesLogMinAggregateOutputType | null
		_max: MessagesLogMaxAggregateOutputType | null
	}

	export type MessagesLogMinAggregateOutputType = {
		id: string | null
		status: $Enums.SendStatus | null
		error: string | null
		message: string | null
		data: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export type MessagesLogMaxAggregateOutputType = {
		id: string | null
		status: $Enums.SendStatus | null
		error: string | null
		message: string | null
		data: string | null
		createdAt: Date | null
		updatedAt: Date | null
	}

	export type MessagesLogCountAggregateOutputType = {
		id: number
		status: number
		error: number
		message: number
		data: number
		createdAt: number
		updatedAt: number
		_all: number
	}

	export type MessagesLogMinAggregateInputType = {
		id?: true
		status?: true
		error?: true
		message?: true
		data?: true
		createdAt?: true
		updatedAt?: true
	}

	export type MessagesLogMaxAggregateInputType = {
		id?: true
		status?: true
		error?: true
		message?: true
		data?: true
		createdAt?: true
		updatedAt?: true
	}

	export type MessagesLogCountAggregateInputType = {
		id?: true
		status?: true
		error?: true
		message?: true
		data?: true
		createdAt?: true
		updatedAt?: true
		_all?: true
	}

	export type MessagesLogAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which MessagesLog to aggregate.
		 */
		where?: MessagesLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of MessagesLogs to fetch.
		 */
		orderBy?:
			| MessagesLogOrderByWithRelationInput
			| MessagesLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: MessagesLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` MessagesLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` MessagesLogs.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned MessagesLogs
		 **/
		_count?: true | MessagesLogCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: MessagesLogMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: MessagesLogMaxAggregateInputType
	}

	export type GetMessagesLogAggregateType<T extends MessagesLogAggregateArgs> =
		{
			[P in keyof T & keyof AggregateMessagesLog]: P extends '_count' | 'count'
				? T[P] extends true
					? number
					: GetScalarType<T[P], AggregateMessagesLog[P]>
				: GetScalarType<T[P], AggregateMessagesLog[P]>
		}

	export type MessagesLogGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: MessagesLogWhereInput
		orderBy?:
			| MessagesLogOrderByWithAggregationInput
			| MessagesLogOrderByWithAggregationInput[]
		by: MessagesLogScalarFieldEnum[] | MessagesLogScalarFieldEnum
		having?: MessagesLogScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: MessagesLogCountAggregateInputType | true
		_min?: MessagesLogMinAggregateInputType
		_max?: MessagesLogMaxAggregateInputType
	}

	export type MessagesLogGroupByOutputType = {
		id: string
		status: $Enums.SendStatus
		error: string | null
		message: string | null
		data: string | null
		createdAt: Date
		updatedAt: Date
		_count: MessagesLogCountAggregateOutputType | null
		_min: MessagesLogMinAggregateOutputType | null
		_max: MessagesLogMaxAggregateOutputType | null
	}

	type GetMessagesLogGroupByPayload<T extends MessagesLogGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<MessagesLogGroupByOutputType, T['by']> & {
					[P in keyof T &
						keyof MessagesLogGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], MessagesLogGroupByOutputType[P]>
						: GetScalarType<T[P], MessagesLogGroupByOutputType[P]>
				}
			>
		>

	export type MessagesLogSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			status?: boolean
			error?: boolean
			message?: boolean
			data?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['messagesLog']
	>

	export type MessagesLogSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			status?: boolean
			error?: boolean
			message?: boolean
			data?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['messagesLog']
	>

	export type MessagesLogSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean
			status?: boolean
			error?: boolean
			message?: boolean
			data?: boolean
			createdAt?: boolean
			updatedAt?: boolean
		},
		ExtArgs['result']['messagesLog']
	>

	export type MessagesLogSelectScalar = {
		id?: boolean
		status?: boolean
		error?: boolean
		message?: boolean
		data?: boolean
		createdAt?: boolean
		updatedAt?: boolean
	}

	export type MessagesLogOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'status' | 'error' | 'message' | 'data' | 'createdAt' | 'updatedAt',
		ExtArgs['result']['messagesLog']
	>

	export type $MessagesLogPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'MessagesLog'
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				id: string
				status: $Enums.SendStatus
				error: string | null
				message: string | null
				data: string | null
				createdAt: Date
				updatedAt: Date
			},
			ExtArgs['result']['messagesLog']
		>
		composites: {}
	}

	type MessagesLogGetPayload<
		S extends boolean | null | undefined | MessagesLogDefaultArgs,
	> = $Result.GetResult<Prisma.$MessagesLogPayload, S>

	type MessagesLogCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		MessagesLogFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: MessagesLogCountAggregateInputType | true
	}

	export interface MessagesLogDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['MessagesLog']
			meta: { name: 'MessagesLog' }
		}
		/**
		 * Find zero or one MessagesLog that matches the filter.
		 * @param {MessagesLogFindUniqueArgs} args - Arguments to find a MessagesLog
		 * @example
		 * // Get one MessagesLog
		 * const messagesLog = await prisma.messagesLog.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends MessagesLogFindUniqueArgs>(
			args: SelectSubset<T, MessagesLogFindUniqueArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find one MessagesLog that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {MessagesLogFindUniqueOrThrowArgs} args - Arguments to find a MessagesLog
		 * @example
		 * // Get one MessagesLog
		 * const messagesLog = await prisma.messagesLog.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends MessagesLogFindUniqueOrThrowArgs>(
			args: SelectSubset<T, MessagesLogFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first MessagesLog that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogFindFirstArgs} args - Arguments to find a MessagesLog
		 * @example
		 * // Get one MessagesLog
		 * const messagesLog = await prisma.messagesLog.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends MessagesLogFindFirstArgs>(
			args?: SelectSubset<T, MessagesLogFindFirstArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find the first MessagesLog that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogFindFirstOrThrowArgs} args - Arguments to find a MessagesLog
		 * @example
		 * // Get one MessagesLog
		 * const messagesLog = await prisma.messagesLog.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends MessagesLogFindFirstOrThrowArgs>(
			args?: SelectSubset<T, MessagesLogFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Find zero or more MessagesLogs that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all MessagesLogs
		 * const messagesLogs = await prisma.messagesLog.findMany()
		 *
		 * // Get first 10 MessagesLogs
		 * const messagesLogs = await prisma.messagesLog.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const messagesLogWithIdOnly = await prisma.messagesLog.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends MessagesLogFindManyArgs>(
			args?: SelectSubset<T, MessagesLogFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'findMany',
				GlobalOmitOptions
			>
		>

		/**
		 * Create a MessagesLog.
		 * @param {MessagesLogCreateArgs} args - Arguments to create a MessagesLog.
		 * @example
		 * // Create one MessagesLog
		 * const MessagesLog = await prisma.messagesLog.create({
		 *   data: {
		 *     // ... data to create a MessagesLog
		 *   }
		 * })
		 *
		 */
		create<T extends MessagesLogCreateArgs>(
			args: SelectSubset<T, MessagesLogCreateArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'create',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Create many MessagesLogs.
		 * @param {MessagesLogCreateManyArgs} args - Arguments to create many MessagesLogs.
		 * @example
		 * // Create many MessagesLogs
		 * const messagesLog = await prisma.messagesLog.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends MessagesLogCreateManyArgs>(
			args?: SelectSubset<T, MessagesLogCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many MessagesLogs and returns the data saved in the database.
		 * @param {MessagesLogCreateManyAndReturnArgs} args - Arguments to create many MessagesLogs.
		 * @example
		 * // Create many MessagesLogs
		 * const messagesLog = await prisma.messagesLog.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many MessagesLogs and only return the `id`
		 * const messagesLogWithIdOnly = await prisma.messagesLog.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends MessagesLogCreateManyAndReturnArgs>(
			args?: SelectSubset<T, MessagesLogCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>

		/**
		 * Delete a MessagesLog.
		 * @param {MessagesLogDeleteArgs} args - Arguments to delete one MessagesLog.
		 * @example
		 * // Delete one MessagesLog
		 * const MessagesLog = await prisma.messagesLog.delete({
		 *   where: {
		 *     // ... filter to delete one MessagesLog
		 *   }
		 * })
		 *
		 */
		delete<T extends MessagesLogDeleteArgs>(
			args: SelectSubset<T, MessagesLogDeleteArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'delete',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Update one MessagesLog.
		 * @param {MessagesLogUpdateArgs} args - Arguments to update one MessagesLog.
		 * @example
		 * // Update one MessagesLog
		 * const messagesLog = await prisma.messagesLog.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends MessagesLogUpdateArgs>(
			args: SelectSubset<T, MessagesLogUpdateArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'update',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Delete zero or more MessagesLogs.
		 * @param {MessagesLogDeleteManyArgs} args - Arguments to filter MessagesLogs to delete.
		 * @example
		 * // Delete a few MessagesLogs
		 * const { count } = await prisma.messagesLog.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends MessagesLogDeleteManyArgs>(
			args?: SelectSubset<T, MessagesLogDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more MessagesLogs.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many MessagesLogs
		 * const messagesLog = await prisma.messagesLog.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends MessagesLogUpdateManyArgs>(
			args: SelectSubset<T, MessagesLogUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more MessagesLogs and returns the data updated in the database.
		 * @param {MessagesLogUpdateManyAndReturnArgs} args - Arguments to update many MessagesLogs.
		 * @example
		 * // Update many MessagesLogs
		 * const messagesLog = await prisma.messagesLog.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more MessagesLogs and only return the `id`
		 * const messagesLogWithIdOnly = await prisma.messagesLog.updateManyAndReturn({
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
		updateManyAndReturn<T extends MessagesLogUpdateManyAndReturnArgs>(
			args: SelectSubset<T, MessagesLogUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>

		/**
		 * Create or update one MessagesLog.
		 * @param {MessagesLogUpsertArgs} args - Arguments to update or create a MessagesLog.
		 * @example
		 * // Update or create a MessagesLog
		 * const messagesLog = await prisma.messagesLog.upsert({
		 *   create: {
		 *     // ... data to create a MessagesLog
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the MessagesLog we want to update
		 *   }
		 * })
		 */
		upsert<T extends MessagesLogUpsertArgs>(
			args: SelectSubset<T, MessagesLogUpsertArgs<ExtArgs>>,
		): Prisma__MessagesLogClient<
			$Result.GetResult<
				Prisma.$MessagesLogPayload<ExtArgs>,
				T,
				'upsert',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>

		/**
		 * Count the number of MessagesLogs.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogCountArgs} args - Arguments to filter MessagesLogs to count.
		 * @example
		 * // Count the number of MessagesLogs
		 * const count = await prisma.messagesLog.count({
		 *   where: {
		 *     // ... the filter for the MessagesLogs we want to count
		 *   }
		 * })
		 **/
		count<T extends MessagesLogCountArgs>(
			args?: Subset<T, MessagesLogCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], MessagesLogCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a MessagesLog.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends MessagesLogAggregateArgs>(
			args: Subset<T, MessagesLogAggregateArgs>,
		): Prisma.PrismaPromise<GetMessagesLogAggregateType<T>>

		/**
		 * Group by MessagesLog.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {MessagesLogGroupByArgs} args - Group by arguments.
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
			T extends MessagesLogGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: MessagesLogGroupByArgs['orderBy'] }
				: { orderBy?: MessagesLogGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
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
									}[OrderFields],
		>(
			args: SubsetIntersection<T, MessagesLogGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetMessagesLogGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the MessagesLog model
		 */
		readonly fields: MessagesLogFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for MessagesLog.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__MessagesLogClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the MessagesLog model
	 */
	interface MessagesLogFieldRefs {
		readonly id: FieldRef<'MessagesLog', 'String'>
		readonly status: FieldRef<'MessagesLog', 'SendStatus'>
		readonly error: FieldRef<'MessagesLog', 'String'>
		readonly message: FieldRef<'MessagesLog', 'String'>
		readonly data: FieldRef<'MessagesLog', 'String'>
		readonly createdAt: FieldRef<'MessagesLog', 'DateTime'>
		readonly updatedAt: FieldRef<'MessagesLog', 'DateTime'>
	}

	// Custom InputTypes
	/**
	 * MessagesLog findUnique
	 */
	export type MessagesLogFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * Filter, which MessagesLog to fetch.
		 */
		where: MessagesLogWhereUniqueInput
	}

	/**
	 * MessagesLog findUniqueOrThrow
	 */
	export type MessagesLogFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * Filter, which MessagesLog to fetch.
		 */
		where: MessagesLogWhereUniqueInput
	}

	/**
	 * MessagesLog findFirst
	 */
	export type MessagesLogFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * Filter, which MessagesLog to fetch.
		 */
		where?: MessagesLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of MessagesLogs to fetch.
		 */
		orderBy?:
			| MessagesLogOrderByWithRelationInput
			| MessagesLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for MessagesLogs.
		 */
		cursor?: MessagesLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` MessagesLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` MessagesLogs.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of MessagesLogs.
		 */
		distinct?: MessagesLogScalarFieldEnum | MessagesLogScalarFieldEnum[]
	}

	/**
	 * MessagesLog findFirstOrThrow
	 */
	export type MessagesLogFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * Filter, which MessagesLog to fetch.
		 */
		where?: MessagesLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of MessagesLogs to fetch.
		 */
		orderBy?:
			| MessagesLogOrderByWithRelationInput
			| MessagesLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for MessagesLogs.
		 */
		cursor?: MessagesLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` MessagesLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` MessagesLogs.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of MessagesLogs.
		 */
		distinct?: MessagesLogScalarFieldEnum | MessagesLogScalarFieldEnum[]
	}

	/**
	 * MessagesLog findMany
	 */
	export type MessagesLogFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * Filter, which MessagesLogs to fetch.
		 */
		where?: MessagesLogWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of MessagesLogs to fetch.
		 */
		orderBy?:
			| MessagesLogOrderByWithRelationInput
			| MessagesLogOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing MessagesLogs.
		 */
		cursor?: MessagesLogWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` MessagesLogs from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` MessagesLogs.
		 */
		skip?: number
		distinct?: MessagesLogScalarFieldEnum | MessagesLogScalarFieldEnum[]
	}

	/**
	 * MessagesLog create
	 */
	export type MessagesLogCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * The data needed to create a MessagesLog.
		 */
		data: XOR<MessagesLogCreateInput, MessagesLogUncheckedCreateInput>
	}

	/**
	 * MessagesLog createMany
	 */
	export type MessagesLogCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many MessagesLogs.
		 */
		data: MessagesLogCreateManyInput | MessagesLogCreateManyInput[]
	}

	/**
	 * MessagesLog createManyAndReturn
	 */
	export type MessagesLogCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * The data used to create many MessagesLogs.
		 */
		data: MessagesLogCreateManyInput | MessagesLogCreateManyInput[]
	}

	/**
	 * MessagesLog update
	 */
	export type MessagesLogUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * The data needed to update a MessagesLog.
		 */
		data: XOR<MessagesLogUpdateInput, MessagesLogUncheckedUpdateInput>
		/**
		 * Choose, which MessagesLog to update.
		 */
		where: MessagesLogWhereUniqueInput
	}

	/**
	 * MessagesLog updateMany
	 */
	export type MessagesLogUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update MessagesLogs.
		 */
		data: XOR<
			MessagesLogUpdateManyMutationInput,
			MessagesLogUncheckedUpdateManyInput
		>
		/**
		 * Filter which MessagesLogs to update
		 */
		where?: MessagesLogWhereInput
		/**
		 * Limit how many MessagesLogs to update.
		 */
		limit?: number
	}

	/**
	 * MessagesLog updateManyAndReturn
	 */
	export type MessagesLogUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelectUpdateManyAndReturn<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * The data used to update MessagesLogs.
		 */
		data: XOR<
			MessagesLogUpdateManyMutationInput,
			MessagesLogUncheckedUpdateManyInput
		>
		/**
		 * Filter which MessagesLogs to update
		 */
		where?: MessagesLogWhereInput
		/**
		 * Limit how many MessagesLogs to update.
		 */
		limit?: number
	}

	/**
	 * MessagesLog upsert
	 */
	export type MessagesLogUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * The filter to search for the MessagesLog to update in case it exists.
		 */
		where: MessagesLogWhereUniqueInput
		/**
		 * In case the MessagesLog found by the `where` argument doesn't exist, create a new MessagesLog with this data.
		 */
		create: XOR<MessagesLogCreateInput, MessagesLogUncheckedCreateInput>
		/**
		 * In case the MessagesLog was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<MessagesLogUpdateInput, MessagesLogUncheckedUpdateInput>
	}

	/**
	 * MessagesLog delete
	 */
	export type MessagesLogDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
		/**
		 * Filter which MessagesLog to delete.
		 */
		where: MessagesLogWhereUniqueInput
	}

	/**
	 * MessagesLog deleteMany
	 */
	export type MessagesLogDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which MessagesLogs to delete
		 */
		where?: MessagesLogWhereInput
		/**
		 * Limit how many MessagesLogs to delete.
		 */
		limit?: number
	}

	/**
	 * MessagesLog without action
	 */
	export type MessagesLogDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the MessagesLog
		 */
		select?: MessagesLogSelect<ExtArgs> | null
		/**
		 * Omit specific fields from the MessagesLog
		 */
		omit?: MessagesLogOmit<ExtArgs> | null
	}

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		Serializable: 'Serializable'
	}

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

	export const UserScalarFieldEnum: {
		id: 'id'
		email: 'email'
		name: 'name'
		password: 'password'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

	export const EmailsLogScalarFieldEnum: {
		id: 'id'
		email: 'email'
		status: 'status'
		error: 'error'
		message: 'message'
		data: 'data'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type EmailsLogScalarFieldEnum =
		(typeof EmailsLogScalarFieldEnum)[keyof typeof EmailsLogScalarFieldEnum]

	export const MessagesLogScalarFieldEnum: {
		id: 'id'
		status: 'status'
		error: 'error'
		message: 'message'
		data: 'data'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
	}

	export type MessagesLogScalarFieldEnum =
		(typeof MessagesLogScalarFieldEnum)[keyof typeof MessagesLogScalarFieldEnum]

	export const SortOrder: {
		asc: 'asc'
		desc: 'desc'
	}

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

	export const NullsOrder: {
		first: 'first'
		last: 'last'
	}

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'String'
	>

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime'
	>

	/**
	 * Reference to a field of type 'SendStatus'
	 */
	export type EnumSendStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'SendStatus'
	>

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Int'
	>

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[]
		OR?: UserWhereInput[]
		NOT?: UserWhereInput | UserWhereInput[]
		id?: StringFilter<'User'> | string
		email?: StringFilter<'User'> | string
		name?: StringNullableFilter<'User'> | string | null
		password?: StringFilter<'User'> | string
		createdAt?: DateTimeFilter<'User'> | Date | string
		updatedAt?: DateTimeFilter<'User'> | Date | string
	}

	export type UserOrderByWithRelationInput = {
		id?: SortOrder
		email?: SortOrder
		name?: SortOrderInput | SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			email?: string
			AND?: UserWhereInput | UserWhereInput[]
			OR?: UserWhereInput[]
			NOT?: UserWhereInput | UserWhereInput[]
			name?: StringNullableFilter<'User'> | string | null
			password?: StringFilter<'User'> | string
			createdAt?: DateTimeFilter<'User'> | Date | string
			updatedAt?: DateTimeFilter<'User'> | Date | string
		},
		'id' | 'email'
	>

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder
		email?: SortOrder
		name?: SortOrderInput | SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: UserCountOrderByAggregateInput
		_max?: UserMaxOrderByAggregateInput
		_min?: UserMinOrderByAggregateInput
	}

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[]
		OR?: UserScalarWhereWithAggregatesInput[]
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'User'> | string
		email?: StringWithAggregatesFilter<'User'> | string
		name?: StringNullableWithAggregatesFilter<'User'> | string | null
		password?: StringWithAggregatesFilter<'User'> | string
		createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
	}

	export type EmailsLogWhereInput = {
		AND?: EmailsLogWhereInput | EmailsLogWhereInput[]
		OR?: EmailsLogWhereInput[]
		NOT?: EmailsLogWhereInput | EmailsLogWhereInput[]
		id?: StringFilter<'EmailsLog'> | string
		email?: StringFilter<'EmailsLog'> | string
		status?: EnumSendStatusFilter<'EmailsLog'> | $Enums.SendStatus
		error?: StringNullableFilter<'EmailsLog'> | string | null
		message?: StringNullableFilter<'EmailsLog'> | string | null
		data?: StringNullableFilter<'EmailsLog'> | string | null
		createdAt?: DateTimeFilter<'EmailsLog'> | Date | string
		updatedAt?: DateTimeFilter<'EmailsLog'> | Date | string
	}

	export type EmailsLogOrderByWithRelationInput = {
		id?: SortOrder
		email?: SortOrder
		status?: SortOrder
		error?: SortOrderInput | SortOrder
		message?: SortOrderInput | SortOrder
		data?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type EmailsLogWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			AND?: EmailsLogWhereInput | EmailsLogWhereInput[]
			OR?: EmailsLogWhereInput[]
			NOT?: EmailsLogWhereInput | EmailsLogWhereInput[]
			email?: StringFilter<'EmailsLog'> | string
			status?: EnumSendStatusFilter<'EmailsLog'> | $Enums.SendStatus
			error?: StringNullableFilter<'EmailsLog'> | string | null
			message?: StringNullableFilter<'EmailsLog'> | string | null
			data?: StringNullableFilter<'EmailsLog'> | string | null
			createdAt?: DateTimeFilter<'EmailsLog'> | Date | string
			updatedAt?: DateTimeFilter<'EmailsLog'> | Date | string
		},
		'id'
	>

	export type EmailsLogOrderByWithAggregationInput = {
		id?: SortOrder
		email?: SortOrder
		status?: SortOrder
		error?: SortOrderInput | SortOrder
		message?: SortOrderInput | SortOrder
		data?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: EmailsLogCountOrderByAggregateInput
		_max?: EmailsLogMaxOrderByAggregateInput
		_min?: EmailsLogMinOrderByAggregateInput
	}

	export type EmailsLogScalarWhereWithAggregatesInput = {
		AND?:
			| EmailsLogScalarWhereWithAggregatesInput
			| EmailsLogScalarWhereWithAggregatesInput[]
		OR?: EmailsLogScalarWhereWithAggregatesInput[]
		NOT?:
			| EmailsLogScalarWhereWithAggregatesInput
			| EmailsLogScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'EmailsLog'> | string
		email?: StringWithAggregatesFilter<'EmailsLog'> | string
		status?: EnumSendStatusWithAggregatesFilter<'EmailsLog'> | $Enums.SendStatus
		error?: StringNullableWithAggregatesFilter<'EmailsLog'> | string | null
		message?: StringNullableWithAggregatesFilter<'EmailsLog'> | string | null
		data?: StringNullableWithAggregatesFilter<'EmailsLog'> | string | null
		createdAt?: DateTimeWithAggregatesFilter<'EmailsLog'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'EmailsLog'> | Date | string
	}

	export type MessagesLogWhereInput = {
		AND?: MessagesLogWhereInput | MessagesLogWhereInput[]
		OR?: MessagesLogWhereInput[]
		NOT?: MessagesLogWhereInput | MessagesLogWhereInput[]
		id?: StringFilter<'MessagesLog'> | string
		status?: EnumSendStatusFilter<'MessagesLog'> | $Enums.SendStatus
		error?: StringNullableFilter<'MessagesLog'> | string | null
		message?: StringNullableFilter<'MessagesLog'> | string | null
		data?: StringNullableFilter<'MessagesLog'> | string | null
		createdAt?: DateTimeFilter<'MessagesLog'> | Date | string
		updatedAt?: DateTimeFilter<'MessagesLog'> | Date | string
	}

	export type MessagesLogOrderByWithRelationInput = {
		id?: SortOrder
		status?: SortOrder
		error?: SortOrderInput | SortOrder
		message?: SortOrderInput | SortOrder
		data?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type MessagesLogWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			AND?: MessagesLogWhereInput | MessagesLogWhereInput[]
			OR?: MessagesLogWhereInput[]
			NOT?: MessagesLogWhereInput | MessagesLogWhereInput[]
			status?: EnumSendStatusFilter<'MessagesLog'> | $Enums.SendStatus
			error?: StringNullableFilter<'MessagesLog'> | string | null
			message?: StringNullableFilter<'MessagesLog'> | string | null
			data?: StringNullableFilter<'MessagesLog'> | string | null
			createdAt?: DateTimeFilter<'MessagesLog'> | Date | string
			updatedAt?: DateTimeFilter<'MessagesLog'> | Date | string
		},
		'id'
	>

	export type MessagesLogOrderByWithAggregationInput = {
		id?: SortOrder
		status?: SortOrder
		error?: SortOrderInput | SortOrder
		message?: SortOrderInput | SortOrder
		data?: SortOrderInput | SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		_count?: MessagesLogCountOrderByAggregateInput
		_max?: MessagesLogMaxOrderByAggregateInput
		_min?: MessagesLogMinOrderByAggregateInput
	}

	export type MessagesLogScalarWhereWithAggregatesInput = {
		AND?:
			| MessagesLogScalarWhereWithAggregatesInput
			| MessagesLogScalarWhereWithAggregatesInput[]
		OR?: MessagesLogScalarWhereWithAggregatesInput[]
		NOT?:
			| MessagesLogScalarWhereWithAggregatesInput
			| MessagesLogScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'MessagesLog'> | string
		status?:
			| EnumSendStatusWithAggregatesFilter<'MessagesLog'>
			| $Enums.SendStatus
		error?: StringNullableWithAggregatesFilter<'MessagesLog'> | string | null
		message?: StringNullableWithAggregatesFilter<'MessagesLog'> | string | null
		data?: StringNullableWithAggregatesFilter<'MessagesLog'> | string | null
		createdAt?: DateTimeWithAggregatesFilter<'MessagesLog'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'MessagesLog'> | Date | string
	}

	export type UserCreateInput = {
		id?: string
		email: string
		name?: string | null
		password: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type UserUncheckedCreateInput = {
		id?: string
		email: string
		name?: string | null
		password: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type UserUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type UserUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type UserCreateManyInput = {
		id?: string
		email: string
		name?: string | null
		password: string
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type UserUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type UserUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type EmailsLogCreateInput = {
		id?: string
		email: string
		status: $Enums.SendStatus
		error?: string | null
		message?: string | null
		data?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type EmailsLogUncheckedCreateInput = {
		id?: string
		email: string
		status: $Enums.SendStatus
		error?: string | null
		message?: string | null
		data?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type EmailsLogUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type EmailsLogUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type EmailsLogCreateManyInput = {
		id?: string
		email: string
		status: $Enums.SendStatus
		error?: string | null
		message?: string | null
		data?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type EmailsLogUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type EmailsLogUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string
		email?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type MessagesLogCreateInput = {
		id?: string
		status: $Enums.SendStatus
		error?: string | null
		message?: string | null
		data?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type MessagesLogUncheckedCreateInput = {
		id?: string
		status: $Enums.SendStatus
		error?: string | null
		message?: string | null
		data?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type MessagesLogUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type MessagesLogUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type MessagesLogCreateManyInput = {
		id?: string
		status: $Enums.SendStatus
		error?: string | null
		message?: string | null
		data?: string | null
		createdAt?: Date | string
		updatedAt?: Date | string
	}

	export type MessagesLogUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type MessagesLogUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string
		status?: EnumSendStatusFieldUpdateOperationsInput | $Enums.SendStatus
		error?: NullableStringFieldUpdateOperationsInput | string | null
		message?: NullableStringFieldUpdateOperationsInput | string | null
		data?: NullableStringFieldUpdateOperationsInput | string | null
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
	}

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[]
		notIn?: string[]
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringFilter<$PrismaModel> | string
	}

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | null
		notIn?: string[] | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringNullableFilter<$PrismaModel> | string | null
	}

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[]
		notIn?: Date[] | string[]
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string
	}

	export type SortOrderInput = {
		sort: SortOrder
		nulls?: NullsOrder
	}

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder
		email?: SortOrder
		name?: SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder
		email?: SortOrder
		name?: SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder
		email?: SortOrder
		name?: SortOrder
		password?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[]
		notIn?: string[]
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

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | null
		notIn?: string[] | null
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

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[]
		notIn?: Date[] | string[]
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedDateTimeFilter<$PrismaModel>
		_max?: NestedDateTimeFilter<$PrismaModel>
	}

	export type EnumSendStatusFilter<$PrismaModel = never> = {
		equals?: $Enums.SendStatus | EnumSendStatusFieldRefInput<$PrismaModel>
		in?: $Enums.SendStatus[]
		notIn?: $Enums.SendStatus[]
		not?: NestedEnumSendStatusFilter<$PrismaModel> | $Enums.SendStatus
	}

	export type EmailsLogCountOrderByAggregateInput = {
		id?: SortOrder
		email?: SortOrder
		status?: SortOrder
		error?: SortOrder
		message?: SortOrder
		data?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type EmailsLogMaxOrderByAggregateInput = {
		id?: SortOrder
		email?: SortOrder
		status?: SortOrder
		error?: SortOrder
		message?: SortOrder
		data?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type EmailsLogMinOrderByAggregateInput = {
		id?: SortOrder
		email?: SortOrder
		status?: SortOrder
		error?: SortOrder
		message?: SortOrder
		data?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type EnumSendStatusWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.SendStatus | EnumSendStatusFieldRefInput<$PrismaModel>
		in?: $Enums.SendStatus[]
		notIn?: $Enums.SendStatus[]
		not?:
			| NestedEnumSendStatusWithAggregatesFilter<$PrismaModel>
			| $Enums.SendStatus
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedEnumSendStatusFilter<$PrismaModel>
		_max?: NestedEnumSendStatusFilter<$PrismaModel>
	}

	export type MessagesLogCountOrderByAggregateInput = {
		id?: SortOrder
		status?: SortOrder
		error?: SortOrder
		message?: SortOrder
		data?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type MessagesLogMaxOrderByAggregateInput = {
		id?: SortOrder
		status?: SortOrder
		error?: SortOrder
		message?: SortOrder
		data?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type MessagesLogMinOrderByAggregateInput = {
		id?: SortOrder
		status?: SortOrder
		error?: SortOrder
		message?: SortOrder
		data?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
	}

	export type StringFieldUpdateOperationsInput = {
		set?: string
	}

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null
	}

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string
	}

	export type EnumSendStatusFieldUpdateOperationsInput = {
		set?: $Enums.SendStatus
	}

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[]
		notIn?: string[]
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringFilter<$PrismaModel> | string
	}

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | null
		notIn?: string[] | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringNullableFilter<$PrismaModel> | string | null
	}

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[]
		notIn?: Date[] | string[]
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string
	}

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[]
		notIn?: string[]
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
		in?: number[]
		notIn?: number[]
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntFilter<$PrismaModel> | number
	}

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | null
		notIn?: string[] | null
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

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | null
		notIn?: number[] | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableFilter<$PrismaModel> | number | null
	}

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[]
		notIn?: Date[] | string[]
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedDateTimeFilter<$PrismaModel>
		_max?: NestedDateTimeFilter<$PrismaModel>
	}

	export type NestedEnumSendStatusFilter<$PrismaModel = never> = {
		equals?: $Enums.SendStatus | EnumSendStatusFieldRefInput<$PrismaModel>
		in?: $Enums.SendStatus[]
		notIn?: $Enums.SendStatus[]
		not?: NestedEnumSendStatusFilter<$PrismaModel> | $Enums.SendStatus
	}

	export type NestedEnumSendStatusWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.SendStatus | EnumSendStatusFieldRefInput<$PrismaModel>
		in?: $Enums.SendStatus[]
		notIn?: $Enums.SendStatus[]
		not?:
			| NestedEnumSendStatusWithAggregatesFilter<$PrismaModel>
			| $Enums.SendStatus
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedEnumSendStatusFilter<$PrismaModel>
		_max?: NestedEnumSendStatusFilter<$PrismaModel>
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
