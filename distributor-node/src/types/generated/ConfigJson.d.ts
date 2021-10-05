/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Configuration schema for distirubtor CLI and node
 */
export interface DistributorNodeConfiguration {
  /**
   * Node identifier used when sending elasticsearch logs and exposed on /status endpoint
   */
  id: string
  /**
   * Specifies external endpoints that the distributor node will connect to
   */
  endpoints: {
    /**
     * Query node graphql server uri (for example: http://localhost:8081/graphql)
     */
    queryNode: string
    /**
     * Joystream node websocket api uri (for example: ws://localhost:9944)
     */
    joystreamNodeWs: string
    /**
     * Elasticsearch uri used for submitting the distributor node logs (if enabled via `log.elastic`)
     */
    elasticSearch?: string
  }
  /**
   * Specifies paths where node's data will be stored
   */
  directories: {
    /**
     * Path to a directory where all the cached assets will be stored
     */
    assets: string
    /**
     * Path to a directory where information about the current cache state will be stored (LRU-SP cache data, stored assets mime types etc.)
     */
    cacheState: string
    /**
     * Path to a directory where logs will be stored if logging to a file was enabled (via `log.file`).
     */
    logs?: string
  }
  /**
   * Specifies minimum log levels by supported log outputs
   */
  log?: {
    /**
     * Minimum level of logs written to a file specified in `directories.logs`
     */
    file?: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly' | 'off'
    /**
     * Minimum level of logs outputted to a console
     */
    console?: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly' | 'off'
    /**
     * Minimum level of logs sent to elasticsearch endpoint specified in `endpoints.elasticSearch`
     */
    elastic?: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly' | 'off'
  }
  /**
   * Specifies node limits w.r.t. storage, outbound connections etc.
   */
  limits: {
    /**
     * Maximum total size of all (cached) assets stored in `directories.assets`
     */
    storage: string
    /**
     * Maximum number of concurrent downloads from the storage node(s)
     */
    maxConcurrentStorageNodeDownloads: number
    /**
     * Maximum number of total simultaneous outbound connections to storage node(s)
     */
    maxConcurrentOutboundConnections: number
    /**
     * Timeout for all outbound storage node http requests in miliseconds
     */
    outboundRequestsTimeout: number
  }
  /**
   * Specifies how often periodic tasks (for example cache cleanup) are executed by the node.
   */
  intervals: {
    /**
     * How often, in seconds, will the cache state be saved in `directories.state`. Independently of the specified interval, the node will always try to save cache state before exiting.
     */
    saveCacheState: number
    /**
     * How often, in seconds, will the distributor node attempt to send requests to all current storage node endpoints in order to check how quickly they respond. The node will never make more than 10 such requests concurrently.
     */
    checkStorageNodeResponseTimes: number
    /**
     * How often, in seconds, will the distributor node fetch data about all its distribution obligations from the query node and remove all the no-longer assigned data objects from local storage and cache state
     */
    cacheCleanup: number
  }
  /**
   * Distributor node http server port
   */
  port: number
  /**
   * Specifies the keys to use within distributor node CLI. Must be provided in form of substrate uris (ie.: //Alice)
   */
  keys: [string, ...string[]]
  /**
   * Specifies the buckets distributed by the node
   */
  buckets: [number, ...number[]] | 'all'
  /**
   * ID of the node operator (distribution working group worker)
   */
  workerId: number
}
