import axios from 'axios';
// Lembrar de colocar vazio quando for hospedar em produção
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const apiExerciseDB = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com',
})

export { api,apiExerciseDB }