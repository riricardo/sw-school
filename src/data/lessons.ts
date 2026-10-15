import type { Lesson } from '../types';
export const lessons: Lesson[] = [
  {
    "id": "interfaces",
    "module": "C# Fundamentals",
    "title": "Interfaces",
    "minutes": 10,
    "priority": "Core",
    "simple": "An interface describes a contract that implementing types must satisfy.",
    "details": "Use interfaces to express capabilities without coupling consumers to one concrete implementation. C# supports multiple interfaces per class.",
    "analogy": "A universal charging port defines what fits, not how electricity is produced.",
    "code": "public interface IMessageSender { Task SendAsync(string text); }\npublic class EmailSender : IMessageSender {\n  public Task SendAsync(string text) => Task.CompletedTask;\n}",
    "interview": "An interface defines a contract. I use it to depend on behavior rather than a concrete class.",
    "pitfall": "An interface is not the same as an abstract class.",
    "questions": [
      {
        "id": "interfaces-1",
        "prompt": "What best describes Interfaces?",
        "options": [
          "Contract",
          "Database table",
          "Runtime process",
          "Compiler flag"
        ],
        "correct": 0,
        "explanation": "An interface describes a contract that implementing types must satisfy."
      },
      {
        "id": "interfaces-2",
        "prompt": "Which statement about Interfaces is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "An interface describes a contract that implementing types must satisfy."
        ],
        "correct": 3,
        "explanation": "Use interfaces to express capabilities without coupling consumers to one concrete implementation. C# supports multiple interfaces per class."
      },
      {
        "id": "interfaces-4",
        "prompt": "Which is a common mistake related to Interfaces?",
        "options": [
          "Reviewing a change before merging.",
          "An interface is not the same as an abstract class.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "An interface is not the same as an abstract class."
      },
      {
        "id": "interfaces-scenario-1",
        "prompt": "An API must send notifications through email or SMS without changing its business logic. What design fits best?",
        "options": [
          "Create an IMessageSender interface with EmailSender and SmsSender implementations.",
          "Use x++ to count messages.",
          "Duplicate the business logic for each provider.",
          "Make all sender fields public."
        ],
        "correct": 0,
        "explanation": "An interface defines the SendAsync contract; the service depends on the contract, and each provider implements it."
      },
      {
        "id": "interfaces-code-1",
        "prompt": "Given `interface IStore { void Save(); }`, what must a non-abstract class implementing IStore provide?",
        "options": [
          "A public compatible Save() implementation (or explicit interface implementation).",
          "An override of ToString() only.",
          "A constructor named IStore.",
          "A static Save() method only."
        ],
        "correct": 0,
        "explanation": "Implementing a C# interface requires satisfying its members; a static method alone does not implement an instance method."
      }
    ],
    "useCase": "Use an interface when a service needs interchangeable implementations, such as sending notifications by email or SMS.",
    "avoid": "Avoid creating an interface for every class when no abstraction is needed."
  },
  {
    "id": "abstract-classes",
    "module": "C# Fundamentals",
    "title": "Abstract classes",
    "minutes": 8,
    "priority": "Core",
    "simple": "An abstract class is a base class that cannot be instantiated directly.",
    "details": "It can provide shared fields, constructors, implemented methods, and abstract members subclasses must implement. A class can inherit only one class.",
    "analogy": "A partially assembled template that specialized models complete.",
    "code": "public abstract class Report {\n  public void Print() => Console.WriteLine(\"Ready\");\n  public abstract string Build();\n}\npublic class SalesReport : Report {\n  public override string Build() => \"Sales\";\n}",
    "interview": "I choose an abstract class when closely related types need shared implementation or state.",
    "pitfall": "Abstract classes can be inherited; they cannot be instantiated directly.",
    "questions": [
      {
        "id": "abstract-classes-1",
        "prompt": "What best describes Abstract classes?",
        "options": [
          "Multiple unrelated contracts",
          "SQL optimization",
          "Dependency registration",
          "Shared base behavior"
        ],
        "correct": 3,
        "explanation": "An abstract class is a base class that cannot be instantiated directly."
      },
      {
        "id": "abstract-classes-2",
        "prompt": "Which statement about Abstract classes is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "An abstract class is a base class that cannot be instantiated directly.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "It can provide shared fields, constructors, implemented methods, and abstract members subclasses must implement. A class can inherit only one class."
      },
      {
        "id": "abstract-classes-4",
        "prompt": "Which is a common mistake related to Abstract classes?",
        "options": [
          "Abstract classes can be inherited; they cannot be instantiated directly.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Abstract classes can be inherited; they cannot be instantiated directly."
      },
      {
        "id": "abstract-classes-scenario-1",
        "prompt": "Several report classes need the same Print() implementation but each builds different content. Which approach fits?",
        "options": [
          "An abstract Report base class with shared Print() and abstract Build().",
          "Increment a local integer.",
          "Put all methods in unrelated static classes.",
          "Use a database index."
        ],
        "correct": 0,
        "explanation": "Abstract classes can share implementation and require subclasses to implement abstract members."
      }
    ],
    "useCase": "Use a base class for related report types that share validation and formatting logic.",
    "avoid": "Prefer an interface when unrelated types only need a common contract."
  },
  {
    "id": "encapsulation",
    "module": "C# Fundamentals",
    "title": "Encapsulation",
    "minutes": 8,
    "priority": "Core",
    "simple": "Encapsulation protects internal state behind a controlled public API.",
    "details": "Keep fields private and expose methods or properties that enforce invariants.",
    "analogy": "An ATM lets you withdraw without accessing its internal vault.",
    "code": "public class Wallet {\n  private decimal balance;\n  public void Deposit(decimal amount) {\n    if (amount <= 0) throw new ArgumentException();\n    balance += amount;\n  }\n}",
    "interview": "Encapsulation helps keep objects valid by controlling how their state changes.",
    "pitfall": "Public mutable fields can bypass validation.",
    "questions": [
      {
        "id": "encapsulation-1",
        "prompt": "What best describes Encapsulation?",
        "options": [
          "Avoiding exceptions",
          "Sharing global variables",
          "Controlled access to state",
          "Always using inheritance"
        ],
        "correct": 2,
        "explanation": "Encapsulation protects internal state behind a controlled public API."
      },
      {
        "id": "encapsulation-2",
        "prompt": "Which statement about Encapsulation is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "Encapsulation protects internal state behind a controlled public API.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "Keep fields private and expose methods or properties that enforce invariants."
      },
      {
        "id": "encapsulation-4",
        "prompt": "Which is a common mistake related to Encapsulation?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Public mutable fields can bypass validation."
        ],
        "correct": 3,
        "explanation": "Public mutable fields can bypass validation."
      },
      {
        "id": "encapsulation-scenario-1",
        "prompt": "A Wallet must reject negative deposits. Which design protects the invariant?",
        "options": [
          "Keep balance private and validate the amount in Deposit().",
          "Expose balance as a public field.",
          "Allow any caller to assign balance.",
          "Disable exceptions everywhere."
        ],
        "correct": 0,
        "explanation": "Encapsulation controls changes to state and enforces valid values."
      }
    ],
    "useCase": "Use private fields and validated methods in accounts, shopping carts and business entities.",
    "avoid": "Do not expose mutable state that bypasses business rules."
  },
  {
    "id": "polymorphism",
    "module": "C# Fundamentals",
    "title": "Polymorphism",
    "minutes": 10,
    "priority": "Core",
    "simple": "Polymorphism lets different types respond to the same operation differently.",
    "details": "An interface or virtual method enables calling common behavior while each implementation handles it in its own way.",
    "analogy": "The same play button works with different media players.",
    "code": "IMessageSender sender = new EmailSender();\nawait sender.SendAsync(\"Hello\");",
    "interview": "Polymorphism lets callers use a common contract while implementations vary.",
    "pitfall": "Do not confuse overloading with runtime overriding.",
    "questions": [
      {
        "id": "polymorphism-1",
        "prompt": "What best describes Polymorphism?",
        "options": [
          "A build pipeline",
          "Different implementations via one contract",
          "Only private methods",
          "One database connection"
        ],
        "correct": 1,
        "explanation": "Polymorphism lets different types respond to the same operation differently."
      },
      {
        "id": "polymorphism-2",
        "prompt": "Which statement about Polymorphism is accurate?",
        "options": [
          "Polymorphism lets different types respond to the same operation differently.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "An interface or virtual method enables calling common behavior while each implementation handles it in its own way."
      },
      {
        "id": "polymorphism-4",
        "prompt": "Which is a common mistake related to Polymorphism?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Do not confuse overloading with runtime overriding.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "Do not confuse overloading with runtime overriding."
      },
      {
        "id": "polymorphism-application",
        "prompt": "Which approach is most appropriate when applying Polymorphism in a project?",
        "options": [
          "Polymorphism lets callers use a common contract while implementations vary.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "An interface or virtual method enables calling common behavior while each implementation handles it in its own way."
      }
    ],
    "useCase": "In a real software project, apply polymorphism when the situation described in this lesson occurs. Example: An interface or virtual method enables calling common behavior while each implementation handles it in its own way.",
    "avoid": "Do not apply polymorphism by default: first evaluate the requirements, complexity and alternatives. Do not confuse overloading with runtime overriding."
  },
  {
    "id": "collections-and-linq",
    "module": "C# Fundamentals",
    "title": "Collections & LINQ",
    "minutes": 8,
    "priority": "Core",
    "simple": "Collections store groups of values; LINQ queries them.",
    "details": "List<T> preserves ordered items; Dictionary<TKey,TValue> enables keyed lookups. LINQ Where filters, Select projects, and FirstOrDefault retrieves a match.",
    "analogy": "A library catalog that can be filtered and grouped.",
    "code": "var high = scores.Where(x => x >= 80).ToList();\nvar names = users.Select(u => u.Name).ToList();",
    "interview": "LINQ helps express data transformations clearly. I avoid unnecessary repeated enumeration.",
    "pitfall": "Deferred execution means some queries run only when enumerated.",
    "questions": [
      {
        "id": "collections-and-linq-1",
        "prompt": "What best describes Collections & LINQ?",
        "options": [
          "Filtering and projecting data",
          "Deploying websites",
          "Handling HTTP routes",
          "Replacing SQL transactions"
        ],
        "correct": 0,
        "explanation": "Collections store groups of values; LINQ queries them."
      },
      {
        "id": "collections-and-linq-2",
        "prompt": "Which statement about Collections & LINQ is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Collections store groups of values; LINQ queries them."
        ],
        "correct": 3,
        "explanation": "List<T> preserves ordered items; Dictionary<TKey,TValue> enables keyed lookups. LINQ Where filters, Select projects, and FirstOrDefault retrieves a match."
      },
      {
        "id": "collections-and-linq-4",
        "prompt": "Which is a common mistake related to Collections & LINQ?",
        "options": [
          "Reviewing a change before merging.",
          "Deferred execution means some queries run only when enumerated.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "Deferred execution means some queries run only when enumerated."
      },
      {
        "id": "collections-and-linq-application",
        "prompt": "Which approach is most appropriate when applying Collections & LINQ in a project?",
        "options": [
          "LINQ helps express data transformations clearly. I avoid unnecessary repeated enumeration.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "List<T> preserves ordered items; Dictionary<TKey,TValue> enables keyed lookups. LINQ Where filters, Select projects, and FirstOrDefault retrieves a match."
      }
    ],
    "useCase": "In a real software project, apply collections & linq when the situation described in this lesson occurs. Example: List<T> preserves ordered items; Dictionary<TKey,TValue> enables keyed lookups. LINQ Where filters, Select projects, and FirstOrDefault retrieves a match.",
    "avoid": "Do not apply collections & linq by default: first evaluate the requirements, complexity and alternatives. Deferred execution means some queries run only when enumerated."
  },
  {
    "id": "async---await",
    "module": "C# Fundamentals",
    "title": "Async / Await",
    "minutes": 8,
    "priority": "Core",
    "simple": "Async and await make asynchronous operations easier to write and compose.",
    "details": "Await suspends the current async operation without blocking its thread while an I/O task is pending. Use Task and propagate cancellation when appropriate.",
    "analogy": "You place an order and do something else while it is prepared.",
    "code": "public async Task<string> LoadAsync(HttpClient client) {\n  return await client.GetStringAsync(\"https://example.org\");\n}",
    "interview": "Async/await is especially useful for I/O-bound operations like HTTP and database calls.",
    "pitfall": "Async does not automatically make CPU-bound work faster; avoid .Result deadlocks.",
    "questions": [
      {
        "id": "async---await-1",
        "prompt": "What best describes Async / Await?",
        "options": [
          "Guaranteed parallelism",
          "Replacing all threads",
          "Preventing every exception",
          "Non-blocking I/O composition"
        ],
        "correct": 3,
        "explanation": "Async and await make asynchronous operations easier to write and compose."
      },
      {
        "id": "async---await-2",
        "prompt": "Which statement about Async / Await is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Async and await make asynchronous operations easier to write and compose.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "Await suspends the current async operation without blocking its thread while an I/O task is pending. Use Task and propagate cancellation when appropriate."
      },
      {
        "id": "async---await-4",
        "prompt": "Which is a common mistake related to Async / Await?",
        "options": [
          "Async does not automatically make CPU-bound work faster; avoid .Result deadlocks.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Async does not automatically make CPU-bound work faster; avoid .Result deadlocks."
      },
      {
        "id": "async---await-application",
        "prompt": "Which approach is most appropriate when applying Async / Await in a project?",
        "options": [
          "Async/await is especially useful for I/O-bound operations like HTTP and database calls.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Await suspends the current async operation without blocking its thread while an I/O task is pending. Use Task and propagate cancellation when appropriate."
      }
    ],
    "useCase": "In a real software project, apply async / await when the situation described in this lesson occurs. Example: Await suspends the current async operation without blocking its thread while an I/O task is pending. Use Task and propagate cancellation when appropriate.",
    "avoid": "Do not apply async / await by default: first evaluate the requirements, complexity and alternatives. Async does not automatically make CPU-bound work faster; avoid .Result deadlocks."
  },
  {
    "id": "exceptions-and-logging",
    "module": "C# Fundamentals",
    "title": "Exceptions & Logging",
    "minutes": 10,
    "priority": "Core",
    "simple": "Exceptions represent unexpected failures; logging records diagnostic events.",
    "details": "Catch exceptions where you can handle them meaningfully. Use structured logging, appropriate levels, and never log passwords or secrets.",
    "analogy": "A fire alarm reports an incident; an incident log records context.",
    "code": "try { await service.RunAsync(); }\ncatch (TimeoutException ex) {\n  logger.LogWarning(ex, \"Request timed out\");\n}",
    "interview": "I catch specific exceptions, log useful context, and avoid hiding failures.",
    "pitfall": "Avoid empty catch blocks and logging sensitive information.",
    "questions": [
      {
        "id": "exceptions-and-logging-1",
        "prompt": "What best describes Exceptions & Logging?",
        "options": [
          "Hiding bugs",
          "Removing validation",
          "Diagnosing failures safely",
          "Making every operation succeed"
        ],
        "correct": 2,
        "explanation": "Exceptions represent unexpected failures; logging records diagnostic events."
      },
      {
        "id": "exceptions-and-logging-2",
        "prompt": "Which statement about Exceptions & Logging is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "Exceptions represent unexpected failures; logging records diagnostic events.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "Catch exceptions where you can handle them meaningfully. Use structured logging, appropriate levels, and never log passwords or secrets."
      },
      {
        "id": "exceptions-and-logging-4",
        "prompt": "Which is a common mistake related to Exceptions & Logging?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Avoid empty catch blocks and logging sensitive information."
        ],
        "correct": 3,
        "explanation": "Avoid empty catch blocks and logging sensitive information."
      },
      {
        "id": "exceptions-and-logging-application",
        "prompt": "Which approach is most appropriate when applying Exceptions & Logging in a project?",
        "options": [
          "I catch specific exceptions, log useful context, and avoid hiding failures.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Catch exceptions where you can handle them meaningfully. Use structured logging, appropriate levels, and never log passwords or secrets."
      }
    ],
    "useCase": "In a real software project, apply exceptions & logging when the situation described in this lesson occurs. Example: Catch exceptions where you can handle them meaningfully. Use structured logging, appropriate levels, and never log passwords or secrets.",
    "avoid": "Do not apply exceptions & logging by default: first evaluate the requirements, complexity and alternatives. Avoid empty catch blocks and logging sensitive information."
  },
  {
    "id": "solid-overview",
    "module": "SOLID & DI",
    "title": "SOLID Overview",
    "minutes": 8,
    "priority": "Core",
    "simple": "SOLID is a set of five design principles for maintainable object-oriented code.",
    "details": "S: single responsibility; O: open/closed; L: Liskov substitution; I: interface segregation; D: dependency inversion. Apply pragmatically, not mechanically.",
    "analogy": "Clear job descriptions prevent one worker from owning everything.",
    "code": "public interface IPriceCalculator { decimal Calculate(Order order); }",
    "interview": "SOLID encourages modularity, testability, and clear responsibilities.",
    "pitfall": "SOLID is guidance, not a requirement to create interfaces for every class.",
    "questions": [
      {
        "id": "solid-overview-1",
        "prompt": "What best describes SOLID Overview?",
        "options": [
          "Azure pricing",
          "Maintainable OO design",
          "Five HTTP verbs",
          "SQL normalization"
        ],
        "correct": 1,
        "explanation": "SOLID is a set of five design principles for maintainable object-oriented code."
      },
      {
        "id": "solid-overview-2",
        "prompt": "Which statement about SOLID Overview is accurate?",
        "options": [
          "SOLID is a set of five design principles for maintainable object-oriented code.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "S: single responsibility; O: open/closed; L: Liskov substitution; I: interface segregation; D: dependency inversion. Apply pragmatically, not mechanically."
      },
      {
        "id": "solid-overview-4",
        "prompt": "Which is a common mistake related to SOLID Overview?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "SOLID is guidance, not a requirement to create interfaces for every class.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "SOLID is guidance, not a requirement to create interfaces for every class."
      },
      {
        "id": "solid-overview-application",
        "prompt": "Which approach is most appropriate when applying SOLID Overview in a project?",
        "options": [
          "SOLID encourages modularity, testability, and clear responsibilities.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "S: single responsibility; O: open/closed; L: Liskov substitution; I: interface segregation; D: dependency inversion. Apply pragmatically, not mechanically."
      }
    ],
    "useCase": "In a real software project, apply solid overview when the situation described in this lesson occurs. Example: S: single responsibility; O: open/closed; L: Liskov substitution; I: interface segregation; D: dependency inversion. Apply pragmatically, not mechanically.",
    "avoid": "Do not apply solid overview by default: first evaluate the requirements, complexity and alternatives. SOLID is guidance, not a requirement to create interfaces for every class."
  },
  {
    "id": "dependency-injection",
    "module": "SOLID & DI",
    "title": "Dependency Injection",
    "minutes": 8,
    "priority": "Core",
    "simple": "Dependency Injection provides a class with dependencies instead of making it construct them.",
    "details": "ASP.NET Core has a built-in container. Register abstractions and implementations, then request them through constructors. DI improves testing and reduces coupling.",
    "analogy": "A chef receives ingredients rather than running a farm.",
    "code": "builder.Services.AddScoped<IMessageSender, EmailSender>();\npublic class Alerts(IMessageSender sender) {\n  public Task Send(string text) => sender.SendAsync(text);\n}",
    "interview": "DI reduces coupling and helps testing. The ASP.NET Core container creates registered services.",
    "pitfall": "DI and the Dependency Inversion Principle are related but not identical.",
    "questions": [
      {
        "id": "dependency-injection-1",
        "prompt": "What best describes Dependency Injection?",
        "options": [
          "Receiving dependencies from outside",
          "Avoiding every constructor",
          "Hiding runtime errors",
          "Making code synchronous"
        ],
        "correct": 0,
        "explanation": "Dependency Injection provides a class with dependencies instead of making it construct them."
      },
      {
        "id": "dependency-injection-2",
        "prompt": "Which statement about Dependency Injection is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Dependency Injection provides a class with dependencies instead of making it construct them."
        ],
        "correct": 3,
        "explanation": "ASP.NET Core has a built-in container. Register abstractions and implementations, then request them through constructors. DI improves testing and reduces coupling."
      },
      {
        "id": "dependency-injection-4",
        "prompt": "Which is a common mistake related to Dependency Injection?",
        "options": [
          "Reviewing a change before merging.",
          "DI and the Dependency Inversion Principle are related but not identical.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "DI and the Dependency Inversion Principle are related but not identical."
      },
      {
        "id": "dependency-injection-application",
        "prompt": "Which approach is most appropriate when applying Dependency Injection in a project?",
        "options": [
          "DI reduces coupling and helps testing. The ASP.NET Core container creates registered services.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "ASP.NET Core has a built-in container. Register abstractions and implementations, then request them through constructors. DI improves testing and reduces coupling."
      }
    ],
    "useCase": "In a real software project, apply dependency injection when the situation described in this lesson occurs. Example: ASP.NET Core has a built-in container. Register abstractions and implementations, then request them through constructors. DI improves testing and reduces coupling.",
    "avoid": "Do not apply dependency injection by default: first evaluate the requirements, complexity and alternatives. DI and the Dependency Inversion Principle are related but not identical."
  },
  {
    "id": "service-lifetimes",
    "module": "SOLID & DI",
    "title": "Service Lifetimes",
    "minutes": 10,
    "priority": "Core",
    "simple": "ASP.NET Core supports transient, scoped, and singleton service lifetimes.",
    "details": "Transient creates a service when requested; scoped normally lasts for one HTTP request; singleton is shared for the application lifetime.",
    "analogy": "Disposable cups, a table reservation, and the restaurant building.",
    "code": "builder.Services.AddTransient<IFormatter, Formatter>();\nbuilder.Services.AddScoped<IOrderService, OrderService>();\nbuilder.Services.AddSingleton<IClock, SystemClock>();",
    "interview": "I choose lifetimes based on state and thread safety. DbContext is normally scoped.",
    "pitfall": "Do not inject a scoped service directly into a singleton.",
    "questions": [
      {
        "id": "service-lifetimes-1",
        "prompt": "What best describes Service Lifetimes?",
        "options": [
          "HTTP response body",
          "Database isolation level",
          "Compiler optimization",
          "Object creation and reuse scope"
        ],
        "correct": 3,
        "explanation": "ASP.NET Core supports transient, scoped, and singleton service lifetimes."
      },
      {
        "id": "service-lifetimes-2",
        "prompt": "Which statement about Service Lifetimes is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "ASP.NET Core supports transient, scoped, and singleton service lifetimes.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "Transient creates a service when requested; scoped normally lasts for one HTTP request; singleton is shared for the application lifetime."
      },
      {
        "id": "service-lifetimes-4",
        "prompt": "Which is a common mistake related to Service Lifetimes?",
        "options": [
          "Do not inject a scoped service directly into a singleton.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Do not inject a scoped service directly into a singleton."
      },
      {
        "id": "service-lifetimes-application",
        "prompt": "Which approach is most appropriate when applying Service Lifetimes in a project?",
        "options": [
          "I choose lifetimes based on state and thread safety. DbContext is normally scoped.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Transient creates a service when requested; scoped normally lasts for one HTTP request; singleton is shared for the application lifetime."
      }
    ],
    "useCase": "In a real software project, apply service lifetimes when the situation described in this lesson occurs. Example: Transient creates a service when requested; scoped normally lasts for one HTTP request; singleton is shared for the application lifetime.",
    "avoid": "Do not apply service lifetimes by default: first evaluate the requirements, complexity and alternatives. Do not inject a scoped service directly into a singleton."
  },
  {
    "id": "http-methods",
    "module": "ASP.NET Core",
    "title": "HTTP Methods",
    "minutes": 8,
    "priority": "Core",
    "simple": "HTTP methods express the intended operation on a resource.",
    "details": "GET reads; POST creates or triggers processing; PUT replaces; PATCH partially updates; DELETE removes. GET, PUT, and DELETE are intended to be idempotent.",
    "analogy": "Reading, adding, replacing, editing, or removing a contact.",
    "code": "[HttpGet(\"{id}\")]\npublic ActionResult<Item> Get(int id) => Ok(new Item(id));",
    "interview": "For creation I typically return 201 Created; for missing resources, 404 Not Found.",
    "pitfall": "POST is not guaranteed idempotent; PUT normally replaces the target representation.",
    "questions": [
      {
        "id": "http-methods-1",
        "prompt": "What best describes HTTP Methods?",
        "options": [
          "C# access modifiers",
          "Service lifetimes",
          "Resource operation semantics",
          "Database table types"
        ],
        "correct": 2,
        "explanation": "HTTP methods express the intended operation on a resource."
      },
      {
        "id": "http-methods-2",
        "prompt": "Which statement about HTTP Methods is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "HTTP methods express the intended operation on a resource.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "GET reads; POST creates or triggers processing; PUT replaces; PATCH partially updates; DELETE removes. GET, PUT, and DELETE are intended to be idempotent."
      },
      {
        "id": "http-methods-4",
        "prompt": "Which is a common mistake related to HTTP Methods?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "POST is not guaranteed idempotent; PUT normally replaces the target representation."
        ],
        "correct": 3,
        "explanation": "POST is not guaranteed idempotent; PUT normally replaces the target representation."
      },
      {
        "id": "http-methods-application",
        "prompt": "Which approach is most appropriate when applying HTTP Methods in a project?",
        "options": [
          "For creation I typically return 201 Created; for missing resources, 404 Not Found.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "GET reads; POST creates or triggers processing; PUT replaces; PATCH partially updates; DELETE removes. GET, PUT, and DELETE are intended to be idempotent."
      }
    ],
    "useCase": "In a real software project, apply http methods when the situation described in this lesson occurs. Example: GET reads; POST creates or triggers processing; PUT replaces; PATCH partially updates; DELETE removes. GET, PUT, and DELETE are intended to be idempotent.",
    "avoid": "Do not apply http methods by default: first evaluate the requirements, complexity and alternatives. POST is not guaranteed idempotent; PUT normally replaces the target representation."
  },
  {
    "id": "http-status-codes",
    "module": "ASP.NET Core",
    "title": "HTTP Status Codes",
    "minutes": 8,
    "priority": "Core",
    "simple": "HTTP status codes tell clients the outcome of a request.",
    "details": "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Server Error.",
    "analogy": "A delivery receipt says accepted, missing, or failed.",
    "code": "return CreatedAtAction(nameof(Get), new { id = item.Id }, item);",
    "interview": "I return 201 when creating a resource and 404 when the requested resource does not exist.",
    "pitfall": "401 and 403 have different meanings.",
    "questions": [
      {
        "id": "http-status-codes-1",
        "prompt": "What best describes HTTP Status Codes?",
        "options": [
          "Compiler target",
          "Request outcome",
          "Dependency lifetime",
          "Query plan"
        ],
        "correct": 1,
        "explanation": "HTTP status codes tell clients the outcome of a request."
      },
      {
        "id": "http-status-codes-2",
        "prompt": "Which statement about HTTP Status Codes is accurate?",
        "options": [
          "HTTP status codes tell clients the outcome of a request.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Server Error."
      },
      {
        "id": "http-status-codes-4",
        "prompt": "Which is a common mistake related to HTTP Status Codes?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "401 and 403 have different meanings.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "401 and 403 have different meanings."
      },
      {
        "id": "http-status-codes-application",
        "prompt": "Which approach is most appropriate when applying HTTP Status Codes in a project?",
        "options": [
          "I return 201 when creating a resource and 404 when the requested resource does not exist.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Server Error."
      }
    ],
    "useCase": "In a real software project, apply http status codes when the situation described in this lesson occurs. Example: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Server Error.",
    "avoid": "Do not apply http status codes by default: first evaluate the requirements, complexity and alternatives. 401 and 403 have different meanings."
  },
  {
    "id": "controllers-and-routing",
    "module": "ASP.NET Core",
    "title": "Controllers & Routing",
    "minutes": 10,
    "priority": "Core",
    "simple": "Controllers map HTTP routes to application actions.",
    "details": "Use attributes such as ApiController, Route, HttpGet and HttpPost. Keep controllers thin and delegate business logic to services.",
    "analogy": "A receptionist routes a request to the right specialist.",
    "code": "[ApiController]\n[Route(\"api/orders\")]\npublic class OrdersController : ControllerBase {\n  [HttpGet] public IActionResult List() => Ok();\n}",
    "interview": "Controllers receive requests, validate inputs, call services, and return HTTP responses.",
    "pitfall": "Avoid putting all business logic in controllers.",
    "questions": [
      {
        "id": "controllers-and-routing-1",
        "prompt": "What best describes Controllers & Routing?",
        "options": [
          "Mapping requests to actions",
          "Replacing SQL indexes",
          "Compiling TypeScript",
          "Creating service workers"
        ],
        "correct": 0,
        "explanation": "Controllers map HTTP routes to application actions."
      },
      {
        "id": "controllers-and-routing-2",
        "prompt": "Which statement about Controllers & Routing is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Controllers map HTTP routes to application actions."
        ],
        "correct": 3,
        "explanation": "Use attributes such as ApiController, Route, HttpGet and HttpPost. Keep controllers thin and delegate business logic to services."
      },
      {
        "id": "controllers-and-routing-4",
        "prompt": "Which is a common mistake related to Controllers & Routing?",
        "options": [
          "Reviewing a change before merging.",
          "Avoid putting all business logic in controllers.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "Avoid putting all business logic in controllers."
      },
      {
        "id": "controllers-and-routing-application",
        "prompt": "Which approach is most appropriate when applying Controllers & Routing in a project?",
        "options": [
          "Controllers receive requests, validate inputs, call services, and return HTTP responses.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Use attributes such as ApiController, Route, HttpGet and HttpPost. Keep controllers thin and delegate business logic to services."
      }
    ],
    "useCase": "In a real software project, apply controllers & routing when the situation described in this lesson occurs. Example: Use attributes such as ApiController, Route, HttpGet and HttpPost. Keep controllers thin and delegate business logic to services.",
    "avoid": "Do not apply controllers & routing by default: first evaluate the requirements, complexity and alternatives. Avoid putting all business logic in controllers."
  },
  {
    "id": "middleware",
    "module": "ASP.NET Core",
    "title": "Middleware",
    "minutes": 8,
    "priority": "Core",
    "simple": "Middleware components form the ASP.NET Core request/response pipeline.",
    "details": "Middleware can handle errors, authentication, routing, authorization, and other cross-cutting concerns. Ordering matters.",
    "analogy": "Airport checkpoints where each station has a distinct role.",
    "code": "app.UseHttpsRedirection();\napp.UseAuthentication();\napp.UseAuthorization();\napp.MapControllers();",
    "interview": "Middleware runs around HTTP requests and responses; the order is important.",
    "pitfall": "Authorization should not run before authentication.",
    "questions": [
      {
        "id": "middleware-1",
        "prompt": "What best describes Middleware?",
        "options": [
          "Class inheritance",
          "SQL joins",
          "Git branching",
          "Request pipeline processing"
        ],
        "correct": 3,
        "explanation": "Middleware components form the ASP.NET Core request/response pipeline."
      },
      {
        "id": "middleware-2",
        "prompt": "Which statement about Middleware is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Middleware components form the ASP.NET Core request/response pipeline.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "Middleware can handle errors, authentication, routing, authorization, and other cross-cutting concerns. Ordering matters."
      },
      {
        "id": "middleware-4",
        "prompt": "Which is a common mistake related to Middleware?",
        "options": [
          "Authorization should not run before authentication.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Authorization should not run before authentication."
      },
      {
        "id": "middleware-application",
        "prompt": "Which approach is most appropriate when applying Middleware in a project?",
        "options": [
          "Middleware runs around HTTP requests and responses; the order is important.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Middleware can handle errors, authentication, routing, authorization, and other cross-cutting concerns. Ordering matters."
      }
    ],
    "useCase": "In a real software project, apply middleware when the situation described in this lesson occurs. Example: Middleware can handle errors, authentication, routing, authorization, and other cross-cutting concerns. Ordering matters.",
    "avoid": "Do not apply middleware by default: first evaluate the requirements, complexity and alternatives. Authorization should not run before authentication."
  },
  {
    "id": "validation-and-dtos",
    "module": "ASP.NET Core",
    "title": "Validation & DTOs",
    "minutes": 8,
    "priority": "Core",
    "simple": "DTOs shape API input/output; validation checks whether input is acceptable.",
    "details": "Avoid exposing database entities directly. Use validation attributes or validators and return useful 400 responses for invalid input.",
    "analogy": "A form collects only the fields needed for one task.",
    "code": "public record CreateOrderDto(\n  [property: Required] string CustomerName);",
    "interview": "I use DTOs to control API contracts and validate input at the boundary.",
    "pitfall": "Never trust client-side validation alone.",
    "questions": [
      {
        "id": "validation-and-dtos-1",
        "prompt": "What best describes Validation & DTOs?",
        "options": [
          "Caching passwords",
          "Creating threads",
          "Safe API contracts",
          "Replacing authentication"
        ],
        "correct": 2,
        "explanation": "DTOs shape API input/output; validation checks whether input is acceptable."
      },
      {
        "id": "validation-and-dtos-2",
        "prompt": "Which statement about Validation & DTOs is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "DTOs shape API input/output; validation checks whether input is acceptable.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "Avoid exposing database entities directly. Use validation attributes or validators and return useful 400 responses for invalid input."
      },
      {
        "id": "validation-and-dtos-4",
        "prompt": "Which is a common mistake related to Validation & DTOs?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Never trust client-side validation alone."
        ],
        "correct": 3,
        "explanation": "Never trust client-side validation alone."
      },
      {
        "id": "validation-and-dtos-application",
        "prompt": "Which approach is most appropriate when applying Validation & DTOs in a project?",
        "options": [
          "I use DTOs to control API contracts and validate input at the boundary.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Avoid exposing database entities directly. Use validation attributes or validators and return useful 400 responses for invalid input."
      }
    ],
    "useCase": "In a real software project, apply validation & dtos when the situation described in this lesson occurs. Example: Avoid exposing database entities directly. Use validation attributes or validators and return useful 400 responses for invalid input.",
    "avoid": "Do not apply validation & dtos by default: first evaluate the requirements, complexity and alternatives. Never trust client-side validation alone."
  },
  {
    "id": "select,-where,-order-by",
    "module": "SQL & T-SQL",
    "title": "SELECT, WHERE, ORDER BY",
    "minutes": 10,
    "priority": "Core",
    "simple": "SELECT chooses columns; WHERE filters rows; ORDER BY sorts results.",
    "details": "Use parameters for user input. Explicit column selection often improves clarity.",
    "analogy": "Choosing products by category and sorting by price.",
    "code": "SELECT Id, Name FROM Customers\nWHERE IsActive = 1 ORDER BY Name;",
    "interview": "I use WHERE to filter rows and ORDER BY to define result ordering.",
    "pitfall": "Do not concatenate untrusted values into SQL strings.",
    "questions": [
      {
        "id": "select,-where,-order-by-1",
        "prompt": "What best describes SELECT, WHERE, ORDER BY?",
        "options": [
          "Testing browser UI",
          "Filtering and sorting rows",
          "Creating an HTTP endpoint",
          "Registering DI"
        ],
        "correct": 1,
        "explanation": "SELECT chooses columns; WHERE filters rows; ORDER BY sorts results."
      },
      {
        "id": "select,-where,-order-by-2",
        "prompt": "Which statement about SELECT, WHERE, ORDER BY is accurate?",
        "options": [
          "SELECT chooses columns; WHERE filters rows; ORDER BY sorts results.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "Use parameters for user input. Explicit column selection often improves clarity."
      },
      {
        "id": "select,-where,-order-by-4",
        "prompt": "Which is a common mistake related to SELECT, WHERE, ORDER BY?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Do not concatenate untrusted values into SQL strings.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "Do not concatenate untrusted values into SQL strings."
      },
      {
        "id": "select,-where,-order-by-application",
        "prompt": "Which approach is most appropriate when applying SELECT, WHERE, ORDER BY in a project?",
        "options": [
          "I use WHERE to filter rows and ORDER BY to define result ordering.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Use parameters for user input. Explicit column selection often improves clarity."
      }
    ],
    "useCase": "In a real software project, apply select, where, order by when the situation described in this lesson occurs. Example: Use parameters for user input. Explicit column selection often improves clarity.",
    "avoid": "Do not apply select, where, order by by default: first evaluate the requirements, complexity and alternatives. Do not concatenate untrusted values into SQL strings."
  },
  {
    "id": "sql-joins",
    "module": "SQL & T-SQL",
    "title": "SQL JOINs",
    "minutes": 8,
    "priority": "Core",
    "simple": "JOINs combine related rows from different tables.",
    "details": "INNER JOIN returns matching rows; LEFT JOIN keeps every row from the left table and adds matches from the right.",
    "analogy": "Matching orders to customers by customer ID.",
    "code": "SELECT c.Name, o.Id\nFROM Customers c\nLEFT JOIN Orders o ON o.CustomerId = c.Id;",
    "interview": "I use LEFT JOIN when I need customers even if they have no orders.",
    "pitfall": "A WHERE condition on the right table can accidentally remove unmatched LEFT JOIN rows.",
    "questions": [
      {
        "id": "sql-joins-1",
        "prompt": "What best describes SQL JOINs?",
        "options": [
          "Combining related tables",
          "Retrying HTTP requests",
          "Creating interfaces",
          "Encrypting data"
        ],
        "correct": 0,
        "explanation": "JOINs combine related rows from different tables."
      },
      {
        "id": "sql-joins-2",
        "prompt": "Which statement about SQL JOINs is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "JOINs combine related rows from different tables."
        ],
        "correct": 3,
        "explanation": "INNER JOIN returns matching rows; LEFT JOIN keeps every row from the left table and adds matches from the right."
      },
      {
        "id": "sql-joins-4",
        "prompt": "Which is a common mistake related to SQL JOINs?",
        "options": [
          "Reviewing a change before merging.",
          "A WHERE condition on the right table can accidentally remove unmatched LEFT JOIN rows.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "A WHERE condition on the right table can accidentally remove unmatched LEFT JOIN rows."
      },
      {
        "id": "sql-joins-application",
        "prompt": "Which approach is most appropriate when applying SQL JOINs in a project?",
        "options": [
          "I use LEFT JOIN when I need customers even if they have no orders.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "INNER JOIN returns matching rows; LEFT JOIN keeps every row from the left table and adds matches from the right."
      }
    ],
    "useCase": "In a real software project, apply sql joins when the situation described in this lesson occurs. Example: INNER JOIN returns matching rows; LEFT JOIN keeps every row from the left table and adds matches from the right.",
    "avoid": "Do not apply sql joins by default: first evaluate the requirements, complexity and alternatives. A WHERE condition on the right table can accidentally remove unmatched LEFT JOIN rows."
  },
  {
    "id": "indexes",
    "module": "SQL & T-SQL",
    "title": "Indexes",
    "minutes": 8,
    "priority": "Core",
    "simple": "An index is a data structure that can speed up lookups and sorting.",
    "details": "Indexes improve reads for suitable queries but cost storage and write overhead. Inspect execution plans before optimizing.",
    "analogy": "A book index helps find topics without reading every page.",
    "code": "CREATE INDEX IX_Orders_CustomerId\nON Orders(CustomerId);",
    "interview": "Indexes can improve query performance, but too many indexes slow writes.",
    "pitfall": "An index is not guaranteed to help every query.",
    "questions": [
      {
        "id": "indexes-1",
        "prompt": "What best describes Indexes?",
        "options": [
          "Preventing every deadlock",
          "Replacing backups",
          "Enabling HTTP caching",
          "Faster selective lookups"
        ],
        "correct": 3,
        "explanation": "An index is a data structure that can speed up lookups and sorting."
      },
      {
        "id": "indexes-2",
        "prompt": "Which statement about Indexes is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "An index is a data structure that can speed up lookups and sorting.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "Indexes improve reads for suitable queries but cost storage and write overhead. Inspect execution plans before optimizing."
      },
      {
        "id": "indexes-4",
        "prompt": "Which is a common mistake related to Indexes?",
        "options": [
          "An index is not guaranteed to help every query.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "An index is not guaranteed to help every query."
      },
      {
        "id": "indexes-application",
        "prompt": "Which approach is most appropriate when applying Indexes in a project?",
        "options": [
          "Indexes can improve query performance, but too many indexes slow writes.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Indexes improve reads for suitable queries but cost storage and write overhead. Inspect execution plans before optimizing."
      }
    ],
    "useCase": "In a real software project, apply indexes when the situation described in this lesson occurs. Example: Indexes improve reads for suitable queries but cost storage and write overhead. Inspect execution plans before optimizing.",
    "avoid": "Do not apply indexes by default: first evaluate the requirements, complexity and alternatives. An index is not guaranteed to help every query."
  },
  {
    "id": "transactions",
    "module": "SQL & T-SQL",
    "title": "Transactions",
    "minutes": 10,
    "priority": "Core",
    "simple": "A transaction groups database operations into an all-or-nothing unit.",
    "details": "ACID means Atomicity, Consistency, Isolation, Durability. Use transactions when multiple writes must succeed or fail together.",
    "analogy": "Moving money requires a debit and credit together.",
    "code": "BEGIN TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 10 WHERE Id = 1;\nUPDATE Accounts SET Balance = Balance + 10 WHERE Id = 2;\nCOMMIT;",
    "interview": "Transactions help preserve consistency across related database changes.",
    "pitfall": "A transaction does not replace validation or concurrency design.",
    "questions": [
      {
        "id": "transactions-1",
        "prompt": "What best describes Transactions?",
        "options": [
          "Styling buttons",
          "Sending notifications",
          "Atomic multi-step updates",
          "Compiling code"
        ],
        "correct": 2,
        "explanation": "A transaction groups database operations into an all-or-nothing unit."
      },
      {
        "id": "transactions-2",
        "prompt": "Which statement about Transactions is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "A transaction groups database operations into an all-or-nothing unit.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "ACID means Atomicity, Consistency, Isolation, Durability. Use transactions when multiple writes must succeed or fail together."
      },
      {
        "id": "transactions-4",
        "prompt": "Which is a common mistake related to Transactions?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "A transaction does not replace validation or concurrency design."
        ],
        "correct": 3,
        "explanation": "A transaction does not replace validation or concurrency design."
      },
      {
        "id": "transactions-application",
        "prompt": "Which approach is most appropriate when applying Transactions in a project?",
        "options": [
          "Transactions help preserve consistency across related database changes.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "ACID means Atomicity, Consistency, Isolation, Durability. Use transactions when multiple writes must succeed or fail together."
      }
    ],
    "useCase": "In a real software project, apply transactions when the situation described in this lesson occurs. Example: ACID means Atomicity, Consistency, Isolation, Durability. Use transactions when multiple writes must succeed or fail together.",
    "avoid": "Do not apply transactions by default: first evaluate the requirements, complexity and alternatives. A transaction does not replace validation or concurrency design."
  },
  {
    "id": "parameterized-queries",
    "module": "SQL & T-SQL",
    "title": "Parameterized Queries",
    "minutes": 8,
    "priority": "Core",
    "simple": "Parameterized queries keep SQL structure separate from user-supplied values.",
    "details": "Parameters prevent user input from becoming executable SQL and can help query plan reuse. Validate inputs as well.",
    "analogy": "Filling blanks on a fixed form rather than rewriting the form.",
    "code": "const string sql = \"SELECT * FROM Users WHERE Id = @Id\";\nvar user = await connection.QueryFirstOrDefaultAsync<User>(sql, new { Id = id });",
    "interview": "I use parameters instead of string concatenation to reduce SQL injection risk.",
    "pitfall": "Parameterization does not replace authorization checks.",
    "questions": [
      {
        "id": "parameterized-queries-1",
        "prompt": "What best describes Parameterized Queries?",
        "options": [
          "Avoiding transactions",
          "Separating SQL from values",
          "Escaping all HTML automatically",
          "Encrypting disk"
        ],
        "correct": 1,
        "explanation": "Parameterized queries keep SQL structure separate from user-supplied values."
      },
      {
        "id": "parameterized-queries-2",
        "prompt": "Which statement about Parameterized Queries is accurate?",
        "options": [
          "Parameterized queries keep SQL structure separate from user-supplied values.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "Parameters prevent user input from becoming executable SQL and can help query plan reuse. Validate inputs as well."
      },
      {
        "id": "parameterized-queries-4",
        "prompt": "Which is a common mistake related to Parameterized Queries?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Parameterization does not replace authorization checks.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "Parameterization does not replace authorization checks."
      },
      {
        "id": "parameterized-queries-application",
        "prompt": "Which approach is most appropriate when applying Parameterized Queries in a project?",
        "options": [
          "I use parameters instead of string concatenation to reduce SQL injection risk.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Parameters prevent user input from becoming executable SQL and can help query plan reuse. Validate inputs as well."
      }
    ],
    "useCase": "In a real software project, apply parameterized queries when the situation described in this lesson occurs. Example: Parameters prevent user input from becoming executable SQL and can help query plan reuse. Validate inputs as well.",
    "avoid": "Do not apply parameterized queries by default: first evaluate the requirements, complexity and alternatives. Parameterization does not replace authorization checks."
  },
  {
    "id": "dapper",
    "module": "Data Access",
    "title": "Dapper",
    "minutes": 8,
    "priority": "Core",
    "simple": "Dapper is a lightweight object mapper for .NET.",
    "details": "It maps query results to C# objects while you write SQL explicitly. Useful for controlled queries and performance-sensitive access patterns.",
    "analogy": "A translator turns rows into C# objects without writing the SQL for you.",
    "code": "var orders = await connection.QueryAsync<Order>(\n  \"SELECT Id, Total FROM Orders WHERE Total > @Min\",\n  new { Min = 100 });",
    "interview": "Dapper maps SQL query results to .NET objects while keeping SQL under developer control.",
    "pitfall": "Dapper is not a full change-tracking ORM like EF Core.",
    "questions": [
      {
        "id": "dapper-1",
        "prompt": "What best describes Dapper?",
        "options": [
          "Mapping manual SQL results",
          "Generating UI components",
          "Replacing Git",
          "Running Selenium tests"
        ],
        "correct": 0,
        "explanation": "Dapper is a lightweight object mapper for .NET."
      },
      {
        "id": "dapper-2",
        "prompt": "Which statement about Dapper is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Dapper is a lightweight object mapper for .NET."
        ],
        "correct": 3,
        "explanation": "It maps query results to C# objects while you write SQL explicitly. Useful for controlled queries and performance-sensitive access patterns."
      },
      {
        "id": "dapper-4",
        "prompt": "Which is a common mistake related to Dapper?",
        "options": [
          "Reviewing a change before merging.",
          "Dapper is not a full change-tracking ORM like EF Core.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "Dapper is not a full change-tracking ORM like EF Core."
      },
      {
        "id": "dapper-application",
        "prompt": "Which approach is most appropriate when applying Dapper in a project?",
        "options": [
          "Dapper maps SQL query results to .NET objects while keeping SQL under developer control.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "It maps query results to C# objects while you write SQL explicitly. Useful for controlled queries and performance-sensitive access patterns."
      }
    ],
    "useCase": "In a real software project, apply dapper when the situation described in this lesson occurs. Example: It maps query results to C# objects while you write SQL explicitly. Useful for controlled queries and performance-sensitive access patterns.",
    "avoid": "Do not apply dapper by default: first evaluate the requirements, complexity and alternatives. Dapper is not a full change-tracking ORM like EF Core."
  },
  {
    "id": "entity-framework-core",
    "module": "Data Access",
    "title": "Entity Framework Core",
    "minutes": 10,
    "priority": "Core",
    "simple": "EF Core is an ORM that maps .NET objects to relational data.",
    "details": "DbContext tracks entities, translates LINQ to SQL, and can manage migrations. Consider AsNoTracking for read-only queries.",
    "analogy": "A librarian manages both the catalog and updates for you.",
    "code": "var orders = await db.Orders\n  .AsNoTracking()\n  .Where(x => x.Total > 100)\n  .ToListAsync();",
    "interview": "EF Core reduces repetitive data-access code and supports LINQ queries.",
    "pitfall": "Watch for N+1 queries and unintended tracking.",
    "questions": [
      {
        "id": "entity-framework-core-1",
        "prompt": "What best describes Entity Framework Core?",
        "options": [
          "A browser test runner",
          "A CI service",
          "A CSS framework",
          "ORM with change tracking"
        ],
        "correct": 3,
        "explanation": "EF Core is an ORM that maps .NET objects to relational data."
      },
      {
        "id": "entity-framework-core-2",
        "prompt": "Which statement about Entity Framework Core is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "EF Core is an ORM that maps .NET objects to relational data.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "DbContext tracks entities, translates LINQ to SQL, and can manage migrations. Consider AsNoTracking for read-only queries."
      },
      {
        "id": "entity-framework-core-4",
        "prompt": "Which is a common mistake related to Entity Framework Core?",
        "options": [
          "Watch for N+1 queries and unintended tracking.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Watch for N+1 queries and unintended tracking."
      },
      {
        "id": "entity-framework-core-application",
        "prompt": "Which approach is most appropriate when applying Entity Framework Core in a project?",
        "options": [
          "EF Core reduces repetitive data-access code and supports LINQ queries.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "DbContext tracks entities, translates LINQ to SQL, and can manage migrations. Consider AsNoTracking for read-only queries."
      }
    ],
    "useCase": "In a real software project, apply entity framework core when the situation described in this lesson occurs. Example: DbContext tracks entities, translates LINQ to SQL, and can manage migrations. Consider AsNoTracking for read-only queries.",
    "avoid": "Do not apply entity framework core by default: first evaluate the requirements, complexity and alternatives. Watch for N+1 queries and unintended tracking."
  },
  {
    "id": "unit-tests-with-nunit",
    "module": "Testing",
    "title": "Unit Tests with NUnit",
    "minutes": 8,
    "priority": "Important",
    "simple": "A unit test checks a small behavior in isolation.",
    "details": "NUnit uses attributes such as Test and assertions to verify expected behavior. Tests should be deterministic and readable.",
    "analogy": "Checking one Lego brick before assembling the model.",
    "code": "[Test]\npublic void Add_TwoNumbers_ReturnsSum() {\n  Assert.That(2 + 3, Is.EqualTo(5));\n}",
    "interview": "I write unit tests for business rules and edge cases to catch regressions early.",
    "pitfall": "Avoid relying on external network or current time in unit tests.",
    "questions": [
      {
        "id": "unit-tests-with-nunit-1",
        "prompt": "What best describes Unit Tests with NUnit?",
        "options": [
          "Querying SQL indexes",
          "Handling CSS",
          "Testing isolated behavior",
          "Deploying production"
        ],
        "correct": 2,
        "explanation": "A unit test checks a small behavior in isolation."
      },
      {
        "id": "unit-tests-with-nunit-2",
        "prompt": "Which statement about Unit Tests with NUnit is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "A unit test checks a small behavior in isolation.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "NUnit uses attributes such as Test and assertions to verify expected behavior. Tests should be deterministic and readable."
      },
      {
        "id": "unit-tests-with-nunit-4",
        "prompt": "Which is a common mistake related to Unit Tests with NUnit?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Avoid relying on external network or current time in unit tests."
        ],
        "correct": 3,
        "explanation": "Avoid relying on external network or current time in unit tests."
      },
      {
        "id": "unit-tests-with-nunit-application",
        "prompt": "Which approach is most appropriate when applying Unit Tests with NUnit in a project?",
        "options": [
          "I write unit tests for business rules and edge cases to catch regressions early.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "NUnit uses attributes such as Test and assertions to verify expected behavior. Tests should be deterministic and readable."
      }
    ],
    "useCase": "In a real software project, apply unit tests with nunit when the situation described in this lesson occurs. Example: NUnit uses attributes such as Test and assertions to verify expected behavior. Tests should be deterministic and readable.",
    "avoid": "Do not apply unit tests with nunit by default: first evaluate the requirements, complexity and alternatives. Avoid relying on external network or current time in unit tests."
  },
  {
    "id": "mocking-dependencies",
    "module": "Testing",
    "title": "Mocking Dependencies",
    "minutes": 8,
    "priority": "Important",
    "simple": "Mocks and fakes replace dependencies during tests.",
    "details": "They let you control behavior and verify interactions without hitting real external services. Test outcomes rather than implementation details where possible.",
    "analogy": "A flight simulator replaces the real aircraft during training.",
    "code": "var sender = new FakeSender();\nvar service = new Alerts(sender);\nawait service.Send(\"Hi\");\nAssert.That(sender.Sent, Is.True);",
    "interview": "Mocking lets me test service logic without sending real emails or calling external APIs.",
    "pitfall": "Excessive mocking can make tests brittle.",
    "questions": [
      {
        "id": "mocking-dependencies-1",
        "prompt": "What best describes Mocking Dependencies?",
        "options": [
          "Avoiding interfaces",
          "Replacing external collaborators",
          "Converting SQL to LINQ",
          "Increasing HTTP latency"
        ],
        "correct": 1,
        "explanation": "Mocks and fakes replace dependencies during tests."
      },
      {
        "id": "mocking-dependencies-2",
        "prompt": "Which statement about Mocking Dependencies is accurate?",
        "options": [
          "Mocks and fakes replace dependencies during tests.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "They let you control behavior and verify interactions without hitting real external services. Test outcomes rather than implementation details where possible."
      },
      {
        "id": "mocking-dependencies-4",
        "prompt": "Which is a common mistake related to Mocking Dependencies?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Excessive mocking can make tests brittle.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "Excessive mocking can make tests brittle."
      },
      {
        "id": "mocking-dependencies-application",
        "prompt": "Which approach is most appropriate when applying Mocking Dependencies in a project?",
        "options": [
          "Mocking lets me test service logic without sending real emails or calling external APIs.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "They let you control behavior and verify interactions without hitting real external services. Test outcomes rather than implementation details where possible."
      }
    ],
    "useCase": "In a real software project, apply mocking dependencies when the situation described in this lesson occurs. Example: They let you control behavior and verify interactions without hitting real external services. Test outcomes rather than implementation details where possible.",
    "avoid": "Do not apply mocking dependencies by default: first evaluate the requirements, complexity and alternatives. Excessive mocking can make tests brittle."
  },
  {
    "id": "selenium-and-ui-testing",
    "module": "Testing",
    "title": "Selenium & UI Testing",
    "minutes": 10,
    "priority": "Important",
    "simple": "Selenium automates interactions with a web browser.",
    "details": "Use it for end-to-end browser workflows, not every small business rule. Prefer stable selectors and wait for conditions rather than fixed sleeps.",
    "analogy": "A robot follows the same steps as a real website user.",
    "code": "driver.Navigate().GoToUrl(baseUrl);\ndriver.FindElement(By.Id(\"login\")).Click();",
    "interview": "Selenium tests user-facing browser flows; NUnit can run the test cases.",
    "pitfall": "UI tests are slower and more fragile than unit tests.",
    "questions": [
      {
        "id": "selenium-and-ui-testing-1",
        "prompt": "What best describes Selenium & UI Testing?",
        "options": [
          "Browser automation",
          "SQL migrations",
          "Dependency registration",
          "Object serialization"
        ],
        "correct": 0,
        "explanation": "Selenium automates interactions with a web browser."
      },
      {
        "id": "selenium-and-ui-testing-2",
        "prompt": "Which statement about Selenium & UI Testing is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Selenium automates interactions with a web browser."
        ],
        "correct": 3,
        "explanation": "Use it for end-to-end browser workflows, not every small business rule. Prefer stable selectors and wait for conditions rather than fixed sleeps."
      },
      {
        "id": "selenium-and-ui-testing-4",
        "prompt": "Which is a common mistake related to Selenium & UI Testing?",
        "options": [
          "Reviewing a change before merging.",
          "UI tests are slower and more fragile than unit tests.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "UI tests are slower and more fragile than unit tests."
      },
      {
        "id": "selenium-and-ui-testing-application",
        "prompt": "Which approach is most appropriate when applying Selenium & UI Testing in a project?",
        "options": [
          "Selenium tests user-facing browser flows; NUnit can run the test cases.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Use it for end-to-end browser workflows, not every small business rule. Prefer stable selectors and wait for conditions rather than fixed sleeps."
      }
    ],
    "useCase": "In a real software project, apply selenium & ui testing when the situation described in this lesson occurs. Example: Use it for end-to-end browser workflows, not every small business rule. Prefer stable selectors and wait for conditions rather than fixed sleeps.",
    "avoid": "Do not apply selenium & ui testing by default: first evaluate the requirements, complexity and alternatives. UI tests are slower and more fragile than unit tests."
  },
  {
    "id": "git-workflow",
    "module": "DevOps",
    "title": "Git Workflow",
    "minutes": 8,
    "priority": "Important",
    "simple": "Git tracks code changes and supports collaborative development.",
    "details": "Typical workflow: create a branch, commit small changes, open a pull request, review, and merge.",
    "analogy": "A history of drafts with safe checkpoints.",
    "code": "git checkout -b feature/alerts\ngit add .\ngit commit -m \"Add alerts\"\ngit push -u origin feature/alerts",
    "interview": "I use feature branches and pull requests to keep changes reviewable.",
    "pitfall": "Never commit secrets or credentials.",
    "questions": [
      {
        "id": "git-workflow-1",
        "prompt": "What best describes Git Workflow?",
        "options": [
          "SQL query execution",
          "HTTP routing",
          "C# reflection",
          "Version control collaboration"
        ],
        "correct": 3,
        "explanation": "Git tracks code changes and supports collaborative development."
      },
      {
        "id": "git-workflow-2",
        "prompt": "Which statement about Git Workflow is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Git tracks code changes and supports collaborative development.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "Typical workflow: create a branch, commit small changes, open a pull request, review, and merge."
      },
      {
        "id": "git-workflow-4",
        "prompt": "Which is a common mistake related to Git Workflow?",
        "options": [
          "Never commit secrets or credentials.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Never commit secrets or credentials."
      },
      {
        "id": "git-workflow-application",
        "prompt": "Which approach is most appropriate when applying Git Workflow in a project?",
        "options": [
          "I use feature branches and pull requests to keep changes reviewable.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Typical workflow: create a branch, commit small changes, open a pull request, review, and merge."
      }
    ],
    "useCase": "In a real software project, apply git workflow when the situation described in this lesson occurs. Example: Typical workflow: create a branch, commit small changes, open a pull request, review, and merge.",
    "avoid": "Do not apply git workflow by default: first evaluate the requirements, complexity and alternatives. Never commit secrets or credentials."
  },
  {
    "id": "ci-cd-and-azure-devops",
    "module": "DevOps",
    "title": "CI/CD & Azure DevOps",
    "minutes": 8,
    "priority": "Important",
    "simple": "CI automatically builds and tests changes; CD automates delivery or deployment.",
    "details": "Azure DevOps provides pipelines, repositories, boards, and artifacts. A pipeline can restore, build, test, and publish a .NET application.",
    "analogy": "An assembly line checks each product before shipping.",
    "code": "steps:\n- script: dotnet restore\n- script: dotnet build --no-restore\n- script: dotnet test --no-build",
    "interview": "CI/CD reduces manual deployment mistakes and catches regressions early.",
    "pitfall": "A green pipeline does not guarantee bug-free software.",
    "questions": [
      {
        "id": "ci-cd-and-azure-devops-1",
        "prompt": "What best describes CI/CD & Azure DevOps?",
        "options": [
          "SQL constraint",
          "An HTTP method",
          "Automated build/test/deploy",
          "A C# collection"
        ],
        "correct": 2,
        "explanation": "CI automatically builds and tests changes; CD automates delivery or deployment."
      },
      {
        "id": "ci-cd-and-azure-devops-2",
        "prompt": "Which statement about CI/CD & Azure DevOps is accurate?",
        "options": [
          "It is only useful in frontend code.",
          "CI automatically builds and tests changes; CD automates delivery or deployment.",
          "It always makes code run faster.",
          "It removes the need for testing."
        ],
        "correct": 1,
        "explanation": "Azure DevOps provides pipelines, repositories, boards, and artifacts. A pipeline can restore, build, test, and publish a .NET application."
      },
      {
        "id": "ci-cd-and-azure-devops-4",
        "prompt": "Which is a common mistake related to CI/CD & Azure DevOps?",
        "options": [
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "A green pipeline does not guarantee bug-free software."
        ],
        "correct": 3,
        "explanation": "A green pipeline does not guarantee bug-free software."
      },
      {
        "id": "ci-cd-and-azure-devops-application",
        "prompt": "Which approach is most appropriate when applying CI/CD & Azure DevOps in a project?",
        "options": [
          "CI/CD reduces manual deployment mistakes and catches regressions early.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Azure DevOps provides pipelines, repositories, boards, and artifacts. A pipeline can restore, build, test, and publish a .NET application."
      }
    ],
    "useCase": "In a real software project, apply ci/cd & azure devops when the situation described in this lesson occurs. Example: Azure DevOps provides pipelines, repositories, boards, and artifacts. A pipeline can restore, build, test, and publish a .NET application.",
    "avoid": "Do not apply ci/cd & azure devops by default: first evaluate the requirements, complexity and alternatives. A green pipeline does not guarantee bug-free software."
  },
  {
    "id": "idempotency-and-retries",
    "module": "Automation & Risk",
    "title": "Idempotency & Retries",
    "minutes": 10,
    "priority": "Important",
    "simple": "An idempotent operation can be repeated without changing the final intended result.",
    "details": "Retries help with transient failures but need backoff, timeouts, and duplicate protection. Avoid blindly retrying non-idempotent operations.",
    "analogy": "Pressing an elevator button twice should not create two elevators.",
    "code": "// Example: use an idempotency key when retrying a payment request.\nrequest.Headers.Add(\"Idempotency-Key\", operationId);",
    "interview": "For reliable automation, I use timeouts, bounded retries, logging, and idempotency where needed.",
    "pitfall": "Never retry forever or duplicate payments accidentally.",
    "questions": [
      {
        "id": "idempotency-and-retries-1",
        "prompt": "What best describes Idempotency & Retries?",
        "options": [
          "Replacing authorization",
          "Safe repeated operations",
          "Always creating a new record",
          "Avoiding monitoring"
        ],
        "correct": 1,
        "explanation": "An idempotent operation can be repeated without changing the final intended result."
      },
      {
        "id": "idempotency-and-retries-2",
        "prompt": "Which statement about Idempotency & Retries is accurate?",
        "options": [
          "An idempotent operation can be repeated without changing the final intended result.",
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code."
        ],
        "correct": 0,
        "explanation": "Retries help with transient failures but need backoff, timeouts, and duplicate protection. Avoid blindly retrying non-idempotent operations."
      },
      {
        "id": "idempotency-and-retries-4",
        "prompt": "Which is a common mistake related to Idempotency & Retries?",
        "options": [
          "Explaining trade-offs.",
          "Reviewing a change before merging.",
          "Never retry forever or duplicate payments accidentally.",
          "Writing a clear test case."
        ],
        "correct": 2,
        "explanation": "Never retry forever or duplicate payments accidentally."
      },
      {
        "id": "idempotency-and-retries-application",
        "prompt": "Which approach is most appropriate when applying Idempotency & Retries in a project?",
        "options": [
          "For reliable automation, I use timeouts, bounded retries, logging, and idempotency where needed.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Retries help with transient failures but need backoff, timeouts, and duplicate protection. Avoid blindly retrying non-idempotent operations."
      }
    ],
    "useCase": "In a real software project, apply idempotency & retries when the situation described in this lesson occurs. Example: Retries help with transient failures but need backoff, timeouts, and duplicate protection. Avoid blindly retrying non-idempotent operations.",
    "avoid": "Do not apply idempotency & retries by default: first evaluate the requirements, complexity and alternatives. Never retry forever or duplicate payments accidentally."
  },
  {
    "id": "security-and-least-privilege",
    "module": "Automation & Risk",
    "title": "Security & Least Privilege",
    "minutes": 8,
    "priority": "Important",
    "simple": "Least privilege gives users and services only the permissions they need.",
    "details": "Validate input, authorize each operation, store secrets securely, and avoid leaking sensitive data in logs or error responses.",
    "analogy": "A staff badge opens only the doors required for the job.",
    "code": "[Authorize(Roles = \"Analyst\")]\n[HttpGet(\"risk-report\")]\npublic IActionResult Report() => Ok();",
    "interview": "In risk-related systems, I prioritize access control, auditability, and safe error handling.",
    "pitfall": "Authentication is not the same as authorization.",
    "questions": [
      {
        "id": "security-and-least-privilege-1",
        "prompt": "What best describes Security & Least Privilege?",
        "options": [
          "Minimal necessary permissions",
          "Making all users administrators",
          "Logging passwords",
          "Disabling validation"
        ],
        "correct": 0,
        "explanation": "Least privilege gives users and services only the permissions they need."
      },
      {
        "id": "security-and-least-privilege-2",
        "prompt": "Which statement about Security & Least Privilege is accurate?",
        "options": [
          "It always makes code run faster.",
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "Least privilege gives users and services only the permissions they need."
        ],
        "correct": 3,
        "explanation": "Validate input, authorize each operation, store secrets securely, and avoid leaking sensitive data in logs or error responses."
      },
      {
        "id": "security-and-least-privilege-4",
        "prompt": "Which is a common mistake related to Security & Least Privilege?",
        "options": [
          "Reviewing a change before merging.",
          "Authentication is not the same as authorization.",
          "Writing a clear test case.",
          "Explaining trade-offs."
        ],
        "correct": 1,
        "explanation": "Authentication is not the same as authorization."
      },
      {
        "id": "security-and-least-privilege-application",
        "prompt": "Which approach is most appropriate when applying Security & Least Privilege in a project?",
        "options": [
          "In risk-related systems, I prioritize access control, auditability, and safe error handling.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Validate input, authorize each operation, store secrets securely, and avoid leaking sensitive data in logs or error responses."
      }
    ],
    "useCase": "In a real software project, apply security & least privilege when the situation described in this lesson occurs. Example: Validate input, authorize each operation, store secrets securely, and avoid leaking sensitive data in logs or error responses.",
    "avoid": "Do not apply security & least privilege by default: first evaluate the requirements, complexity and alternatives. Authentication is not the same as authorization."
  },
  {
    "id": "clear-technical-answers",
    "module": "Interview English",
    "title": "Clear Technical Answers",
    "minutes": 8,
    "priority": "Important",
    "simple": "A strong interview answer defines a concept, explains its benefit, and gives an example.",
    "details": "Use simple accurate sentences. If unsure, state what you know, reason aloud, and avoid inventing experience.",
    "analogy": "A three-part bridge from concept to evidence.",
    "code": "// Answer structure:\n// 1. What it is\n// 2. Why it matters\n// 3. A practical example",
    "interview": "I have not used that tool professionally yet, but I understand its purpose and can explain how I would learn it.",
    "pitfall": "Avoid long unstructured sentences and unsupported claims.",
    "questions": [
      {
        "id": "clear-technical-answers-1",
        "prompt": "What best describes Clear Technical Answers?",
        "options": [
          "Memorizing jargon only",
          "Guessing confidently",
          "Changing the subject",
          "Definition → benefit → example"
        ],
        "correct": 3,
        "explanation": "A strong interview answer defines a concept, explains its benefit, and gives an example."
      },
      {
        "id": "clear-technical-answers-2",
        "prompt": "Which statement about Clear Technical Answers is accurate?",
        "options": [
          "It removes the need for testing.",
          "It is only useful in frontend code.",
          "A strong interview answer defines a concept, explains its benefit, and gives an example.",
          "It always makes code run faster."
        ],
        "correct": 2,
        "explanation": "Use simple accurate sentences. If unsure, state what you know, reason aloud, and avoid inventing experience."
      },
      {
        "id": "clear-technical-answers-4",
        "prompt": "Which is a common mistake related to Clear Technical Answers?",
        "options": [
          "Avoid long unstructured sentences and unsupported claims.",
          "Writing a clear test case.",
          "Explaining trade-offs.",
          "Reviewing a change before merging."
        ],
        "correct": 0,
        "explanation": "Avoid long unstructured sentences and unsupported claims."
      },
      {
        "id": "clear-technical-answers-application",
        "prompt": "Which approach is most appropriate when applying Clear Technical Answers in a project?",
        "options": [
          "I have not used that tool professionally yet, but I understand its purpose and can explain how I would learn it.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Use simple accurate sentences. If unsure, state what you know, reason aloud, and avoid inventing experience."
      }
    ],
    "useCase": "In a real software project, apply clear technical answers when the situation described in this lesson occurs. Example: Use simple accurate sentences. If unsure, state what you know, reason aloud, and avoid inventing experience.",
    "avoid": "Do not apply clear technical answers by default: first evaluate the requirements, complexity and alternatives. Avoid long unstructured sentences and unsupported claims."
  },
  {
    "id": "security",
    "module": "Security",
    "title": "Authentication vs Authorization",
    "minutes": 9,
    "priority": "Important",
    "simple": "Authentication verifies identity; authorization checks permissions.",
    "details": "Protect endpoints with identity verification and role/policy checks.",
    "analogy": "A building badge identifies you, but a room key grants access.",
    "code": "[Authorize(Policy = \"CanEditOrders\")]",
    "interview": "Authentication answers who you are; authorization answers what you can do.",
    "pitfall": "Do not assume authenticated users can access every resource.",
    "questions": [
      {
        "id": "security-application",
        "prompt": "Which approach is most appropriate when applying Authentication vs Authorization in a project?",
        "options": [
          "Authentication answers who you are; authorization answers what you can do.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Protect endpoints with identity verification and role/policy checks."
      }
    ],
    "useCase": "In a real software project, apply authentication vs authorization when the situation described in this lesson occurs. Example: Protect endpoints with identity verification and role/policy checks.",
    "avoid": "Do not apply authentication vs authorization by default: first evaluate the requirements, complexity and alternatives. Do not assume authenticated users can access every resource."
  },
  {
    "id": "algorithms",
    "module": "Algorithms",
    "title": "Big O and Data Structures",
    "minutes": 9,
    "priority": "Important",
    "simple": "Big O describes how resource use grows as input size grows.",
    "details": "Understand O(1), O(log n), O(n), O(n log n), and O(n²).",
    "analogy": "Searching one drawer differs from checking every drawer.",
    "code": "var exists = values.Contains(target);",
    "interview": "I compare complexity and choose structures based on expected operations.",
    "pitfall": "Measure actual performance too; Big O is not the whole story.",
    "questions": [
      {
        "id": "algorithms-application",
        "prompt": "Which approach is most appropriate when applying Big O and Data Structures in a project?",
        "options": [
          "I compare complexity and choose structures based on expected operations.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Understand O(1), O(log n), O(n), O(n log n), and O(n²)."
      }
    ],
    "useCase": "In a real software project, apply big o and data structures when the situation described in this lesson occurs. Example: Understand O(1), O(log n), O(n), O(n log n), and O(n²).",
    "avoid": "Do not apply big o and data structures by default: first evaluate the requirements, complexity and alternatives. Measure actual performance too; Big O is not the whole story."
  },
  {
    "id": "architecture",
    "module": "Architecture",
    "title": "Layered Architecture",
    "minutes": 9,
    "priority": "Important",
    "simple": "Separate responsibilities into clear application layers.",
    "details": "Keep HTTP concerns away from business rules and persistence details.",
    "analogy": "A restaurant separates waiter, chef, and supplier.",
    "code": "public class OrdersController(OrderService service) { }",
    "interview": "I keep controllers thin and business logic testable.",
    "pitfall": "Avoid creating layers with no clear responsibility.",
    "questions": [
      {
        "id": "architecture-application",
        "prompt": "Which approach is most appropriate when applying Layered Architecture in a project?",
        "options": [
          "I keep controllers thin and business logic testable.",
          "Use it everywhere regardless of requirements.",
          "Avoid reviewing trade-offs or writing tests.",
          "Assume the concept eliminates all software bugs."
        ],
        "correct": 0,
        "explanation": "Keep HTTP concerns away from business rules and persistence details."
      }
    ],
    "useCase": "In a real software project, apply layered architecture when the situation described in this lesson occurs. Example: Keep HTTP concerns away from business rules and persistence details.",
    "avoid": "Do not apply layered architecture by default: first evaluate the requirements, complexity and alternatives. Avoid creating layers with no clear responsibility."
  }
];
