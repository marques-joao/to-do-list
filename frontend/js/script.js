const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');

    console.log(response);
}

fetchTasks();