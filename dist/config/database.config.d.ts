declare const DB_CONNECTION: readonly ["mysql", "mariadb", "postgres", "mongodb"];
export type DB_CONNECTION_TYPE = (typeof DB_CONNECTION)[number];
export declare const DATABASE_CONFIG: {
    DB_CONNECTION: DB_CONNECTION_TYPE;
    DB_HOST: string;
    DB_PORT: number;
    DB_DATABASE: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
};
export {};
