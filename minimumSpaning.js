class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.graph = []; // Array para armazenar as arestas
    }

    addEdge(u, v, w) {
        this.graph.push([u, v, w]);
    }

    find(parent, i) {
        if (parent[i] === i) {
            return i;
        }
        return this.find(parent, parent[i]);
    }

    union(parent, rank, x, y) {
       let xroot = this.find(parent, x);
       let yroot = this.find(parent, y);

        // Union por rank para otimização
        if (rank[xroot] < rank[yroot]) {
            parent[xroot] = yroot;
        } else if (rank[xroot] > rank[yroot]) {
            parent[yroot] = xroot;
        } else {
            parent[yroot] = xroot;
            rank[xroot] += 1;
        }
    }

    KruskalMST() {
       let result = [];
        let i = 0;
        let e = 0;

        // Ordenar as arestas por peso
        this.graph.sort((a, b) => a[2] - b[2]);

       let parent = [];
       let rank = [];

        for (let node = 0; node < this.V; node++) {
            parent[node] = node;
            rank[node] = 0;
        }

        while (e < this.V - 1) {
            let [u, v, w] = this.graph[i];
            i++;
           let x = this.find(parent, u);
           let y = this.find(parent, v);

            if (x !== y) {
                e++;
                result.push([u, v, w]);
                this.union(parent, rank, x, y);
            }
        }

        console.log("Following are the edges in the constructed MST");
        for (let [u, v, weight] of result) {
            console.log(`${u} -- ${v} == ${weight}`);
        }
    }
}

// Exemplo de uso
let g = new Graph(4);
g.addEdge(0, 1, 10);
g.addEdge(0, 2, 6);
g.addEdge(0, 3, 5);
g.addEdge(1, 3, 15);
g.addEdge(2, 3, 4);

g.KruskalMST();