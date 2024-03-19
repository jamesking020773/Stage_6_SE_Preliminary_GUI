let nodes = [];
let connections = [];

// Sample weights for one scenario. This would change based on the selected scenario.
let weights = {
    "FTTP": 1.0,
    "FTTC": 1.5,
    // Add other connection types
};

window.onload = () => {
    const connectionTypeSelect = document.getElementById('connectionType');
    Object.keys(weights).forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.innerText = `${type} (Weight: ${weights[type]})`;
        connectionTypeSelect.appendChild(option);
    });
};

function finalizeNode() {
    // Simplified: In a real scenario, you would capture the exact location clicked by the user on the map
    // and potentially use a more sophisticated method to draw the node.
    let node = {id: nodes.length, connections: []};
    nodes.push(node);
    alert(`Node ${node.id} placed. Select connection type for the next node.`);
}

function calculateMST() {
    // This is where you would implement Prim's or Kruskal's algorithm based on `nodes` and `connections`
    // For demonstration, let's just assume the user's solution is suboptimal and provide a fixed score
    document.getElementById('score').innerText = "Total Weight: 10 (Sample Score)";
}

// More functions would be needed for a fully interactive map and to accurately track and draw connections
// between nodes, select scenarios, and calculate the actual MST based on user input.
