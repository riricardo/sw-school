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
    "code": "public interface IMessageSender\n{\n    Task SendAsync(string text);\n}\n\npublic class EmailSender : IMessageSender\n{\n    public Task SendAsync(string text) => Task.CompletedTask;\n}",
    "interview": "An interface defines a contract. I use it to depend on behavior rather than a concrete class.",
    "pitfall": "An interface is not the same as an abstract class.",
    "questions": [
      {
        "id": "interfaces-1",
        "prompt": "A notification service must support email and SMS. Which dependency keeps its business logic independent of the provider?",
        "options": [
          "An IMessageSender contract injected into the service.",
          "An EmailSender base class inherited by the service.",
          "A provider name checked inside each business method.",
          "A static EmailSender selected by the controller."
        ],
        "correct": 0,
        "explanation": "The service depends on the sending capability; each provider supplies an implementation."
      },
      {
        "id": "interfaces-2",
        "prompt": "Which design confuses an interface with shared implementation?",
        "options": [
          "Implementing two capability interfaces on one class.",
          "Expecting an interface to store per-instance balance fields.",
          "Using an interface as a constructor parameter type.",
          "Providing a default implementation for an interface member."
        ],
        "correct": 1,
        "explanation": "Interfaces can include default members, but cannot hold instance fields. Shared instance state belongs in a class."
      },
      {
        "id": "interfaces-4",
        "prompt": "Which member satisfies this instance-method contract?",
        "options": [
          "`public static void Save() { }`",
          "`private void Save() { }`",
          "`public void Save() { }`",
          "`public void Save(string path) { }`"
        ],
        "correct": 2,
        "explanation": "The implementation must match the parameter list and be public, unless implemented explicitly.",
        "code": "public interface IStore\n{\n    void Save();\n}"
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
    "code": "public abstract class Report\n{\n    public void Print() => Console.WriteLine(\"Ready\");\n\n    public abstract string Build();\n}\n\npublic class SalesReport : Report\n{\n    public override string Build() => \"Sales\";\n}",
    "interview": "I choose an abstract class when closely related types need shared implementation or state.",
    "pitfall": "Abstract classes can be inherited; they cannot be instantiated directly.",
    "questions": [
      {
        "id": "abstract-classes-1",
        "prompt": "Several reports share a title and printing workflow, but build their content differently. Which design fits?",
        "options": [
          "An interface that stores the title in an instance field.",
          "An abstract Report class with an abstract Build method.",
          "A static Report class with virtual instance methods.",
          "A sealed Report class with an overridable Build method."
        ],
        "correct": 1,
        "explanation": "An abstract base can hold shared state and behavior while requiring derived classes to implement Build."
      },
      {
        "id": "abstract-classes-2",
        "prompt": "Which use of an abstract class is invalid?",
        "options": [
          "Storing a SalesReport in a Report variable.",
          "Calling a concrete method inherited from Report.",
          "Creating an instance directly with new Report().",
          "Adding a constructor to initialize Report state."
        ],
        "correct": 2,
        "explanation": "Abstract classes cannot be instantiated directly. Derived concrete classes can use their constructors and implemented methods."
      },
      {
        "id": "abstract-classes-4",
        "prompt": "What must SalesReport implement to be concrete?",
        "options": [
          "`public string Build(int year)` returning content.",
          "`public static string Build()` returning content.",
          "A constructor that calls the base constructor.",
          "`public override string Build()` returning content."
        ],
        "correct": 3,
        "explanation": "The abstract member requires an override with a compatible signature; an overload does not satisfy it.",
        "code": "public abstract class Report\n{\n    public abstract string Build();\n}"
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
    "code": "public class Wallet\n{\n    private decimal balance;\n\n    public void Deposit(decimal amount)\n    {\n        if (amount <= 0)\n        {\n            throw new ArgumentException(\"Amount must be positive.\");\n        }\n\n        balance += amount;\n    }\n}",
    "interview": "Encapsulation helps keep objects valid by controlling how their state changes.",
    "pitfall": "Public mutable fields can bypass validation.",
    "questions": [
      {
        "id": "encapsulation-1",
        "prompt": "A wallet must reject negative deposits. Which API best preserves that rule?",
        "options": [
          "A public balance field checked only by the web controller.",
          "A public balance setter checked only by the user interface.",
          "A private balance updated through a validated Deposit method.",
          "An internal balance field assigned directly by all services."
        ],
        "correct": 2,
        "explanation": "Encapsulation keeps state changes behind the operation that enforces the invariant."
      },
      {
        "id": "encapsulation-2",
        "prompt": "Which change weakens encapsulation?",
        "options": [
          "Returning the balance through a read-only property.",
          "Rejecting a negative amount inside the Deposit method.",
          "Keeping balance updates inside the Wallet class.",
          "Adding a public setter that bypasses balance validation."
        ],
        "correct": 3,
        "explanation": "A separate unvalidated write path lets callers bypass the rule enforced by Deposit."
      },
      {
        "id": "encapsulation-4",
        "prompt": "Why can this property expose mutable internal state?",
        "options": [
          "Callers can add items directly to the returned List.",
          "The getter makes a new list every time it is called.",
          "The private setter prevents adding items to the list.",
          "The List becomes immutable outside the declaring class."
        ],
        "correct": 0,
        "explanation": "A private setter restricts replacing the list, not modifying its contents. Use a read-only view or copy when appropriate.",
        "code": "public List<string> Items { get; private set; } = new();"
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
        "prompt": "A service calls Send on a MessageSender reference holding an SmsSender. What enables the SMS implementation to run?",
        "options": [
          "A static Send method declared on MessageSender.",
          "A Send overload with an extra parameter on SmsSender.",
          "A private Send method declared only on SmsSender.",
          "A virtual Send method overridden by SmsSender."
        ],
        "correct": 3,
        "explanation": "Virtual dispatch selects the override using the runtime type of the object."
      },
      {
        "id": "polymorphism-2",
        "prompt": "Which statement mistakes overloading for overriding?",
        "options": [
          "Adding Send(int) changes how an existing Send(string) call dispatches.",
          "An override keeps a compatible signature with its base member.",
          "An overload adds a method with a different parameter list.",
          "A virtual call can execute behavior from a derived class."
        ],
        "correct": 0,
        "explanation": "Overload resolution selects a signature; adding Send(int) does not override Send(string)."
      },
      {
        "id": "polymorphism-4",
        "prompt": "What is printed by this code?",
        "options": [
          "Base",
          "SMS",
          "Base followed by SMS",
          "Nothing; the call is ambiguous"
        ],
        "correct": 1,
        "explanation": "The variable has the base type, but the virtual call uses the runtime override.",
        "code": "Sender sender = new SmsSender();\nsender.Send();\n\nclass Sender\n{\n    public virtual void Send() => Console.WriteLine(\"Base\");\n}\n\nclass SmsSender : Sender\n{\n    public override void Send() => Console.WriteLine(\"SMS\");\n}"
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
        "prompt": "An in-memory sequence is enumerated repeatedly and its source may change. How can you keep one snapshot of the results?",
        "options": [
          "Materialize the query once with ToList().",
          "Call AsEnumerable() before each enumeration.",
          "Store the Where query in a readonly variable.",
          "Append Select(x => x) to the query."
        ],
        "correct": 0,
        "explanation": "ToList executes the query and stores the results at that point; the other operations do not create a snapshot."
      },
      {
        "id": "collections-and-linq-2",
        "prompt": "Which assumption causes a deferred-execution bug?",
        "options": [
          "Expecting ToList to enumerate the source immediately.",
          "Expecting Where to capture values before enumeration.",
          "Expecting Select to transform each enumerated element.",
          "Expecting Any to stop once it finds a matching element."
        ],
        "correct": 1,
        "explanation": "Where usually defers work until enumeration, so changes to an in-memory source can affect later results."
      },
      {
        "id": "collections-and-linq-4",
        "prompt": "How many values are in result?",
        "options": [
          "1",
          "3",
          "2",
          "0"
        ],
        "correct": 2,
        "explanation": "The query runs at ToList, after 3 has been added, so both 2 and 3 match.",
        "code": "var values = new List<int> { 1, 2 };\nvar query = values.Where(x => x > 1);\nvalues.Add(3);\nvar result = query.ToList();"
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
    "code": "public async Task<string> LoadAsync(HttpClient client)\n{\n    return await client.GetStringAsync(\"https://example.org\");\n}",
    "interview": "Async/await is especially useful for I/O-bound operations like HTTP and database calls.",
    "pitfall": "Async does not automatically make CPU-bound work faster; avoid .Result deadlocks.",
    "questions": [
      {
        "id": "async---await-1",
        "prompt": "An API waits for an HTTP response. Which approach avoids blocking a request thread during the wait?",
        "options": [
          "Call Result on the HttpClient asynchronous operation.",
          "Await the HttpClient asynchronous operation.",
          "Wrap a synchronous HTTP call in Task.FromResult.",
          "Run a synchronous HTTP call before returning Task.CompletedTask."
        ],
        "correct": 1,
        "explanation": "Awaiting asynchronous I/O allows the thread to serve other work while the operation is pending."
      },
      {
        "id": "async---await-2",
        "prompt": "Which expectation about async is incorrect?",
        "options": [
          "An async method can resume after an I/O operation completes.",
          "A Task-returning method can propagate errors to its awaiter.",
          "Adding async makes a CPU-heavy calculation run on another thread.",
          "An async method may finish without suspending its execution."
        ],
        "correct": 2,
        "explanation": "The async modifier enables await; it does not move CPU work onto a worker thread."
      },
      {
        "id": "async---await-4",
        "prompt": "How should an ASP.NET Core action consume this method?",
        "options": [
          "Read LoadAsync().Result to avoid a state machine.",
          "Call LoadAsync().Wait() before returning.",
          "Discard LoadAsync() and immediately return OK.",
          "Await LoadAsync and return its result."
        ],
        "correct": 3,
        "explanation": "Await preserves asynchronous flow and observes failures. Blocking can exhaust request threads, even without a synchronization-context deadlock.",
        "code": "Task<string> LoadAsync(HttpClient client)\n{\n    return client.GetStringAsync(\"https://example.org\");\n}"
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
    "code": "try\n{\n    await service.RunAsync();\n}\ncatch (TimeoutException ex)\n{\n    logger.LogWarning(ex, \"Request timed out\");\n}",
    "interview": "I catch specific exceptions, log useful context, and avoid hiding failures.",
    "pitfall": "Avoid empty catch blocks and logging sensitive information.",
    "questions": [
      {
        "id": "exceptions-and-logging-1",
        "prompt": "An upstream service times out. What log entry is most useful without exposing customer data?",
        "options": [
          "The exception and the full customer request payload.",
          "The error message without operation or request context.",
          "The exception, an operation name, and a correlation ID.",
          "The entire authorization header and request URL."
        ],
        "correct": 2,
        "explanation": "An exception and correlation context help diagnosis without copying credentials or sensitive payloads into logs."
      },
      {
        "id": "exceptions-and-logging-2",
        "prompt": "Which error-handling approach hides a failed operation?",
        "options": [
          "Catching a timeout and returning a documented failure response.",
          "Adding useful context before rethrowing with throw.",
          "Allowing unexpected errors to reach centralized handling.",
          "Catching an exception and returning success without handling it."
        ],
        "correct": 3,
        "explanation": "An empty or misleading catch path makes callers believe the operation succeeded."
      },
      {
        "id": "exceptions-and-logging-4",
        "prompt": "Which replacement preserves the original exception stack?",
        "options": [
          "`throw;`",
          "`throw ex;`",
          "`return;`",
          "`throw new Exception(ex.Message);`"
        ],
        "correct": 0,
        "explanation": "A bare throw rethrows the current exception while preserving its original stack information.",
        "code": "try\n{\n    await service.RunAsync();\n}\ncatch (Exception ex)\n{\n    logger.LogError(ex, \"Operation failed\");\n    throw ex;\n}"
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
    "code": "public interface IPriceCalculator\n{\n    decimal Calculate(Order order);\n}",
    "interview": "SOLID encourages modularity, testability, and clear responsibilities.",
    "pitfall": "SOLID is guidance, not a requirement to create interfaces for every class.",
    "questions": [
      {
        "id": "solid-overview-1",
        "prompt": "A checkout service constructs SqlOrderRepository internally. Which change best supports Dependency Inversion?",
        "options": [
          "Move the constructor call into a private factory method.",
          "Make SqlOrderRepository static and call it directly.",
          "Inherit CheckoutService from SqlOrderRepository.",
          "Depend on an order-storage contract supplied externally."
        ],
        "correct": 3,
        "explanation": "The high-level workflow should depend on an abstraction rather than a specific persistence implementation."
      },
      {
        "id": "solid-overview-2",
        "prompt": "Which use of SOLID adds abstraction without a demonstrated need?",
        "options": [
          "Creating a separate interface for every data-only DTO.",
          "Separating pricing rules from HTTP response mapping.",
          "Keeping a derived implementation valid for base-type clients.",
          "Splitting a broad contract when consumers need different parts."
        ],
        "correct": 0,
        "explanation": "SOLID guides design trade-offs; a one-to-one interface for each DTO may add ceremony without an interchangeable behavior."
      },
      {
        "id": "solid-overview-4",
        "prompt": "A Report class builds report data and sends email. Email formatting changes frequently. Which principle most directly suggests separating the responsibilities?",
        "options": [
          "Liskov Substitution",
          "Single Responsibility",
          "Interface Segregation",
          "Dependency Inversion"
        ],
        "correct": 1,
        "explanation": "Building report data and delivering email introduce different reasons to change."
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
    "code": "builder.Services.AddScoped<IMessageSender, EmailSender>();\n\npublic class Alerts(IMessageSender sender)\n{\n    public Task Send(string text) => sender.SendAsync(text);\n}",
    "interview": "DI reduces coupling and helps testing. The ASP.NET Core container creates registered services.",
    "pitfall": "DI and the Dependency Inversion Principle are related but not identical.",
    "questions": [
      {
        "id": "dependency-injection-1",
        "prompt": "A service needs a clock that can be replaced in tests. Which approach exposes the dependency clearly?",
        "options": [
          "Accept IClock through the service constructor.",
          "Resolve IClock from a global container in each method.",
          "Create SystemClock inside the service constructor.",
          "Read DateTime.Now directly inside each business rule."
        ],
        "correct": 0,
        "explanation": "Constructor injection makes the dependency explicit and lets tests supply a controlled clock."
      },
      {
        "id": "dependency-injection-2",
        "prompt": "Which statement confuses DI with Dependency Inversion?",
        "options": [
          "DI supplies dependencies instead of constructing them internally.",
          "Using constructor injection guarantees dependency on abstractions.",
          "A constructor can receive a concrete dependency through DI.",
          "Dependency Inversion concerns the direction of dependencies."
        ],
        "correct": 1,
        "explanation": "DI can inject concrete types too; it does not by itself enforce Dependency Inversion."
      },
      {
        "id": "dependency-injection-4",
        "prompt": "What registration lets the container construct Alerts?",
        "options": [
          "`services.AddScoped<Alerts, EmailSender>();`",
          "`services.AddScoped<IMessageSender>();`",
          "`services.AddScoped<IMessageSender, EmailSender>();`",
          "`services.AddScoped<EmailSender, IMessageSender>();`"
        ],
        "correct": 2,
        "explanation": "The container needs a mapping from the requested interface to a concrete implementation.",
        "code": "public class Alerts(IMessageSender sender)\n{\n    public Task SendAsync() => sender.SendAsync(\"Hello\");\n}"
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
        "prompt": "An ASP.NET Core service uses a request-scoped DbContext. Which lifetime is normally suitable for that service?",
        "options": [
          "Singleton, sharing the context across requests.",
          "Scoped, matching the request unit of work.",
          "Singleton, resolving the context at startup.",
          "Transient, captured by a singleton at startup."
        ],
        "correct": 1,
        "explanation": "A scoped service can safely consume the request-scoped context; a singleton must not capture it."
      },
      {
        "id": "service-lifetimes-2",
        "prompt": "Which registration risks a captive dependency?",
        "options": [
          "A scoped service receiving a singleton clock.",
          "A transient service resolved inside a request scope.",
          "A singleton constructor receiving a scoped repository.",
          "A singleton receiving a thread-safe singleton cache."
        ],
        "correct": 2,
        "explanation": "The singleton retains the scoped object beyond its intended lifetime. Explicit short-lived scopes are a different design."
      },
      {
        "id": "service-lifetimes-4",
        "prompt": "Within one HTTP request, how many instances does this registration normally return when resolved twice from the request scope?",
        "options": [
          "Two separate instances",
          "One shared across all requests",
          "One per controller type",
          "One shared instance"
        ],
        "correct": 3,
        "explanation": "Scoped dependencies are reused within the same scope and differ between request scopes.",
        "code": "services.AddScoped<OrderService>();"
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
        "prompt": "A client replaces the full representation of a resource at a known URI. Which method best expresses that intent?",
        "options": [
          "POST",
          "PATCH",
          "PUT",
          "GET"
        ],
        "correct": 2,
        "explanation": "PUT expresses creating or replacing the target representation. PATCH describes partial modification."
      },
      {
        "id": "http-methods-2",
        "prompt": "Which implementation violates the intended semantics of a safe HTTP method?",
        "options": [
          "A PUT endpoint that replaces an existing profile.",
          "A PATCH endpoint that changes a profile field.",
          "A DELETE endpoint that removes an existing profile.",
          "A GET endpoint that charges a stored payment card."
        ],
        "correct": 3,
        "explanation": "GET is intended to be safe and should not trigger a requested state-changing business operation."
      },
      {
        "id": "http-methods-4",
        "prompt": "A client repeats the same PUT after a network timeout. What does idempotent mean here?",
        "options": [
          "The intended server state matches applying it once.",
          "Every response must contain the same status code.",
          "The server must skip authentication on the retry.",
          "The request must execute exactly once on the server."
        ],
        "correct": 0,
        "explanation": "Idempotency concerns intended effects, not identical responses or exactly-once execution."
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
    "code": "return CreatedAtAction(\n    nameof(Get),\n    new { id = item.Id },\n    item\n);",
    "interview": "I return 201 when creating a resource and 404 when the requested resource does not exist.",
    "pitfall": "401 and 403 have different meanings.",
    "questions": [
      {
        "id": "http-status-codes-1",
        "prompt": "A validly authenticated user lacks permission for an endpoint. Which status best represents the result?",
        "options": [
          "401 Unauthorized",
          "404 Not Found",
          "409 Conflict",
          "403 Forbidden"
        ],
        "correct": 3,
        "explanation": "403 expresses insufficient permission. 401 indicates missing or invalid authentication credentials."
      },
      {
        "id": "http-status-codes-2",
        "prompt": "Which response incorrectly treats missing authentication as insufficient permission?",
        "options": [
          "Returning 403 for an endpoint requiring credentials when none were sent.",
          "Returning 401 when the supplied access token is invalid.",
          "Returning 403 when a signed-in user lacks a required role.",
          "Returning 404 when the requested public resource does not exist."
        ],
        "correct": 0,
        "explanation": "For this endpoint, missing credentials call for 401. Permission checks apply after identity is established."
      },
      {
        "id": "http-status-codes-4",
        "prompt": "An API creates an order and returns its new resource URI. Which response fits best?",
        "options": [
          "200 OK with a Retry-After header.",
          "201 Created with a Location header.",
          "204 No Content with a response body.",
          "202 Accepted after completing all processing."
        ],
        "correct": 1,
        "explanation": "201 communicates creation; Location can identify the new resource. 202 means processing has been accepted but is incomplete."
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
    "code": "[ApiController]\n[Route(\"api/orders\")]\npublic class OrdersController : ControllerBase\n{\n    [HttpGet]\n    public IActionResult List() => Ok();\n}",
    "interview": "Controllers receive requests, validate inputs, call services, and return HTTP responses.",
    "pitfall": "Avoid putting all business logic in controllers.",
    "questions": [
      {
        "id": "controllers-and-routing-1",
        "prompt": "Two endpoints and a background job must enforce the same order-pricing rule. Where should that rule live?",
        "options": [
          "In an application or domain service called by all three.",
          "In a controller helper called by the background job.",
          "In route attributes applied to both controller actions.",
          "In response DTO constructors shared by the endpoints."
        ],
        "correct": 0,
        "explanation": "Business rules need a reusable home independent of HTTP routing and response serialization."
      },
      {
        "id": "controllers-and-routing-2",
        "prompt": "Which controller design is a common mistake?",
        "options": [
          "Mapping service results to HTTP response codes.",
          "Putting all business logic in controller actions.",
          "Binding route values to action parameters.",
          "Delegating order creation to an application service."
        ],
        "correct": 1,
        "explanation": "Controllers should coordinate HTTP concerns. Keeping business rules elsewhere supports reuse and focused tests."
      },
      {
        "id": "controllers-and-routing-4",
        "prompt": "Which request matches this action route?",
        "options": [
          "GET /api/orders?id=42",
          "POST /api/orders/42",
          "GET /api/orders/42",
          "GET /orders/api/42"
        ],
        "correct": 2,
        "explanation": "The controller prefix and action template combine to api/orders/{id:int}; HttpGet restricts the method.",
        "code": "[Route(\"api/orders\")]\npublic class OrdersController : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    public IActionResult Get(int id) => Ok(id);\n}"
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
        "prompt": "An API uses endpoint authorization. Which order allows authorization to use the authenticated identity?",
        "options": [
          "Authorization, then authentication, then endpoint execution.",
          "Authentication, then authorization, then endpoint execution.",
          "Endpoint execution, then authentication, then authorization.",
          "Authentication, then endpoint execution, then authorization."
        ],
        "correct": 1,
        "explanation": "Authentication populates the identity before authorization evaluates access to the selected endpoint."
      },
      {
        "id": "middleware-2",
        "prompt": "Which middleware bug prevents downstream handlers from running?",
        "options": [
          "Calling next before adding a response timing header.",
          "Reading the request path before calling next.",
          "Returning without calling next when the request should continue.",
          "Catching an exception thrown by downstream middleware."
        ],
        "correct": 2,
        "explanation": "Middleware may intentionally short-circuit, but accidentally omitting next stops requests from reaching later handlers."
      },
      {
        "id": "middleware-4",
        "prompt": "In what order are the messages written?",
        "options": [
          "Before, After, Endpoint",
          "Endpoint, Before, After",
          "After, Endpoint, Before",
          "Before, Endpoint, After"
        ],
        "correct": 3,
        "explanation": "Code before next runs on the incoming path; code after the await resumes when downstream processing returns.",
        "code": "app.Use(async (context, next) =>\n{\n    Console.WriteLine(\"Before\");\n    await next(context);\n    Console.WriteLine(\"After\");\n});\napp.Run(context =>\n{\n    Console.WriteLine(\"Endpoint\");\n    return Task.CompletedTask;\n});"
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
    "code": "public record CreateOrderDto(\n    [property: Required] string CustomerName\n);",
    "interview": "I use DTOs to control API contracts and validate input at the boundary.",
    "pitfall": "Never trust client-side validation alone.",
    "questions": [
      {
        "id": "validation-and-dtos-1",
        "prompt": "A public registration endpoint must not accept an administrator flag. Which request model is safest?",
        "options": [
          "The User entity with IsAdmin hidden in the browser.",
          "The User entity with IsAdmin documented as read-only.",
          "A dedicated DTO containing only allowed input fields.",
          "A dictionary copied directly onto the persisted User."
        ],
        "correct": 2,
        "explanation": "A dedicated input model limits the accepted surface and avoids exposing privileged entity fields to binding."
      },
      {
        "id": "validation-and-dtos-2",
        "prompt": "Which validation design leaves the API exposed?",
        "options": [
          "Checking input constraints on the server boundary.",
          "Checking business invariants in the domain operation.",
          "Returning structured errors for invalid request data.",
          "Checking required fields only in browser JavaScript."
        ],
        "correct": 3,
        "explanation": "Clients can bypass browser validation by sending requests directly. Server validation remains necessary."
      },
      {
        "id": "validation-and-dtos-4",
        "prompt": "What does this validation attribute check?",
        "options": [
          "That the bound CustomerName value is present and valid for Required.",
          "That the customer exists in the database.",
          "That the caller may create orders for this customer.",
          "That every customer name is unique in the database."
        ],
        "correct": 0,
        "explanation": "Required checks a field-level constraint. Existence, authorization, and uniqueness need separate rules.",
        "code": "public record CreateOrderDto(\n    [property: Required] string CustomerName\n);"
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
    "code": "SELECT Id, Name\nFROM Customers\nWHERE IsActive = 1\nORDER BY Name;",
    "interview": "I use WHERE to filter rows and ORDER BY to define result ordering.",
    "pitfall": "Do not concatenate untrusted values into SQL strings.",
    "questions": [
      {
        "id": "select,-where,-order-by-1",
        "prompt": "A report needs active customer names in alphabetical order. Which clauses have the correct roles?",
        "options": [
          "SELECT filters rows, WHERE sorts, ORDER BY picks columns.",
          "SELECT sorts rows, WHERE picks columns, ORDER BY filters.",
          "SELECT groups rows, WHERE sorts, ORDER BY removes duplicates.",
          "SELECT picks columns, WHERE filters rows, ORDER BY sorts."
        ],
        "correct": 3,
        "explanation": "Projection, filtering, and ordering are separate parts of the query."
      },
      {
        "id": "select,-where,-order-by-2",
        "prompt": "Which query construction introduces an injection risk?",
        "options": [
          "Concatenating a submitted name into a SQL string.",
          "Passing a submitted name as a SQL parameter.",
          "Selecting named columns instead of using SELECT *.",
          "Using a fixed ORDER BY clause in the query text."
        ],
        "correct": 0,
        "explanation": "Untrusted input must be passed as data through parameters, not assembled into executable SQL text."
      },
      {
        "id": "select,-where,-order-by-4",
        "prompt": "Which ordering guarantees stable ordering of customers with the same Name?",
        "options": [
          "`ORDER BY Name`",
          "`ORDER BY Name, Id`",
          "`ORDER BY IsActive`",
          "No ORDER BY clause"
        ],
        "correct": 1,
        "explanation": "A unique tie-breaker such as Id makes the order deterministic when names match.",
        "code": "SELECT Id, Name\nFROM Customers\nWHERE IsActive = 1;"
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
    "code": "SELECT c.Name, o.Id\nFROM Customers AS c\nLEFT JOIN Orders AS o\n    ON o.CustomerId = c.Id;",
    "interview": "I use LEFT JOIN when I need customers even if they have no orders.",
    "pitfall": "A WHERE condition on the right table can accidentally remove unmatched LEFT JOIN rows.",
    "questions": [
      {
        "id": "sql-joins-1",
        "prompt": "A report must include customers who have no orders. Which join is appropriate?",
        "options": [
          "Customers LEFT JOIN Orders",
          "Customers INNER JOIN Orders",
          "Customers CROSS JOIN Orders",
          "Orders LEFT JOIN Customers"
        ],
        "correct": 0,
        "explanation": "A LEFT JOIN preserves every row from Customers, including those with no matching order."
      },
      {
        "id": "sql-joins-2",
        "prompt": "Which change accidentally removes unmatched customers from a LEFT JOIN result?",
        "options": [
          "Adding AND o.Status = 'Open' to the ON clause.",
          "Filtering with WHERE o.Status = 'Open'.",
          "Selecting o.Id alongside the customer name.",
          "Keeping c.Id = o.CustomerId in the ON clause."
        ],
        "correct": 1,
        "explanation": "For unmatched rows o.Status is NULL, so the WHERE predicate removes them. Put that matching condition in ON to preserve customers."
      },
      {
        "id": "sql-joins-4",
        "prompt": "A customer has three matching orders. How many rows does this query return for that customer?",
        "options": [
          "1",
          "0",
          "3",
          "4"
        ],
        "correct": 2,
        "explanation": "The join produces a row for each matching order. It does not automatically group results by customer.",
        "code": "SELECT c.Id, o.Id\nFROM Customers c\nLEFT JOIN Orders o ON o.CustomerId = c.Id;"
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
    "code": "CREATE INDEX IX_Orders_CustomerId\n    ON Orders(CustomerId);",
    "interview": "Indexes can improve query performance, but too many indexes slow writes.",
    "pitfall": "An index is not guaranteed to help every query.",
    "questions": [
      {
        "id": "indexes-1",
        "prompt": "A large Orders table is frequently searched by CustomerId. What is the best starting point?",
        "options": [
          "Add an index to every column before inspecting the plan.",
          "Inspect the plan and evaluate an index on CustomerId.",
          "Replace the primary key with CustomerId immediately.",
          "Add an index on Total without checking the workload."
        ],
        "correct": 1,
        "explanation": "Index selection should match predicates and workload, then be checked against actual execution plans and measurements."
      },
      {
        "id": "indexes-2",
        "prompt": "Which indexing assumption is a mistake?",
        "options": [
          "An index can increase the cost of inserts and updates.",
          "A scan can be reasonable for a query returning most rows.",
          "Adding an index will improve every query on the table.",
          "Composite index key order can affect query usefulness."
        ],
        "correct": 2,
        "explanation": "Indexes have maintenance and storage costs, and the optimizer may choose a scan when that is cheaper."
      },
      {
        "id": "indexes-4",
        "prompt": "Which filter most directly matches the leading key of this index?",
        "options": [
          "`WHERE CreatedAt = @CreatedAt`",
          "`WHERE Total = @Total`",
          "`WHERE Status = @Status`",
          "`WHERE CustomerId = @CustomerId`"
        ],
        "correct": 3,
        "explanation": "CustomerId is the leading key. The index can also support CreatedAt filtering within a specified customer.",
        "code": "CREATE INDEX IX_Orders_Customer_Created\nON Orders(CustomerId, CreatedAt);"
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
    "code": "BEGIN TRANSACTION;\n\nUPDATE Accounts\nSET Balance = Balance - 10\nWHERE Id = 1;\n\nUPDATE Accounts\nSET Balance = Balance + 10\nWHERE Id = 2;\n\nCOMMIT;",
    "interview": "Transactions help preserve consistency across related database changes.",
    "pitfall": "A transaction does not replace validation or concurrency design.",
    "questions": [
      {
        "id": "transactions-1",
        "prompt": "A transfer debits one account and credits another. What keeps a failure between the writes from leaving only the debit?",
        "options": [
          "Execute each write in its own committed transaction.",
          "Log the debit before independently saving the credit.",
          "Execute both writes in one database transaction.",
          "Retry the credit indefinitely after committing the debit."
        ],
        "correct": 2,
        "explanation": "A single transaction can roll back both writes when the transfer fails before commit."
      },
      {
        "id": "transactions-2",
        "prompt": "Which assumption about transactions is unsafe?",
        "options": [
          "A rollback can discard uncommitted changes.",
          "Long transactions can increase lock contention.",
          "Isolation level influences concurrent behavior.",
          "A transaction automatically prevents every concurrent-update bug."
        ],
        "correct": 3,
        "explanation": "Isolation, concurrency checks, and business validation still need deliberate design."
      },
      {
        "id": "transactions-4",
        "prompt": "If the second update fails, what must the application do to avoid committing only the first?",
        "options": [
          "Roll back the transaction on failure.",
          "Commit the transaction in a finally block.",
          "Open a new transaction for the second update.",
          "Return success before the second update completes."
        ],
        "correct": 0,
        "explanation": "The transaction must be rolled back if either required operation fails.",
        "code": "BEGIN TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 10 WHERE Id = 1;\nUPDATE Accounts SET Balance = Balance + 10 WHERE Id = 2;\nCOMMIT;"
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
    "code": "const string sql = \"SELECT Id, Name FROM Users WHERE Id = @Id\";\n\nvar user = await connection.QueryFirstOrDefaultAsync<User>(\n    sql,\n    new { Id = id }\n);",
    "interview": "I use parameters instead of string concatenation to reduce SQL injection risk.",
    "pitfall": "Parameterization does not replace authorization checks.",
    "questions": [
      {
        "id": "parameterized-queries-1",
        "prompt": "A search endpoint accepts a customer name. Which approach keeps that value separate from SQL syntax?",
        "options": [
          "Escape quotes and concatenate it into the statement.",
          "Strip spaces and concatenate it into the statement.",
          "URL-encode it before interpolating the SQL text.",
          "Bind it to a parameter in a fixed SQL statement."
        ],
        "correct": 3,
        "explanation": "Binding parameters passes values as data. String transformations are not a substitute for parameterization."
      },
      {
        "id": "parameterized-queries-2",
        "prompt": "Which assumption leaves a parameterized endpoint insecure?",
        "options": [
          "Knowing a valid order ID is enough permission to read it.",
          "Parameter values should be handled as data.",
          "Resource access requires an authorization check.",
          "Dynamic column names need an explicit allowlist."
        ],
        "correct": 0,
        "explanation": "Parameterization addresses injection through values, not whether the caller may access a particular resource."
      },
      {
        "id": "parameterized-queries-4",
        "prompt": "A user chooses the sort column. How should this query be built?",
        "options": [
          "Bind the column name as a normal value parameter.",
          "Map allowed sort keys to fixed column expressions.",
          "Concatenate any value that contains no spaces.",
          "HTML-encode the column name before concatenation."
        ],
        "correct": 1,
        "explanation": "SQL value parameters do not substitute identifiers. Choose dynamic identifiers from a trusted allowlist.",
        "code": "SELECT Id, Name\nFROM Customers\nORDER BY /* selected column */;"
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
    "code": "var orders = await connection.QueryAsync<Order>(\n    \"SELECT Id, Total FROM Orders WHERE Total > @Min\",\n    new { Min = 100 }\n);",
    "interview": "Dapper maps SQL query results to .NET objects while keeping SQL under developer control.",
    "pitfall": "Dapper is not a full change-tracking ORM like EF Core.",
    "questions": [
      {
        "id": "dapper-1",
        "prompt": "An application needs explicit SQL and lightweight result mapping. Which tool matches that requirement?",
        "options": [
          "Dapper",
          "EF Core change tracking",
          "ASP.NET Core model binding",
          "AutoMapper object mapping"
        ],
        "correct": 0,
        "explanation": "Dapper executes SQL and maps result rows to objects without a full entity change-tracking system."
      },
      {
        "id": "dapper-2",
        "prompt": "Which Dapper assumption can cause a lost update?",
        "options": [
          "QueryAsync can map result columns to object members.",
          "Changing a mapped object automatically persists it.",
          "A command can receive named parameters.",
          "Commands can share an explicitly supplied transaction."
        ],
        "correct": 1,
        "explanation": "Dapper does not track changes for automatic persistence. Send an explicit UPDATE command."
      },
      {
        "id": "dapper-4",
        "prompt": "When multiple rows are returned, what does this call do?",
        "options": [
          "Returns the first Order and ignores later rows.",
          "Throws because the result contains multiple rows.",
          "Returns one mapped Order per result row.",
          "Starts tracking each Order for a later SaveChanges."
        ],
        "correct": 2,
        "explanation": "QueryAsync maps a sequence. QueryFirstOrDefault and QuerySingle have different cardinality semantics.",
        "code": "var orders = await connection.QueryAsync<Order>(\n    \"SELECT Id, Total FROM Orders WHERE Total > @Min\",\n    new { Min = 100 }\n);"
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
    "code": "var orders = await db.Orders\n    .AsNoTracking()\n    .Where(x => x.Total > 100)\n    .ToListAsync();",
    "interview": "EF Core reduces repetitive data-access code and supports LINQ queries.",
    "pitfall": "Watch for N+1 queries and unintended tracking.",
    "questions": [
      {
        "id": "entity-framework-core-1",
        "prompt": "A read-only API returns a large list of orders without modifying them. Which option avoids unnecessary change tracking?",
        "options": [
          "Call SaveChanges before enumerating the query.",
          "Use AsNoTracking on the query.",
          "Call AsEnumerable before applying every filter.",
          "Load every entity with Find in a separate loop."
        ],
        "correct": 1,
        "explanation": "AsNoTracking skips tracking overhead for results that will not be updated through that context."
      },
      {
        "id": "entity-framework-core-2",
        "prompt": "Which access pattern commonly causes N+1 queries?",
        "options": [
          "Projecting required related fields in a single SQL query.",
          "Eager-loading a needed relationship in the initial query.",
          "Loading a lazy navigation property inside a loop over results.",
          "Filtering rows in the database before materializing them."
        ],
        "correct": 2,
        "explanation": "One initial query followed by one query per result is the N+1 pattern. Use suitable projection or eager loading."
      },
      {
        "id": "entity-framework-core-4",
        "prompt": "When is the database query normally executed?",
        "options": [
          "When Where is added to the query.",
          "When AsNoTracking is added to the query.",
          "When db.Orders is assigned to a variable.",
          "When ToListAsync is awaited."
        ],
        "correct": 3,
        "explanation": "Building an IQueryable composes an expression. Materialization triggers execution.",
        "code": "var query = db.Orders\n    .AsNoTracking()\n    .Where(order => order.Total > 100);\nvar orders = await query.ToListAsync();"
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
    "code": "[Test]\npublic void Add_TwoNumbers_ReturnsSum()\n{\n    var calculator = new Calculator();\n\n    var result = calculator.Add(2, 3);\n\n    Assert.That(result, Is.EqualTo(5));\n}",
    "interview": "I write unit tests for business rules and edge cases to catch regressions early.",
    "pitfall": "Avoid relying on external network or current time in unit tests.",
    "questions": [
      {
        "id": "unit-tests-with-nunit-1",
        "prompt": "A discount rule depends on today. How can its unit test be repeatable?",
        "options": [
          "Read the system date in both the test and the rule.",
          "Skip assertions if the date changes during execution.",
          "Inject a clock and fix its value in the test.",
          "Use a real time service with retry logic in the test."
        ],
        "correct": 2,
        "explanation": "Controlling time avoids failures caused by the wall clock, time zone, or execution date."
      },
      {
        "id": "unit-tests-with-nunit-2",
        "prompt": "Which dependency makes a focused unit test unreliable?",
        "options": [
          "A fake clock with a fixed timestamp.",
          "An in-memory input constructed in the test.",
          "A deterministic calculation with explicit arguments.",
          "A live external API with changing responses."
        ],
        "correct": 3,
        "explanation": "A unit test should control its dependencies. Live services introduce availability and data variability."
      },
      {
        "id": "unit-tests-with-nunit-4",
        "prompt": "What meaningful behavior should replace the expression under test?",
        "options": [
          "Call the production calculator.Add(2, 3).",
          "Compare the constant 5 with the constant 5.",
          "Assert that the test method completed.",
          "Repeat 2 + 3 in a second local variable."
        ],
        "correct": 0,
        "explanation": "A useful test exercises production behavior and checks the result, rather than only verifying the language arithmetic.",
        "code": "[Test]\npublic void Add_TwoNumbers_ReturnsSum()\n{\n    Assert.That(2 + 3, Is.EqualTo(5));\n}"
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
        "prompt": "A notification service should send exactly one message after a valid order. What is a useful test double?",
        "options": [
          "The real SMTP server with a shared test mailbox.",
          "A mock of every private method in the order service.",
          "A sender returning success without recording any calls.",
          "A fake sender recording messages without network calls."
        ],
        "correct": 3,
        "explanation": "A recording fake lets the test verify the observable interaction while avoiding an external service."
      },
      {
        "id": "mocking-dependencies-2",
        "prompt": "Which test is most tightly coupled to implementation details?",
        "options": [
          "Asserting every internal helper invocation in exact order.",
          "Asserting that one required notification was sent.",
          "Asserting that an invalid order sends no notification.",
          "Asserting the documented result of a valid order."
        ],
        "correct": 0,
        "explanation": "Tests that depend on incidental internal calls can break during refactors that preserve observable behavior."
      },
      {
        "id": "mocking-dependencies-4",
        "prompt": "What does this assertion verify?",
        "options": [
          "The email reached a real recipient inbox.",
          "The sender recorded a send during the operation.",
          "The service retried after a transient timeout.",
          "The message contained the correct subject."
        ],
        "correct": 1,
        "explanation": "The boolean only shows that the fake recorded sending. Delivery, payload, and retry behavior require other checks.",
        "code": "var sender = new FakeSender();\nvar service = new Alerts(sender);\nawait service.Send(\"Hi\");\nAssert.That(sender.Sent, Is.True);"
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
        "prompt": "A page renders a button after an asynchronous request. What wait strategy is most reliable?",
        "options": [
          "Wait until the button is present and clickable.",
          "Sleep for a fixed two seconds before every click.",
          "Retry the whole test until it eventually passes.",
          "Increase every test sleep to the slowest observed time."
        ],
        "correct": 0,
        "explanation": "Condition-based waits adapt to actual readiness and avoid arbitrary fixed delays."
      },
      {
        "id": "selenium-and-ui-testing-2",
        "prompt": "Which testing strategy creates avoidable fragility?",
        "options": [
          "Testing a critical checkout flow through the browser.",
          "Testing every pricing edge case through the browser.",
          "Testing pricing edge cases in focused unit tests.",
          "Using a small integration test for database behavior."
        ],
        "correct": 1,
        "explanation": "Pure business rules are usually faster and more stable to test below the UI; keep browser tests focused on end-to-end behavior."
      },
      {
        "id": "selenium-and-ui-testing-4",
        "prompt": "Which locator is least coupled to layout and presentation when the team maintains it as a test contract?",
        "options": [
          "An absolute XPath through every ancestor element.",
          "The button position among all buttons on the page.",
          "A stable data-testid on the login button.",
          "A CSS class generated from the current style build."
        ],
        "correct": 2,
        "explanation": "A stable semantic test contract survives many layout and styling changes better than structural or generated selectors."
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
        "prompt": "A pull request needs one small correction while preserving review history. What is a reasonable workflow?",
        "options": [
          "Edit the main branch directly and close the pull request.",
          "Commit the correction on its feature branch and push.",
          "Delete the branch and recreate all commits manually.",
          "Copy the fix into an unrelated feature pull request."
        ],
        "correct": 1,
        "explanation": "An additional focused commit updates the existing pull request and keeps the correction reviewable."
      },
      {
        "id": "git-workflow-2",
        "prompt": "A secret was pushed to a private repository. What must happen first?",
        "options": [
          "Delete the line in the next commit only.",
          "Add the file to .gitignore and keep the credential.",
          "Revoke or rotate the exposed credential.",
          "Rename the file and assume history is inaccessible."
        ],
        "correct": 2,
        "explanation": "Treat the credential as exposed. Revocation or rotation is necessary; removing history may be an additional cleanup step."
      },
      {
        "id": "git-workflow-4",
        "prompt": "What does this command create?",
        "options": [
          "A new remote branch without a local branch.",
          "A commit containing the current working tree.",
          "A pull request against the default branch.",
          "A new local branch and switches to it."
        ],
        "correct": 3,
        "explanation": "checkout -b creates and checks out a local branch. Publishing and opening a pull request are separate operations.",
        "code": "git checkout -b feature/alerts"
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
    "code": "steps:\n  - script: dotnet restore\n  - script: dotnet build --no-restore\n  - script: dotnet test --no-build",
    "interview": "CI/CD reduces manual deployment mistakes and catches regressions early.",
    "pitfall": "A green pipeline does not guarantee bug-free software.",
    "questions": [
      {
        "id": "ci-cd-and-azure-devops-1",
        "prompt": "A team wants the deployed package to match what was tested. Which approach supports that?",
        "options": [
          "Rebuild from the branch separately in every environment.",
          "Deploy the newest local developer build after CI passes.",
          "Build once, test it, and promote that versioned artifact.",
          "Copy source files onto production after running unit tests."
        ],
        "correct": 2,
        "explanation": "Promoting the tested artifact avoids introducing differences through separate builds or local state."
      },
      {
        "id": "ci-cd-and-azure-devops-2",
        "prompt": "Which conclusion overstates a green pipeline?",
        "options": [
          "The configured automated checks passed.",
          "Coverage depends on which checks were configured.",
          "Production monitoring still provides useful feedback.",
          "The release cannot contain production defects."
        ],
        "correct": 3,
        "explanation": "A pipeline provides evidence from its configured checks; it cannot prove the absence of bugs."
      },
      {
        "id": "ci-cd-and-azure-devops-4",
        "prompt": "What prerequisite must hold for the final step?",
        "options": [
          "The previous build produced the test binaries.",
          "The repository contains no test projects.",
          "The restore step also executed all tests.",
          "The deployment has already completed."
        ],
        "correct": 0,
        "explanation": "--no-build tells dotnet test to use existing build output. The preceding build must include the test projects.",
        "code": "steps:\n  - script: dotnet restore\n  - script: dotnet build --no-restore\n  - script: dotnet test --no-build"
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
        "prompt": "A payment request times out after the server may have charged the card. What makes a retry safer?",
        "options": [
          "Generate a new operation key for each retry.",
          "Send the retry to a different server without shared state.",
          "Retry immediately until any request returns success.",
          "Reuse the operation key with server-side deduplication."
        ],
        "correct": 3,
        "explanation": "The same key must identify the logical operation, and the server must persistently handle duplicates."
      },
      {
        "id": "idempotency-and-retries-2",
        "prompt": "Which retry policy risks duplicate side effects?",
        "options": [
          "Retrying a payment POST without deduplication after a timeout.",
          "Reusing an idempotency key for the same payment attempt.",
          "Limiting retries for transient network failures.",
          "Applying backoff with jitter between transient retries."
        ],
        "correct": 0,
        "explanation": "A timeout does not prove the first request failed. Retrying a non-idempotent operation can repeat its side effects."
      },
      {
        "id": "idempotency-and-retries-4",
        "prompt": "What server behavior is needed for this header to protect a retry?",
        "options": [
          "Ignore repeated keys and execute a new payment each time.",
          "Recognize the same key and reuse the recorded operation result.",
          "Use the key only to choose the response content type.",
          "Replace the key with a random value before processing."
        ],
        "correct": 1,
        "explanation": "A header alone provides no guarantee. The server needs concurrency-safe deduplication and a policy for repeated or conflicting payloads.",
        "code": "request.Headers.Add(\"Idempotency-Key\", operationId);"
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
        "prompt": "A reporting worker only reads aggregated sales data. Which database permissions fit least privilege?",
        "options": [
          "Read access to the required reporting views.",
          "Read access to all customer and payment tables.",
          "Write access to every table used by the application.",
          "Schema-owner access limited by a naming convention."
        ],
        "correct": 0,
        "explanation": "Grant only the operations and resources needed for the worker responsibility."
      },
      {
        "id": "security-and-least-privilege-2",
        "prompt": "Which authorization shortcut violates least privilege?",
        "options": [
          "Giving report readers access only to reporting endpoints.",
          "Granting every signed-in user the administrator role.",
          "Checking resource ownership before returning an order.",
          "Using a separate restricted identity for a background job."
        ],
        "correct": 1,
        "explanation": "Being authenticated does not justify broad permissions unrelated to the user responsibilities."
      },
      {
        "id": "security-and-least-privilege-4",
        "prompt": "What does this attribute require in a configured ASP.NET Core app?",
        "options": [
          "Any authenticated user regardless of their roles.",
          "Any user whose display name contains Analyst.",
          "An authenticated user satisfying the Analyst role requirement.",
          "A user with read access to every database table."
        ],
        "correct": 2,
        "explanation": "Role authorization checks the principal against the required role; it does not grant database permissions.",
        "code": "[Authorize(Roles = \"Analyst\")]\n[HttpGet(\"risk-report\")]\npublic IActionResult Report() => Ok();"
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
        "prompt": "An interviewer asks about a tool you have studied but never used professionally. Which response is strongest?",
        "options": [
          "Describe a production rollout as if you personally delivered it.",
          "State that limit, explain its purpose, and discuss a plausible use case.",
          "List its terminology without connecting it to a use case.",
          "Avoid the question and describe an unrelated project instead."
        ],
        "correct": 1,
        "explanation": "An accurate answer distinguishes experience from understanding and demonstrates reasoning with a concrete example."
      },
      {
        "id": "clear-technical-answers-2",
        "prompt": "Which answer is hardest to assess technically?",
        "options": [
          "A definition followed by a specific use case.",
          "A concise explanation that identifies its assumptions.",
          "A long list of claims without a concrete example or trade-off.",
          "A partial answer that names what remains uncertain."
        ],
        "correct": 2,
        "explanation": "Unsupported claims make it difficult to assess understanding. Explain the concept, application, and relevant limits."
      },
      {
        "id": "clear-technical-answers-4",
        "prompt": "Which explanation best communicates a decision?",
        "options": [
          "We chose a queue because distributed systems need messaging.",
          "We chose a queue because the team recognizes the product name.",
          "We chose a queue because it was present in a sample project.",
          "We chose a queue to absorb bursts, accepting eventual processing."
        ],
        "correct": 3,
        "explanation": "The answer connects a requirement to a benefit and identifies the trade-off."
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
        "prompt": "A valid token identifies Alice, but the order belongs to Bob. Which check is still required?",
        "options": [
          "Whether Alice can parse the order identifier.",
          "Whether the request uses the GET HTTP method.",
          "Whether Alice is authorized to read that order.",
          "Whether the response DTO has public properties."
        ],
        "correct": 2,
        "explanation": "Authentication establishes identity. Authorization must evaluate access to the requested resource."
      },
      {
        "id": "security-practice-2",
        "prompt": "Which endpoint design confuses authentication with authorization?",
        "options": [
          "Checking ownership after validating a user token.",
          "Evaluating a policy for an authenticated user.",
          "Rejecting an expired token before checking permissions.",
          "Allowing any valid token to read every customer account."
        ],
        "correct": 3,
        "explanation": "A valid token is not permission to access every resource. Ownership or policy checks are still needed."
      },
      {
        "id": "security-practice-3",
        "prompt": "What decision does the policy represent?",
        "options": [
          "Whether the caller is permitted to edit orders.",
          "How the caller token is cryptographically signed.",
          "How the caller password is stored in the database.",
          "Which serializer writes the order response."
        ],
        "correct": 0,
        "explanation": "An authorization policy specifies access requirements. Token validation and password storage are authentication concerns.",
        "code": "[Authorize(Policy = \"CanEditOrders\")]"
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
        "prompt": "A service performs many membership checks against a large, mostly unchanged set. Which structure is a good candidate?",
        "options": [
          "A List scanned from the start for every lookup.",
          "A Queue dequeued until the target is found.",
          "A Stack popped until the target is found.",
          "A HashSet with suitable equality and hashing."
        ],
        "correct": 3,
        "explanation": "A HashSet provides average constant-time membership checks, with memory and hashing trade-offs."
      },
      {
        "id": "algorithms-practice-2",
        "prompt": "Which performance conclusion misuses Big O?",
        "options": [
          "An O(n) implementation must be faster for every input size.",
          "An O(n²) algorithm may be acceptable for very small inputs.",
          "Allocation and constant factors can affect observed speed.",
          "Representative benchmarks can inform a structure choice."
        ],
        "correct": 0,
        "explanation": "Asymptotic growth does not predict every small-input runtime. Constants, allocation, and workload matter."
      },
      {
        "id": "algorithms-practice-3",
        "prompt": "For a List<int> with n elements, what is the worst-case time complexity?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n log n)"
        ],
        "correct": 1,
        "explanation": "List membership can require examining every element. A HashSet has different expected lookup behavior.",
        "code": "bool exists = values.Contains(target);"
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
    "code": "public class OrdersController(OrderService service)\n    : ControllerBase\n{\n    [HttpGet(\"{id:int}\")]\n    public async Task<IActionResult> Get(int id)\n    {\n        var order = await service.FindAsync(id);\n\n        if (order is null)\n        {\n            return NotFound();\n        }\n\n        return Ok(order);\n    }\n}",
    "interview": "I keep controllers thin and business logic testable.",
    "pitfall": "Avoid creating layers with no clear responsibility.",
    "questions": [
      {
        "id": "architecture-application",
        "prompt": "An order workflow is invoked from HTTP and a scheduled job. Where should its business rules be implemented?",
        "options": [
          "In an application/domain service shared by both entry points.",
          "In the HTTP controller called directly by the scheduled job.",
          "In middleware that simulates an HTTP request for the job.",
          "In a response DTO used only by the HTTP serializer."
        ],
        "correct": 0,
        "explanation": "Business behavior should be accessible independently of a transport-specific entry point."
      },
      {
        "id": "architecture-practice-2",
        "prompt": "Which layering decision adds complexity without clarifying responsibilities?",
        "options": [
          "Keeping HTTP status mapping in the API layer.",
          "Adding pass-through layers with no distinct policy or boundary.",
          "Keeping persistence implementation behind a defined boundary.",
          "Keeping pricing rules testable without a running web server."
        ],
        "correct": 1,
        "explanation": "Each layer should have a reason to exist, such as an independent policy, responsibility, or integration boundary."
      },
      {
        "id": "architecture-practice-3",
        "prompt": "What responsibility best belongs in this controller?",
        "options": [
          "Implement all discount rules directly inside each action.",
          "Manage SQL connection strings and migration scripts.",
          "Map HTTP input and service outcomes to HTTP responses.",
          "Send payment retries through a controller-owned loop."
        ],
        "correct": 2,
        "explanation": "A thin controller coordinates the HTTP boundary and delegates the application workflow.",
        "code": "public class OrdersController(OrderService service)\n    : ControllerBase\n{\n    // Action methods\n}"
      }
    ],
    "useCase": "In a real software project, apply layered architecture when the situation described in this lesson occurs. Example: Keep HTTP concerns away from business rules and persistence details.",
    "avoid": "Do not apply layered architecture by default: first evaluate the requirements, complexity and alternatives. Avoid creating layers with no clear responsibility."
  }
];
