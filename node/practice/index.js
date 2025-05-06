import fs, { appendFile } from 'fs';
import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    let read = fs.readFileSync('content.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
    
console.log(read)
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})