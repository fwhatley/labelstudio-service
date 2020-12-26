import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/restservices/reai/v1/labelStudioService/images/next', (req, res) => {
    res.json(
        {
            name: "fredy",
            email: 'fredywhatley@fgasdf.com'
        }
    );
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
