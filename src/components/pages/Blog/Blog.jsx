import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mb-10 p-10'>
            <p className='text-5xl font-bold my-10 text-center text-white'>Frequently asked<span className='text-blue-600'> Questions</span></p>
            <div className='text-center my-10'>
                <Pdf targetRef={ref} filename="blog-page.pdf">
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref}>
                <div className='text-white bg-blue-950 p-5 rounded'>
                    <p className='font-bold text-blue-600'>Questions:</p>
                    <p>Tell us the differences between uncontrolled and controlled components.</p>
                    <p className='font-bold text-blue-600 my-3'>Answer:</p>
                    <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.Controlled components have the advantage of being more predictable and easier to debug because the state is controlled by the parent component. However, this can also make them more complex to implement in larger projects with many levels of nested components. On the other hand, uncontrolled components are simpler to implement, but they can be more difficult to track and manage in larger projects. They are also harder to test as the internal state is not exposed.</p>
                </div>
                <div className='text-white my-8 bg-blue-950 p-5 rounded'>
                    <p className='font-bold text-blue-600'>Questions:</p>
                    <p>How to validate React props using PropTypes</p>
                    <p className='font-bold text-blue-600 my-3'>Answer:</p>
                    <p>With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.When developing a React application, you'll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
                </div>
                <div className='text-white my-8 bg-blue-950 p-5 rounded'>
                    <p className='font-bold text-blue-600'>Questions:</p>
                    <p>Tell us the difference between nodejs and express js.</p>
                    <p className='font-bold text-blue-600 my-3'>Answer:</p>
                    <p>Node.js:
                        Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it's not a programming language. Most of the people are confused and understand it's a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It's used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.
                        <br /> <br />
                        Express.js:
                        Express is a small framework that sits on top of Node.js's web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application's functionality with middle ware and routing. It adds helpful utilities to Node.js's HTTP objects. It facilitates the rendering of dynamic HTTP objects.</p>
                </div>
                <div className='text-white my-8 bg-blue-950 p-5 rounded'>
                    <p className='font-bold text-blue-600'>Questions:</p>
                    <p>What is a custom hook, and why will you create a custom hook?</p>
                    <p className='font-bold text-blue-600 my-3'>Answer:</p>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;