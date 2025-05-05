// class Graph {
//     constructor(v) {
//         this.V = v;
//         this.adj = new Array(v).fill(null).map(() => []);
//     }

//     // add edge into the graph
//     addEdge(v, w) {
//         this.adj[v].push(w);
//     }


//     BFS() {
//         let visited = new Array(this.V).fill(false);
//         for (let i = 0; i < this.V; ++i) {
//             if (!visited[i]) {
//                 let queue = [];
//                 queue.push(i);
//                 visited[i] = true;

//                 while (queue.length !== 0) {
//                     let s = queue.shift();
//                     console.log(s + " ");

//                     for (let n of this.adj[s]) {
//                         if (!visited[n]) {
//                             queue.push(n);
//                             visited[n] = true;
//                         }
//                     }
//                 }
//             }
//         }
//     }


// }

// structure for a node in the anjacency List
class Node {
    constructor(data) {
        this.data=  data;
        this.next  = null;
    }
}

//structure of adjacency List
class List {
    constructor () {
        this.head = null;
    }
}
// Structure for the graph
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.array = new Array(vertices).fill(null).map(() => new List());
    }
    
    
}

// method for adding an edge to the graph
function addEdge(graph, src, dest) {
    let newNode = new Node(dest);
    newNode.next = graph.array[src].head;
    graph.array[src].head = newNode;
}



// method to perform depth
// first search (DFS) from a given vertex
function DFS(graph, vertex, visited) {
    visited[vertex]= true;
    console.log(vertex);

    let currentNode = graph.array[vertex].head;
    while(currentNode) {
        let adjacentVertex = currentNode.data;  
        if (!visited[adjacentVertex]) {
            DFS(graph, adjacentVertex, visited);
        }
        console.log(currentNode);
        currentNode = currentNode.next;
    }
    
    function DFSTravesal(graph, order) {
        let visited = new Array (graph.vertices).fill(false);
        for (let i = 0; i < order.length; i++) {
            if (!visited[order[i]]) {
                DFS(graph, order[i], visited);
            }
        }
    }
}
    
    // width
    function BFS() {
        
        let g  = new Graph(5);
        
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
        g.addEdge(4, 3);
        g.addEdge(4, 1);
        
        
        console.log("BFS:");
        g.BFS();
    }
    
    
    //depth
    function DFSFunc() {
        let graph = new Graph(4);
        
        addEdge(graph, 2, 0);
        addEdge(graph, 0, 2);
        addEdge(graph, 1, 2);
        addEdge(graph, 0, 1);
        addEdge(graph, 3, 3);
        addEdge(graph, 1, 3);
        
        let order = [2,0,1,3];
        
        console.log("DFS:");
        DFSTravesal(graph, order);
        
    }
    


    
function mainDijkstra(graph, startVertex) {
    let distances = {};
        
    let visited = new Set();

    let nodes = Object.keys(graph);

    for (let node of nodes) {
        distances[node]= Infinity;
    }

    distances[startVertex] = 0;

    while(nodes.length) {
        nodes.sort((a,b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();
        
        if (distances[closestNode] == Infinity) { break;}

        visited.add(closestNode);
        
        for(let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
            }
        }
    }
    return distances;
}

function task7 () {
 
    const GraphVariant1 = {
        A: {F: 1, B:5 },
        B: {A: 5, С:5},
        C: {E: 6, B:5 },
        D: {F: 7},
        E: {C: 6, F:4 },
        F: {A: 1, D: 7, E:4 }
    }
     
    const GraphVariant2 = {
        A: {D:5, F:4 },
        B: {D:13, E:7},
        C: {D: 8, E:6 },
        D: {A: 5, B:13, C:8 },
        E: {B:7, C:6, F:4 },
        F: {A:4, E:4, D:7 }
    }
     
    const GraphVariant3 = {
        A: {B: 10, C: 6, D:11, F:1 },
        B: {A: 10, F: 11, D:8},
        C: {A: 6, E: 2, F:4 },
        D: {E: 2, A:11, B:8 },
        E: {C: 2, D:2, F:2 },
        F: {A: 1, B: 11, E:2, C:4 }
    }

    
    const GraphVariant4 = {
        A: {B: 10, C: 6, D:11, F:1 },
        B: {A: 10, F: 11, D:8},
        C: {A: 6, E: 2, F:4 },
        D: {E: 2, A:11, B:8 },
        E: {C: 2, D:2, F:2 },
        F: {A: 1, B: 11, E:2, C:4 }
    }

    console.log(mainDijkstra(GraphVariant2, "A"));
}

task7();