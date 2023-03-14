# Life Goals

1. Clone repo to your local machine
   ```
   git clone https://github.com/johnmilley/life-goals-full-stack.git
   ```
2. Run `npm install` to install dependencies
3. Create `.env` file and place your mongoDB connection string inside

    **Example**
    ```
    MONGO_URI=mongodb+srv://USERNAME:PASSWORD@myatlasclusteredu.dww5zpx.mongodb.net/DATABASE?retryWrites=true&w=majority
    ```

    Replace username, password, and database with your own credentials from [mongoDB Atlas](https://www.mongodb.com/atlas/database)

4. [*Optional*] Run `populate_test_data.js` if you want test data inserted into your DB.
5. While in the project directory, run the development server: `npm run dev`