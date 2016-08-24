var React = require('react');
var Site = require('./_core/Site');
var SiteData = require('./_core/SiteData');
var HeaderLinks = require('./_core/HeaderLinks');
var Marked = require('./_core/Marked');
var Prism = require('./_core/Prism');
var Search = require('./_core/Search');

var index = React.createClass({
  render: function() {
    return (
      <Site className="index" noSearch={true}>
        <section className="fixedSearch">
          <Search />
        </section>

        <div className="hero">
          <div className="abs">
            <header aria-hidden>
              <section>
                <HeaderLinks section={this.props.section} />
              </section>
            </header>

            <div className="content">
              <img className="main-logo" src="/img/logo.svg" width="120" height="120" />
              <h1>GraphQL</h1>
            </div>

            <section className="marketing-row">
              <div className="marketing-col">
                <h4>Describe your data</h4>
                <Prism>
                  {`type Project {
  name: String
  tagline: String
  contributors: [User]
}`}
                </Prism>
              </div>
              <div className="marketing-col">
                <h4>Ask for what you want</h4>
                <Prism>
                  {`{
  project(name: "GraphQL") {
    tagline
  }
}`}
                </Prism>
              </div>
              <div className="marketing-col">
                <h4>Get predictable results</h4>
                <Prism>
                  {`{
  "project": {
    "tagline": "A query language for APIs"
  }
}`}
                </Prism>
              </div>
            </section>

            <div className="buttons-unit">
              <a className="button" href="/code/">
                Get Started
              </a>
              <a className="button" href="/docs/">
                Learn More
              </a>
            </div>

          </div>
        </div>

        <section className="lead">
          <h1>A query language for your API</h1>
          <p>
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. GraphQL provides a complete
            and understandable description of the data in your API, gives
            clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful
            developer&nbsp;tools.</p>
        </section>

        <section className="point1">
          <div className="prose">
            <h2>Ask for what you need,<br />get exactly that</h2>
            {/*[Illustration: just a simple query and response?]*/}
            <p>
              Send a GraphQL query to your API and get exactly what you need,
              nothing more and nothing less. GraphQL queries always return
              predictable results. Apps using GraphQL are fast and stable because
              they control the data they get, not the&nbsp;server.</p>
          </div>
          <div className="window faux-graphiql" aria-hidden>
            <div className="query">
              <pre className="prism">
                {'{'}
                {'\n  hero {'}
                {'\n    name'}
                {'\n    eyeColor\n    hairColor'.split('').map((c, i) =>
                  <span key={i} id={'ch' + i} className="ch">{c === '\n' ? <br/> : c}</span>)}
                <span className="cursor" />
                {'\n  }'}
                {'\n}'}
              </pre>
            </div>
            <div className="response">
              <div id="r1">
                <Prism>
                  {`{
  "hero": {
    "name": "Luke Skywalker"
  }
}`}
                </Prism>
              </div>
              <div id="r2">
                <Prism>
                  {`{
  "hero": {
    "name": "Luke Skywalker",
    "eyeColor": "blue"
  }
}`}
                </Prism>
              </div>
              <div id="r3">
                <Prism>
                  {`{
  "hero": {
    "name": "Luke Skywalker",
    "eyeColor": "blue",
    "hairColor": "blond"
  }
}`}
                </Prism>
              </div>
            </div>
          </div>
          <script dangerouslySetInnerHTML={{__html: `(function(){
            var i = 0;
            var forward = true;
            setTimeout(type, 2000);
            showResponse(1);
            function type() {
              if (forward) {
                document.getElementById('ch' + i).style.display = 'inline';
                i++;
                if (i === 27) {
                  forward = false;
                  showResponse(3);
                  setTimeout(type, 1500);
                } else if (i === 13) {
                  showResponse(2);
                  setTimeout(type, 1500);
                } else {
                  setTimeout(type, Math.random() * 180 + 70);
                }
              } else {
                i--;
                document.getElementById('ch' + i).style.display = 'none';
                if (i === 0) {
                  forward = true;
                  showResponse(1);
                  setTimeout(type, 2000);
                } else {
                  setTimeout(type, 80);
                }
              }
            }
            function showResponse(num) {
              document.getElementById('r1').style.display = num === 1 ? 'block' : 'none';
              document.getElementById('r2').style.display = num === 2 ? 'block' : 'none';
              document.getElementById('r3').style.display = num === 3 ? 'block' : 'none';
            }
          })()`}} />
        </section>

        <div className="grayWash">
          <section className="point2">
            <div className="prose">
              <h2>Get many resources<br />in a single request</h2>
              {/*Illustration: a query 2 or 3 levels deep]*/}
              <p>
                GraphQL queries access not just the properties of one resource
                but also smoothly follow references between them. While typical
                REST APIs require loading from multiple URLs, GraphQL APIs get
                all the data your app needs in a single request. Apps using
                GraphQL can be quick even on slow mobile
                network&nbsp;connections.</p>
            </div>
            <div className="app-to-server" aria-hidden>
              <img src="/img/phone.svg" width="496" height="440" className="phone" />
              <div className="query">
              <Prism>
                {`{
  hero {
    name
    friends {
      name
    }
  }
}`}
              </Prism>
              </div>
              <div className="response">
              <Prism>
                {`{
  "hero": {
    "name": "Luke Skywalker",
    "friends": [
      { "name": "Obi-Wan Kenobi" },
      { "name": "R2-D2" },
      { "name": "Han Solo" },
      { "name": "Leia Organica" }
    ]
  }
}`}
              </Prism>
              </div>
              <img src="/img/server.svg" width="496" height="440" className="server" />
            </div>
          </section>
        </div>

        <section className="point3">
          <div className="prose">
            <h2>Describe what&rsquo;s possible<br />with a type system</h2>
            {/*Illustration of a type IDL following a query by line]*/}
            {/*Under: a server <-> client (Capabilities, Requirements)]?*/}
            <p>
              GraphQL APIs are organized in terms of types and fields,
              not endpoints. Access the full capabilities of your data from a
              single endpoint. GraphQL uses types to ensure Apps only ask for
              what&rsquo;s possible and provide clear and helpful errors. Apps can
              use types to avoid writing manual parsing&nbsp;code.</p>
          </div>
          <div className="window strong-typed-query" aria-hidden>
          <div className="query">
          <div id="query-highlight" className="highlight" />
          <Prism>
                {`{
  hero {
    name
    friends {
      name
      homeWorld {
        name
        climate
      }
      species {
        name
        lifespan
        origin {
          name
        }
      }
    }
  }
}`}
          </Prism>
          </div>
          <div className="type-system">
          <div id="type-highlight" className="highlight" />
          <Prism>
                {`type Query {
  hero: Character
}

type Character {
  name: String
  friends: [Character]
  homeWorld: Planet
  species: Species
}

type Planet {
  name: String
  climate: String
}

type Species {
  name: String
  lifespan: Int
  origin: Planet
}`}
          </Prism>
          </div>
          </div>
          <script dangerouslySetInnerHTML={{__html: `(function(){
            var typeHighlight = document.getElementById('type-highlight');
            var queryHighlight = document.getElementById('query-highlight');
            var line = 0;
            var typeLines  = [2,6,7,6,8,13,14, 9,18,19,20,13];
            var queryLines = [2,3,4,5,6, 7, 8,10,11,12,13,14];
            highlightLine();
            function highlightLine() {
              typeHighlight.style.top = (17 * typeLines[line] - 9) + 'px';
              queryHighlight.style.top = (17 * queryLines[line] - 9) + 'px';
              line = (line + 1) % typeLines.length;
              setTimeout(highlightLine, 800 + Math.random() * 200);
            }
          })()`}} />
        </section>

        <div className="darkWash">
        <section className="point4">
          <div className="prose">
            <h2>Move faster with<br />powerful developer tools</h2>
            {/*Illustration of GraphiQL validation error and typeahead, animated?]*/}
            <p>
              Know exactly what data you can request from your API without
              leaving your editor, highlight potential issues before sending a
              query, and take advantage of improved code intelligence. GraphQL
              makes it easy to build powerful tools like <a href="https://github.com/graphql/graphiql" target="_blank">Graph<em>i</em>QL</a> by
              leveraging your API&rsquo;s type system.</p>
          </div>
          <div className="graphiqlVid" dangerouslySetInnerHTML={{__html: `
            <video autoplay loop playsinline>
              <source src="/img/graphiql.mp4?x" type="video/mp4" />
            </video>
          `}} />
        </section>
        </div>

        <div className="grayWash">
        <section className="point5">
          <div className="prose">
            <h2>Evolve your API<br />without versions</h2>
            {/*Illustration showing more legs added to a graph? Or a type evolving over time?]*/}
            <p>
              Add new fields and types to a GraphQL API without affecting
              queries sent from existing apps. Aging fields can be deprecated
              and hidden from documentation. By using a single version, GraphQL
              APIs give apps easier access to new features and enable cleaner,
              more maintainable server&nbsp;code.</p>
          </div>
        </section>
        </div>

        <section className="point6">
          <div className="prose">
            <h2>Powered by your<br />existing data and code</h2>
            {/*Illustration of each field becoming a function?]*/}
            <p>
              GraphQL creates a uniform, powerful API across the entire surface
              area of your application without being limited by a specific
              storage engine. Write GraphQL APIs that leverage your existing
              data model and server with GraphQL engine implementations
              available in many languages. You provide small functions that
              fulfill fields in the type system, and GraphQL calls them with
              optimal&nbsp;concurrency.</p>
          </div>
        </section>

{/*
        <section className="marketing-row">
          <div className="marketing-col">
            <h3>Declarative</h3>
            <p>
              {`Query responses are decided by the client rather
              than the server. A GraphQL query returns exactly what a client
              asks for and no more.`}
            </p>
          </div>
          <div className="marketing-col">
            <h3>Compositional</h3>
            <p>
              {`A GraphQL query itself is a hierarchical set of fields. The
              query is shaped just like the data it returns. It is a natural
              way for product engineers to describe data requirements.`}
            </p>
          </div>
          <div className="marketing-col">
            <h3>Strong-typed</h3>
            <p>
              {`A GraphQL query can be ensured to be valid within a GraphQL type
              system at development time allowing the server to make
              guarantees about the response. This makes it easier to build
              high-quality client tools.`}
            </p>
          </div>
        </section>

        <hr className="home-divider" />

        <section className="home-content">
        <Marked>{`

GraphQL is a data query language and runtime designed and used at
Facebook to request and deliver data to mobile and web apps since 2012.

When we built Facebook's mobile applications, we needed a data-fetching
API powerful enough to describe all of Facebook, yet simple enough to
be easy to learn and use by our product developers. We developed
GraphQL in 2012 to fill this need. Today it is the primary way we build
client apps and the servers that drive them.

We've begun the process of open-sourcing GraphQL by drafting a
specification, releasing a reference implementation, building tools,
and forming a community around it here at graphql.org.

The reference implementation, [graphql-js](https://github.com/graphql/graphql-js)
provides a library in JavaScript that is the basis for full GraphQL
implementations and tools. It is not a fully standalone GraphQL server
that a client developer could use to start manipulating and querying
data. Most importantly it provides no mapping to a functioning,
production-ready backend. For those using an express server, we recommend
using [express-graphql](https://github.com/graphql/express-graphql) to
provide a GraphQL server.

Despite being widely used at Facebook, open source GraphQL is still a
new technology undergoing changes. Many of the tools and integrations
with various languages and data storage engines have not yet been built,
and in many cases are [already being built](https://www.npmjs.com/search?q=graphql).

        `}</Marked>

        <hr className="home-divider" />

        <Marked>{`

A GraphQL query is a string interpreted by a server that returns data in a specified format. Here is an example query:

    {
      user(id: 3500401) {
        id,
        name,
        isViewerFriend,
        profilePicture(size: 50)  {
          uri,
          width,
          height
        }
      }
    }

And here is the response to that query.

    {
      "user" : {
        "id": 3500401,
        "name": "Jing Chen",
        "isViewerFriend": true,
        "profilePicture": {
          "uri": "http://someurl.cdn/pic.jpg",
          "width": 50,
          "height": 50
        }
      }
    }

Even a simple example shows many of its design principles:

**Hierarchical:** Most product development today involves the creation and manipulation of view hierarchies. To achieve congruence with the structure of these applications, a GraphQL query itself is a hierarchical set of fields. The query is shaped just like the data it returns. It is a natural way for product engineers to describe data requirements.

**Product-centric:** GraphQL is unapologetically driven by the requirements of views and the front-end engineers that write them. We start with their way of thinking and requirements and build the language and runtime necessary to enable that.

**Client-specified queries:** In GraphQL, the specification for queries are encoded in the client rather than the server. These queries are specified at field-level granularity. In the vast majority of applications written without GraphQL, the server determines the data returned in its various scripted endpoints. A GraphQL query, on the other hand, returns exactly what a client asks for and no more.

**Backwards Compatible:** In a world of deployed native mobile applications with no forced upgrades, backwards compatibility is a challenge. Facebook, for example, releases apps on a two week fixed cycle and pledges to maintain those apps for at least two years. This means there are at a minimum 52 versions of our clients per platform querying our servers at any given time. Client-specified queries simplifies managing our backwards compatibility guarantees.

**Structured, Arbitrary Code:** Query languages with field-level granularity have typically queried storage engines directly, such as SQL. GraphQL instead imposes a structure onto a server, and exposes fields that are backed by arbitrary code. This allows for both server-side flexibility and a uniform, powerful API across the entire surface area of an application.

**Application-Layer Protocol:** GraphQL is an application-layer protocol and does not require a particular transport. It is a string that is parsed and interpreted by a server.

**Strongly-typed:** GraphQL is strongly-typed. Given a query, tooling can ensure that the query is both syntactically correct and valid within the GraphQL type system before execution, i.e. at development time, and the server can make certain guarantees about the shape and nature of the response. This makes it easier to build high quality client tools.

**Introspective:** GraphQL is introspective. Clients and tools can query the type system using the GraphQL syntax itself. This is a powerful platform for building tools and client software, such as automatic parsing of incoming data into strongly-typed interfaces. It is especially useful in statically typed languages such as Swift, Objective-C and Java, as it obviates the need for repetitive and error-prone code to shuffle raw, untyped JSON into strongly-typed business objects.

## Why invent something new?

Obviously GraphQL is not the first system to manage client-server interactions. In today's world there are two dominant architectural styles for client-server interaction: REST and ad hoc endpoints.

### REST

REST, an acronym for Representational State Transfer, is an architectural style rather than a formal protocol. While there is much debate about what exactly is REST and is not, we wish to avoid these debates. We are interested in the typical attributes of systems that self-identify as REST, rather than systems which are formally REST.

Objects in a typical REST system are addressable by URI and interacted with using verbs in the HTTP protocol. An HTTP GET to a particular URI fetches an object and returns a server-specified set of fields. An HTTP PUT edits an object; an HTTP DELETE deletes an object; and so on.

We believe there are a number of weaknesses in typical REST systems, ones that are particularly problematic in mobile applications:

* Fetching complicated object graphs require multiple round trips between the client and server to render single views. For mobile applications operating in variable network conditions, these multiple roundtrips are highly undesirable.
* Invariably, fields and additional data are added to REST endpoints as the system requirements change. However, old clients also receive this additional data as well, because the data fetching specification is encoded on the server rather than the client. As result, these payloads tend to grow over time for all clients. When this becomes a problem for a system, one solution is to overlay a versioning system onto the REST endpoints. Versioning also complicates a server, and results in code duplication, spaghetti code, or a sophisticated, hand-rolled infrastructure to manage it. Another solution to limit over-fetching is to provide multiple views – such as “compact” vs “full” – of the same REST endpoint. However, this coarse granularity often does not offer adequate flexibility.
* REST endpoints are usually weakly-typed and lack machine-readable metadata. While there is much debate about the merits of strong- versus weak-typing in distributed systems, we believe in strong typing because of the correctness guarantees and tooling opportunities it provides. Developers deal with systems that lack this metadata by inspecting frequently out-of-date documentation and then writing code against the documentation.
* Many of these attributes are linked to the fact that “REST is intended for long-lived network-based applications that span multiple organizations” according to its inventor. This is not a requirement for APIs that serve a client app built within the same organization.

Nearly all externally facing REST APIs we know of trend towards or end up in these non-ideal states, as well as nearly all internal REST APIs. The consequences of opaqueness and over-fetching are more severe in internal APIs since their velocity of change and level of usage is almost always higher.

Because of multiple round-trips and over-fetching, applications built in the REST style inevitably end up building ad hoc endpoints that are superficially in the REST style. These actually couple the data to a particular view which explicitly violates one of REST's major goals. Most REST systems of any complexity end up as a continuum of endpoints that span from “traditional” REST to ad hoc endpoints.

### Ad Hoc Endpoints

Many applications have no formalized client-server contract. Product developers access server capabilities through ad hoc endpoints and write custom code to fetch the data they need. Servers define procedures, and they return data. This approach has the virtue of simplicity, but can often become untenable as systems age.

* These systems typically define a custom endpoint per view. For systems with a wide surface area this can quickly grow into a maintenance nightmare of orphaned endpoints, inconsistent tooling, and massive server code duplication. Disciplined engineering organizations can mitigate these issues with great engineering practices, high quality abstractions, and custom tooling. However, given our experience we believe that custom endpoints tend to lead to entropic server codebases.
* Much like REST, the payloads of custom endpoints grow monotonically (even with mitigation from versioning systems) as the server evolves. Deployed clients cannot break, and, with rapid release cycles and backwards compatibility guarantees, distributed applications will have large numbers of extant versions. Under these constraints it is difficult to remove data from a custom endpoint.
* Custom endpoints tend to create a clunky, multi-language, multi-environment development process for a client developer. No matter if the data has been accessed before in a different view, they are required to first change the custom endpoint, then deploy that code to a server accessible from a mobile device, and only then change the client to utilize that data. In GraphQL – unless the data in the view is completely new to the entire system – a product developer adds a field to a GraphQL query and the work on the client continues unabated.
* Much like REST, most systems with custom endpoints do not have a formalized type system, which eliminates the possibility for the tools and guarantees that introspective type systems can provide. Some custom-endpoint-driven systems do use a strongly typed serialization scheme, such as Protocol Buffers, Thrift, or XML. Those do allow for direct parsing of responses into typed classes and eliminating boilerplate shuffling from JSON into handwritten classes. These systems are as not as expressive and flexible as GraphQL, and the other downsides of ad hoc endpoints remain.

We believe that GraphQL represents a novel way of structuring the client-server contract. Servers publish a type system specific to their application, and GraphQL provides a unified language to query data within the constraints of that type system. That language allows product developers to express data requirements in a form natural to them: a declarative and hierarchal one.

This is a liberating platform for product developers. With GraphQL, no more contending with ad hoc endpoints or object retrieval with multiple roundtrips to access server data; instead an elegant, hierarchical, declarative query dispatched to a single endpoint. No more frequent jumps between client and server development environments to do experimentation, or to change or create views of existing data; instead experiments are done and new views are built within a native, client development environment exclusively. No more shuffling unstructured data from ad hoc endpoints into business objects; instead, you have a powerful, introspective type system that serves as a platform for tool building.

Product developers are free to focus on their client software and requirements while rarely leaving their development environment. They can more confidently support shipped clients as a system evolves; and they are using a protocol designed to operate well within the constraints of mobile applications. Product developers can query for exactly what they want, in the way they think about it, across their entire application's data model.

        `}</Marked>
        </section>

        <hr className="home-divider" />

      */}

        <section className="home-bottom-section">
          <div className="buttons-unit">
            <a className="button" href="/code/">
              Get Started
            </a>
            <a className="button" href="/docs/">
              Learn More
            </a>
          </div>
        </section>
      </Site>
    );
  }
});

module.exports = index;
