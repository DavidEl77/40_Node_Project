const express = require('express');
const cors = require('cors');
const connectDB = require('./src/server/config/db');

const departmentRouter = require('./src/server/routers/departmentRouter');
const employeeRouter = require('./src/server/routers/employeeRouter');
const shiftRouter = require('./src/server/routers/shiftRouter');
const userRouter = require('./src/server/routers/userRouter');
const authRouter = require('./src/server/routers/authRouter');

const app = express();
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

// routers
app.use('/departments', departmentRouter);
app.use('/employees', employeeRouter);
app.use('/shifts', shiftRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter)

app.listen(
  port,
  () => console.log(`app is listening at http://localhost:${port}`)
);