# cc_llama2
This is the README for a fullstack application that utilizes React on the front-end and Node.js on the back-end, with integrated TypeScript. Additionally, the application incorporates the Llama 2 artificial intelligence.

## About

This application is an example of a fullstack application that uses modern technologies like React, Node.js, and TypeScript. It also incorporates the Llama 2 artificial intelligence to provide advanced natural language processing features.

## Features
<ul>
    <li>Front-end (React)
        <ul>
        <li>User-friendly and responsive user interface.</li>
        <li>Integration with the back-end API to retrieve and display data.</li>
        <li>Reusable components to ease development and maintenance.</li>
        </ul>
    </li>
</ul>

<ul>
    <li>Back-end (Node.js)
        <ul>
        <li>RESTful API to provide data to the front-end.</li>
        <li>Integration with the Llama 2 artificial intelligence for natural language processing.</li>
        <li>Data security and validation.</li>
        </ul>
    </li>
</ul>

<ul>
    <li>Artificial Intelligence (Llama2)
        <ul>
        <li>RESTful API to provide data to the front-end.</li>
        <li>Integration with the Llama 2 artificial intelligence for natural language processing.</li>
        </ul>
    </li>
</ul>

## Prerequisites
Node.js and npm installed globally.

## How to run for development

1. Clone this repository

2. Download this public model from the link bellow:
    ```
    https://huggingface.co/TheBloke/GreenNodeLM-7B-v4leo-GGUF/blob/main/greennodelm-7b-v4leo.Q4_K_M.gguf
    ```

3. Create a paste named "model" inside your back-end so you can move your model into it
   ```
    ./cc_llama2/cc_llama2_back/
    ```
   
4. Move the model from where you downloaded into this path inside your cloned repository
    ```
    ./cc_llama2/cc_llama2_back/model
    ```

5. Install all back-end dependencies

   ```bash
    npm i
    ```
   
6. Install all front-end dependencies

   ```bash
    npm i
    ```

7. Run the script from back-end to connect with llama2 IA

    ```bash
    npm run dev
    ```

8. Run the script from front-end to use app's interface

   ```bash
    npm start
    ```
   
10. Access the aplicattion

    ```
    Access the application in your browser via http://localhost:3000
    ```

    

