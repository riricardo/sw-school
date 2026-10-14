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
        "id": "interfaces-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "An interface defines a contract. I use it to depend on behavior rather than a concrete class.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "interfaces-5",
        "prompt": "Which analogy helps explain Interfaces?",
        "options": [
          "A universal charging port defines what fits, not how electricity is produced.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-1",
        "prompt": "What is the output of `int x = 5; Console.WriteLine(x++);`?",
        "options": [
          "5",
          "6",
          "4",
          "Compiler error"
        ],
        "correct": 0,
        "explanation": "Post-increment returns the original value, then increments x."
      }
    ]
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
        "id": "abstract-classes-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "I choose an abstract class when closely related types need shared implementation or state.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "abstract-classes-5",
        "prompt": "Which analogy helps explain Abstract classes?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A partially assembled template that specialized models complete."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-2",
        "prompt": "Which keyword ensures a nullable reference warning is handled when a value may be missing?",
        "options": [
          "?.",
          "lock",
          "sealed",
          "override"
        ],
        "correct": 0,
        "explanation": "The null-conditional operator ?. safely accesses members when the reference may be null."
      }
    ]
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
        "id": "encapsulation-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "Encapsulation helps keep objects valid by controlling how their state changes.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "encapsulation-5",
        "prompt": "Which analogy helps explain Encapsulation?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "An ATM lets you withdraw without accessing its internal vault.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-3",
        "prompt": "What does `await` do in an async method?",
        "options": [
          "Suspends the method until the awaited operation completes without blocking its caller thread",
          "Starts a new thread every time",
          "Makes all code parallel",
          "Blocks the UI thread"
        ],
        "correct": 0,
        "explanation": "Await yields control while the task is incomplete; it does not inherently create a thread."
      }
    ]
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
        "id": "polymorphism-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "Polymorphism lets callers use a common contract while implementations vary."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "polymorphism-5",
        "prompt": "Which analogy helps explain Polymorphism?",
        "options": [
          "A system that requires no human decisions.",
          "The same play button works with different media players.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-4",
        "prompt": "What is the key difference between IEnumerable<T> and List<T>?",
        "options": [
          "IEnumerable<T> is an iteration abstraction; List<T> is a concrete collection",
          "Both are database tables",
          "List<T> is always lazy",
          "IEnumerable<T> cannot be used with LINQ"
        ],
        "correct": 0,
        "explanation": "IEnumerable<T> describes enumeration; List<T> provides storage and operations."
      }
    ]
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
        "id": "collections-and-linq-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "LINQ helps express data transformations clearly. I avoid unnecessary repeated enumeration.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "collections-and-linq-5",
        "prompt": "Which analogy helps explain Collections & LINQ?",
        "options": [
          "A library catalog that can be filtered and grouped.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-5",
        "prompt": "What is the result of `new[] {1,2,3}.Where(x => x > 1).Count()`?",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "correct": 0,
        "explanation": "The filter returns 2 and 3."
      }
    ]
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
        "id": "async---await-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "Async/await is especially useful for I/O-bound operations like HTTP and database calls.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "async---await-5",
        "prompt": "Which analogy helps explain Async / Await?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "You place an order and do something else while it is prepared."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-6",
        "prompt": "When should you use `using` with IDisposable?",
        "options": [
          "To release resources deterministically",
          "To import only JSON",
          "To make a class static",
          "To force garbage collection"
        ],
        "correct": 0,
        "explanation": "using disposes an IDisposable at scope exit, even when exceptions occur."
      }
    ]
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
        "id": "exceptions-and-logging-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I catch specific exceptions, log useful context, and avoid hiding failures.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "exceptions-and-logging-5",
        "prompt": "Which analogy helps explain Exceptions & Logging?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A fire alarm reports an incident; an incident log records context.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-7",
        "prompt": "What does a `sealed` class prevent?",
        "options": [
          "Inheritance from that class",
          "Instantiating the class",
          "Calling methods",
          "Using interfaces"
        ],
        "correct": 0,
        "explanation": "A sealed class cannot be used as a base class."
      }
    ]
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
        "id": "solid-overview-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "SOLID encourages modularity, testability, and clear responsibilities."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "solid-overview-5",
        "prompt": "Which analogy helps explain SOLID Overview?",
        "options": [
          "A system that requires no human decisions.",
          "Clear job descriptions prevent one worker from owning everything.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-10",
        "prompt": "Which SOLID principle says a class should have one reason to change?",
        "options": [
          "Single Responsibility",
          "Open/Closed",
          "Liskov Substitution",
          "Interface Segregation"
        ],
        "correct": 0,
        "explanation": "SRP encourages cohesive responsibilities."
      }
    ]
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
        "id": "dependency-injection-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "DI reduces coupling and helps testing. The ASP.NET Core container creates registered services.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "dependency-injection-5",
        "prompt": "Which analogy helps explain Dependency Injection?",
        "options": [
          "A chef receives ingredients rather than running a farm.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-8",
        "prompt": "Which lifetime creates one service instance per HTTP request in ASP.NET Core?",
        "options": [
          "Scoped",
          "Singleton",
          "Transient",
          "Static"
        ],
        "correct": 0,
        "explanation": "Scoped services are created once per request scope."
      },
      {
        "id": "challenge-11",
        "prompt": "A service creates `new EmailSender()` internally. What is the main testing drawback?",
        "options": [
          "Harder to replace EmailSender with a fake",
          "It always leaks memory",
          "It makes email asynchronous",
          "It cannot compile"
        ],
        "correct": 0,
        "explanation": "Direct construction tightly couples the service to a concrete implementation."
      }
    ]
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
        "id": "service-lifetimes-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "I choose lifetimes based on state and thread safety. DbContext is normally scoped.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "service-lifetimes-5",
        "prompt": "Which analogy helps explain Service Lifetimes?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "Disposable cups, a table reservation, and the restaurant building."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-9",
        "prompt": "Why is injecting a scoped DbContext into a singleton dangerous?",
        "options": [
          "The singleton can capture a scoped instance beyond its intended lifetime",
          "It always causes a compiler error",
          "It improves concurrency",
          "It disables EF Core"
        ],
        "correct": 0,
        "explanation": "Lifetime mismatches can cause stale state and concurrency bugs; scope validation can detect them."
      }
    ]
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
        "id": "http-methods-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "For creation I typically return 201 Created; for missing resources, 404 Not Found.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "http-methods-5",
        "prompt": "Which analogy helps explain HTTP Methods?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "Reading, adding, replacing, editing, or removing a contact.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-16",
        "prompt": "What is middleware in ASP.NET Core?",
        "options": [
          "A component in the HTTP request/response pipeline",
          "A database migration",
          "A C# compiler switch",
          "A UI framework"
        ],
        "correct": 0,
        "explanation": "Middleware processes requests and may invoke the next component."
      }
    ]
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
        "id": "http-status-codes-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "I return 201 when creating a resource and 404 when the requested resource does not exist."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "http-status-codes-5",
        "prompt": "Which analogy helps explain HTTP Status Codes?",
        "options": [
          "A system that requires no human decisions.",
          "A delivery receipt says accepted, missing, or failed.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-12",
        "prompt": "Which response code is typical for a successful POST that creates a resource?",
        "options": [
          "201 Created",
          "404 Not Found",
          "401 Unauthorized",
          "503 Unavailable"
        ],
        "correct": 0,
        "explanation": "201 Created is commonly paired with a Location header."
      }
    ]
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
        "id": "controllers-and-routing-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "Controllers receive requests, validate inputs, call services, and return HTTP responses.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "controllers-and-routing-5",
        "prompt": "Which analogy helps explain Controllers & Routing?",
        "options": [
          "A receptionist routes a request to the right specialist.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-13",
        "prompt": "What is the difference between 401 and 403?",
        "options": [
          "401 requires authentication; 403 means authenticated or identified client lacks permission",
          "They mean the same",
          "401 is for missing resources",
          "403 is a server crash"
        ],
        "correct": 0,
        "explanation": "401 means credentials are missing/invalid; 403 means access is forbidden."
      }
    ]
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
        "id": "middleware-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "Middleware runs around HTTP requests and responses; the order is important.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "middleware-5",
        "prompt": "Which analogy helps explain Middleware?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "Airport checkpoints where each station has a distinct role."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-14",
        "prompt": "What is the safest way to handle invalid user input?",
        "options": [
          "Validate and return an appropriate 4xx response",
          "Return 500 for every error",
          "Trust the client",
          "Log secrets"
        ],
        "correct": 0,
        "explanation": "Validation catches malformed or unacceptable input at boundaries."
      }
    ]
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
        "id": "validation-and-dtos-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I use DTOs to control API contracts and validate input at the boundary.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "validation-and-dtos-5",
        "prompt": "Which analogy helps explain Validation & DTOs?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A form collects only the fields needed for one task.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-15",
        "prompt": "Which HTTP method is intended for partial updates?",
        "options": [
          "PATCH",
          "GET",
          "DELETE",
          "HEAD"
        ],
        "correct": 0,
        "explanation": "PATCH represents partial modification; PUT typically replaces the resource representation."
      }
    ]
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
        "id": "select,-where,-order-by-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "I use WHERE to filter rows and ORDER BY to define result ordering."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "select,-where,-order-by-5",
        "prompt": "Which analogy helps explain SELECT, WHERE, ORDER BY?",
        "options": [
          "A system that requires no human decisions.",
          "Choosing products by category and sorting by price.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-21",
        "prompt": "Which ACID property ensures committed data survives a crash?",
        "options": [
          "Durability",
          "Atomicity",
          "Isolation",
          "Consistency"
        ],
        "correct": 0,
        "explanation": "Durability means committed changes persist."
      }
    ]
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
        "id": "sql-joins-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "I use LEFT JOIN when I need customers even if they have no orders.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "sql-joins-5",
        "prompt": "Which analogy helps explain SQL JOINs?",
        "options": [
          "Matching orders to customers by customer ID.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-17",
        "prompt": "Which JOIN keeps all rows from the left table, even without a match?",
        "options": [
          "LEFT JOIN",
          "INNER JOIN",
          "CROSS JOIN",
          "RIGHT JOIN"
        ],
        "correct": 0,
        "explanation": "LEFT JOIN preserves every left-side row and fills missing right-side values with NULL."
      }
    ]
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
        "id": "indexes-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "Indexes can improve query performance, but too many indexes slow writes.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "indexes-5",
        "prompt": "Which analogy helps explain Indexes?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A book index helps find topics without reading every page."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-18",
        "prompt": "What is a primary purpose of an index?",
        "options": [
          "Speed up some reads at the cost of storage and write overhead",
          "Encrypt every column",
          "Remove the need for WHERE",
          "Guarantee no deadlocks"
        ],
        "correct": 0,
        "explanation": "Indexes improve selected queries but have maintenance costs."
      }
    ]
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
        "id": "transactions-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "Transactions help preserve consistency across related database changes.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "transactions-5",
        "prompt": "Which analogy helps explain Transactions?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "Moving money requires a debit and credit together.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-19",
        "prompt": "What does `COUNT(*)` count?",
        "options": [
          "Rows, including rows with NULL values",
          "Only non-null values in a chosen column",
          "Distinct tables",
          "Columns"
        ],
        "correct": 0,
        "explanation": "COUNT(*) counts all qualifying rows."
      }
    ]
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
        "id": "parameterized-queries-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "I use parameters instead of string concatenation to reduce SQL injection risk."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "parameterized-queries-5",
        "prompt": "Which analogy helps explain Parameterized Queries?",
        "options": [
          "A system that requires no human decisions.",
          "Filling blanks on a fixed form rather than rewriting the form.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-20",
        "prompt": "What is a parameterized SQL query mainly protecting against?",
        "options": [
          "SQL injection",
          "Network latency",
          "Deadlocks",
          "Lost backups"
        ],
        "correct": 0,
        "explanation": "Parameters separate query structure from untrusted data."
      }
    ]
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
        "id": "dapper-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "Dapper maps SQL query results to .NET objects while keeping SQL under developer control.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "dapper-5",
        "prompt": "Which analogy helps explain Dapper?",
        "options": [
          "A translator turns rows into C# objects without writing the SQL for you.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-23",
        "prompt": "What is EF Core change tracking used for?",
        "options": [
          "Detecting entity modifications for SaveChanges",
          "Tracking browser clicks",
          "Caching CSS",
          "Running unit tests"
        ],
        "correct": 0,
        "explanation": "Tracked entities can be updated and persisted through SaveChanges."
      }
    ]
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
        "id": "entity-framework-core-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "EF Core reduces repetitive data-access code and supports LINQ queries.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "entity-framework-core-5",
        "prompt": "Which analogy helps explain Entity Framework Core?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A librarian manages both the catalog and updates for you."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-22",
        "prompt": "Why use Dapper parameters instead of string concatenation?",
        "options": [
          "Safety and correct value binding",
          "Automatic schema migrations",
          "Automatic UI updates",
          "To avoid SQL entirely"
        ],
        "correct": 0,
        "explanation": "Parameterized commands protect against SQL injection and correctly bind values."
      },
      {
        "id": "challenge-24",
        "prompt": "What is a common benefit of AsNoTracking in EF Core?",
        "options": [
          "Lower overhead for read-only queries",
          "Automatic updates",
          "Encryption",
          "Transaction rollback"
        ],
        "correct": 0,
        "explanation": "No-tracking queries avoid change-tracker overhead when updates are unnecessary."
      }
    ]
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
        "id": "unit-tests-with-nunit-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I write unit tests for business rules and edge cases to catch regressions early.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "unit-tests-with-nunit-5",
        "prompt": "Which analogy helps explain Unit Tests with NUnit?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "Checking one Lego brick before assembling the model.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-25",
        "prompt": "Which test is most appropriate for a pure price calculation function?",
        "options": [
          "Unit test",
          "End-to-end browser test only",
          "Manual production test",
          "Load test"
        ],
        "correct": 0,
        "explanation": "Unit tests are fast and deterministic for isolated business logic."
      }
    ]
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
        "id": "mocking-dependencies-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "Mocking lets me test service logic without sending real emails or calling external APIs."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "mocking-dependencies-5",
        "prompt": "Which analogy helps explain Mocking Dependencies?",
        "options": [
          "A system that requires no human decisions.",
          "A flight simulator replaces the real aircraft during training.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-26",
        "prompt": "What does mocking an external email gateway help test?",
        "options": [
          "Service behavior without sending real emails",
          "The real gateway uptime",
          "Network speed",
          "Browser rendering"
        ],
        "correct": 0,
        "explanation": "Mocks/fakes isolate dependencies and make tests predictable."
      }
    ]
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
        "id": "selenium-and-ui-testing-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "Selenium tests user-facing browser flows; NUnit can run the test cases.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "selenium-and-ui-testing-5",
        "prompt": "Which analogy helps explain Selenium & UI Testing?",
        "options": [
          "A robot follows the same steps as a real website user.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-27",
        "prompt": "Why should tests avoid depending on execution order?",
        "options": [
          "Order-dependent tests are fragile and unreliable",
          "It always speeds up tests",
          "It enables SQL injection",
          "It removes assertions"
        ],
        "correct": 0,
        "explanation": "Each test should set up its own state and run independently."
      }
    ]
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
        "id": "git-workflow-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "I use feature branches and pull requests to keep changes reviewable.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "git-workflow-5",
        "prompt": "Which analogy helps explain Git Workflow?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A history of drafts with safe checkpoints."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-29",
        "prompt": "What is the difference between `git fetch` and `git pull`?",
        "options": [
          "Fetch downloads remote refs; pull also integrates them into the current branch",
          "They always delete local files",
          "Fetch pushes changes",
          "Pull never contacts the remote"
        ],
        "correct": 0,
        "explanation": "git pull commonly performs fetch followed by merge or rebase."
      }
    ]
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
        "id": "ci-cd-and-azure-devops-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "CI/CD reduces manual deployment mistakes and catches regressions early.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious."
        ],
        "correct": 0,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "ci-cd-and-azure-devops-5",
        "prompt": "Which analogy helps explain CI/CD & Azure DevOps?",
        "options": [
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "An assembly line checks each product before shipping.",
          "A random number generator that always succeeds."
        ],
        "correct": 2,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-28",
        "prompt": "What is the purpose of a CI pipeline?",
        "options": [
          "Automatically validate changes through build/tests",
          "Replace version control",
          "Manually upload screenshots",
          "Disable reviews"
        ],
        "correct": 0,
        "explanation": "Continuous Integration automatically checks changes and detects regressions early."
      },
      {
        "id": "challenge-30",
        "prompt": "Why should secrets be stored in CI secret management rather than source code?",
        "options": [
          "To prevent credential exposure in the repository",
          "To make builds slower",
          "To bypass tests",
          "To disable access control"
        ],
        "correct": 0,
        "explanation": "Keep credentials out of tracked files and restrict their permissions."
      }
    ]
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
        "id": "idempotency-and-retries-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "For reliable automation, I use timeouts, bounded retries, logging, and idempotency where needed."
        ],
        "correct": 3,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "idempotency-and-retries-5",
        "prompt": "Which analogy helps explain Idempotency & Retries?",
        "options": [
          "A system that requires no human decisions.",
          "Pressing an elevator button twice should not create two elevators.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug."
        ],
        "correct": 1,
        "explanation": "Connect the analogy back to the precise technical definition."
      }
    ]
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
        "id": "security-and-least-privilege-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I always use it without thinking about trade-offs.",
          "I do not need to explain it because it is obvious.",
          "In risk-related systems, I prioritize access control, auditability, and safe error handling.",
          "It is useful because it is modern."
        ],
        "correct": 2,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "security-and-least-privilege-5",
        "prompt": "Which analogy helps explain Security & Least Privilege?",
        "options": [
          "A staff badge opens only the doors required for the job.",
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions."
        ],
        "correct": 0,
        "explanation": "Connect the analogy back to the precise technical definition."
      }
    ]
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
        "id": "clear-technical-answers-3",
        "prompt": "Which explanation would be strongest in a technical interview?",
        "options": [
          "I do not need to explain it because it is obvious.",
          "I have not used that tool professionally yet, but I understand its purpose and can explain how I would learn it.",
          "It is useful because it is modern.",
          "I always use it without thinking about trade-offs."
        ],
        "correct": 1,
        "explanation": "Give a definition, a benefit, and a concrete use case."
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
        "id": "clear-technical-answers-5",
        "prompt": "Which analogy helps explain Clear Technical Answers?",
        "options": [
          "A random number generator that always succeeds.",
          "A shortcut that removes every bug.",
          "A system that requires no human decisions.",
          "A three-part bridge from concept to evidence."
        ],
        "correct": 3,
        "explanation": "Connect the analogy back to the precise technical definition."
      },
      {
        "id": "challenge-40",
        "prompt": "Which response is strongest when you do not know a tool?",
        "options": [
          "I haven't used it in production, but I understand its purpose and can explain how I'd learn it.",
          "I know everything about it.",
          "That question is irrelevant.",
          "I would guess and pretend."
        ],
        "correct": 0,
        "explanation": "Be honest, show related knowledge, and explain a practical learning approach."
      }
    ]
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
        "id": "challenge-34",
        "prompt": "What is the best way to store user passwords?",
        "options": [
          "A modern salted password hash",
          "Plain text",
          "Base64 encoding",
          "Client-side localStorage"
        ],
        "correct": 0,
        "explanation": "Use an appropriate password hashing algorithm and never store plaintext passwords."
      },
      {
        "id": "challenge-35",
        "prompt": "What is the principle of least privilege?",
        "options": [
          "Grant only permissions needed for a task",
          "Give admin access by default",
          "Share credentials",
          "Disable auditing"
        ],
        "correct": 0,
        "explanation": "Limit permissions to reduce the impact of compromise."
      }
    ]
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
        "id": "challenge-36",
        "prompt": "What is the average lookup complexity of a Dictionary<TKey,TValue>?",
        "options": [
          "O(1)",
          "O(n²)",
          "O(n log n)",
          "O(2ⁿ)"
        ],
        "correct": 0,
        "explanation": "Hash-based dictionaries provide average constant-time lookup, though worst-case behavior differs."
      },
      {
        "id": "challenge-37",
        "prompt": "Which structure naturally supports FIFO processing?",
        "options": [
          "Queue",
          "Stack",
          "Tree",
          "Set"
        ],
        "correct": 0,
        "explanation": "A queue processes first-in, first-out."
      }
    ]
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
        "id": "challenge-38",
        "prompt": "What is the main purpose of separating business logic from HTTP controllers?",
        "options": [
          "Make domain behavior easier to test and reuse",
          "Guarantee zero bugs",
          "Avoid all dependencies",
          "Remove the need for APIs"
        ],
        "correct": 0,
        "explanation": "Thin controllers delegate to application/domain services."
      },
      {
        "id": "challenge-39",
        "prompt": "When is a monolith a reasonable choice?",
        "options": [
          "When simplicity and deployment speed matter more than distributed scaling",
          "Never",
          "Only for frontend apps",
          "Only without a database"
        ],
        "correct": 0,
        "explanation": "A modular monolith can be a good starting point; distributed systems add complexity."
      }
    ]
  }
];
