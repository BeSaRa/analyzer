# Evaluate A News Article with Natural Language Processing

this is web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other
websites.

### Installation

type the below command to install application dependencies

```shell
npm install
```

### `.env` file

create `.env` file in the root project with the below environment variable

```shell
API_KEY=<your MeaningCloud API Key from>
```

### run server

to run the backend nodemon server type the below command

```shell
npm run start
```

it will run backend server on port 8000 you can access it by `http://localhost:8000` and check if you get
message `API Working` means your backend server ready for taking the requests from UI

### run the tool on dev server (webpack-dev-server)

to run the tool on dev server you have to type the below command

```shell
npm run dev
```

the browser will open a new window on port `8080` you can access it by `http://localhost:8080/`

### build

to build this tool and make it ready for distribution type the below command

```shell
npm run build 
```

it will build the application inside `dist` folder inside the root project

### Testing

to test this application please make sure that the backend already running before run test command, to run test type the
below command

```shell
npm run test 
```
