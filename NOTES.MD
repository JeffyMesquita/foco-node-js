# 1. NodeJS

## 1.1 Starting a NodeJS project

- Run the following command to create a new NodeJS project:

```bash
npm init -y
```

- This will create a package.json file in the root of your project. This file contains all the information about your project, including the dependencies that your project uses.

## 1.2 Installing dependencies

- To install a dependency, run the following command:

```bash
npm install <package-name>
```

- This will install the package in the node_modules folder and will also add the package to the dependencies section of the package.json file.

### 1.2.1 Installing Typescript

- To install Typescript, run the following command:

```bash
npm install typescript -D
```

- The -D flag is used to install the package as a dev dependency. This means that the package will not be installed when the project is deployed.

### 1.2.2 Installing type definitions

- To install type definitions for a package, run the following command:

```bash
npm install @types/node -D
```

- The above command will install type definitions for the node package.

### 1.2.3 Installing tsx

- To install tsx, run the following command:

```bash
npm install tsx -D
```

- The above command will install tsx, which is a Typescript compiler that can be used to compile Typescript code to Javascript.
- The tsx compiler is a Typescript compiler that can be used to compile Typescript code to Javascript.

### 1.2.4 Installing fastify

- To install fastify, run the following command:

```bash
npm install fastify
```

- Fastify is a web framework for NodeJS that is built on top of ExpressJS. It is a lightweight framework that is designed to be fast and easy to use.

### 1.2.5 Installing eslint

- To install eslint, run the following command:

```bash
npm install eslint -D
```

- Eslint is a tool that is used to lint Javascript code. It is used to check for errors and to enforce coding standards.

### 1.2.6 Installing @rocketseat/eslint-config -D(Optional)

- To install @rocketseat/eslint-config, run the following command:

```bash
npm install @rocketseat/eslint-config -D
```

- Create a .eslintrc.json file in the root of your project and add the following code to it:

```json
{
  "extends": ["@rocketseat/eslint-config/node"]
}
```

- This will configure eslint to use the @rocketseat/eslint-config package.

### 1.2.7 Installing Prisma

- To install Prisma, run the following command:

```bash
npm install prisma -D
```

- Prisma is a tool that is used to generate a database schema from a database model. It is used to generate a database schema from a database model.

- To initialize Prisma, run the following command:

```bash
npx prisma init --datasource-provider SQLite
```

- This will create a prisma folder in the root of your project. This folder contains all the configuration files for Prisma.

-- To generate a database schema from a database model, run the following command:

```bash
npx prisma migrate dev
```

- This will generate a database schema from a database model.

### 1.2.8 Installing zod

- To install zod, run the following command:

```bash
npm install zod
```

- Zod is validation library that is used to validate data. It is used to validate data.

### 1.2.9 Installing cors

- To install cors, run the following command:

```bash
npm install @fastify/cors
```

## 1.3 Running TSC

- To run the Typescript compiler, run the following command:

```bash
npx tsc --init
```

- This will create a tsconfig.json file in the root of your project. This file contains all the configuration options for the Typescript compiler.

## 1.4 Changing tsconfig.json

- To change the configuration options for the Typescript compiler, open the tsconfig.json file and change the options as required.
- For example, to change the output directory for the compiled files, change the target option to the following:

```json
"target": "es5", // The target version of Javascript to compile to (ES5, ES6, ES7, etc.)
// change this to the following:
"target": "es2020",
```
