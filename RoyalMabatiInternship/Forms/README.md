# My Form Server

A simple server to handle form submissions and serve static files using Node.js and Express.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)

## Introduction

This project sets up a basic server that handles form submissions, parses incoming data, and serves static files. It uses Node.js with the Express framework.

## Features

- Handles form submissions via POST requests
- Parses incoming form data
- Serves static HTML and CSS files
- Logs received form data to the console
- Responds with a success message upon form submission

## Requirements

- Node.js
- npm (Node Package Manager)

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

    The server will start running at `http://localhost:3000`.

2. **Access the form:**

    Open your browser and navigate to `http://localhost:3000` to access the form.

3. **Submit the form:**

    Fill out the form and submit it. The server will log the received form data to the console and respond with a success message.
