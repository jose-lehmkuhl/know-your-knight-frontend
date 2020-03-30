# Know your Knight Frontend

Know your Knight shows you where your knight can be in the next 2 rounds.

## Getting Started

- Download/Clone the project from this repository.
- While on the project directory in your terminal:
  - run `npm i`
  - then `npm start`
- The page will run at [http://localhost:3000/](http://localhost:3000/).


### Prerequisites
You'll need a couple of things to install/run the app:
  - npm
  - the [backend server](https://github.com/jose-lehmkuhl/know-your-knight-backend) should be running.


## Running the tests

  - `npm test` on the project directory.
  - select `run all tests`.


## Folder Structure

    .
    ├── public                  # Default create react app html.
    └──  src                     # Source files
        ├── assets              # Non code files
        │   └── images          # Images
        ├── Components          # New components(organized by folders)
        ├── Pages               # App pages(components imported and used in therouter, organized by folders)
        ├── service             # App api connection files.
        └── styles              # App.js and global styles only

### Pages and Components Folders
Each page and component should be place in their own folder, with theis tests,styles and subcomponents, ex:

    src
    └── Components
        └── ExampleComponent                # New ExampleComponent folder
            ├── index.js                    # Actual ExampleComponent file
            ├── styles.js                   # ExampleComponent styles
            └── components                  # ExampleComponent exclusive subcomponents
                └── ExampleSubcomponent.js  # subcomponent file
## Contributing

Please read CONTRIBUTING.md for project details, required tools, node version, etc


## License

This project is licensed under the MIT License.
