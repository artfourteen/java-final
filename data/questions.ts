export type Question = {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: keyof Question['options'];
};

export const springBootTestQuestions: Question[] = [
  {
    "id": 1,
    "question": "What is the primary tool recommended for bootstrapping a Spring Boot application and managing initial dependencies?",
    "options": {
      "A": "Spring Initializr",
      "B": "Apache Maven CLI",
      "C": "Gradle Build Tool",
      "D": "Eclipse IDE Plugin"
    },
    "correctAnswer": "A"
  },
  {
    "id": 2,
    "question": "Which annotation is used to mark a class as a REST controller in Spring Boot, combining @Controller and @ResponseBody?",
    "options": {
      "A": "@RestController",
      "B": "@Service",
      "C": "@Component",
      "D": "@Repository"
    },
    "correctAnswer": "A"
  },
  {
    "id": 3,
    "question": "Which Spring Data interface is typically extended to provide basic CRUD (Create, Read, Update, Delete) operations for an entity?",
    "options": {
      "A": "JpaRepository or CrudRepository",
      "B": "DataAccessObject",
      "C": "EntityManager",
      "D": "SimpleJpaRepository"
    },
    "correctAnswer": "A"
  },
  {
    "id": 4,
    "question": "Which HTTP method is conventionally used to create a new resource via a RESTful API?",
    "options": {
      "A": "POST",
      "B": "GET",
      "C": "PUT",
      "D": "DELETE"
    },
    "correctAnswer": "A"
  },
  {
    "id": 5,
    "question": "Which JPA (Java Persistence API) annotation is used to designate a field in an entity as its primary key?",
    "options": {
      "A": "@Id",
      "B": "@PrimaryKey",
      "C": "@EntityKey",
      "D": "@Key"
    },
    "correctAnswer": "A"
  },
  {
    "id": 6,
    "question": "What is the common Spring Boot file where database connection properties (like URL, username, password) are configured?",
    "options": {
      "A": "application.properties or application.yml",
      "B": "database.xml",
      "C": "persistence.xml",
      "D": "settings.gradle"
    },
    "correctAnswer": "A"
  },
  {
    "id": 7,
    "question": "Which annotation is used in JPA to define a one-to-many relationship between two entities?",
    "options": {
      "A": "@OneToMany",
      "B": "@OneToOne",
      "C": "@HasMany",
      "D": "@LinksToMany"
    },
    "correctAnswer": "A"
  },
  {
    "id": 8,
    "question": "What is the primary purpose of using Data Transfer Objects (DTOs) in an application?",
    "options": {
      "A": "To transfer data between layers (e.g., service to controller) or between an API and its client, often shaping the data structure.",
      "B": "To directly interact with the database tables.",
      "C": "To define business logic and rules.",
      "D": "To manage application security."
    },
    "correctAnswer": "A"
  },
  {
    "id": 9,
    "question": "Which JPA annotation is used to define a many-to-many relationship between two entities?",
    "options": {
      "A": "@ManyToMany",
      "B": "@ManyJoin",
      "C": "@JoinsTable",
      "D": "@RelatedToMany"
    },
    "correctAnswer": "A"
  },
  {
    "id": 10,
    "question": "What is the process of organizing database tables to reduce redundancy and improve data integrity, such as aiming for 3NF?",
    "options": {
      "A": "Normalization",
      "B": "Denormalization",
      "C": "Aggregation",
      "D": "Sharding"
    },
    "correctAnswer": "A"
  },
  {
    "id": 11,
    "question": "Which annotation is used in Spring to create a global exception handler for controllers?",
    "options": {
      "A": "@ControllerAdvice",
      "B": "@GlobalExceptionHandler",
      "C": "@ErrorInterceptor",
      "D": "@ExceptionManager"
    },
    "correctAnswer": "A"
  },
  {
    "id": 12,
    "question": "Which annotation is used within a @ControllerAdvice class to specify a method that handles a particular type of exception?",
    "options": {
      "A": "@ExceptionHandler",
      "B": "@HandleError",
      "C": "@CatchException",
      "D": "@OnException"
    },
    "correctAnswer": "A"
  },
  {
    "id": 13,
    "question": "Which Jackson annotation can be used to prevent a specific field of a Java object from being serialized to JSON?",
    "options": {
      "A": "@JsonIgnore",
      "B": "@JsonSkip",
      "C": "@JsonExclude",
      "D": "@JsonOmit"
    },
    "correctAnswer": "A"
  },
  {
    "id": 14,
    "question": "When creating custom exceptions in Java, what class is commonly extended to create an unchecked exception?",
    "options": {
      "A": "RuntimeException",
      "B": "Exception",
      "C": "Throwable",
      "D": "Error"
    },
    "correctAnswer": "A"
  },
  {
    "id": 15,
    "question": "Which annotation is used in JPA to define a many-to-one relationship, often representing the \"many\" side pointing to \"one\"?",
    "options": {
      "A": "@ManyToOne",
      "B": "@BelongsTo",
      "C": "@SingleReference",
      "D": "@ParentEntity"
    },
    "correctAnswer": "A"
  },
  {
    "id": 16,
    "question": "What is a common tool mentioned for testing REST API endpoints, allowing users to send HTTP requests and view responses?",
    "options": {
      "A": "Postman or Swagger UI",
      "B": "JUnit",
      "C": "Selenium",
      "D": "JMeter"
    },
    "correctAnswer": "A"
  },
  {
    "id": 17,
    "question": "What is the SLF4J (Simple Logging Facade for Java) primarily used for in a Java application?",
    "options": {
      "A": "To provide an abstraction layer for various logging frameworks, allowing the underlying logging framework to be plugged in at deployment time.",
      "B": "To directly write logs to files.",
      "C": "To configure logging levels dynamically.",
      "D": "To generate log reports."
    },
    "correctAnswer": "A"
  },
  {
    "id": 18,
    "question": "Which Spring Boot Actuator endpoint is commonly used to check the overall health and status of an application?",
    "options": {
      "A": "/actuator/health",
      "B": "/actuator/status",
      "C": "/actuator/check",
      "D": "/actuator/ping"
    },
    "correctAnswer": "A"
  },
  {
    "id": 19,
    "question": "Which logging framework is often used in conjunction with SLF4J in Spring Boot applications for concrete logging implementation?",
    "options": {
      "A": "Logback",
      "B": "Log4j (version 1)",
      "C": "Java Util Logging (JUL)",
      "D": "Apache Commons Logging"
    },
    "correctAnswer": "A"
  },
  {
    "id": 20,
    "question": "What is a primary goal of \"structured logging\" as mentioned in relation to exception handling?",
    "options": {
      "A": "To log messages in a consistent, machine-readable format (e.g., JSON) with distinct fields, making them easier to parse, search, and analyze.",
      "B": "To ensure logs are written in a human-readable, narrative style.",
      "C": "To log only stack traces for exceptions.",
      "D": "To encrypt log messages for security."
    },
    "correctAnswer": "A"
  },
  {
    "id": 21,
    "question": "When implementing search functionality over multiple fields using a single query parameter, what SQL operator is commonly used if the value should be found in any of the searched fields?",
    "options": {
      "A": "OR",
      "B": "AND",
      "C": "NOR",
      "D": "XOR"
    },
    "correctAnswer": "A"
  },
  {
    "id": 22,
    "question": "Which annotation is used in Spring MVC to bind a method parameter to a web request parameter (query parameter)?",
    "options": {
      "A": "@RequestParam",
      "B": "@PathVariable",
      "C": "@RequestBody",
      "D": "@RequestHeader"
    },
    "correctAnswer": "A"
  },
  {
    "id": 23,
    "question": "If a search API endpoint finds no matching entities, what is an appropriate HTTP status code to return along with an empty list/array?",
    "options": {
      "A": "200 OK",
      "B": "404 Not Found",
      "C": "204 No Content",
      "D": "400 Bad Request"
    },
    "correctAnswer": "A"
  },
  {
    "id": 24,
    "question": "What is the purpose of input validation for API request parameters or DTO fields?",
    "options": {
      "A": "To ensure that the data received by the application is well-formed, meets expected criteria (e.g., format, range, size), and is safe to process.",
      "B": "To encrypt sensitive input data.",
      "C": "To automatically convert input data types.",
      "D": "To log all incoming request parameters."
    },
    "correctAnswer": "A"
  },
  {
    "id": 25,
    "question": "Which Spring class is commonly used for making synchronous, blocking HTTP requests to external REST APIs (though WebClient is now preferred for new development)?",
    "options": {
      "A": "RestTemplate",
      "B": "HttpClient",
      "C": "WebClient",
      "D": "HttpConnector"
    },
    "correctAnswer": "A"
  },
  {
    "id": 26,
    "question": "Which Spring class is part of the reactive WebFlux framework and is recommended for making asynchronous, non-blocking HTTP requests to external APIs?",
    "options": {
      "A": "WebClient",
      "B": "ReactiveRestTemplate",
      "C": "AsyncHttpClient",
      "D": "FluxRestTemplate"
    },
    "correctAnswer": "A"
  },
  {
    "id": 27,
    "question": "What is the primary purpose of implementing API rate limiting for a web service?",
    "options": {
      "A": "To protect the API from abuse (e.g., DoS attacks), ensure fair usage among clients, and maintain service stability.",
      "B": "To bill clients based on their API usage.",
      "C": "To track the number of active users.",
      "D": "To improve the response time of individual API calls."
    },
    "correctAnswer": "A"
  },
  {
    "id": 28,
    "question": "Which HTTP status code is typically returned to a client when they have exceeded their allowed API request rate?",
    "options": {
      "A": "429 Too Many Requests",
      "B": "403 Forbidden",
      "C": "503 Service Unavailable",
      "D": "401 Unauthorized"
    },
    "correctAnswer": "A"
  },
  {
    "id": 29,
    "question": "Which library, often used with Spring Boot, provides a token-bucket algorithm implementation for rate limiting?",
    "options": {
      "A": "Bucket4j",
      "B": "Resilience4j (provides RateLimiter, but Bucket4j is more specialized as just a rate limiter)",
      "C": "Guava RateLimiter",
      "D": "Hystrix"
    },
    "correctAnswer": "A"
  },
  {
    "id": 30,
    "question": "What is the primary benefit of using caching in an application, for example, with Spring Cache and Redis?",
    "options": {
      "A": "To improve application performance and reduce latency by storing frequently accessed data in a fast-access data store, reducing the load on backend systems (e.g., databases).",
      "B": "To ensure data consistency across distributed systems.",
      "C": "To provide a persistent backup for the main database.",
      "D": "To simplify data access logic in services."
    },
    "correctAnswer": "A"
  },
  {
    "id": 31,
    "question": "Which Spring annotation is used on a method to indicate that its result should be cached?",
    "options": {
      "A": "@Cacheable",
      "B": "@Cached",
      "C": "@StoreInCache",
      "D": "@SaveToCache"
    },
    "correctAnswer": "A"
  },
  {
    "id": 32,
    "question": "Which in-memory data store is commonly used with Spring Cache for distributed caching due to its performance and rich data structures?",
    "options": {
      "A": "Redis",
      "B": "Memcached",
      "C": "Ehcache (can be distributed but Redis is more typical for \"distributed\")",
      "D": "Hazelcast"
    },
    "correctAnswer": "A"
  },
  {
    "id": 33,
    "question": "In a Spring Boot application using Redis for caching, what property is typically set in `application.properties` or `application.yml` to specify Redis as the cache type?",
    "options": {
      "A": "spring.cache.type=redis",
      "B": "spring.cache.provider=redis",
      "C": "spring.redis.caching=true",
      "D": "spring.caching.use=redis"
    },
    "correctAnswer": "A"
  },
  {
    "id": 34,
    "question": "What is the purpose of a `.gitignore` file in a Git repository?",
    "options": {
      "A": "To specify intentionally untracked files that Git should ignore (e.g., build artifacts, IDE folders, local configuration files).",
      "B": "To store the history of all committed changes.",
      "C": "To define aliases for common Git commands.",
      "D": "To list all tracked files in the repository."
    },
    "correctAnswer": "A"
  },
  {
    "id": 35,
    "question": "When externalizing sensitive data like database passwords in a Spring Boot application, what is a common practice for storing these credentials outside of version control?",
    "options": {
      "A": "Using environment variables or a `.env` file (which is then loaded into environment variables).",
      "B": "Hardcoding them directly in `application.properties` and committing it.",
      "C": "Storing them in a public Gist.",
      "D": "Encrypting `application.properties` and committing the encrypted version."
    },
    "correctAnswer": "A"
  },
  {
    "id": 36,
    "question": "What is the primary purpose of using Docker to containerize a Spring Boot application?",
    "options": {
      "A": "To package the application and its dependencies into a standardized unit for software development, shipment, and deployment, ensuring consistency across environments.",
      "B": "To automatically scale the application based on load.",
      "C": "To provide a relational database service.",
      "D": "To manage the application's source code."
    },
    "correctAnswer": "A"
  },
  {
    "id": 37,
    "question": "What is the name of the file used by Docker to define the steps for building a Docker image?",
    "options": {
      "A": "Dockerfile",
      "B": "docker-build.yml",
      "C": "image.config",
      "D": "Containerfile"
    },
    "correctAnswer": "A"
  },
  {
    "id": 38,
    "question": "Which command-line tool is used to orchestrate multi-container Docker applications, often using a `docker-compose.yml` file?",
    "options": {
      "A": "docker-compose",
      "B": "kubectl",
      "C": "docker swarm",
      "D": "ansible"
    },
    "correctAnswer": "A"
  },
  {
    "id": 39,
    "question": "What is the JPA (Java Persistence API) annotation used to mark a Java class as an entity that can be mapped to a database table?",
    "options": {
      "A": "@Entity",
      "B": "@TableObject",
      "C": "@Persistent",
      "D": "@Model"
    },
    "correctAnswer": "A"
  },
  {
    "id": 40,
    "question": "Which annotation is used in Spring to inject a dependency (e.g., a service into a controller)?",
    "options": {
      "A": "@Autowired",
      "B": "@Inject",
      "C": "@Require",
      "D": "@Resource"
    },
    "correctAnswer": "A"
  },
  {
    "id": 41,
    "question": "What is the default scope of a Spring bean if no other scope is specified?",
    "options": {
      "A": "singleton",
      "B": "prototype",
      "C": "request",
      "D": "session"
    },
    "correctAnswer": "A"
  },
  {
    "id": 42,
    "question": "Which Spring annotation marks a class as a component in the service layer, typically holding business logic?",
    "options": {
      "A": "@Service",
      "B": "@BusinessLogic",
      "C": "@DomainService",
      "D": "@ApplicationLogic"
    },
    "correctAnswer": "A"
  },
  {
    "id": 43,
    "question": "In a Maven project (often generated by Spring Initializr), what is the name of the XML file used to manage project dependencies and build configuration?",
    "options": {
      "A": "pom.xml",
      "B": "build.xml",
      "C": "dependencies.xml",
      "D": "settings.xml"
    },
    "correctAnswer": "A"
  },
  {
    "id": 44,
    "question": "What is the common Spring Boot \"starter\" dependency that provides core Spring MVC and an embedded Tomcat server for web applications?",
    "options": {
      "A": "spring-boot-starter-web",
      "B": "spring-boot-starter-tomcat",
      "C": "spring-boot-starter-mvc",
      "D": "spring-boot-starter-http"
    },
    "correctAnswer": "A"
  },
  {
    "id": 45,
    "question": "Which annotation can be used in Spring MVC to map HTTP GET requests to a specific handler method?",
    "options": {
      "A": "@GetMapping",
      "B": "@HttpRequest(method=\"GET\")",
      "C": "@GetAction",
      "D": "@RequestMapping.Get"
    },
    "correctAnswer": "A"
  },
  {
    "id": 46,
    "question": "What is the primary purpose of the `CascadeType` attribute in JPA relationship annotations like `@OneToMany`?",
    "options": {
      "A": "To define how persistence operations (e.g., persist, merge, remove) on the owning entity should propagate to associated entities.",
      "B": "To specify the fetching strategy (EAGER or LAZY) for the relationship.",
      "C": "To name the foreign key column.",
      "D": "To indicate if the relationship is optional or mandatory."
    },
    "correctAnswer": "A"
  },
  {
    "id": 47,
    "question": "Which HTTP status code indicates a successful request where a resource has been successfully created (often in response to a POST request)?",
    "options": {
      "A": "201 Created",
      "B": "200 OK",
      "C": "204 No Content",
      "D": "302 Found"
    },
    "correctAnswer": "A"
  },
  {
    "id": 48,
    "question": "What is a common use case for the `@Value` annotation in Spring?",
    "options": {
      "A": "To inject values from properties files, environment variables, or system properties into fields or method parameters.",
      "B": "To define the default value for an entity field.",
      "C": "To specify the value of an HTTP header.",
      "D": "To set the return value of a controller method."
    },
    "correctAnswer": "A"
  },
  {
    "id": 49,
    "question": "In Spring Data JPA, how can you define a custom query using JPQL (Java Persistence Query Language) or native SQL for a repository method?",
    "options": {
      "A": "By using the `@Query` annotation on the repository method.",
      "B": "By naming the method according to specific conventions only.",
      "C": "By creating a separate XML file for queries.",
      "D": "By implementing the method directly in a concrete class."
    },
    "correctAnswer": "A"
  },
  {
    "id": 50,
    "question": "Which Lombok annotation is commonly used to generate a constructor with all arguments for a class?",
    "options": {
      "A": "@AllArgsConstructor",
      "B": "@NoArgsConstructor",
      "C": "@RequiredArgsConstructor",
      "D": "@Data"
    },
    "correctAnswer": "A"
  },
  {
    "id": 51,
    "question": "In JPA, which annotation is used to specify constraints on a database column, such as its nullability or length?",
    "options": {
      "A": "@Column",
      "B": "@FieldConstraint",
      "C": "@DbRule",
      "D": "@Validate"
    },
    "correctAnswer": "A"
  },
  {
    "id": 52,
    "question": "When updating an existing resource, what is a key difference in semantics between HTTP PUT and HTTP PATCH methods?",
    "options": {
      "A": "PUT typically replaces the entire resource, while PATCH applies a partial update.",
      "B": "PUT is for creating, PATCH is for updating.",
      "C": "PATCH is idempotent, PUT is not.",
      "D": "PUT is more secure than PATCH."
    },
    "correctAnswer": "A"
  },
  {
    "id": 53,
    "question": "Which Spring MVC class can be used as a return type from a controller method to have full control over the HTTP response, including status code, headers, and body?",
    "options": {
      "A": "ResponseEntity<T>",
      "B": "HttpResponse<T>",
      "C": "RestResponse<T>",
      "D": "ApiResponse<T>"
    },
    "correctAnswer": "A"
  },
  {
    "id": 54,
    "question": "What is a core principle of Spring Boot's auto-configuration mechanism?",
    "options": {
      "A": "It attempts to automatically configure your Spring application based on the JAR dependencies that you have added.",
      "B": "It requires manual XML configuration for all beans.",
      "C": "It generates boilerplate code for controllers and services.",
      "D": "It only configures embedded web servers."
    },
    "correctAnswer": "A"
  },
  {
    "id": 55,
    "question": "What is the typical default URL to access the H2 database console in a Spring Boot application when H2 is configured and enabled?",
    "options": {
      "A": "/h2-console",
      "B": "/db-admin",
      "C": "/h2",
      "D": "/database-manager"
    },
    "correctAnswer": "A"
  },
  {
    "id": 56,
    "question": "In JPA, what does \"bidirectional relationship\" mean between two entities?",
    "options": {
      "A": "Both entities have a reference to each other, and the relationship can be navigated from either side.",
      "B": "The relationship involves two foreign keys.",
      "C": "Data can flow in two directions between the tables.",
      "D": "The relationship is managed by an intermediary table."
    },
    "correctAnswer": "A"
  },
  {
    "id": 57,
    "question": "When using Data Transfer Objects (DTOs) for API request payloads, what is a primary benefit?",
    "options": {
      "A": "They decouple the API contract from the internal entity structure and can include validation specific to the use case.",
      "B": "They automatically convert JSON to XML.",
      "C": "They improve database query performance.",
      "D": "They handle transaction management."
    },
    "correctAnswer": "A"
  },
  {
    "id": 58,
    "question": "Which JPA annotation is used to specify the column that will be used for joining in an entity relationship (e.g., the foreign key column)?",
    "options": {
      "A": "@JoinColumn",
      "B": "@ForeignKeyColumn",
      "C": "@RelationshipColumn",
      "D": "@AssociationKey"
    },
    "correctAnswer": "A"
  },
  {
    "id": 59,
    "question": "What does `WorkspaceType.EAGER` signify in a JPA relationship annotation?",
    "options": {
      "A": "The related entity or collection of entities should be loaded immediately when the owning entity is loaded.",
      "B": "The related entity is loaded only when explicitly accessed.",
      "C": "The loading is deferred until the transaction commits.",
      "D": "The entity is loaded into a second-level cache."
    },
    "correctAnswer": "A"
  },
  {
    "id": 60,
    "question": "Which Jackson annotation allows you to specify a custom class for deserializing a JSON property into a Java object?",
    "options": {
      "A": "@JsonDeserialize(using = MyCustomDeserializer.class)",
      "B": "@CustomDeserializer(MyCustomDeserializer.class)",
      "C": "@DeserializeWith(MyCustomDeserializer.class)",
      "D": "@UseDeserializer(MyCustomDeserializer.class)"
    },
    "correctAnswer": "A"
  },
  {
    "id": 61,
    "question": "When using `@ResponseStatus` on a custom exception class, what is its primary effect?",
    "options": {
      "A": "It causes Spring MVC to automatically return the specified HTTP status code when that exception is thrown and not otherwise handled.",
      "B": "It logs the exception with the specified status.",
      "C": "It converts the exception into an HTTP error page.",
      "D": "It triggers a specific view to be rendered."
    },
    "correctAnswer": "A"
  },
  {
    "id": 62,
    "question": "Which of the following is a good practice for creating \"meaningful error messages\" in API responses?",
    "options": {
      "A": "Provide a clear, concise message explaining the error, possibly with a unique error code and relevant field information.",
      "B": "Return only the HTTP status code without a message body.",
      "C": "Include the full server-side stack trace in the response.",
      "D": "Use generic messages like \"An error occurred\" for all errors."
    },
    "correctAnswer": "A"
  },
  {
    "id": 63,
    "question": "What is a common type of deserialization vulnerability that input validation helps to prevent?",
    "options": {
      "A": "Injecting malicious code or objects by exploiting how data is deserialized, potentially leading to remote code execution or denial of service.",
      "B": "SQL injection attacks.",
      "C": "Cross-Site Scripting (XSS).",
      "D": "Man-in-the-middle attacks."
    },
    "correctAnswer": "A"
  },
  {
    "id": 64,
    "question": "In Logback configuration, which type of appender is used to write log messages to the system console?",
    "options": {
      "A": "ConsoleAppender",
      "B": "SystemOutAppender",
      "C": "StdOutAppender",
      "D": "TerminalAppender"
    },
    "correctAnswer": "A"
  },
  {
    "id": 65,
    "question": "What is a common placeholder in a Logback pattern layout to output the date and time of a log event?",
    "options": {
      "A": "%d (or %date)",
      "B": "%t (for time)",
      "C": "%timestamp",
      "D": "%eventDate"
    },
    "correctAnswer": "A"
  },
  {
    "id": 66,
    "question": "Which Spring Boot Actuator endpoint can provide detailed metrics about the JVM, such as memory usage, garbage collection, and thread utilization?",
    "options": {
      "A": "/actuator/metrics (followed by specific metric names like jvm.memory.used)",
      "B": "/actuator/jvm",
      "C": "/actuator/env",
      "D": "/actuator/threaddump"
    },
    "correctAnswer": "A"
  },
  {
    "id": 67,
    "question": "How can Spring Boot Actuator endpoints typically be secured in a production environment?",
    "options": {
      "A": "By integrating with Spring Security to require authentication and authorization.",
      "B": "They are secure by default and need no extra configuration.",
      "C": "By using unique, non-standard paths for each endpoint.",
      "D": "By only allowing access from `localhost`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 68,
    "question": "In Spring Data JPA, if you have a repository method like `List<User> findByAgeGreaterThan(int age);`, what does this method signature imply?",
    "options": {
      "A": "It will find all User entities where the 'age' property is greater than the provided 'age' parameter.",
      "B": "It requires a custom @Query annotation.",
      "C": "It will find users older than a fixed age.",
      "D": "It sorts users by age in descending order."
    },
    "correctAnswer": "A"
  },
  {
    "id": 69,
    "question": "When using pagination with Spring Data JPA, what object is commonly used in a service or controller to create a `Pageable` request specifying page number, size, and sort order?",
    "options": {
      "A": "PageRequest",
      "B": "PageBuilder",
      "C": "SortablePage",
      "D": "OffsetLimit"
    },
    "correctAnswer": "A"
  },
  {
    "id": 70,
    "question": "Which JSR 303/380 bean validation annotation can be used to ensure that a CharSequence (like a String) is not null and has a minimum and/or maximum length?",
    "options": {
      "A": "@Size(min=X, max=Y)",
      "B": "@Length(min=X, max=Y)",
      "C": "@NotEmpty(min=X, max=Y)",
      "D": "@Range(min=X, max=Y)"
    },
    "correctAnswer": "A"
  },
  {
    "id": 71,
    "question": "When an external API call results in an HTTP error (e.g., 4xx or 5xx), what exception might `RestTemplate` throw (if not configured with custom error handlers)?",
    "options": {
      "A": "HttpClientErrorException or HttpServerErrorException",
      "B": "ExternalApiException",
      "C": "IOException",
      "D": "RestClientException"
    },
    "correctAnswer": "A"
  },
  {
    "id": 72,
    "question": "What is a common way to securely provide an API key when making requests to an external service that requires one?",
    "options": {
      "A": "By sending it in an HTTP header (e.g., `Authorization` or a custom header like `X-API-Key`).",
      "B": "By embedding it directly in the URL as a query parameter.",
      "C": "By hardcoding it in the application source code.",
      "D": "By storing it in a client-side cookie."
    },
    "correctAnswer": "A"
  },
  {
    "id": 73,
    "question": "In the context of API rate limiting, what does \"burst capacity\" or \"burstiness\" typically refer to?",
    "options": {
      "A": "The ability of the rate limiter to allow a certain number of requests to exceed the steady-state rate for a short period.",
      "B": "The total number of requests allowed per day.",
      "C": "The speed at which tokens are refilled in a token bucket.",
      "D": "The number of different IP addresses that can access the API."
    },
    "correctAnswer": "A"
  },
  {
    "id": 74,
    "question": "Which Spring AOP (Aspect-Oriented Programming) concept could be used to declaratively apply rate limiting logic to controller methods?",
    "options": {
      "A": "An Around advice associated with a pointcut matching the target methods.",
      "B": "A Spring Bean PostProcessor.",
      "C": "A custom `HttpMessageConverter`.",
      "D": "A Spring `ApplicationListener`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 75,
    "question": "Which Spring Cache annotation is used to update an existing cache entry with the result of the annotated method?",
    "options": {
      "A": "@CachePut",
      "B": "@CacheUpdate",
      "C": "@RefreshCache",
      "D": "@ReplaceCacheValue"
    },
    "correctAnswer": "A"
  },
  {
    "id": 76,
    "question": "Which Spring Cache annotation is used to remove one or more entries from a cache?",
    "options": {
      "A": "@CacheEvict",
      "B": "@CacheRemove",
      "C": "@DeleteFromCache",
      "D": "@InvalidateCache"
    },
    "correctAnswer": "A"
  },
  {
    "id": 77,
    "question": "What is the purpose of the `condition` attribute in the `@Cacheable` annotation?",
    "options": {
      "A": "It allows specifying a SpEL (Spring Expression Language) expression that, if true, will cause the method to be cached; otherwise, it will not.",
      "B": "It specifies the condition under which the cache should be evicted.",
      "C": "It defines the data type of the cached result.",
      "D": "It links the cache operation to a specific transaction."
    },
    "correctAnswer": "A"
  },
  {
    "id": 78,
    "question": "What is the primary Spring Boot \"starter\" dependency that enables caching abstraction?",
    "options": {
      "A": "spring-boot-starter-cache",
      "B": "spring-boot-starter-caffeine",
      "C": "spring-boot-starter-redis-cache",
      "D": "spring-boot-starter-ehcache"
    },
    "correctAnswer": "A"
  },
  {
    "id": 79,
    "question": "What is a key difference between a local, in-memory cache (like Caffeine or a simple ConcurrentHashMap) and a distributed cache (like Redis)?",
    "options": {
      "A": "A local cache stores data within a single application instance's memory, while a distributed cache stores data in a separate process accessible by multiple application instances.",
      "B": "Local caches are always faster than distributed caches.",
      "C": "Distributed caches do not support eviction policies.",
      "D": "Local caches are only for read-only data."
    },
    "correctAnswer": "A"
  },
  {
    "id": 80,
    "question": "Which Git command is used to stage changes in your working directory for the next commit?",
    "options": {
      "A": "git add <file>... or git add .",
      "B": "git stage <file>...",
      "C": "git commit -m \"message\"",
      "D": "git save <file>..."
    },
    "correctAnswer": "A"
  },
  {
    "id": 81,
    "question": "What is the typical syntax for using an environment variable in a `docker-compose.yml` file or a Spring `application.properties` file?",
    "options": {
      "A": "`${VARIABLE_NAME}`",
      "B": "`%VARIABLE_NAME%`",
      "C": "`$(VARIABLE_NAME)`",
      "D": "`#{VARIABLE_NAME}`"
    },
    "correctAnswer": "A"
  },
  {
    "id": 82,
    "question": "In a Dockerfile, what is the `WORKDIR` instruction used for?",
    "options": {
      "A": "To set the working directory for any subsequent `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions.",
      "B": "To define a volume for persistent data.",
      "C": "To expose a port.",
      "D": "To specify the user to run subsequent commands."
    },
    "correctAnswer": "A"
  },
  {
    "id": 83,
    "question": "What is a primary difference between the `CMD` and `ENTRYPOINT` instructions in a Dockerfile?",
    "options": {
      "A": "`ENTRYPOINT` configures the container to run as an executable, while `CMD` provides default arguments for the `ENTRYPOINT` or an ad-hoc command if no `ENTRYPOINT` is specified.",
      "B": "`CMD` is executed at build time, `ENTRYPOINT` at runtime.",
      "C": "Only `ENTRYPOINT` can be overridden when starting a container.",
      "D": "`CMD` is for services, `ENTRYPOINT` for scripts."
    },
    "correctAnswer": "A"
  },
  {
    "id": 84,
    "question": "What is the purpose of the `target/` directory in a typical Maven project structure?",
    "options": {
      "A": "It is the default output directory for all build artifacts, such as compiled classes, packaged JAR/WAR files, and test reports.",
      "B": "It stores the project's source code.",
      "C": "It contains project dependencies.",
      "D": "It holds configuration files for the Maven build."
    },
    "correctAnswer": "A"
  },
  {
    "id": 85,
    "question": "Which annotation is used to specify the base packages to scan for Spring components (like @Controller, @Service, etc.) if they are not in sub-packages of the main application class?",
    "options": {
      "A": "@ComponentScan",
      "B": "@ScanPackages",
      "C": "@EnableComponentScanning",
      "D": "@AutoScan"
    },
    "correctAnswer": "A"
  },
  {
    "id": 86,
    "question": "What is the default fetch type for a `@OneToMany` JPA relationship?",
    "options": {
      "A": "LAZY",
      "B": "EAGER",
      "C": "AUTO",
      "D": "OPTIONAL"
    },
    "correctAnswer": "A"
  },
  {
    "id": 87,
    "question": "Which Jackson annotation can be used to specify a different name for a Java field when it's serialized to or deserialized from JSON?",
    "options": {
      "A": "@JsonProperty(\"custom_name\")",
      "B": "@JsonAlias(\"custom_name\")",
      "C": "@JsonFieldName(\"custom_name\")",
      "D": "@JsonElement(\"custom_name\")"
    },
    "correctAnswer": "A"
  },
  {
    "id": 88,
    "question": "In Spring Security, what is the primary role of an `AuthenticationManager`?",
    "options": {
      "A": "To process an authentication request (e.g., username/password) and return an authenticated `Authentication` object if successful, or throw an exception if not.",
      "B": "To manage user roles and permissions.",
      "C": "To encrypt and decrypt passwords.",
      "D": "To store user session information."
    },
    "correctAnswer": "A"
  },
  {
    "id": 89,
    "question": "What is a \"fat JAR\" or \"uber JAR\" in the context of a Spring Boot application?",
    "options": {
      "A": "A single JAR file that contains all the application's compiled code as well as all its dependencies, making it self-contained and executable.",
      "B": "A JAR file that is larger than 100MB.",
      "C": "A JAR file that only contains application properties.",
      "D": "A JAR that requires a separate web server to run."
    },
    "correctAnswer": "A"
  },
  {
    "id": 90,
    "question": "Which Actuator endpoint provides information about the application's configuration properties from all `PropertySource`s?",
    "options": {
      "A": "/actuator/configprops",
      "B": "/actuator/properties",
      "C": "/actuator/appconfig",
      "D": "/actuator/settings"
    },
    "correctAnswer": "A"
  },
  {
    "id": 91,
    "question": "In `docker-compose.yml`, what is the `ports` mapping (e.g., \"8080:8080\") used for?",
    "options": {
      "A": "To map a port on the host machine to a port on the container.",
      "B": "To define which ports the container exposes internally.",
      "C": "To link ports between different services in the compose file.",
      "D": "To specify the application's listening port in its configuration."
    },
    "correctAnswer": "A"
  },
  {
    "id": 92,
    "question": "What does the term \"idempotent\" mean for an HTTP method in a REST API?",
    "options": {
      "A": "Making multiple identical requests has the same effect as making a single request.",
      "B": "The request does not change any state on the server.",
      "C": "The request always returns the same response.",
      "D": "The request is processed asynchronously."
    },
    "correctAnswer": "A"
  },
  {
    "id": 93,
    "question": "Which Spring annotation can be used to create a bean conditionally based on the presence or absence of another bean, property, or class?",
    "options": {
      "A": "@ConditionalOnBean, @ConditionalOnProperty, @ConditionalOnClass, etc.",
      "B": "@IfBeanExists",
      "C": "@RequiresDependency",
      "D": "@ActivateIf"
    },
    "correctAnswer": "A"
  },
  {
    "id": 94,
    "question": "What is the purpose of using connection pooling for database connections in an application?",
    "options": {
      "A": "To manage a pool of pre-established database connections that can be reused by the application, improving performance by reducing the overhead of creating new connections for each request.",
      "B": "To encrypt database connections.",
      "C": "To automatically route queries to different database replicas.",
      "D": "To provide an in-memory database cache."
    },
    "correctAnswer": "A"
  },
  {
    "id": 95,
    "question": "Which Spring Boot \"starter\" dependency is typically used for integrating with reactive data access, for instance, with reactive database drivers?",
    "options": {
      "A": "spring-boot-starter-data-r2dbc",
      "B": "spring-boot-starter-data-jpa-reactive",
      "C": "spring-boot-starter-reactive-db",
      "D": "spring-boot-starter-webflux-data"
    },
    "correctAnswer": "A"
  },
  {
    "id": 96,
    "question": "What does the `@SpringBootTest` annotation typically do when used in a Spring Boot test class?",
    "options": {
      "A": "It loads the full application context (or a relevant slice of it) for integration testing.",
      "B": "It only unit tests a single Spring component.",
      "C": "It generates test data automatically.",
      "D": "It deploys the application to a test server."
    },
    "correctAnswer": "A"
  },
  {
    "id": 97,
    "question": "In a `docker-compose.yml` file, what is a \"volume\" primarily used for?",
    "options": {
      "A": "To persist data generated by and used by Docker containers, allowing data to survive container restarts or removals.",
      "B": "To define the network configuration for services.",
      "C": "To limit the CPU and memory resources for a container.",
      "D": "To store the Docker image layers."
    },
    "correctAnswer": "A"
  },
  {
    "id": 98,
    "question": "What is the purpose of a `PreparedStatement` in JDBC, which is often used under the hood by JPA providers?",
    "options": {
      "A": "To precompile an SQL statement that can be executed multiple times efficiently and to help prevent SQL injection by parameterizing inputs.",
      "B": "To execute multiple SQL statements in a single batch.",
      "C": "To manage database transactions.",
      "D": "To store the results of an SQL query."
    },
    "correctAnswer": "A"
  },
  {
    "id": 99,
    "question": "Which HTTP header is commonly used by clients to indicate the desired content type(s) for the response?",
    "options": {
      "A": "Accept",
      "B": "Content-Type",
      "C": "X-Requested-With",
      "D": "User-Agent"
    },
    "correctAnswer": "A"
  },
  {
    "id": 100,
    "question": "Which Lombok annotation combines @Getter, @Setter, @ToString, @EqualsAndHashCode, and @RequiredArgsConstructor?",
    "options": {
      "A": "@Data",
      "B": "@Compound",
      "C": "@Bean",
      "D": "@EntityComplete"
    },
    "correctAnswer": "A"
  },
  {
    "id": 101,
    "question": "When configuring a relational database in `application.properties` for Spring Data JPA, which property specifies the JDBC URL?",
    "options": {
      "A": "spring.datasource.url",
      "B": "spring.jpa.database-url",
      "C": "spring.db.connection-string",
      "D": "spring.jdbc.url"
    },
    "correctAnswer": "A"
  },
  {
    "id": 102,
    "question": "In a REST API, which HTTP method is typically used to delete a resource identified by a URI?",
    "options": {
      "A": "DELETE",
      "B": "REMOVE",
      "C": "DROP",
      "D": "ERASE"
    },
    "correctAnswer": "A"
  },
  {
    "id": 103,
    "question": "What is the role of an `EntityManager` in JPA?",
    "options": {
      "A": "It is an API that manages the lifecycle of entities, including operations like persisting, finding, updating, and removing entities, and querying.",
      "B": "It is a factory for creating database connections.",
      "C": "It is an annotation to define an entity manager bean.",
      "D": "It is a tool for generating entity classes from database tables."
    },
    "correctAnswer": "A"
  },
  {
    "id": 104,
    "question": "If you want to ensure a specific field in your JPA entity is not null at the database level, which attribute of the `@Column` annotation would you use?",
    "options": {
      "A": "nullable = false",
      "B": "@NotNull",
      "C": "required = true",
      "D": "optional = false"
    },
    "correctAnswer": "A"
  },
  {
    "id": 105,
    "question": "When defining a one-to-one relationship in JPA, which annotation is used on the entity field representing the relationship?",
    "options": {
      "A": "@OneToOne",
      "B": "@SingleJoin",
      "C": "@UniqueAssociation",
      "D": "@ToOne"
    },
    "correctAnswer": "A"
  },
  {
    "id": 106,
    "question": "What is the purpose of a \"join table\" in the context of a many-to-many relationship in relational databases?",
    "options": {
      "A": "To resolve a many-to-many relationship into two one-to-many relationships by having a table that links records from the two related tables.",
      "B": "To store denormalized data for faster reads.",
      "C": "To combine columns from multiple tables into a single view.",
      "D": "To partition a large table into smaller ones."
    },
    "correctAnswer": "A"
  },
  {
    "id": 107,
    "question": "If a REST API needs to accept complex data (e.g., a JSON object) in the request body for creating or updating a resource, which Spring MVC annotation is used on the controller method parameter?",
    "options": {
      "A": "@RequestBody",
      "B": "@RequestParam",
      "C": "@ModelAttribute",
      "D": "@BodyContent"
    },
    "correctAnswer": "A"
  },
  {
    "id": 108,
    "question": "Which Jackson annotation can be used to define different serialization views for an object, allowing selective exposure of fields?",
    "options": {
      "A": "@JsonView",
      "B": "@JsonFilter",
      "C": "@JsonProfile",
      "D": "@JsonOutput"
    },
    "correctAnswer": "A"
  },
  {
    "id": 109,
    "question": "When implementing custom exception handling with `@ControllerAdvice`, what is a common reason to create custom exception classes extending `RuntimeException`?",
    "options": {
      "A": "To represent specific business rule violations or application-specific error conditions in a clear and typed manner.",
      "B": "To ensure all exceptions are checked exceptions.",
      "C": "To provide default error messages for all exceptions.",
      "D": "To automatically log all exceptions to a specific file."
    },
    "correctAnswer": "A"
  },
  {
    "id": 110,
    "question": "In Logback configuration, what is a \"filter\" typically used for within an appender?",
    "options": {
      "A": "To make a decision on whether a logging event should be processed by the appender based on criteria like log level, marker, or content.",
      "B": "To format the log message.",
      "C": "To route logs to different files based on the logger name.",
      "D": "To compress old log files."
    },
    "correctAnswer": "A"
  },
  {
    "id": 111,
    "question": "Which Spring Boot Actuator endpoint provides a list of all available Actuator endpoints?",
    "options": {
      "A": "/actuator",
      "B": "/actuator/endpoints",
      "C": "/actuator/info",
      "D": "/actuator/list"
    },
    "correctAnswer": "A"
  },
  {
    "id": 112,
    "question": "When implementing a search endpoint that takes a query string, what is the HTTP status code typically returned if the query string is malformed or invalid (e.g., too short)?",
    "options": {
      "A": "400 Bad Request",
      "B": "404 Not Found",
      "C": "204 No Content",
      "D": "500 Internal Server Error"
    },
    "correctAnswer": "A"
  },
  {
    "id": 113,
    "question": "Which Java API is often used for processing and transforming collections of data, such as filtering or mapping data retrieved from an external API?",
    "options": {
      "A": "Java Stream API (java.util.stream)",
      "B": "Java Collections Framework (java.util)",
      "C": "Apache Commons Collections",
      "D": "Guava Libraries"
    },
    "correctAnswer": "A"
  },
  {
    "id": 114,
    "question": "If an external API requires an API key for authentication, what is a common HTTP header used to transmit this key?",
    "options": {
      "A": "Authorization (e.g., Bearer <key>, or a custom header like X-API-Key)",
      "B": "ApiKey",
      "C": "X-Auth-Token",
      "D": "Credentials"
    },
    "correctAnswer": "A"
  },
  {
    "id": 115,
    "question": "In API rate limiting, what does it mean to limit requests \"per client (IP address or token)\"?",
    "options": {
      "A": "The rate limit is applied individually to each unique client identifier, rather than globally for all API traffic.",
      "B": "Only authenticated clients are subject to rate limits.",
      "C": "The API can only be accessed by specific IP addresses.",
      "D": "Each token has a different rate limit."
    },
    "correctAnswer": "A"
  },
  {
    "id": 116,
    "question": "Which Spring `HandlerInterceptor` method would you implement to apply rate limiting logic *before* the actual controller method is executed?",
    "options": {
      "A": "preHandle()",
      "B": "postHandle()",
      "C": "afterCompletion()",
      "D": "aroundInvoke()"
    },
    "correctAnswer": "A"
  },
  {
    "id": 117,
    "question": "What is a common strategy for naming cache regions or cache names when using `@Cacheable` with multiple caches?",
    "options": {
      "A": "Use names that reflect the type of data being cached or the purpose of the cache (e.g., \"products\", \"users\", \"sessionData\").",
      "B": "Use randomly generated UUIDs.",
      "C": "Use the fully qualified class name of the service.",
      "D": "Use a single cache name for the entire application."
    },
    "correctAnswer": "A"
  },
  {
    "id": 118,
    "question": "When using Spring Cache with Redis, where does Redis store the cached data?",
    "options": {
      "A": "In memory, on the Redis server.",
      "B": "On the application server's disk.",
      "C": "In a relational database.",
      "D": "In browser local storage."
    },
    "correctAnswer": "A"
  },
  {
    "id": 119,
    "question": "Which Git command is used to create a new branch in your local repository?",
    "options": {
      "A": "git branch <branch-name> (or git checkout -b <branch-name> to create and switch)",
      "B": "git new-branch <branch-name>",
      "C": "git fork <branch-name>",
      "D": "git create-branch <branch-name>"
    },
    "correctAnswer": "A"
  },
  {
    "id": 120,
    "question": "In a Dockerfile, what is the `ARG` instruction primarily used for?",
    "options": {
      "A": "To define variables that users can pass at build-time using the `docker build --build-arg <varname>=<value>` command.",
      "B": "To set environment variables that will be available inside the running container.",
      "C": "To define arguments for the `ENTRYPOINT` or `CMD` instructions.",
      "D": "To specify the architecture for which the image is being built."
    },
    "correctAnswer": "A"
  },
  {
    "id": 121,
    "question": "When using `docker-compose up`, what happens if the Docker images specified in `docker-compose.yml` do not exist locally?",
    "options": {
      "A": "Docker Compose will attempt to pull them from a Docker registry (like Docker Hub) by default.",
      "B": "The command will fail immediately.",
      "C": "Docker Compose will try to build them from a local Dockerfile if present.",
      "D": "It will prompt the user to specify the image location."
    },
    "correctAnswer": "A"
  },
  {
    "id": 122,
    "question": "Which Spring annotation is used to enable Spring's scheduling capabilities, allowing methods annotated with `@Scheduled` to run?",
    "options": {
      "A": "@EnableScheduling",
      "B": "@EnableTasks",
      "C": "@AllowScheduling",
      "D": "@ScheduledExecution"
    },
    "correctAnswer": "A"
  },
  {
    "id": 123,
    "question": "What is the primary purpose of the `spring-boot-maven-plugin` (or Gradle equivalent) in a Spring Boot project?",
    "options": {
      "A": "To package the Spring Boot application into an executable JAR or WAR file, including all dependencies and an embedded server.",
      "B": "To manage project dependencies.",
      "C": "To compile Java source code.",
      "D": "To run unit tests."
    },
    "correctAnswer": "A"
  },
  {
    "id": 124,
    "question": "In JPA, what is the `@Transient` annotation used for?",
    "options": {
      "A": "To mark a field in an entity class that should not be persisted to the database.",
      "B": "To indicate that an entity is in a temporary state.",
      "C": "To specify a transactional boundary.",
      "D": "To define a transient database connection."
    },
    "correctAnswer": "A"
  },
  {
    "id": 125,
    "question": "If you want to perform an action immediately after a Spring bean's properties have been set and dependencies injected, which annotation would you use on a method?",
    "options": {
      "A": "@PostConstruct",
      "B": "@AfterPropertiesSet",
      "C": "@BeanReady",
      "D": "@Initialize"
    },
    "correctAnswer": "A"
  },
  {
    "id": 126,
    "question": "What does the `ResponseEntity.ok()` static method typically build?",
    "options": {
      "A": "An HTTP 200 OK response, often with a body.",
      "B": "An empty HTTP 200 OK response.",
      "C": "An HTTP 201 Created response.",
      "D": "An HTTP 500 Internal Server Error response."
    },
    "correctAnswer": "A"
  },
  {
    "id": 127,
    "question": "In Logback, what is the role of an `<encoder>` within an `<appender>` configuration?",
    "options": {
      "A": "To transform a logging event into a byte array that can be written out by the appender, often involving a pattern layout.",
      "B": "To encrypt log messages.",
      "C": "To filter log messages based on their content.",
      "D": "To specify the character encoding of the log file."
    },
    "correctAnswer": "A"
  },
  {
    "id": 128,
    "question": "Which Actuator endpoint can be used to gracefully shut down the Spring Boot application (if enabled)?",
    "options": {
      "A": "/actuator/shutdown",
      "B": "/actuator/stop",
      "C": "/actuator/exit",
      "D": "/actuator/terminate"
    },
    "correctAnswer": "A"
  },
  {
    "id": 129,
    "question": "When implementing a search query in Spring Data JPA that involves checking if a string field *contains* a certain substring, what keyword is often used in derived query method names or JPQL?",
    "options": {
      "A": "Containing (or Contains) or LIKE operator in JPQL.",
      "B": "Equals",
      "C": "Matching",
      "D": "Includes"
    },
    "correctAnswer": "A"
  },
  {
    "id": 130,
    "question": "If an external API returns data in XML format, how might you configure `RestTemplate` or `WebClient` to handle it?",
    "options": {
      "A": "By ensuring an appropriate `HttpMessageConverter` for XML (like `Jaxb2RootElementHttpMessageConverter` or Jackson XML support) is registered.",
      "B": "XML is handled by default without any special configuration.",
      "C": "By manually parsing the XML string in the service layer.",
      "D": "By converting XML to JSON using an online tool before processing."
    },
    "correctAnswer": "A"
  },
  {
    "id": 131,
    "question": "When implementing rate limiting using a \"token bucket\" algorithm, what happens when a request arrives and there are no tokens in the bucket?",
    "options": {
      "A": "The request is typically rejected or delayed until a token becomes available.",
      "B": "A new token is generated immediately.",
      "C": "The bucket size is temporarily increased.",
      "D": "The request is given lower priority."
    },
    "correctAnswer": "A"
  },
  {
    "id": 132,
    "question": "Which HTTP header is often inspected by a rate limiter to identify unique clients when rate limiting is based on IP address?",
    "options": {
      "A": "The source IP address of the request, often derived from headers like `X-Forwarded-For` if behind a proxy, or the direct connection IP.",
      "B": "`User-Agent`",
      "C": "`Host`",
      "D": "`X-Client-ID`"
    },
    "correctAnswer": "A"
  },
  {
    "id": 133,
    "question": "In Spring Cache, what is the `keyGenerator` attribute of annotations like `@Cacheable` used for?",
    "options": {
      "A": "To specify the name of a custom `KeyGenerator` bean that will be used to generate cache keys if the default strategy is not suitable.",
      "B": "To generate a random encryption key for the cache.",
      "C": "To define the data type of the cache key.",
      "D": "To list all possible keys for a given cache."
    },
    "correctAnswer": "A"
  },
  {
    "id": 134,
    "question": "What is the common Redis command used to retrieve the value associated with a key?",
    "options": {
      "A": "GET <key>",
      "B": "FETCH <key>",
      "C": "READ <key>",
      "D": "SELECT <key>"
    },
    "correctAnswer": "A"
  },
  {
    "id": 135,
    "question": "Which Git command is used to upload local repository content to a remote repository?",
    "options": {
      "A": "git push",
      "B": "git upload",
      "C": "git send",
      "D": "git sync-remote"
    },
    "correctAnswer": "A"
  },
  {
    "id": 136,
    "question": "What is the primary benefit of using environment variables for configuration in different deployment environments (dev, test, prod)?",
    "options": {
      "A": "It allows the same application package (e.g., JAR/Docker image) to be used across environments, with behavior customized by environment-specific settings without code changes.",
      "B": "It makes the application run faster.",
      "C": "It simplifies the `application.properties` file.",
      "D": "It automatically encrypts sensitive configuration values."
    },
    "correctAnswer": "A"
  },
  {
    "id": 137,
    "question": "In a `Dockerfile`, what is the `ENV` instruction used for?",
    "options": {
      "A": "To set environment variables that will be available inside the running container and during subsequent build steps.",
      "B": "To define build-time arguments.",
      "C": "To specify the application's runtime environment (e.g., Java version).",
      "D": "To list environment-specific configuration files."
    },
    "correctAnswer": "A"
  },
  {
    "id": 138,
    "question": "When `docker-compose` starts multiple services defined in `docker-compose.yml`, how do these services typically discover and communicate with each other?",
    "options": {
      "A": "By using the service names as hostnames, as Docker Compose sets up a default network for the services.",
      "B": "By hardcoding IP addresses of other containers.",
      "C": "Through a central service registry that must be manually configured.",
      "D": "Via shared volumes only."
    },
    "correctAnswer": "A"
  },
  {
    "id": 139,
    "question": "What is the `@SpringBootApplication` annotation in a main Spring Boot class a convenience annotation for?",
    "options": {
      "A": "It combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.",
      "B": "It only enables auto-configuration.",
      "C": "It only scans for components.",
      "D": "It only defines the class as a configuration source."
    },
    "correctAnswer": "A"
  },
  {
    "id": 140,
    "question": "Which HTTP method is best suited for retrieving a collection of resources (e.g., a list of all users)?",
    "options": {
      "A": "GET",
      "B": "LIST",
      "C": "FETCHALL",
      "D": "QUERY"
    },
    "correctAnswer": "A"
  },
  {
    "id": 141,
    "question": "In JPA, if an entity has a field that is a collection of other entities (e.g., `@OneToMany List<OrderItem> items`), and this field is LAZY loaded, when is the data for `items` typically fetched from the database?",
    "options": {
      "A": "When the `getItems()` method is first called on the parent entity within an active transaction/session.",
      "B": "Immediately when the parent entity is loaded.",
      "C": "Only when the `items` collection is explicitly saved.",
      "D": "Never, it must be populated manually."
    },
    "correctAnswer": "A"
  },
  {
    "id": 142,
    "question": "What is the purpose of the `ObjectMapper` class in the Jackson library?",
    "options": {
      "A": "To convert Java objects to/from JSON (serialization/deserialization).",
      "B": "To map HTTP requests to controller methods.",
      "C": "To map entity classes to database tables.",
      "D": "To configure logging format."
    },
    "correctAnswer": "A"
  },
  {
    "id": 143,
    "question": "What is a \"Log Level Threshold Filter\" in Logback?",
    "options": {
      "A": "A filter that allows events of a specific level or more severe (e.g., WARN and above) to pass, while blocking less severe events.",
      "B": "A filter that only allows logs from a specific logger.",
      "C": "A filter that blocks logs containing certain keywords.",
      "D": "A filter that limits the number of log messages per second."
    },
    "correctAnswer": "A"
  },
  {
    "id": 144,
    "question": "Which Spring Actuator endpoint typically exposes arbitrary application information provided by `InfoContributor` beans?",
    "options": {
      "A": "/actuator/info",
      "B": "/actuator/application",
      "C": "/actuator/details",
      "D": "/actuator/custom"
    },
    "correctAnswer": "A"
  },
  {
    "id": 145,
    "question": "When configuring an external API call using `WebClient`, what does the `.retrieve()` method signify?",
    "options": {
      "A": "It indicates that the request is ready to be sent and the response body should be retrieved.",
      "B": "It retrieves a cached response for the request.",
      "C": "It retrieves the configuration for the `WebClient` instance.",
      "D": "It retrieves metadata about the external API endpoint."
    },
    "correctAnswer": "A"
  },
  {
    "id": 146,
    "question": "What is the primary purpose of using a `Filter` (from `javax.servlet.Filter`) or a Spring `HandlerInterceptor` when implementing cross-cutting concerns like rate limiting or custom authentication?",
    "options": {
      "A": "To intercept requests before they reach the controller (and/or responses after they leave) to apply common logic.",
      "B": "To modify the request body directly.",
      "C": "To manage database transactions for the request.",
      "D": "To define routing rules for incoming requests."
    },
    "correctAnswer": "A"
  },
  {
    "id": 147,
    "question": "Which Redis data structure is often suitable for implementing simple caching where you map a key to a single string or serialized object value?",
    "options": {
      "A": "Strings",
      "B": "Hashes",
      "C": "Lists",
      "D": "Sets"
    },
    "correctAnswer": "A"
  },
  {
    "id": 148,
    "question": "In a Git workflow, what is the \"staging area\" (or \"index\") used for?",
    "options": {
      "A": "It's an intermediate area where you prepare and review changes that will be included in the next commit.",
      "B": "It's a backup of your local repository.",
      "C": "It's where committed changes are stored before being pushed to a remote.",
      "D": "It's a shared area for team collaboration."
    },
    "correctAnswer": "A"
  },
  {
    "id": 149,
    "question": "What is the `EXPOSE` instruction in a `Dockerfile` used for?",
    "options": {
      "A": "To document which ports the application inside the container is listening on; it does not actually publish the port.",
      "B": "To map a container port to a host port.",
      "C": "To open a port in the host's firewall.",
      "D": "To set the default port for the `ENTRYPOINT` command."
    },
    "correctAnswer": "A"
  },
  {
    "id": 150,
    "question": "Which Lombok annotation is used to generate only getter methods for all fields in a class?",
    "options": {
      "A": "@Getter",
      "B": "@Accessors(fluent=true)",
      "C": "@ReadOnly",
      "D": "@FieldGetter"
    },
    "correctAnswer": "A"
  },
  {
    "id": 151,
    "question": "In `application.properties`, what property is typically used to specify the JPA provider's DDL (Data Definition Language) auto-generation strategy (e.g., create, update, validate)?",
    "options": {
      "A": "spring.jpa.hibernate.ddl-auto",
      "B": "spring.jpa.database-platform",
      "C": "spring.datasource.schema-action",
      "D": "spring.jpa.generate-ddl"
    },
    "correctAnswer": "A"
  },
  {
    "id": 152,
    "question": "When a client sends a GET request to a REST API and the requested resource has been permanently moved to a new URI, which HTTP status code is most appropriate to return with the new URI?",
    "options": {
      "A": "301 Moved Permanently",
      "B": "302 Found",
      "C": "307 Temporary Redirect",
      "D": "410 Gone"
    },
    "correctAnswer": "A"
  },
  {
    "id": 153,
    "question": "In JPA, what is the `@Table` annotation primarily used for on an entity class?",
    "options": {
      "A": "To specify the database table name and other table-level details like schema or unique constraints, if different from default conventions.",
      "B": "To mark the class as a database table.",
      "C": "To define table relationships.",
      "D": "To create an in-memory table for testing."
    },
    "correctAnswer": "A"
  },
  {
    "id": 154,
    "question": "Which JPA annotation can be used to specify that an entity field should be mapped to a database column with a specific data type, for example, for temporal types?",
    "options": {
      "A": "@Temporal (e.g., @Temporal(TemporalType.DATE)) or @Column(columnDefinition=\"...\")",
      "B": "@DataType",
      "C": "@DbType",
      "D": "@ColumnType"
    },
    "correctAnswer": "A"
  },
  {
    "id": 155,
    "question": "What is the `orphanRemoval = true` attribute used for in JPA relationship annotations like `@OneToMany`?",
    "options": {
      "A": "It indicates that if a child entity is removed from the parent's collection, the child entity itself should also be deleted from the database.",
      "B": "It automatically removes orphaned foreign keys.",
      "C": "It prevents child entities from being created without a parent.",
      "D": "It cleans up database tables when the application shuts down."
    },
    "correctAnswer": "A"
  },
  {
    "id": 156,
    "question": "How can Data Transfer Objects (DTOs) help in versioning an API?",
    "options": {
      "A": "By allowing the API to expose different DTO structures for different API versions, while the internal entity model can remain more stable.",
      "B": "DTOs automatically handle API version numbers in headers.",
      "C": "DTOs are not related to API versioning.",
      "D": "DTOs can only be used with one version of an API."
    },
    "correctAnswer": "A"
  },
  {
    "id": 157,
    "question": "Which Spring MVC annotation can be used to bind all request parameters or form data to a single command object (POJO)?",
    "options": {
      "A": "@ModelAttribute",
      "B": "@RequestBody",
      "C": "@RequestParams",
      "D": "@FormObject"
    },
    "correctAnswer": "A"
  },
  {
    "id": 158,
    "question": "What is the primary purpose of Jackson's `ObjectMapper().writeValueAsString(object)` method?",
    "options": {
      "A": "To serialize a Java object into its JSON string representation.",
      "B": "To write a Java object to a file in JSON format.",
      "C": "To validate a Java object against a JSON schema.",
      "D": "To convert a JSON string into a Java object."
    },
    "correctAnswer": "A"
  },
  {
    "id": 159,
    "question": "If you have multiple `@ControllerAdvice` beans in a Spring application, how can you control their order of execution?",
    "options": {
      "A": "By implementing the `Ordered` interface or using the `@Order` annotation on the `@ControllerAdvice` classes.",
      "B": "They are executed in alphabetical order of their class names.",
      "C": "The order is non-deterministic.",
      "D": "By defining them in a specific sequence in an XML configuration file."
    },
    "correctAnswer": "A"
  },
  {
    "id": 160,
    "question": "In Logback, what is the primary purpose of a \"Marker\" in a logging event?",
    "options": {
      "A": "To add a piece of metadata (a named tag) to a log event, which can then be used by filters to make decisions about processing the event.",
      "B": "To mark the beginning and end of a log file.",
      "C": "To indicate the severity of the log event.",
      "D": "To highlight important log messages in the console."
    },
    "correctAnswer": "A"
  },
  {
    "id": 161,
    "question": "Which Spring Boot Actuator endpoint provides detailed information about HTTP request-response exchanges if trace logging is enabled?",
    "options": {
      "A": "/actuator/httptrace (or /actuator/httpexchanges in newer versions)",
      "B": "/actuator/requests",
      "C": "/actuator/apicalls",
      "D": "/actuator/webtraffic"
    },
    "correctAnswer": "A"
  },
  {
    "id": 162,
    "question": "When implementing search functionality where results might be large, what common feature helps in retrieving data in manageable chunks?",
    "options": {
      "A": "Pagination",
      "B": "Full-text indexing",
      "C": "Caching of all possible results",
      "D": "Denormalization"
    },
    "correctAnswer": "A"
  },
  {
    "id": 163,
    "question": "In a Spring `RestTemplate` or `WebClient` call, what is the significance of setting the `Accept` HTTP header?",
    "options": {
      "A": "It informs the server about the media types (e.g., `application/json`, `application/xml`) that the client is capable of understanding in the response.",
      "B": "It specifies the content type of the request body.",
      "C": "It provides authentication credentials.",
      "D": "It indicates the preferred language for the response."
    },
    "correctAnswer": "A"
  },
  {
    "id": 164,
    "question": "When integrating with an external API that uses OAuth 2.0 for authentication, what is typically exchanged for an access token?",
    "options": {
      "A": "An authorization code (or client credentials, refresh token, etc., depending on the grant type).",
      "B": "A username and password.",
      "C": "An API key.",
      "D": "A session cookie."
    },
    "correctAnswer": "A"
  },
  {
    "id": 165,
    "question": "For an API rate limiter based on a \"sliding window log\" algorithm, what is a key characteristic?",
    "options": {
      "A": "It counts requests within a continuously moving time window, providing accurate rate limiting without the fixed window edge problems.",
      "B": "It uses a fixed time window that resets periodically.",
      "C": "It relies on a bucket of tokens.",
      "D": "It only logs requests that exceed the limit."
    },
    "correctAnswer": "A"
  },
  {
    "id": 166,
    "question": "Which HTTP response header might an API send back to a client to inform them about their current rate limit status (e.g., remaining requests)?",
    "options": {
      "A": "X-RateLimit-Remaining",
      "B": "Rate-Limit-Status",
      "C": "API-Quota-Left",
      "D": "X-Request-Count"
    },
    "correctAnswer": "A"
  },
  {
    "id": 167,
    "question": "When using `@Cacheable(unless = \"#result == null\")` in Spring Cache, what does it imply?",
    "options": {
      "A": "The result of the method will be cached unless the result itself is null.",
      "B": "The method will not be called if the cache already contains a null value for the key.",
      "C": "The cache will be cleared if the method returns null.",
      "D": "Null results are always cached by default."
    },
    "correctAnswer": "A"
  },
  {
    "id": 168,
    "question": "How does Spring Boot typically discover and configure a Redis connection factory when `spring-boot-starter-data-redis` is on the classpath and properties are set?",
    "options": {
      "A": "Through auto-configuration, by detecting Redis client libraries (like Lettuce or Jedis) and relevant properties in `application.properties`/`yml`.",
      "B": "It requires an explicit `@Bean` definition for `RedisConnectionFactory`.",
      "C": "It uses a JNDI lookup for the Redis connection.",
      "D": "It relies on a `redis.xml` configuration file."
    },
    "correctAnswer": "A"
  },
  {
    "id": 169,
    "question": "Which Git command is used to merge changes from another branch into the current branch?",
    "options": {
      "A": "git merge <branch-name>",
      "B": "git combine <branch-name>",
      "C": "git integrate <branch-name>",
      "D": "git pull-changes <branch-name>"
    },
    "correctAnswer": "A"
  },
  {
    "id": 170,
    "question": "In a `Dockerfile`, what is the primary purpose of using a multi-stage build (e.g., using multiple `FROM` instructions)?",
    "options": {
      "A": "To create smaller final images by separating the build environment (with build tools, SDKs, dependencies) from the runtime environment (with only necessary artifacts).",
      "B": "To build images for multiple architectures simultaneously.",
      "C": "To create multiple related images from a single Dockerfile.",
      "D": "To speed up the image build process by parallelizing steps."
    },
    "correctAnswer": "A"
  },
  {
    "id": 171,
    "question": "When `docker-compose` starts services, how can one service ensure it starts only after another service (e.g., a database) is ready (not just started)?",
    "options": {
      "A": "Using `depends_on` with healthcheck conditions in `docker-compose.yml` or custom wait scripts.",
      "B": "`depends_on` alone guarantees readiness.",
      "C": "By ordering services alphabetically in `docker-compose.yml`.",
      "D": "Docker Compose handles this automatically for all database services."
    },
    "correctAnswer": "A"
  },
  {
    "id": 172,
    "question": "What is the primary role of the `spring-boot-starter-validation` dependency in a Spring Boot project?",
    "options": {
      "A": "It provides support for Bean Validation (JSR 303/380) using Hibernate Validator as the default implementation, enabling declarative validation via annotations.",
      "B": "It validates the Spring Boot configuration itself.",
      "C": "It provides tools for validating database schema.",
      "D": "It validates REST API contracts against an OpenAPI specification."
    },
    "correctAnswer": "A"
  },
  {
    "id": 173,
    "question": "In JPA, what is an \"Embedded\" object (often annotated with `@Embeddable` for the class and `@Embedded` for the field)?",
    "options": {
      "A": "A way to represent a composite object as part of an entity, where the fields of the embedded object are stored as columns in the owning entity's table.",
      "B": "An entity that is always loaded eagerly.",
      "C": "A reference to an entity stored in a different database.",
      "D": "A lightweight version of an entity used for DTOs."
    },
    "correctAnswer": "A"
  },
  {
    "id": 174,
    "question": "What is the difference between `@Component`, `@Service`, `@Repository`, and `@Controller`/`@RestController` annotations in Spring?",
    "options": {
      "A": "They are all stereotype annotations marking classes as Spring-managed beans, but `@Service` (business logic), `@Repository` (data access), and `@Controller`/`@RestController` (presentation layer) carry specific semantic meaning for their layers.",
      "B": "Only `@Component` creates a Spring bean.",
      "C": "`@Service` is for SOAP services, `@Controller` for REST.",
      "D": "`@Repository` implies read-only operations."
    },
    "correctAnswer": "A"
  },
  {
    "id": 175,
    "question": "If a Spring bean method is annotated with `@Scheduled(cron = \"0 0 * * * ?\")`, when will it typically execute?",
    "options": {
      "A": "Every hour at the beginning of the hour.",
      "B": "Every minute.",
      "C": "Once a day at midnight.",
      "D": "Every second."
    },
    "correctAnswer": "A"
  },
  {
    "id": 176,
    "question": "In Logback, what is a `RollingFileAppender` commonly used for?",
    "options": {
      "A": "To write logs to a file that \"rolls over\" (e.g., is archived and replaced with a new file) based on criteria like time (e.g., daily) or size.",
      "B": "To append logs to multiple files simultaneously.",
      "C": "To roll back transactions if a log error occurs.",
      "D": "To provide a rolling view of the latest log messages in the console."
    },
    "correctAnswer": "A"
  },
  {
    "id": 177,
    "question": "Which Spring Boot Actuator endpoint can be used to view or even modify environment properties of a running application (if enabled and secured)?",
    "options": {
      "A": "/actuator/env",
      "B": "/actuator/config",
      "C": "/actuator/properties",
      "D": "/actuator/runtime"
    },
    "correctAnswer": "A"
  },
  {
    "id": 178,
    "question": "If you need to create a Spring Data JPA repository method that takes a `Sort` object as a parameter to dynamically order results, how would you typically declare it?",
    "options": {
      "A": "`List<Entity> findBySomeProperty(String property, Sort sort);`",
      "B": "`List<Entity> findAndSortBySomeProperty(String property, String sortDirection);`",
      "C": "`@Sorted List<Entity> findBySomeProperty(String property);`",
      "D": "Sorting is only possible via derived query method names."
    },
    "correctAnswer": "A"
  },
  {
    "id": 179,
    "question": "When using `WebClient` to make a POST request with a JSON body, which method is typically used to specify the body content?",
    "options": {
      "A": "`.bodyValue(object)` or `.body(BodyInserters.fromValue(object))`",
      "B": "`.content(jsonString)`",
      "C": "`.setBody(object)`",
      "D": "`.sendJson(object)`"
    },
    "correctAnswer": "A"
  },
  {
    "id": 180,
    "question": "In the context of distributed systems and API integration, what does \"idempotency\" mean for an operation?",
    "options": {
      "A": "Performing the operation multiple times with the same input has the same effect as performing it once (e.g., setting a value is idempotent, incrementing a counter is not).",
      "B": "The operation completes very quickly.",
      "C": "The operation does not change any state.",
      "D": "The operation is guaranteed to succeed."
    },
    "correctAnswer": "A"
  },
  {
    "id": 181,
    "question": "What is a common strategy for handling API key rotation when integrating with external services?",
    "options": {
      "A": "Store the API key in a configurable location (e.g., environment variable, secrets manager), and update it there when a new key is issued, without needing to redeploy the application.",
      "B": "Hardcode the API key and redeploy on every key change.",
      "C": "Generate API keys dynamically within the application.",
      "D": "Use a single, non-expiring API key."
    },
    "correctAnswer": "A"
  },
  {
    "id": 182,
    "question": "When using Spring's `@CacheEvict` annotation, how can you specify that the cache should be evicted only if a certain condition (based on method arguments or result) is met?",
    "options": {
      "A": "Using the `condition` attribute with a SpEL expression.",
      "B": "It's not possible; eviction is always unconditional.",
      "C": "By throwing a specific exception to trigger eviction.",
      "D": "Using a separate `@ConditionalEvict` annotation."
    },
    "correctAnswer": "A"
  },
  {
    "id": 183,
    "question": "Which Redis command is often used to set a key with an expiration time (Time To Live - TTL) in a single operation?",
    "options": {
      "A": "SETEX <key> <seconds> <value>",
      "B": "SET <key> <value> EX <seconds>",
      "C": "EXPIRE <key> <seconds> followed by SET <key> <value>",
      "D": "SETTTL <key> <seconds> <value>"
    },
    "correctAnswer": "A"
  },
  {
    "id": 184,
    "question": "In Git, what is the primary purpose of the `git remote add origin <repository_url>` command?",
    "options": {
      "A": "To add a new remote repository (typically named \"origin\") to your local Git configuration, allowing you to push to and pull from it.",
      "B": "To create a local copy (origin) of a remote repository.",
      "C": "To switch your current working branch to \"origin\".",
      "D": "To initialize a new Git repository and set its origin."
    },
    "correctAnswer": "A"
  },
  {
    "id": 185,
    "question": "When loading configuration from `.env` files in a Spring Boot application (often via a library), how does this typically integrate with Spring's `Environment` abstraction?",
    "options": {
      "A": "The properties from the `.env` file are loaded into Spring's `Environment`, making them accessible via `@Value` or `environment.getProperty()`.",
      "B": "`.env` files are only for Docker environment variables.",
      "C": "Spring Boot does not directly support `.env` files for its `Environment`.",
      "D": "You must manually parse the `.env` file and set system properties."
    },
    "correctAnswer": "A"
  },
  {
    "id": 186,
    "question": "In a `Dockerfile`, if you `COPY . .` in the `WORKDIR /app`, what does this usually mean?",
    "options": {
      "A": "It copies all files and directories from the Docker build context's root into the `/app` directory inside the image.",
      "B": "It creates a symbolic link.",
      "C": "It mounts the current host directory into the container's `/app`.",
      "D": "It lists the contents of the `/app` directory."
    },
    "correctAnswer": "A"
  },
  {
    "id": 187,
    "question": "In `docker-compose.yml`, what is the `networks` section used for?",
    "options": {
      "A": "To define custom networks that services can connect to, allowing for network isolation and communication control between container groups.",
      "B": "To specify the host machine's network interfaces.",
      "C": "To configure port forwarding rules.",
      "D": "To limit network bandwidth for services."
    },
    "correctAnswer": "A"
  },
  {
    "id": 188,
    "question": "Which Spring annotation is used on a configuration class to indicate that it contains `@Bean` method declarations?",
    "options": {
      "A": "@Configuration",
      "B": "@EnableBeans",
      "C": "@BeanSource",
      "D": "@ComponentScan"
    },
    "correctAnswer": "A"
  },
  {
    "id": 189,
    "question": "What is the \"N+1 selects\" problem in JPA/Hibernate, and how can it impact performance?",
    "options": {
      "A": "It's a performance issue where fetching a list of N parent entities results in N additional database queries to fetch their related child entities (one query per parent), instead of fetching them efficiently in one or a few queries.",
      "B": "It means N+1 users are accessing the database simultaneously.",
      "C": "It refers to having N+1 tables in a database schema.",
      "D": "It's a problem with database connection pooling."
    },
    "correctAnswer": "A"
  },
  {
    "id": 190,
    "question": "When defining a custom exception that should result in an HTTP 404 Not Found status, which annotation can be placed directly on the exception class itself?",
    "options": {
      "A": "@ResponseStatus(HttpStatus.NOT_FOUND)",
      "B": "@ErrorCode(404)",
      "C": "@NotFoundException",
      "D": "@ReturnStatus(404)"
    },
    "correctAnswer": "A"
  },
  {
    "id": 191,
    "question": "What is the primary benefit of using a \"rolling update\" strategy during application deployment?",
    "options": {
      "A": "It allows updating an application with zero or minimal downtime by gradually replacing old instances with new ones.",
      "B": "It rolls back the application to the previous version if an error occurs.",
      "C": "It updates all instances of the application simultaneously.",
      "D": "It creates a backup of the application before updating."
    },
    "correctAnswer": "A"
  },
  {
    "id": 192,
    "question": "In Spring Data JPA, what is a \"projection\" (e.g., using an interface-based projection)?",
    "options": {
      "A": "A way to retrieve only a subset of an entity's attributes from the database, rather than the entire entity, which can improve performance and reduce data transfer.",
      "B": "A pre-defined SQL view.",
      "C": "A mechanism for projecting data onto a different database.",
      "D": "A way to filter query results."
    },
    "correctAnswer": "A"
  },
  {
    "id": 193,
    "question": "Which HTTP header typically indicates the content type of the entity body sent in a POST or PUT request?",
    "options": {
      "A": "Content-Type",
      "B": "Accept",
      "C": "X-Payload-Type",
      "D": "Body-Format"
    },
    "correctAnswer": "A"
  },
  {
    "id": 194,
    "question": "How can Spring's `@Async` annotation be used?",
    "options": {
      "A": "To execute a method asynchronously in a separate thread, typically managed by a Spring `TaskExecutor`.",
      "B": "To make HTTP requests asynchronous.",
      "C": "To ensure a method is called only once.",
      "D": "To synchronize access to a shared resource."
    },
    "correctAnswer": "A"
  },
  {
    "id": 195,
    "question": "What is a \"health indicator\" in the context of Spring Boot Actuator?",
    "options": {
      "A": "A component that provides health information about a specific part of the application (e.g., database, disk space, custom service), which is then aggregated by the main `/actuator/health` endpoint.",
      "B": "A visual indicator on a dashboard showing application status.",
      "C": "A log message indicating good health.",
      "D": "A scheduled job that checks application health."
    },
    "correctAnswer": "A"
  },
  {
    "id": 196,
    "question": "In Docker, what is the difference between a \"volume\" and a \"bind mount\"?",
    "options": {
      "A": "Volumes are managed by Docker and stored in a part of the host filesystem dedicated to Docker, while bind mounts map a directory or file from the host filesystem directly into the container (less portable).",
      "B": "Volumes are for configuration, bind mounts for data.",
      "C": "Bind mounts are read-only, volumes are read-write.",
      "D": "Volumes are temporary, bind mounts are persistent."
    },
    "correctAnswer": "A"
  },
  {
    "id": 197,
    "question": "What is a common use for the `Optional<T>` class introduced in Java 8, especially in service layers or repository methods?",
    "options": {
      "A": "To represent a value that may be absent (null), providing a more explicit way to handle cases where data might not be found, thus helping to avoid `NullPointerExceptions`.",
      "B": "To make method parameters optional.",
      "C": "To provide an alternative to collections.",
      "D": "To store multiple return values from a method."
    },
    "correctAnswer": "A"
  },
  {
    "id": 198,
    "question": "If a Spring Boot application fails to start due to a port conflict (e.g., \"Port 8080 already in use\"), what is a common way to specify a different port?",
    "options": {
      "A": "By setting the `server.port` property in `application.properties` or `application.yml`, or via an environment variable/command-line argument.",
      "B": "By recompiling the application with a new port number.",
      "C": "By configuring the embedded web server (e.g., Tomcat) directly in Java code.",
      "D": "The port cannot be changed once the application is built."
    },
    "correctAnswer": "A"
  },
  {
    "id": 199,
    "question": "Which Lombok annotation can be used to automatically generate a builder pattern for your class?",
    "options": {
      "A": "@Builder",
      "B": "@Build",
      "C": "@ConstructorBuilder",
      "D": "@MakeBuilder"
    },
    "correctAnswer": "A"
  },
  {
    "id": 200,
    "question": "In Spring Boot, what property in `application.properties` is commonly used to define the active application profiles (e.g., dev, test, prod)?",
    "options": {
      "A": "spring.profiles.active",
      "B": "spring.active.profile",
      "C": "spring.environment",
      "D": "spring.profile.include"
    },
    "correctAnswer": "A"
  },
  {
    "id": 201,
    "question": "When a REST API successfully processes a DELETE request and there is no content to return, which HTTP status code is most appropriate?",
    "options": {
      "A": "204 No Content",
      "B": "200 OK",
      "C": "202 Accepted",
      "D": "404 Not Found"
    },
    "correctAnswer": "A"
  },
  {
    "id": 202,
    "question": "In JPA, what is the `@Embeddable` annotation used for?",
    "options": {
      "A": "To declare a class whose instances can be stored as an intrinsic part of an owning entity, sharing its table.",
      "B": "To make an entity cacheable.",
      "C": "To define a database view.",
      "D": "To allow an entity to be embedded in a web page."
    },
    "correctAnswer": "A"
  },
  {
    "id": 203,
    "question": "Which JPA annotation would you use on a field of type `java.util.Date` or `java.util.Calendar` to specify whether to persist the date, time, or both?",
    "options": {
      "A": "@Temporal(TemporalType.TIMESTAMP) / .DATE / .TIME",
      "B": "@DateTimeFormat",
      "C": "@DatePersistence",
      "D": "@TimeFormat"
    },
    "correctAnswer": "A"
  },
  {
    "id": 204,
    "question": "What is a common strategy for managing bidirectional `@OneToMany`/`@ManyToOne` relationships in JPA to avoid issues like infinite loops during serialization or incorrect persistence?",
    "options": {
      "A": "Ensure one side (typically the `@ManyToOne` side) is the \"owning\" side (manages the foreign key), and the other side uses `mappedBy`. Helper methods for adding/removing entities to keep both sides in sync are also good practice.",
      "B": "Always make both sides EAGER fetched.",
      "C": "Avoid bidirectional relationships altogether.",
      "D": "Use DTOs exclusively for managing relationships."
    },
    "correctAnswer": "A"
  },
  {
    "id": 205,
    "question": "How can DTOs be beneficial when dealing with complex entity graphs that have many relationships?",
    "options": {
      "A": "They allow you to flatten or reshape the data for specific API responses, preventing over-fetching and circular dependencies that might occur if exposing entities directly.",
      "B": "DTOs automatically resolve all lazy-loaded associations.",
      "C": "DTOs enforce database normalization rules.",
      "D": "DTOs are required for all JPA relationships."
    },
    "correctAnswer": "A"
  },
  {
    "id": 206,
    "question": "Which Spring annotation can be used to inject a list of all beans of a particular type?",
    "options": {
      "A": "@Autowired private List<MyInterface> services;",
      "B": "@InjectAll(MyInterface.class)",
      "C": "@CollectBeans(type=MyInterface.class)",
      "D": "@Qualifier(\"allMyInterfaces\")"
    },
    "correctAnswer": "A"
  },
  {
    "id": 207,
    "question": "What is a common use case for Jackson's `@JsonRawValue` annotation on a field?",
    "options": {
      "A": "To serialize a field's string value directly as is, without further JSON escaping or quoting, useful if the string already contains valid JSON.",
      "B": "To get the raw byte value of a JSON string.",
      "C": "To ignore raw data during deserialization.",
      "D": "To specify that a field should be deserialized from a raw binary stream."
    },
    "correctAnswer": "A"
  },
  {
    "id": 208,
    "question": "If a `@ControllerAdvice` class is annotated with `@Order(1)` and another with `@Order(2)`, which one will be given higher precedence for handling exceptions?",
    "options": {
      "A": "The one annotated with `@Order(1)` (lower values have higher precedence).",
      "B": "The one annotated with `@Order(2)` (higher values have higher precedence).",
      "C": "The order is based on class name if `@Order` is the same.",
      "D": "The order is non-deterministic."
    },
    "correctAnswer": "A"
  },
  {
    "id": 209,
    "question": "In Logback, if you want to log messages from a specific package (e.g., `com.example.service`) at a DEBUG level, but the root logger is set to INFO, how would you configure this?",
    "options": {
      "A": "Add a specific `<logger name=\"com.example.service\" level=\"DEBUG\"/>` element in the Logback configuration.",
      "B": "Set the root logger to DEBUG and filter out other packages.",
      "C": "Use a custom Java code configuration for that package.",
      "D": "This cannot be done; package level logging inherits from root."
    },
    "correctAnswer": "A"
  },
  {
    "id": 210,
    "question": "Which Spring Boot Actuator endpoint can provide information about scheduled tasks in your application?",
    "options": {
      "A": "/actuator/scheduledtasks",
      "B": "/actuator/tasks",
      "C": "/actuator/scheduler",
      "D": "/actuator/cronjobs"
    },
    "correctAnswer": "A"
  },
  {
    "id": 211,
    "question": "When implementing a search API, what is the benefit of using ETags (Entity Tags) in HTTP responses?",
    "options": {
      "A": "They help in caching by allowing clients to make conditional requests (e.g., `If-None-Match`), so the server doesn't resend the full response if the data hasn't changed.",
      "B": "They encrypt the search results.",
      "C": "They provide a unique ID for each search query.",
      "D": "They measure the performance of the search operation."
    },
    "correctAnswer": "A"
  },
  {
    "id": 212,
    "question": "When using `RestTemplate` or `WebClient`, how can you add custom HTTP headers (e.g., a custom `X-Correlation-ID`) to all outgoing requests in a centralized way?",
    "options": {
      "A": "By configuring the `RestTemplate`/`WebClient` with a `ClientHttpRequestInterceptor` (for RestTemplate) or an `ExchangeFilterFunction` (for WebClient).",
      "B": "By manually adding the header to each request method call.",
      "C": "By setting system properties for headers.",
      "D": "Headers are automatically propagated from the incoming request."
    },
    "correctAnswer": "A"
  },
  {
    "id": 213,
    "question": "If an external API uses Basic Authentication, what information is typically encoded and sent in the `Authorization` HTTP header?",
    "options": {
      "A": "A Base64 encoded string of \"username:password\".",
      "B": "An OAuth 2.0 bearer token.",
      "C": "An API key.",
      "D": "A signed JWT."
    },
    "correctAnswer": "A"
  },
  {
    "id": 214,
    "question": "Which Resilience4j component can be used to automatically retry a failed operation (e.g., an external API call) a certain number of times?",
    "options": {
      "A": "Retry",
      "B": "CircuitBreaker",
      "C": "RateLimiter",
      "D": "Bulkhead"
    },
    "correctAnswer": "A"
  },
  {
    "id": 215,
    "question": "What is the \"Leaky Bucket\" algorithm in the context of rate limiting?",
    "options": {
      "A": "It's an algorithm where requests are added to a bucket (queue) of fixed capacity. If the bucket is full, new requests are discarded. The bucket \"leaks\" requests at a constant rate.",
      "B": "It allows bursts of requests.",
      "C": "It uses time windows to count requests.",
      "D": "It's primarily for bandwidth shaping, not request counting."
    },
    "correctAnswer": "A"
  },
  {
    "id": 216,
    "question": "In Spring Cache, what does the `@Caching` annotation allow you to do?",
    "options": {
      "A": "Group multiple caching annotations (like `@Cacheable`, `@CachePut`, `@CacheEvict`) on a single method.",
      "B": "Enable caching for the entire application.",
      "C": "Define global cache configurations.",
      "D": "Specify a custom cache manager."
    },
    "correctAnswer": "A"
  },
  {
    "id": 217,
    "question": "What is the default port for a Redis server?",
    "options": {
      "A": "6379",
      "B": "5432",
      "C": "3306",
      "D": "8080"
    },
    "correctAnswer": "A"
  },
  {
    "id": 218,
    "question": "In Git, what is the purpose of a \"commit message\"?",
    "options": {
      "A": "To describe the changes made in that commit, providing context and history for other developers (and your future self).",
      "B": "To tag a specific version of the code.",
      "C": "To create a new branch.",
      "D": "To store binary attachments with the commit."
    },
    "correctAnswer": "A"
  },
  {
    "id": 219,
    "question": "What is a common use case for the `USER` instruction in a `Dockerfile`?",
    "options": {
      "A": "To set the user name (or UID) and optionally the group name (or GID) to use when running the image and for any subsequent `RUN`, `CMD`, and `ENTRYPOINT` instructions.",
      "B": "To define environment variables for a specific user.",
      "C": "To create a new user account on the host machine.",
      "D": "To specify the user who built the Docker image."
    },
    "correctAnswer": "A"
  },
  {
    "id": 220,
    "question": "In `docker-compose.yml`, how can you specify that a service should be rebuilt from its `Dockerfile` every time `docker-compose up` is run, instead of using an existing image?",
    "options": {
      "A": "By running `docker-compose up --build`.",
      "B": "By adding `rebuild: always` to the service definition.",
      "C": "`docker-compose up` always rebuilds by default.",
      "D": "By deleting the image manually before running `up`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 221,
    "question": "Which Spring annotation allows you to define a bean with a specific scope, such as \"request\" or \"session\" in a web application?",
    "options": {
      "A": "@Scope(\"request\") or @RequestScope, @SessionScope, etc.",
      "B": "@BeanScope(\"request\")",
      "C": "@Scoped(value=\"request\")",
      "D": "@Lifecycle(\"request\")"
    },
    "correctAnswer": "A"
  },
  {
    "id": 222,
    "question": "What is the primary function of the `spring-boot-starter-parent` in a Maven `pom.xml`?",
    "options": {
      "A": "It provides sensible default configurations for Spring Boot applications, including dependency versions, plugin configurations, and Java version.",
      "B": "It is the main application class for Spring Boot.",
      "C": "It defines the parent class for all Spring components.",
      "D": "It manages Spring profiles."
    },
    "correctAnswer": "A"
  },
  {
    "id": 223,
    "question": "In JPA, what does `CascadeType.MERGE` typically do?",
    "options": {
      "A": "If the owning entity is merged (its state synchronized with the database), the merge operation cascades to associated entities.",
      "B": "It merges all associated entities into a single database row.",
      "C": "It deletes associated entities when the parent is merged.",
      "D": "It creates new associated entities when the parent is merged."
    },
    "correctAnswer": "A"
  },
  {
    "id": 224,
    "question": "If you want to run some custom code when a Spring Boot application has started successfully, which interface can you implement?",
    "options": {
      "A": "`ApplicationRunner` or `CommandLineRunner`.",
      "B": "`SpringApplicationListener`.",
      "C": "`ContextRefreshedEvent`.",
      "D": "`PostConstruct` on a specific bean."
    },
    "correctAnswer": "A"
  },
  {
    "id": 225,
    "question": "When constructing a `ResponseEntity`, how can you add a custom HTTP header to the response?",
    "options": {
      "A": "Using the `.header(\"Header-Name\", \"Header-Value\")` method on the `ResponseEntity.BodyBuilder`.",
      "B": "Headers are automatically added based on the response body.",
      "C": "By setting static fields in a `HttpHeaders` class.",
      "D": "Via `application.properties`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 226,
    "question": "In Logback or other logging frameworks, what is an \"asynchronous appender\" used for?",
    "options": {
      "A": "To decouple log I/O operations from the application threads, improving application performance by handing off logging events to a separate thread for processing and writing.",
      "B": "To log messages from asynchronous methods only.",
      "C": "To send logs to a remote server asynchronously.",
      "D": "To ensure logs are written in a strict chronological order across threads."
    },
    "correctAnswer": "A"
  },
  {
    "id": 227,
    "question": "Which Spring Boot Actuator endpoint can be used to get details about the available caches and their content (if supported by the cache manager)?",
    "options": {
      "A": "/actuator/caches",
      "B": "/actuator/cache",
      "C": "/actuator/cachedata",
      "D": "/actuator/springcache"
    },
    "correctAnswer": "A"
  },
  {
    "id": 228,
    "question": "If you need to construct a dynamic JPA query at runtime based on several optional search criteria, which Spring Data JPA feature is often more flexible than derived query names?",
    "options": {
      "A": "Using Specifications (with `JpaSpecificationExecutor`) or Querydsl.",
      "B": "Writing a very long derived query method name.",
      "C": "Using native SQL queries exclusively.",
      "D": "Manually building JPQL strings in the service layer."
    },
    "correctAnswer": "A"
  },
  {
    "id": 229,
    "question": "When `WebClient` is used to consume an external API, how can you typically handle specific HTTP error statuses (e.g., 404, 500) from the external API in a reactive way?",
    "options": {
      "A": "Using `.onStatus(predicate, errorHandlerFunction)` on the `ResponseSpec`.",
      "B": "By catching `WebClientResponseException` and checking its status code.",
      "C": "`WebClient` automatically retries on all errors.",
      "D": "By configuring a global `ControllerAdvice` for `WebClient`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 230,
    "question": "What is the purpose of a \"refresh token\" in OAuth 2.0?",
    "options": {
      "A": "To allow a client to obtain a new access token without requiring the user to re-authenticate, after the original access token has expired.",
      "B": "It's a token that refreshes the user's session data.",
      "C": "It's used to refresh the list of available API scopes.",
      "D": "It's an alternative to an access token with longer validity."
    },
    "correctAnswer": "A"
  },
  {
    "id": 231,
    "question": "In Spring Cache, if a method annotated with `@Cacheable` throws an exception, will the exception itself be cached by default?",
    "options": {
      "A": "No, by default, exceptions are not cached, and the method will be executed again on the next call.",
      "B": "Yes, the exception is cached and re-thrown on subsequent calls.",
      "C": "Only `RuntimeException`s are cached.",
      "D": "Caching behavior on exception depends on the cache provider."
    },
    "correctAnswer": "A"
  },
  {
    "id": 232,
    "question": "What is the Redis `FLUSHDB` command used for?",
    "options": {
      "A": "To remove all keys from the currently selected Redis database.",
      "B": "To save the current database state to disk.",
      "C": "To flush the Redis server's log file.",
      "D": "To reload the Redis configuration."
    },
    "correctAnswer": "A"
  },
  {
    "id": 233,
    "question": "In Git, what is a \"merge conflict,\" and when does it typically occur?",
    "options": {
      "A": "When Git is unable to automatically combine changes from different branches because there are conflicting modifications to the same part(s) of the same file(s); manual intervention is required.",
      "B": "When two developers try to commit to the same branch simultaneously.",
      "C": "When a branch is deleted.",
      "D": "When a remote repository is unavailable."
    },
    "correctAnswer": "A"
  },
  {
    "id": 234,
    "question": "How can you make environment variables defined in a `.env` file available to a Spring Boot application running directly (not in Docker)?",
    "options": {
      "A": "By using a library (e.g., `dotenv-java` or similar) that loads the `.env` file and populates system properties or environment variables at startup, or by sourcing the .env file in the shell before running.",
      "B": "Spring Boot automatically loads `.env` files from the classpath.",
      "C": "You must convert the `.env` file to `application.properties`.",
      "D": "This is only possible with Docker."
    },
    "correctAnswer": "A"
  },
  {
    "id": 235,
    "question": "In a multi-stage `Dockerfile`, how do you copy artifacts (like a compiled JAR file) from an earlier \"build\" stage to a later \"runtime\" stage?",
    "options": {
      "A": "Using the `COPY --from=<stage_name_or_index> <source_path> <destination_path>` instruction.",
      "B": "Files are automatically shared between all stages.",
      "C": "By defining a shared volume between stages.",
      "D": "By using `ADD --from=<stage_name>`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 236,
    "question": "In `docker-compose.yml`, what is the `restart: always` policy for a service typically used for?",
    "options": {
      "A": "To ensure that the container will always be restarted if it stops for any reason (e.g., crashes or the Docker daemon restarts), unless explicitly stopped.",
      "B": "To restart the service every hour.",
      "C": "To restart the service only if it exits with a non-zero status code.",
      "D": "To perform a rolling restart when the configuration changes."
    },
    "correctAnswer": "A"
  },
  {
    "id": 237,
    "question": "Which annotation in Spring is used to define a method whose return value should be registered as a bean in the application context, typically within a `@Configuration` class?",
    "options": {
      "A": "@Bean",
      "B": "@ProduceBean",
      "C": "@FactoryMethod",
      "D": "@Singleton"
    },
    "correctAnswer": "A"
  },
  {
    "id": 238,
    "question": "What is a common way to handle database schema migrations in a Spring Boot application (a topic related to managing database changes over time)?",
    "options": {
      "A": "Using a dedicated database migration tool like Flyway or Liquibase.",
      "B": "Relying solely on `spring.jpa.hibernate.ddl-auto=update`.",
      "C": "Manually applying SQL scripts during each deployment.",
      "D": "Letting developers update the schema directly on the production database."
    },
    "correctAnswer": "A"
  },
  {
    "id": 239,
    "question": "When creating a custom `JsonSerializer` in Jackson, which method of the `JsonSerializer` base class must be overridden to implement the custom serialization logic?",
    "options": {
      "A": "`serialize(T value, JsonGenerator gen, SerializerProvider serializers)`",
      "B": "`toJson(T value)`",
      "C": "`convert(T value, JsonGenerator gen)`",
      "D": "`writeObject(T value, JsonGenerator gen)`"
    },
    "correctAnswer": "A"
  },
  {
    "id": 240,
    "question": "In terms_of_API design, what does HATEOAS (Hypermedia as the Engine of Application State) promote?",
    "options": {
      "A": "Including links within API responses that guide clients on how to navigate to related resources or perform further actions, making the API more discoverable.",
      "B": "Using only HTML as the response format.",
      "C": "Ensuring all API state is managed by the client.",
      "D": "Versioning APIs through hypermedia links."
    },
    "correctAnswer": "A"
  },
  {
    "id": 241,
    "question": "If Spring Data JPA repository method returns `Page<Entity>`, what information does the `Page` object contain besides the list of entities for the current page?",
    "options": {
      "A": "Pagination metadata, such as total number of elements, total pages, current page number, page size, and sorting information.",
      "B": "Only the list of entities and the current page number.",
      "C": "The raw SQL query used.",
      "D": "The time taken to fetch the data."
    },
    "correctAnswer": "A"
  },
  {
    "id": 242,
    "question": "Which HTTP header is typically used to pass an authentication token (like a JWT or OAuth bearer token) to a secured API?",
    "options": {
      "A": "Authorization",
      "B": "X-Auth-Token",
      "C": "Security-Token",
      "D": "Access-Key"
    },
    "correctAnswer": "A"
  },
  {
    "id": 243,
    "question": "What is the primary benefit of using constructor-based dependency injection over field-based injection in Spring?",
    "options": {
      "A": "It allows dependencies to be declared as `final`, ensuring they are initialized during construction and promoting immutability; it also makes testing easier and dependencies more explicit.",
      "B": "It is faster at runtime.",
      "C": "It requires less code.",
      "D": "It supports circular dependencies more easily."
    },
    "correctAnswer": "A"
  },
  {
    "id": 244,
    "question": "Which Spring Boot Actuator \"health indicator\" would typically report on the status of the connection to a configured relational database?",
    "options": {
      "A": "DataSourceHealthIndicator (or similar, often named after the datasource)",
      "B": "DatabaseStatusContributor",
      "C": "JpaHealthCheck",
      "D": "SqlConnectivityIndicator"
    },
    "correctAnswer": "A"
  },
  {
    "id": 245,
    "question": "When using Docker volumes to persist database data, where is the actual data typically stored on the host machine if you use a named volume?",
    "options": {
      "A": "In a directory managed by Docker within its own storage area (e.g., `/var/lib/docker/volumes/` on Linux).",
      "B": "Directly in the project's source code directory.",
      "C": "In a temporary directory that is cleared on Docker restart.",
      "D": "The data is only stored inside the container."
    },
    "correctAnswer": "A"
  },
  {
    "id": 246,
    "question": "What is the `spring.application.name` property in `application.properties` commonly used for?",
    "options": {
      "A": "To set a logical name for the application, which can be used by logging, Actuator, service discovery, and other components.",
      "B": "To define the main class of the application.",
      "C": "To specify the context path for the web server.",
      "D": "To name the JAR file produced by the build."
    },
    "correctAnswer": "A"
  },
  {
    "id": 247,
    "question": "Which testing annotation in Spring Boot is often used for focused testing of the web layer (controllers, Spring MVC configuration) without loading the entire application context?",
    "options": {
      "A": "@WebMvcTest",
      "B": "@ControllerTest",
      "C": "@SliceTest(web=true)",
      "D": "@HttpLayerTest"
    },
    "correctAnswer": "A"
  },
  {
    "id": 248,
    "question": "Which Lombok annotation is useful for generating a constructor with arguments for fields marked with `@NonNull` or final fields?",
    "options": {
      "A": "@RequiredArgsConstructor",
      "B": "@AllArgsConstructor",
      "C": "@SelectiveConstructor",
      "D": "@NonNullConstructor"
    },
    "correctAnswer": "A"
  },
  {
    "id": 249,
    "question": "In Spring Boot, what does the property `spring.jpa.show-sql=true` in `application.properties` typically do?",
    "options": {
      "A": "It configures the underlying JPA provider (e.g., Hibernate) to log all executed SQL statements to the console.",
      "B": "It displays SQL results directly in the API response.",
      "C": "It enables a SQL query interface at an Actuator endpoint.",
      "D": "It validates the SQL syntax in `*.sql` files."
    },
    "correctAnswer": "A"
  },
  {
    "id": 250,
    "question": "What is a common use case for the HTTP HEAD method in a REST API?",
    "options": {
      "A": "To retrieve only the headers of a response that would have been returned for a GET request, without the response body, often used to check resource metadata like `Content-Length` or `Last-Modified`.",
      "B": "To create a new resource with only header information.",
      "C": "To update the headers of an existing resource.",
      "D": "To get the head (first few lines) of a resource's content."
    },
    "correctAnswer": "A"
  },
  {
    "id": 251,
    "question": "In JPA, if an entity field represents a large text block, which annotation can be used to suggest mapping it to a CLOB (Character Large Object) or similar large text type in the database?",
    "options": {
      "A": "@Lob",
      "B": "@LargeText",
      "C": "@ClobField",
      "D": "@TextualData"
    },
    "correctAnswer": "A"
  },
  {
    "id": 252,
    "question": "Which JPA annotation is used to define that a collection of basic types (e.g., `List<String>`) or embeddable objects should be stored as part of an entity, often in a separate table?",
    "options": {
      "A": "@ElementCollection",
      "B": "@CollectionTable",
      "C": "@EmbeddedList",
      "D": "@ValueCollection"
    },
    "correctAnswer": "A"
  },
  {
    "id": 253,
    "question": "When managing a `@ManyToMany` relationship in JPA, what is often required if additional columns are needed in the join table itself (beyond just the foreign keys)?",
    "options": {
      "A": "The many-to-many relationship needs to be modeled as two one-to-many relationships with an intermediate entity class representing the join table with extra fields.",
      "B": "Use the `@JoinTableColumns` annotation.",
      "C": "This is not possible in JPA.",
      "D": "Use native SQL to manage the join table."
    },
    "correctAnswer": "A"
  },
  {
    "id": 254,
    "question": "How can using DTOs help in aggregating data from multiple entities or services for a single API response?",
    "options": {
      "A": "A DTO can be designed to hold a composite structure, combining fields from different sources into a tailored response object, simplifying client consumption.",
      "B": "DTOs automatically fetch and join data from related entities.",
      "C": "DTOs have built-in aggregation functions.",
      "D": "DTOs are only for single entity representations."
    },
    "correctAnswer": "A"
  },
  {
    "id": 255,
    "question": "Which Spring AOP (Aspect-Oriented Programming) term describes the action taken by an aspect at a particular join point (e.g., method execution)?",
    "options": {
      "A": "Advice (e.g., @Before, @After, @Around)",
      "B": "Pointcut",
      "C": "Aspect",
      "D": "Target Object"
    },
    "correctAnswer": "A"
  },
  {
    "id": 256,
    "question": "What is the purpose of Jackson's `@JsonCreator` annotation, often used with static factory methods or constructors?",
    "options": {
      "A": "To indicate that the annotated constructor or factory method should be used for creating instances of the class during JSON deserialization.",
      "B": "To specify who created the JSON content.",
      "C": "To filter JSON content based on the creator.",
      "D": "To automatically create JSON schemas."
    },
    "correctAnswer": "A"
  },
  {
    "id": 257,
    "question": "If you have a custom exception, say `ProductNotFoundException`, and you want it to result in an HTTP 404 status specifically when thrown from a controller, where is `@ResponseStatus(HttpStatus.NOT_FOUND)` most appropriately placed?",
    "options": {
      "A": "Directly on the `ProductNotFoundException` class itself.",
      "B": "On every controller method that might throw it.",
      "C": "In a global configuration file for exceptions.",
      "D": "Within the `catch` block in the service layer."
    },
    "correctAnswer": "A"
  },
  {
    "id": 258,
    "question": "In Logback, what is a \"TurboFilter\" often used for?",
    "options": {
      "A": "To make very fast filtering decisions based on context (like MDC values, markers, log level, logger name) even before a `LoggingEvent` object is fully constructed, for performance-critical filtering.",
      "B": "To speed up log file rotation.",
      "C": "To filter logs based on user roles.",
      "D": "To compress log messages in real-time."
    },
    "correctAnswer": "A"
  },
  {
    "id": 259,
    "question": "Which Spring Boot Actuator endpoint provides information about the application's environment, including profiles, system properties, and environment variables?",
    "options": {
      "A": "/actuator/env",
      "B": "/actuator/environment",
      "C": "/actuator/configprops",
      "D": "/actuator/system"
    },
    "correctAnswer": "A"
  },
  {
    "id": 260,
    "question": "When designing a search API, what is a key consideration for validating search query parameters, such as `query=...`?",
    "options": {
      "A": "Ensure the query parameter is not empty, meets length constraints (if any), and possibly sanitize it to prevent injection attacks if used in raw queries (though JPA usually handles this for JPQL).",
      "B": "Allow any query string without validation.",
      "C": "Only accept predefined query keywords.",
      "D": "Ensure the query string is Base64 encoded."
    },
    "correctAnswer": "A"
  },
  {
    "id": 261,
    "question": "When using `RestTemplate` to exchange data with an external API, which method allows you to specify the HTTP method, request entity (headers and body), and response type more flexibly?",
    "options": {
      "A": "exchange(String url, HttpMethod method, HttpEntity<?> requestEntity, Class<T> responseType, Object... uriVariables)",
      "B": "postForObject(...) or getForObject(...)",
      "C": "execute(String url, HttpMethod method, ...)",
      "D": "sendAndReceive(...)"
    },
    "correctAnswer": "A"
  },
  {
    "id": 262,
    "question": "If an external API uses an API key that needs to be sent as a query parameter (e.g., `?apiKey=XYZ`), how would you typically append this to the URL when using `RestTemplate` or `WebClient`?",
    "options": {
      "A": "By using a `UriComponentsBuilder` to construct the URL with the query parameter, or by including it in the URI string with placeholders.",
      "B": "The API key is automatically added if present in `application.properties`.",
      "C": "API keys should only be sent in headers.",
      "D": "By setting a global `RestTemplate` property for API keys."
    },
    "correctAnswer": "A"
  },
  {
    "id": 263,
    "question": "Which Resilience4j component is designed to stop making requests to a failing service for a period after a certain number of failures, preventing further load on the struggling service?",
    "options": {
      "A": "CircuitBreaker",
      "B": "Retry",
      "C": "Bulkhead",
      "D": "TimeLimiter"
    },
    "correctAnswer": "A"
  },
  {
    "id": 264,
    "question": "What is a potential downside of a very short time window (e.g., 1 second) for API rate limiting if not combined with a burst capacity?",
    "options": {
      "A": "It might penalize legitimate clients making closely spaced, non-abusive requests, leading to a poor user experience.",
      "B": "It consumes excessive server memory.",
      "C": "It makes the API less secure.",
      "D": "It cannot prevent DoS attacks."
    },
    "correctAnswer": "A"
  },
  {
    "id": 265,
    "question": "When using Spring's `@CachePut` annotation, what is its primary behavior regarding method execution and cache interaction?",
    "options": {
      "A": "The method is always executed, and its result is placed into the cache, potentially overwriting an existing entry.",
      "B": "The method is executed only if the data is not in the cache.",
      "C": "It retrieves data from the cache without executing the method.",
      "D": "It removes data from the cache before executing the method."
    },
    "correctAnswer": "A"
  },
  {
    "id": 266,
    "question": "If you need to programmatically interact with Spring's cache abstraction (e.g., to retrieve, put, or evict entries outside of annotations), what Spring-managed bean would you typically inject?",
    "options": {
      "A": "CacheManager",
      "B": "RedisTemplate (if using Redis directly, not just through abstraction)",
      "C": "CacheService",
      "D": "CacheAccessor"
    },
    "correctAnswer": "A"
  },
  {
    "id": 267,
    "question": "In Git, what is the `git stash` command useful for?",
    "options": {
      "A": "To temporarily save your uncommitted local modifications (staged and unstaged) without creating a commit, allowing you to switch branches or work on something else, and then reapply the changes later.",
      "B": "To delete uncommitted changes permanently.",
      "C": "To archive old commits.",
      "D": "To create a backup of the remote repository."
    },
    "correctAnswer": "A"
  },
  {
    "id": 268,
    "question": "In a `Dockerfile`, if you need to run commands as a non-root user for security reasons, which instruction should you use before those commands?",
    "options": {
      "A": "USER <username_or_UID>",
      "B": "RUN_AS <username>",
      "C": "SET_USER <username>",
      "D": "SUDO <username>"
    },
    "correctAnswer": "A"
  },
  {
    "id": 269,
    "question": "When using `docker-compose`, if you want to view the logs of all running services defined in your `docker-compose.yml` file, what command would you use?",
    "options": {
      "A": "docker-compose logs -f (the -f flag follows the log output)",
      "B": "docker-compose show-logs",
      "C": "docker-compose status --logs",
      "D": "docker-compose print-logs"
    },
    "correctAnswer": "A"
  },
  {
    "id": 270,
    "question": "What is Spring Expression Language (SpEL) often used for within Spring annotations like `@Cacheable(key = \"#argument.id\")` or `@PreAuthorize(\"hasRole('ADMIN')\")`?",
    "options": {
      "A": "To evaluate expressions at runtime, allowing access to method arguments, bean properties, system properties, and execution of simple logic for conditional behavior or dynamic value generation.",
      "B": "To define SQL-like queries.",
      "C": "To write unit test conditions.",
      "D": "To configure XML bean definitions."
    },
    "correctAnswer": "A"
  },
  {
    "id": 271,
    "question": "Which Spring Boot \"starter\" is essential for building applications that serve RESTful APIs using Spring MVC and an embedded web server like Tomcat?",
    "options": {
      "A": "spring-boot-starter-web",
      "B": "spring-boot-starter-rest",
      "C": "spring-boot-starter-api",
      "D": "spring-boot-starter-json"
    },
    "correctAnswer": "A"
  },
  {
    "id": 272,
    "question": "In JPA, what is the purpose of the `@Version` annotation on an entity field (e.g., `private Long version;`)?",
    "options": {
      "A": "To enable optimistic locking, where the version number is incremented on each update, and updates fail if the version in the database doesn't match the version of the entity being updated.",
      "B": "To track the version of the JPA specification being used.",
      "C": "To define different versions of an entity for API evolution.",
      "D": "To store the application version that last modified the entity."
    },
    "correctAnswer": "A"
  },
  {
    "id": 273,
    "question": "If a Spring bean implements the `DisposableBean` interface, which method must it implement, and when is it called?",
    "options": {
      "A": "`destroy()`, called by the Spring container just before the bean is removed from the context during application shutdown or bean destruction.",
      "B": "`dispose()`, called after garbage collection.",
      "C": "`cleanup()`, called after each method invocation.",
      "D": "`shutdown()`, called when an error occurs."
    },
    "correctAnswer": "A"
  },
  {
    "id": 274,
    "question": "When returning a `ResponseEntity<Void>` from a Spring MVC controller, what does it typically signify?",
    "options": {
      "A": "The HTTP response should have an empty body, often used with status codes like 201 Created (with Location header) or 204 No Content.",
      "B": "The response is void of any meaning.",
      "C": "An error occurred, and no response body is available.",
      "D": "The request was not understood."
    },
    "correctAnswer": "A"
  },
  {
    "id": 275,
    "question": "In Logback, what does the `additivity` attribute of a `<logger>` element control?",
    "options": {
      "A": "If `additivity=\"false\"`, it prevents log messages handled by this logger from also being processed by appenders attached to its ancestor loggers (e.g., the root logger).",
      "B": "It controls how many appenders can be attached to a logger.",
      "C": "It specifies if log levels should be additive.",
      "D": "It enables adding custom fields to log messages."
    },
    "correctAnswer": "A"
  },
  {
    "id": 276,
    "question": "Which Spring Boot Actuator endpoint can be used to retrieve the current effective logging levels for different packages/loggers and potentially modify them at runtime?",
    "options": {
      "A": "/actuator/loggers",
      "B": "/actuator/logging/levels",
      "C": "/actuator/logconfig",
      "D": "/actuator/setLogLevel"
    },
    "correctAnswer": "A"
  },
  {
    "id": 277,
    "question": "If a Spring Data JPA repository method needs to return only specific fields of an entity (a projection) and you define an interface for this projection, how does Spring Data JPA typically implement it?",
    "options": {
      "A": "It creates a proxy instance of the projection interface at runtime, populating it with data fetched from the selected columns.",
      "B": "You must provide a concrete class implementing the projection interface.",
      "C": "Projections are only possible with DTO classes.",
      "D": "It requires a custom `@Query` with a constructor expression."
    },
    "correctAnswer": "A"
  },
  {
    "id": 278,
    "question": "When `RestTemplate` or `WebClient` encounters an HTTP status code that indicates an error (e.g., 4xx or 5xx), what is the default behavior if no custom error handler is configured?",
    "options": {
      "A": "It throws an exception (e.g., `HttpClientErrorException` for 4xx, `HttpServerErrorException` for 5xx).",
      "B": "It returns `null` or an empty `Optional`.",
      "C": "It logs the error and returns a default response object.",
      "D": "It automatically retries the request."
    },
    "correctAnswer": "A"
  },
  {
    "id": 279,
    "question": "In the context of OAuth 2.0, what is a \"scope\"?",
    "options": {
      "A": "A mechanism to limit an application's access to a user's account. An application requests one or more scopes, and the access token issued is limited to those scopes.",
      "B": "The geographic region where the API can be accessed.",
      "C": "The time duration for which an access token is valid.",
      "D": "The encryption algorithm used for tokens."
    },
    "correctAnswer": "A"
  },
  {
    "id": 280,
    "question": "When using `@CacheEvict(allEntries = true)`, what is the expected behavior?",
    "options": {
      "A": "All entries in the specified cache(s) are removed.",
      "B": "Only entries created by the current user are evicted.",
      "C": "It evicts entries older than a certain age.",
      "D": "It requires a specific key to evict all entries."
    },
    "correctAnswer": "A"
  },
  {
    "id": 281,
    "question": "What is the primary purpose of the Redis `PING` command?",
    "options": {
      "A": "To check if the Redis server is alive and responsive; it usually returns \"PONG\".",
      "B": "To measure the latency to the Redis server.",
      "C": "To list all active client connections.",
      "D": "To get server statistics."
    },
    "correctAnswer": "A"
  },
  {
    "id": 282,
    "question": "In Git, what does \"rebasing\" a branch (e.g., `git rebase main` while on a feature branch) typically do?",
    "options": {
      "A": "It reapplies the commits from the current branch on top of the tip of the specified base branch (e.g., `main`), often resulting in a cleaner, more linear history compared to merging.",
      "B": "It merges the specified branch into the current branch.",
      "C": "It creates a new branch that is a copy of the current branch.",
      "D": "It deletes the current branch and recreates it from the base branch."
    },
    "correctAnswer": "A"
  },
  {
    "id": 283,
    "question": "If you have both `application.properties` and `application-dev.properties` in your Spring Boot project, how do you activate the `dev` profile to use `application-dev.properties` (which will override or supplement `application.properties`)?",
    "options": {
      "A": "By setting `spring.profiles.active=dev` (e.g., as an environment variable, system property, or in `application.properties` itself).",
      "B": "Spring Boot automatically detects and uses all `application-*.properties` files.",
      "C": "By renaming `application-dev.properties` to `application.properties`.",
      "D": "By using the `@Profile(\"dev\")` annotation on the main application class."
    },
    "correctAnswer": "A"
  },
  {
    "id": 284,
    "question": "In a `Dockerfile`, what is the difference between `COPY` and `ADD` instructions?",
    "options": {
      "A": "Both copy files/directories into the image, but `ADD` has additional features like automatically extracting local tar files and supporting URLs as a source (though using `COPY` is generally preferred for simple local file copying).",
      "B": "`COPY` is for text files, `ADD` for binaries.",
      "C": "`ADD` is for directories, `COPY` for files.",
      "D": "There is no functional difference."
    },
    "correctAnswer": "A"
  },
  {
    "id": 285,
    "question": "In `docker-compose.yml`, what is the `depends_on` condition primarily used for?",
    "options": {
      "A": "To specify service dependencies, controlling the startup order of services (i.e., a service will start only after its dependencies have started). It does not guarantee readiness of the dependency.",
      "B": "To link environment variables between services.",
      "C": "To define network aliases.",
      "D": "To share volumes between services."
    },
    "correctAnswer": "A"
  },
  {
    "id": 286,
    "question": "Which annotation is fundamental for enabling Spring Boot's auto-configuration capabilities?",
    "options": {
      "A": "@EnableAutoConfiguration (which is part of @SpringBootApplication)",
      "B": "@AutoConfigure",
      "C": "@SpringConfig",
      "D": "@MagicConfig"
    },
    "correctAnswer": "A"
  },
  {
    "id": 287,
    "question": "What is the HTTP `Content-Length` header used for?",
    "options": {
      "A": "To indicate the size of the message body in bytes.",
      "B": "To specify the maximum allowed length for the request URL.",
      "C": "To define the content type of the response.",
      "D": "To set a limit on the number of concurrent requests."
    },
    "correctAnswer": "A"
  },
  {
    "id": 288,
    "question": "In JPA, if an entity A has a `@OneToMany` relationship to a collection of entity B, and B has a `@ManyToOne` relationship back to A, which side is typically the \"owning\" side of the relationship that manages the foreign key?",
    "options": {
      "A": "The `@ManyToOne` side (entity B) usually holds the foreign key column and is considered the owning side.",
      "B": "The `@OneToMany` side (entity A) is always the owning side.",
      "C": "Both sides are owning sides by default.",
      "D": "The owning side is determined by the `CascadeType`."
    },
    "correctAnswer": "A"
  },
  {
    "id": 289,
    "question": "What is the main benefit of using a `java.time.OffsetDateTime` or `java.time.ZonedDateTime` over `java.util.Date` or `java.sql.Timestamp` for handling date-time information with time zones?",
    "options": {
      "A": "They provide more comprehensive and less ambiguous handling of time zones and offsets from UTC, reducing common date-time bugs.",
      "B": "They are faster to serialize/deserialize.",
      "C": "They consume less memory.",
      "D": "They are directly supported by all database drivers without conversion."
    },
    "correctAnswer": "A"
  },
  {
    "id": 290,
    "question": "In Logback, what is the purpose of the `<root>` logger element in the configuration file?",
    "options": {
      "A": "It defines the default logging level and appenders for all loggers in the application, unless overridden by more specific logger configurations.",
      "B": "It is the logger for the root user of the system.",
      "C": "It logs only exceptions that reach the root of the call stack.",
      "D": "It specifies the root directory for log files."
    },
    "correctAnswer": "A"
  },
  {
    "id": 291,
    "question": "Which Spring Boot Actuator health indicator automatically checks for available disk space?",
    "options": {
      "A": "DiskSpaceHealthIndicator",
      "B": "StorageHealthContributor",
      "C": "FileSystemAvailabilityProvider",
      "D": "DriveCapacityMonitor"
    },
    "correctAnswer": "A"
  },
  {
    "id": 292,
    "question": "When using Spring `WebClient` for a reactive HTTP call, which operator is often used on the resulting `Mono` or `Flux` to transform the emitted data item(s)?",
    "options": {
      "A": "map()",
      "B": "transform()",
      "C": "convert()",
      "D": "process()"
    },
    "correctAnswer": "A"
  },
  {
    "id": 293,
    "question": "What is a primary difference between Basic Authentication and Bearer Token Authentication (e.g., with JWTs or OAuth)?",
    "options": {
      "A": "Basic Auth sends username/password (Base64 encoded) with every request, while Bearer Token Auth sends a self-contained token that the server validates, often without needing to look up credentials for each request.",
      "B": "Basic Auth is more secure than Bearer Token.",
      "C": "Bearer Tokens are only for internal services.",
      "D": "Basic Auth uses encryption, Bearer Tokens do not."
    },
    "correctAnswer": "A"
  },
  {
    "id": 294,
    "question": "If you use `@CacheEvict(key = \"#userId\", beforeInvocation = true)` on a method `deleteUser(Long userId)`, what does `beforeInvocation = true` signify?",
    "options": {
      "A": "The cache eviction will occur *before* the `deleteUser` method is executed.",
      "B": "The cache eviction will only happen if the method invocation is successful.",
      "C": "The method will be invoked before the cache key is determined.",
      "D": "It's relevant only if `allEntries` is also true."
    },
    "correctAnswer": "A"
  },
  {
    "id": 295,
    "question": "What does the Redis `KEYS *` command do, and why should it be used with caution in a production environment?",
    "options": {
      "A": "It returns all keys in the currently selected database. It should be used with caution in production as it can be slow and block the server when dealing with a very large number of keys.",
      "B": "It returns all Redis server configuration keys.",
      "C": "It encrypts all keys in the database.",
      "D": "It provides statistics about key usage."
    },
    "correctAnswer": "A"
  },
  {
    "id": 296,
    "question": "In Git, what is the primary difference between `git fetch` and `git pull`?",
    "options": {
      "A": "`git fetch` retrieves changes from a remote repository but does not merge them into your local working branch, while `git pull` (which is essentially `git fetch` followed by `git merge` or `git rebase`) fetches changes and immediately tries to integrate them.",
      "B": "`git pull` is for uploading, `git fetch` for downloading.",
      "C": "`git fetch` works only with the `origin` remote.",
      "D": "There is no difference."
    },
    "correctAnswer": "A"
  },
  {
    "id": 297,
    "question": "When using environment variables with Docker and `docker-compose`, how can you ensure that certain environment variables are available *only* during the Docker image build process but not in the running container?",
    "options": {
      "A": "By using `ARG` in the `Dockerfile` for build-time variables and `ENV` for runtime variables. If a build-arg has the same name as an env var, the env var in the image takes precedence unless it's set from the ARG without a value in ENV.",
      "B": "All `ARG` values are automatically passed to the running container.",
      "C": "By prefixing build-time variables with `BUILD_` in the `.env` file.",
      "D": "Environment variables cannot be restricted to build time only."
    },
    "correctAnswer": "A"
  },
  {
    "id": 298,
    "question": "What is the purpose of the `HEALTHCHECK` instruction in a `Dockerfile`?",
    "options": {
      "A": "To define a command that Docker can run inside the container to determine if the application is healthy (e.g., an API endpoint returns 200 OK). This status can be used by orchestrators.",
      "B": "To install health monitoring tools in the image.",
      "C": "To perform a security scan of the image.",
      "D": "To set the `/actuator/health` endpoint."
    },
    "correctAnswer": "A"
  },
  {
    "id": 299,
    "question": "Which Spring annotation is often used in integration tests to replace a specific bean in the application context with a mock implementation (e.g., a Mockito mock)?",
    "options": {
      "A": "@MockBean",
      "B": "@ReplaceBean",
      "C": "@TestBean",
      "D": "@SubstituteBean"
    },
    "correctAnswer": "A"
  }
];
