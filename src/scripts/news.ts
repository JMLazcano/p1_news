declare let axios;

export class News {
    getAll(): Promise<any> {
        const about = document.getElementById("search_bar").value;
        //console.log(about);
        const url: string = "https://newsapi.org/v2/everything?q="+about+"&sortBy=popularity&apiKey=12c6dbbefea94326b599d7d888c0d4ff";
        return axios.get(url);
    }
}