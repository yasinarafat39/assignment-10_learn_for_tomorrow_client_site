import React from 'react';

const Blog = () => {
    return (
        <section className="text-gray-800 bg-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blog Page</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">what is cors?</h3>
                        <p className="mt-1 text-gray-400">Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p className="mt-1 text-gray-400">I am using Firebase because Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        <p className="mt-1 text-gray-400">Authentication methods include something users know, something users have and something users are. Not every authentication type is created equal to protect the network, however; these authentication methods range from offering basic protection to stronger security. Using more than one method -- multifactor authentication (MFA) -- is recommended.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does the private route work?</h3>
                        <p className="mt-1 text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is Node? How does Node work?</h3>
                        <p className="mt-1 text-gray-400">Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        <p className="mt-1 text-gray-400">Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                            Node.js basically works on two concept</p>
                        <li className='text-gray-400'>Asynchronous</li>
                        <li className='text-gray-400'>Non-blocking I/O</li>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;